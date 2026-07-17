/* apps-app.js — data-driven apps explorer */
"use strict";
(function () {
  var CATS = [
    { key: "all", label: "All" }, { key: "planning", label: "Planning" },
    { key: "assessment", label: "Assessment" }, { key: "engagement", label: "Engagement" },
    { key: "arabic", label: "Arabic & Quran" }, { key: "languages", label: "Languages" },
    { key: "pbl", label: "PBL" }
  ];
  var activeCat = "all";
  var expandedId = new URLSearchParams(location.search).get("id");

  function pathCount() {
    try { return JSON.parse(localStorage.getItem("pathways_path") || "[]").length; } catch (e) { return 0; }
  }
  function updateCounter() {
    var el = document.getElementById("path-counter");
    if (el) el.textContent = "In your path: " + pathCount() + " items";
  }
  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add("show"); }, 10);
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2200);
  }

  function render() {
    var q = (document.getElementById("app-search").value || "").toLowerCase();
    var list = PW.apps.filter(function (a) {
      var catOk = activeCat === "all" || a.category === activeCat || a.tags.indexOf(activeCat) !== -1;
      var qOk = !q || a.name.toLowerCase().indexOf(q) !== -1 || a.desc.toLowerCase().indexOf(q) !== -1 || a.tags.some(function (t) { return t.indexOf(q) !== -1; });
      return catOk && qOk;
    });
    document.getElementById("app-count").textContent = list.length + " apps";
    updateCounter();
    var grid = document.getElementById("app-grid");
    if (!list.length) { grid.innerHTML = '<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px">No apps match.</p>'; return; }
    grid.innerHTML = list.map(function (a) {
      var open = a.id === expandedId;
      var status = { live: "status-live", beta: "status-beta", soon: "status-soon" }[a.status] || "status-soon";
      var statusLabel = { live: "\u25cf Live", beta: "\u26a1 Beta", soon: "Coming soon" }[a.status] || "Soon";
      return '<article class="app-item' + (open ? " app-open" : "") + '" data-id="' + a.id + '">' +
        '<div class="app-summary" tabindex="0" role="button" aria-expanded="' + open + '">' +
        '<div class="app-icon">' + a.icon + '</div><div class="app-meta">' +
        '<div class="app-name">' + a.name + '</div>' +
        '<span class="' + status + '">' + statusLabel + '</span>' +
        '<p class="muted" style="margin:4px 0 8px;font-size:13.5px">' + a.desc + '</p>' +
        '<div class="app-tags">' + a.tags.map(function (t) { return '<span class="app-tag">' + t + '</span>'; }).join("") + '</div></div>' +
        '<span class="acc-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>' +
        (open ? detail(a) : "") + '</article>';
    }).join("");
  }

  function detail(a) {
    var fws = (a.relatedFrameworks || []).map(function (fid) {
      var f = PW.findFramework(fid);
      return f ? '<a class="explore-pill" href="frameworks.html?id=' + f.id + '">' + f.name + '</a>' : '';
    }).join('');
    var res = (a.relatedResources || []).map(function (rid) {
      var r = PW.findResource(rid);
      return r ? '<a class="explore-pill" href="resources.html?id=' + r.id + '">' + r.title + '</a>' : '';
    }).join('');
    var steps = (a.demoSteps || []).map(function (s, i) { return '<li>' + s + '</li>'; }).join('');
    var feats = a.features.map(function (f) { return '<li>' + f + '</li>'; }).join('');
    var liveBtn = (a.liveUrl || a.url) && (a.liveUrl || a.url) !== '#' && a.status === 'live'
      ? '<a class="btn primary" href="' + (a.liveUrl || a.url) + '" target="_blank" rel="noopener">Open \u2197</a>' : '';
    var stages = (a.stages || []).map(function (st) {
      var links = (st.resources || []).map(function (r) {
        return '<a class="stage-link" href="' + r.url + '" target="_blank" rel="noopener">' + r.title + ' \u2197</a>';
      }).join('');
      return '<div class="stage-step"><div class="stage-step-num">' + st.stage + '</div>' +
        '<div class="stage-step-body"><strong>' + st.title + '</strong><p>' + st.desc + '</p>' +
        (links ? '<div class="stage-step-resources">' + links + '</div>' : '') + '</div></div>';
    }).join('');
    return '<div class="app-detail">' +
      '<h4>Features</h4><ul class="app-features">' + feats + '</ul>' +
      (steps ? '<h4>How it works</h4><ol class="app-steps">' + steps + '</ol>' : '') +
      (stages ? '<h4>How to implement</h4><div class="stage-timeline">' + stages + '</div>' : '') +
      (fws ? '<h4>Related frameworks</h4><div class="explore-apps">' + fws + '</div>' : '') +
      (res ? '<h4>Related resources</h4><div class="explore-apps">' + res + '</div>' : '') +
      '<div class="app-actions">' + liveBtn +
      '<button class="btn ghost add-path-btn" data-type="app" data-id="' + a.id + '" data-name="' + a.name + '">+ Add to path</button></div></div>';
  }

  // ---- Events ----
  document.getElementById("app-grid").addEventListener("click", function (e) {
    var summary = e.target.closest(".app-summary");
    if (summary) {
      var item = summary.closest(".app-item");
      var id = item.getAttribute("data-id");
      if (item.classList.contains("app-open")) { item.classList.remove("app-open"); summary.setAttribute("aria-expanded", "false"); var d = item.querySelector(".app-detail"); if (d) d.remove(); expandedId = null; }
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
      updateCounter();
      addBtn.textContent = "Added \u2713"; addBtn.disabled = true;
    }
  });

  var bar = document.getElementById("app-filters");
  bar.innerHTML = CATS.map(function (c) {
    return '<button class="fpill' + (c.key === "all" ? " on" : "") + '" data-cat="' + c.key + '">' + c.label + '</button>';
  }).join("");
  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".fpill"); if (!btn) return;
    activeCat = btn.dataset.cat;
    bar.querySelectorAll(".fpill").forEach(function (b) { b.classList.toggle("on", b === btn); });
    render();
  });

  document.getElementById("app-search").addEventListener("input", render);
  render();
})();
