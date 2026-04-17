/* curriculum-builder-app.js — 7-step wizard logic + org chart */
"use strict";
(function () {
  var CD = window.CURRICULUM_DATA;
  var state = { step: 1, orgType: null, grade: null, phase: null, outcomes: [], frameworks: [], apps: [], resources: [] };

  function $(id) { return document.getElementById(id); }
  function checked(cls) {
    return Array.from(document.querySelectorAll("." + cls + ":checked")).map(function (c) { return c.value; });
  }

  // ---- Step 1: Org type ----
  var orgSel = $("org-type-select");
  CD.orgTypes.forEach(function (t) {
    var o = document.createElement("option"); o.value = t.id; o.textContent = t.label; orgSel.appendChild(o);
  });
  orgSel.addEventListener("change", function () {
    state.orgType = orgSel.value;
    var type = CD.orgTypes.find(function (t) { return t.id === state.orgType; });
    var desc = $("org-description");
    if (type) { desc.textContent = "Roles: " + type.roles.join(" \u2192 "); desc.style.display = ""; }
    else { desc.style.display = "none"; }
  });

  // ---- Step 2: Grade ----
  var gradeSel = $("grade-select");
  CD.grades.forEach(function (g) {
    var o = document.createElement("option"); o.value = g.id; o.textContent = g.label; gradeSel.appendChild(o);
  });
  gradeSel.addEventListener("change", function () {
    state.grade = gradeSel.value;
    var g = CD.grades.find(function (x) { return x.id === state.grade; });
    state.phase = g ? g.phase : null;
  });

  // ---- Render checkboxes helper ----
  function renderChecks(container, items, cls) {
    container.innerHTML = "";
    items.forEach(function (item) {
      var lbl = document.createElement("label");
      var nameText = item.name || item.title || item;
      var descText = item.shortDesc || item.desc || "";
      lbl.innerHTML = '<input type="checkbox" class="' + cls + '" value="' + (item.id || item) + '"> ' +
        "<span><strong>" + nameText + "</strong>" + (descText ? '<span class="desc">' + descText + "</span>" : "") + "</span>";
      container.appendChild(lbl);
    });
  }

  // ---- Step navigation ----
  function goTo(step) {
    if (step === 3) {
      var outcomes = CD.learningOutcomes[state.grade] || [];
      renderChecks($("outcomes-list"), outcomes, "outcome-cb");
    }
    if (step === 4) {
      state.outcomes = checked("outcome-cb");
      var fwIds = CD.frameworksByPhase[state.phase] || [];
      var fws = fwIds.map(function (id) { return window.PW ? PW.findFramework(id) : { id: id, name: id }; }).filter(Boolean);
      renderChecks($("frameworks-list"), fws, "fw-cb");
    }
    if (step === 5) {
      state.frameworks = checked("fw-cb");
      var appIds = []; state.frameworks.forEach(function (fid) {
        (CD.appsByFramework[fid] || []).forEach(function (a) { if (appIds.indexOf(a) === -1) appIds.push(a); });
      });
      var apps = appIds.map(function (id) { return window.PW ? PW.findApp(id) : { id: id, name: id }; }).filter(Boolean);
      renderChecks($("apps-list"), apps, "app-cb");
    }
    if (step === 6) {
      state.apps = checked("app-cb");
      var resIds = [];
      state.frameworks.concat(state.apps).forEach(function (key) {
        (CD.resourcesByKey[key] || []).forEach(function (r) { if (resIds.indexOf(r) === -1) resIds.push(r); });
      });
      var res = resIds.map(function (id) { return window.PW ? PW.findResource(id) : { id: id, title: id }; }).filter(Boolean);
      renderChecks($("resources-list"), res, "res-cb");
      setTimeout(function () { document.querySelectorAll(".res-cb").forEach(function (c) { c.checked = true; }); }, 0);
    }
    if (step === 7) {
      state.resources = checked("res-cb");
      renderSummary();
      drawOrgChart();
    }
    state.step = step;
    document.querySelectorAll(".wiz-step").forEach(function (s) { s.classList.remove("active"); });
    $("step-" + step).classList.add("active");
    $("current-step").textContent = step;
    $("progress-fill").style.width = Math.round((step / 7) * 100) + "%";
    $("prev-btn").disabled = step === 1;
    $("next-btn").textContent = step === 6 ? "Review \u2192" : "Next \u2192";
    $("next-btn").style.display = step === 7 ? "none" : "";
  }

  $("prev-btn").addEventListener("click", function () { if (state.step > 1) goTo(state.step - 1); });
  $("next-btn").addEventListener("click", function () { if (state.step < 7) goTo(state.step + 1); });

  // ---- Summary ----
  function renderSummary() {
    var org = CD.orgTypes.find(function (t) { return t.id === state.orgType; });
    var grade = CD.grades.find(function (g) { return g.id === state.grade; });
    $("curriculum-summary").innerHTML =
      "<p><strong>Organization:</strong> " + (org ? org.label : "\u2014") + "</p>" +
      "<p><strong>Grade/Level:</strong> " + (grade ? grade.label : "\u2014") + "</p>" +
      "<p><strong>Learning Outcomes:</strong> " + state.outcomes.length + " selected</p>" +
      "<p><strong>Frameworks:</strong> " + state.frameworks.join(", ") + "</p>" +
      "<p><strong>Apps:</strong> " + state.apps.join(", ") + "</p>" +
      "<p><strong>Resources:</strong> " + state.resources.length + " matched</p>";
  }

  // ---- Org chart (canvas) ----
  function drawOrgChart() {
    var canvas = $("org-chart-canvas");
    var ctx = canvas.getContext("2d");
    var W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--bg-elev").trim() || "#fff";
    ctx.fillRect(0, 0, W, H);

    var org = CD.orgTypes.find(function (t) { return t.id === state.orgType; });
    var roles = org ? org.roles : ["(select org type)"];
    var boxW = 140, boxH = 36, gap = 24;
    var totalH = roles.length * (boxH + gap) - gap;
    var startY = (H - totalH) / 2;
    var cx = W / 2;

    roles.forEach(function (role, i) {
      var y = startY + i * (boxH + gap);
      var grad = ctx.createLinearGradient(cx - boxW / 2, y, cx + boxW / 2, y);
      grad.addColorStop(0, "#7c5cff"); grad.addColorStop(1, "#00c2a8");
      ctx.fillStyle = i === 0 ? grad : "rgba(124,92,255,0.12)";
      ctx.strokeStyle = "#7c5cff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(cx - boxW / 2, y, boxW, boxH, 8);
      ctx.fill();
      if (i > 0) ctx.stroke();
      ctx.fillStyle = i === 0 ? "#fff" : "#1e293b";
      ctx.font = (i === 0 ? "bold " : "") + "13px Inter, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(role, cx, y + boxH / 2);
      if (i < roles.length - 1) {
        ctx.strokeStyle = "#d4d7e2"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(cx, y + boxH); ctx.lineTo(cx, y + boxH + gap); ctx.stroke();
      }
    });

    var fwY = startY; var fwX = cx + boxW / 2 + 60;
    ctx.font = "bold 11px Inter, sans-serif"; ctx.fillStyle = "#7c5cff"; ctx.textAlign = "left";
    ctx.fillText("FRAMEWORKS", fwX, fwY - 6);
    state.frameworks.forEach(function (fid, i) {
      ctx.fillStyle = "#4b5168"; ctx.font = "12px Inter, sans-serif";
      ctx.fillText("\u2022 " + fid, fwX, fwY + 12 + i * 18);
    });

    var appY = startY; var appX = cx - boxW / 2 - 160;
    ctx.font = "bold 11px Inter, sans-serif"; ctx.fillStyle = "#00c2a8"; ctx.textAlign = "left";
    ctx.fillText("APPS", appX, appY - 6);
    state.apps.forEach(function (aid, i) {
      ctx.fillStyle = "#4b5168"; ctx.font = "12px Inter, sans-serif";
      ctx.fillText("\u2022 " + aid, appX, appY + 12 + i * 18);
    });
  }

  // ---- Export ----
  $("export-chart").addEventListener("click", function () {
    var link = document.createElement("a");
    link.download = "curriculum-org-chart.png";
    link.href = $("org-chart-canvas").toDataURL();
    link.click();
  });
  $("export-json").addEventListener("click", function () {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = "curriculum-plan.json"; a.click(); URL.revokeObjectURL(a.href);
  });
})();
