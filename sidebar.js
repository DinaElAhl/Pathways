/* sidebar.js — cross-page recently viewed + related content.
   Tracks viewed items in localStorage. Injects UI into pages that include it.
   Load after data.js. */
"use strict";
(function () {
  var KEY = "pathways_recent";
  var MAX = 5;

  function getRecent() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; }
  }
  function addRecent(type, id, name) {
    var list = getRecent().filter(function (r) { return r.id !== id; });
    list.unshift({ type: type, id: id, name: name, ts: Date.now() });
    if (list.length > MAX) list = list.slice(0, MAX);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  // Auto-track if page has ?id= param
  var params = new URLSearchParams(location.search);
  var viewedId = params.get("id");
  if (viewedId && window.PW) {
    var page = location.pathname.split("/").pop() || "";
    if (page.indexOf("frameworks") !== -1) {
      var f = PW.findFramework(viewedId);
      if (f) addRecent("framework", f.id, f.name);
    } else if (page.indexOf("apps") !== -1) {
      var a = PW.findApp(viewedId);
      if (a) addRecent("app", a.id, a.name);
    } else if (page.indexOf("resources") !== -1) {
      var r = PW.findResource(viewedId);
      if (r) addRecent("resource", r.id, r.title);
    }
  }

  var typePages = { framework: "frameworks.html", app: "apps.html", resource: "resources.html" };

  // ---- Render "Recently viewed" strip (homepage) ----
  var recentEl = document.getElementById("recently-viewed");
  if (recentEl) {
    var recent = getRecent();
    if (recent.length) {
      recentEl.innerHTML = '<h3 class="h3" style="margin-top:0">Recently viewed</h3>' +
        '<div class="explore-apps">' + recent.map(function (r) {
          var href = (typePages[r.type] || "#") + "?id=" + r.id;
          return '<a class="explore-pill" href="' + href + '">' + r.name + '</a>';
        }).join("") + "</div>";
    } else {
      recentEl.innerHTML = '<p class="muted" style="font-size:14px">No recently viewed items yet. Explore <a href="frameworks.html">frameworks</a>, <a href="apps.html">apps</a>, or <a href="resources.html">resources</a>.</p>';
    }
  }

  // ---- "You might also like" (detail expansions on frameworks/apps) ----
  window.PW_SIDEBAR = {
    getRecent: getRecent,
    addRecent: addRecent,
    suggest: function (type, id, limit) {
      limit = limit || 4;
      var item = type === "framework" ? PW.findFramework(id) : PW.findApp(id);
      if (!item) return [];
      var tags = item.tags || item.relatedApps || [];
      var pool = type === "framework" ? PW.frameworks : PW.apps;
      return pool.filter(function (p) {
        if (p.id === id) return false;
        var pTags = p.tags || p.relatedApps || [];
        return tags.some(function (t) { return pTags.indexOf(t) !== -1; });
      }).slice(0, limit);
    }
  };
})();
