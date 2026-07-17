/* resources-app.js — data-driven resources explorer */
"use strict";
(function () {
  var TYPES = ["All", "guide", "template", "video", "research"];
  var LEVELS = ["All levels", "All", "K\u201312", "Grades 5\u201312", "A1\u2013C2", "Admin", "Advanced"];
  var activeType = "All", activeLevel = "All levels";
  var expandedId = new URLSearchParams(location.search).get("id");

  function toast(msg) {
    var t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.classList.add("show"); }, 10);
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2200);
  }

  function render() {
    var q = (document.getElementById("res-search").value || "").toLowerCase();
    var list = PW.resources.filter(function (r) {
      var tOk = activeType === "All" || r.type === activeType;
      var lOk = activeLevel === "All levels" || r.level === activeLevel;
      var qOk = !q || r.title.toLowerCase().indexOf(q) !== -1 || r.desc.toLowerCase().indexOf(q) !== -1 || r.tags.some(function (t) { return t.indexOf(q) !== -1; });
      return tOk && lOk && qOk;
    });
    document.getElementById("res-count").textContent = list.length + " resources";
    var grid = document.getElementById("res-grid");
    if (!list.length) { grid.innerHTML = '<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px">No resources match.</p>'; return; }
    grid.innerHTML = list.map(function (r) {
      var fws = (r.relatedFrameworks || []).map(function (fid) {
        var f = PW.findFramework(fid);
        return f ? '<a class="explore-pill" href="frameworks.html?id=' + f.id + '">' + f.name + '</a>' : '';
      }).join('');
      var apps = (r.relatedApps || []).map(function (aid) {
        var a = PW.findApp(aid);
        return a ? '<a class="explore-pill" href="apps.html?id=' + a.id + '">' + a.icon + ' ' + a.name + '</a>' : '';
      }).join('');
      return '<article class="res-card">' +
        '<div class="res-badges"><span class="badge">' + r.type + '</span><span class="badge">' + r.level + '</span></div>' +
        '<h3 class="res-title">' + r.title + '</h3>' +
        '<p class="muted" style="font-size:14px;margin:6px 0 10px">' + r.desc + '</p>' +
        '<div class="res-tags">' + r.tags.map(function (t) { return '<span class="app-tag">' + t + '</span>'; }).join('') + '</div>' +
        (fws ? '<div class="res-rel"><strong>Frameworks:</strong> ' + fws + '</div>' : '') +
        (apps ? '<div class="res-rel"><strong>Apps:</strong> ' + apps + '</div>' : '') +
        '<div class="res-actions">' +
        '<button class="btn ghost add-path-btn" data-type="resource" data-id="' + r.id + '" data-name="' + r.title + '">+ Add to path</button></div>' +
        '</article>';
    }).join('');
  }

  // ---- Events ----
  document.getElementById("res-grid").addEventListener("click", function (e) {
    var addBtn = e.target.closest(".add-path-btn");
    if (!addBtn) return;
    var path = []; try { path = JSON.parse(localStorage.getItem("pathways_path") || "[]"); } catch (err) { path = []; }
    var entry = { type: addBtn.dataset.type, id: addBtn.dataset.id, name: addBtn.dataset.name };
    if (!path.find(function (p) { return p.id === entry.id; })) {
      path.push(entry); localStorage.setItem("pathways_path", JSON.stringify(path));
      toast("Added to your path \u2713");
    } else { toast("Already in your path"); }
    addBtn.textContent = "Added \u2713"; addBtn.disabled = true;
  });

  // ---- Filters ----
  var typeBar = document.getElementById("type-filters");
  typeBar.innerHTML = TYPES.map(function (t) {
    return '<button class="fpill' + (t === "All" ? " on" : "") + '" data-val="' + t + '">' + (t === "All" ? "All types" : t.charAt(0).toUpperCase() + t.slice(1) + 's') + '</button>';
  }).join('');
  typeBar.addEventListener("click", function (e) {
    var btn = e.target.closest(".fpill"); if (!btn) return;
    activeType = btn.dataset.val;
    typeBar.querySelectorAll(".fpill").forEach(function (b) { b.classList.toggle("on", b === btn); });
    render();
  });

  var lvlBar = document.getElementById("level-filters");
  lvlBar.innerHTML = LEVELS.map(function (l) {
    return '<button class="fpill' + (l === "All levels" ? " on" : "") + '" data-val="' + l + '">' + l + '</button>';
  }).join('');
  lvlBar.addEventListener("click", function (e) {
    var btn = e.target.closest(".fpill"); if (!btn) return;
    activeLevel = btn.dataset.val;
    lvlBar.querySelectorAll(".fpill").forEach(function (b) { b.classList.toggle("on", b === btn); });
    render();
  });

  document.getElementById("res-search").addEventListener("input", render);
  render();
})();
