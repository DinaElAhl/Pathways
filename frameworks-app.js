/* frameworks-app.js — data-driven framework explorer */
"use strict";
(function () {
  var CATS = [
    { key: "all", label: "All" }, { key: "pedagogy", label: "Pedagogy" },
    { key: "interoperability", label: "Interoperability" }, { key: "accessibility", label: "Accessibility" },
    { key: "compliance", label: "Compliance" }, { key: "curricula", label: "Curricula" },
    { key: "arabic", label: "Arabic & Quran" }
  ];

  var params = new URLSearchParams(location.search);
  var filterParam = (params.get("filter") || "").toLowerCase();
  var activeCat = CATS.some(function (c) { return c.key === filterParam; }) ? filterParam : "all";
  var expandedId = params.get("id");

  function render() {
    var q = (document.getElementById("fw-search").value || "").toLowerCase();
    var list = PW.frameworks.filter(function (f) {
      var catOk = activeCat === "all" || f.category === activeCat;
      var qOk = !q || f.name.toLowerCase().indexOf(q) !== -1 || f.shortDesc.toLowerCase().indexOf(q) !== -1;
      return catOk && qOk;
    });
    document.getElementById("fw-count").textContent = list.length + " frameworks";
    var grid = document.getElementById("fw-grid");
    if (!list.length) { grid.innerHTML = '<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px">No frameworks match.</p>'; return; }
    grid.innerHTML = list.map(function (f) {
      var apps = (f.relatedApps || []).slice(0, 3).map(function (aid) {
        var a = PW.findApp(aid);
        return a ? '<span class="explore-pill">' + a.icon + " " + a.name + "</span>" : "";
      }).join("");
      var open = f.id === expandedId;
      return '<article class="fw-item' + (open ? " fw-open" : "") + '" data-id="' + f.id + '">' +
        '<div class="fw-summary" tabindex="0" role="button" aria-expanded="' + open + '">' +
        '<div><span class="badge">' + f.category + "</span>" +
        '<h3 class="fw-name">' + f.name + "</h3>" +
        '<p class="muted" style="margin:4px 0 8px;font-size:14px">' + f.shortDesc + "</p>" +
        '<div class="explore-apps">' + apps + "</div></div>" +
        '<span class="acc-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>' +
        (open ? detail(f) : "") + "</article>";
    }).join("");
  }

  function escAttr(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function stagesBlock(stages) {
    if (!stages || !stages.length) return "";
    var cards = stages.map(function (s) {
      var resList = (s.resources || []).map(function (r) {
        return '<a class="stage-resource" href="' + escAttr(r.url) + '" target="_blank" rel="noopener">' + r.title + ' ↗</a>';
      }).join("");
      return '<div class="stage-card">' +
        '<div class="stage-number">' + s.stage + '</div>' +
        '<div class="stage-body">' +
        '<div class="stage-title">' + s.title + '</div>' +
        '<p class="stage-desc">' + (s.desc || "") + '</p>' +
        (resList ? '<div class="stage-resources">' + resList + '</div>' : "") +
        '</div></div>';
    }).join("");
    return '<h4>Learning path</h4><div class="stages-timeline">' + cards + '</div>';
  }

  function detail(f) {
    var pillars = (f.pillars || []).map(function (p) {
      return '<details class="fw-pillar"><summary><strong>' + p.name + "</strong></summary><p>" + p.desc + "</p></details>";
    }).join("");
    var apps = (f.relatedApps || []).map(function (aid) {
      var a = PW.findApp(aid);
      return a ? '<a class="explore-pill" href="apps.html?id=' + a.id + '">' + a.icon + " " + a.name + "</a>" : "";
    }).join("");
    var res = (f.relatedResources || []).map(function (rid) {
      var r = PW.findResource(rid);
      return r ? '<a class="explore-pill" href="resources.html?id=' + r.id + '">' + r.title + "</a>" : "";
    }).join("");
    var ext = f.externalUrl && f.externalUrl !== "#"
      ? '<a class="btn primary" href="' + escAttr(f.externalUrl) + '" target="_blank" rel="noopener">Learn more ↗</a>'
      : "";
    return '<div class="fw-detail">' +
      (pillars ? '<h4>Components</h4>' + pillars : "") +
      stagesBlock(f.stages) +
      (apps ? '<h4>Related apps</h4><div class="explore-apps">' + apps + "</div>" : "") +
      (res ? '<h4>Related resources</h4><div class="explore-apps">' + res + "</div>" : "") +
      '<div class="app-actions">' + ext +
      '<button class="btn ghost add-path-btn" data-type="framework" data-id="' + f.id + '" data-name="' + escAttr(f.name) + '">+ Add to path</button></div>' +
      "</div>";
  }

  // ---- Events ----
  document.getElementById("fw-grid").addEventListener("click", function (e) {
    var summary = e.target.closest(".fw-summary");
    if (summary) {
      var item = summary.closest(".fw-item");
      var id = item.getAttribute("data-id");
      if (item.classList.contains("fw-open")) { item.classList.remove("fw-open"); summary.setAttribute("aria-expanded", "false"); item.querySelector(".fw-detail").remove(); expandedId = null; }
      else { expandedId = id; render(); }
      return;
    }
    var addBtn = e.target.closest(".add-path-btn");
    if (addBtn) {
      var path = []; try { path = JSON.parse(localStorage.getItem("pathways_path") || "[]"); } catch (err) { path = []; }
      var entry = { type: addBtn.dataset.type, id: addBtn.dataset.id, name: addBtn.dataset.name };
      if (!path.find(function (p) { return p.id === entry.id; })) { path.push(entry); localStorage.setItem("pathways_path", JSON.stringify(path)); }
      addBtn.textContent = "Added \u2713"; addBtn.disabled = true;
    }
  });

  // ---- Filter tabs ----
  var bar = document.getElementById("fw-filters");
  bar.innerHTML = CATS.map(function (c) {
    return '<button class="fpill' + (c.key === activeCat ? " on" : "") + '" data-cat="' + c.key + '">' + c.label + "</button>";
  }).join("");
  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".fpill");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    bar.querySelectorAll(".fpill").forEach(function (b) { b.classList.toggle("on", b === btn); });
    render();
  });

  document.getElementById("fw-search").addEventListener("input", render);
  render();
})();
