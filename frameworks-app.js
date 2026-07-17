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
  var activeCat = params.get("filter") || "all";
  var expandedId = params.get("id");

  function toast(msg) {
    var t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.classList.add("show"); }, 10);
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2200);
  }

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
    var stages = (f.stages || []).map(function (st) {
      var links = (st.resources || []).map(function (r) {
        return '<a class="stage-link" href="' + r.url + '" target="_blank" rel="noopener">' + r.title + ' \u2197</a>';
      }).join("");
      return '<div class="stage-step"><div class="stage-step-num">' + st.stage + '</div>' +
        '<div class="stage-step-body"><strong>' + st.title + '</strong><p>' + st.desc + '</p>' +
        (links ? '<div class="stage-step-resources">' + links + '</div>' : '') + '</div></div>';
    }).join("");
    return '<div class="fw-detail">' +
      (pillars ? '<h4>Components</h4>' + pillars : "") +
      (stages ? '<h4>Learning Path</h4><div class="stage-timeline">' + stages + '</div>' : "") +
      (apps ? '<h4>Related apps</h4><div class="explore-apps">' + apps + "</div>" : "") +
      (res ? '<h4>Related resources</h4><div class="explore-apps">' + res + "</div>" : "") +
      '<button class="btn ghost add-path-btn" data-type="framework" data-id="' + f.id + '" data-name="' + f.name + '">+ Add to path</button>' +
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
      if (!path.find(function (p) { return p.id === entry.id; })) {
        path.push(entry); localStorage.setItem("pathways_path", JSON.stringify(path));
        toast("Added to your path \u2713");
      } else { toast("Already in your path"); }
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
