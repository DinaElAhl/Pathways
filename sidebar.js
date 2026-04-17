/* sidebar.js — recently viewed + related content sidebar.
   Exports window.PWSidebar with .track() and .render(). Load after data.js. */
"use strict";
(function () {
  var KEY = "pw_recent";
  var MAX = 8;
  var typePages = { framework: "frameworks.html", app: "apps.html", resource: "resources.html" };

  function getRecent() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; }
  }

  function track(type, id) {
    if (!id || !window.PW) return;
    var item = type === "framework" ? PW.findFramework(id) : type === "app" ? PW.findApp(id) : PW.findResource(id);
    if (!item) return;
    var name = item.name || item.title || id;
    var list = getRecent().filter(function (r) { return r.id !== id; });
    list.unshift({ type: type, id: id, name: name, ts: Date.now() });
    if (list.length > MAX) list = list.slice(0, MAX);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  function findRelated(type, id, limit) {
    limit = limit || 4;
    if (!window.PW) return [];
    var item = type === "framework" ? PW.findFramework(id) : type === "app" ? PW.findApp(id) : null;
    if (!item) return [];
    var pool = type === "framework" ? PW.frameworks : PW.apps;
    var tags = item.tags || item.relatedApps || [];
    return pool.filter(function (p) {
      if (p.id === id) return false;
      var pt = p.tags || p.relatedApps || [];
      return tags.some(function (t) { return pt.indexOf(t) !== -1; });
    }).slice(0, limit);
  }

  function pillHTML(items, linkType) {
    return items.map(function (it) {
      var href = (typePages[linkType || it.type] || "#") + "?id=" + (it.id || "");
      var name = it.name || it.title || it.id || "";
      return '<a class="pw-sidebar-item" href="' + href + '">' + name + "</a>";
    }).join("");
  }

  function render(targetId, currentType, currentId) {
    var el = document.getElementById(targetId);
    if (!el) return;
    var html = "";

    var recent = getRecent().filter(function (r) { return r.id !== currentId; }).slice(0, 5);
    if (recent.length) {
      html += '<div class="pw-sidebar-section"><h4>Recently viewed</h4>' + pillHTML(recent) + "</div>";
    }

    if (currentType && currentId) {
      var related = findRelated(currentType, currentId, 4);
      if (related.length) {
        html += '<div class="pw-sidebar-section"><h4>You might also like</h4>' +
          pillHTML(related.map(function (r) { return { id: r.id, name: r.name || r.title, type: currentType }; }), currentType) + "</div>";
      }
    }

    if (!html) {
      html = '<p class="muted" style="font-size:13px">Explore <a href="frameworks.html">frameworks</a>, <a href="apps.html">apps</a>, or <a href="resources.html">resources</a> to see suggestions here.</p>';
    }
    el.innerHTML = '<aside class="pw-sidebar" aria-label="Sidebar">' + html + "</aside>";
  }

  // Auto-track from ?id= param
  var params = new URLSearchParams(location.search);
  var viewedId = params.get("id");
  if (viewedId) {
    var page = (location.pathname.split("/").pop() || "").replace(".html", "");
    if (page.indexOf("framework") !== -1) track("framework", viewedId);
    else if (page.indexOf("app") !== -1) track("app", viewedId);
    else if (page.indexOf("resource") !== -1) track("resource", viewedId);
  }

  // Homepage recently-viewed strip
  var recentEl = document.getElementById("recently-viewed");
  if (recentEl) {
    var recent = getRecent();
    if (recent.length) {
      recentEl.innerHTML = '<h3 class="h3" style="margin-top:0">Recently viewed</h3>' +
        '<div class="explore-apps">' + recent.map(function (r) {
          return '<a class="explore-pill" href="' + (typePages[r.type] || "#") + "?id=" + r.id + '">' + r.name + "</a>";
        }).join("") + "</div>";
    }
  }

  window.PWSidebar = { track: track, render: render, getRecent: getRecent };
})();
