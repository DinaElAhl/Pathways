/* stages-builder.js — populates the framework checklist in Step 1
   from data-frameworks.js, generates a staged journey in Step 2, and
   persists per-stage completion state in localStorage. */
"use strict";
(function () {
  var PROG_KEY = "pathways_stage_progress";
  var SEL_KEY = "pathways_selected_frameworks";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function getProg() { try { return JSON.parse(localStorage.getItem(PROG_KEY) || "{}"); } catch (e) { return {}; } }
  function setProg(o) { localStorage.setItem(PROG_KEY, JSON.stringify(o)); }
  function getSel() { try { return JSON.parse(localStorage.getItem(SEL_KEY) || "[]"); } catch (e) { return []; } }
  function setSel(a) { localStorage.setItem(SEL_KEY, JSON.stringify(a)); }

  function frameworks() { return Array.isArray(window.PW_FRAMEWORKS) ? window.PW_FRAMEWORKS : []; }

  function selectedIds() {
    return [].slice.call(document.querySelectorAll("#fwList input[type=checkbox]:checked"))
      .map(function (cb) { return cb.getAttribute("data-id"); })
      .filter(Boolean);
  }

  function totalSelectedStages() {
    var sel = selectedIds();
    return frameworks().filter(function (f) { return sel.indexOf(f.id) !== -1; })
      .reduce(function (a, f) { return a + ((f.stages && f.stages.length) || 0); }, 0);
  }
  function completedSelectedStages() {
    var prog = getProg(); var sel = selectedIds(); var n = 0;
    frameworks().forEach(function (f) {
      if (sel.indexOf(f.id) === -1) return;
      (f.stages || []).forEach(function (s) {
        if (prog[f.id + "-" + s.stage]) n++;
      });
    });
    return n;
  }

  function updateStagesStat() {
    var el = document.getElementById("sStages");
    if (!el) return;
    var done = completedSelectedStages();
    var total = totalSelectedStages();
    el.textContent = done + "/" + total;
    var fill = document.getElementById("progFill");
    if (fill && total) fill.style.width = Math.round((done / total) * 100) + "%";
  }

  function populateFrameworkChecklist() {
    var host = document.getElementById("fwList");
    if (!host) return;
    var sel = getSel();
    if (!sel.length) sel = ["e2"];
    host.innerHTML = frameworks().map(function (f, i) {
      var checked = sel.indexOf(f.id) !== -1 ? " checked" : "";
      return '<div class="check-row">' +
        '<input type="checkbox" id="fw-' + f.id + '" data-id="' + esc(f.id) + '"' + checked + '>' +
        '<label for="fw-' + f.id + '">' + esc(f.name) + '</label>' +
        '</div>';
    }).join("");
    host.addEventListener("change", function () {
      setSel(selectedIds());
      renderJourney();
      updateStagesStat();
    });
    setSel(selectedIds());
  }

  function renderJourney() {
    var host = document.getElementById("journeyOut");
    if (!host) return;
    var sel = selectedIds();
    if (!sel.length) {
      host.innerHTML = '<p style="font-size:.82rem;color:var(--text-muted);padding:1rem;border:1px dashed var(--border);border-radius:10px;text-align:center">Pick at least one framework in Step 1 to generate a journey.</p>';
      updateStagesStat();
      return;
    }
    var prog = getProg();
    var html = frameworks().filter(function (f) { return sel.indexOf(f.id) !== -1; }).map(function (f) {
      var stages = (f.stages || []).map(function (s) {
        var key = f.id + "-" + s.stage;
        var done = !!prog[key];
        var resList = (s.resources || []).slice(0, 2).map(function (r) {
          return '<a class="stage-resource" href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + ' ↗</a>';
        }).join("");
        return '<div class="stage-card' + (done ? " stage-done" : "") + '" data-key="' + esc(key) + '">' +
          '<div class="stage-number">' + s.stage + '</div>' +
          '<div class="stage-body">' +
          '<div class="stage-title">' + esc(f.name) + ' — ' + esc(s.title) + '</div>' +
          '<p class="stage-desc">' + esc(s.desc || "") + '</p>' +
          (resList ? '<div class="stage-resources">' + resList + '</div>' : "") +
          '<label class="stage-check"><input type="checkbox" class="stage-toggle" data-key="' + esc(key) + '"' + (done ? " checked" : "") + '>Mark stage complete</label>' +
          '</div></div>';
      }).join("");
      return '<div style="margin-bottom:1rem"><h3 style="font-size:.95rem;margin:.4rem 0 .6rem">' + esc(f.name) + '</h3>' +
        '<div class="stages-timeline">' + stages + '</div></div>';
    }).join("");
    host.innerHTML = html;
    updateStagesStat();
  }

  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!t.classList || !t.classList.contains("stage-toggle")) return;
    var key = t.getAttribute("data-key");
    var prog = getProg();
    if (t.checked) prog[key] = Date.now(); else delete prog[key];
    setProg(prog);
    var card = t.closest(".stage-card");
    if (card) card.classList.toggle("stage-done", t.checked);
    updateStagesStat();
  });

  // expose for switchTab()
  window.renderJourney = renderJourney;

  populateFrameworkChecklist();
  renderJourney();
  updateStagesStat();
})();
