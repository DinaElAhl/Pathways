/* nav.js — unified sticky nav + global search + dark-mode toggle.
   Load data.js first (for PW.search). */
"use strict";
(function () {
  var LINKS = [
    { href: "index.html",              label: "Home" },
    { href: "curriculum-builder.html",  label: "Curriculum Builder" },
    { href: "apps.html",               label: "Apps" },
    { href: "frameworks.html",          label: "Frameworks" },
    { href: "resources.html",           label: "Resources" },
    { href: "arabic.html",              label: "Arabic & Quran" },
    { href: "about.html",               label: "About" },
    { href: "pricing.html",             label: "Pricing" },
    { href: "path-builder.html",        label: "Quick Path" }
  ];

  var page = location.pathname.split("/").pop() || "index.html";

  function linkHTML() {
    return LINKS.map(function (l) {
      var cur = l.href === page ? ' aria-current="page"' : "";
      return '<li><a href="' + l.href + '"' + cur + ">" + l.label + "</a></li>";
    }).join("");
  }

  var html =
    '<header class="site-header" role="banner"><div class="wrap header-wrap">' +
    '<a class="brand" href="index.html" aria-label="Pathways home">' +
    '<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64" width="28" height="28">' +
    '<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#00c2a8"/>' +
    '</linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#bg)"/>' +
    '<path d="M14 46c8-22 28-22 36 0" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"/>' +
    '<circle cx="32" cy="22" r="5" fill="white"/></svg></span>' +
    '<span class="brand-text">Pathways</span></a>' +
    '<nav class="primary-nav" aria-label="Primary">' +
    '<button class="nav-toggle" aria-expanded="false" aria-controls="nav-list">' +
    '<span class="sr-only">Toggle navigation</span><span class="bars" aria-hidden="true"></span></button>' +
    '<ul id="nav-list" class="nav-list">' + linkHTML() + "</ul></nav>" +
    '<div class="header-actions">' +
    '<div class="global-search"><input id="gs-input" class="gs-input" type="search" placeholder="Search\u2026" autocomplete="off" aria-label="Search frameworks, apps, resources">' +
    '<div id="gs-results" class="gs-results" hidden></div></div>' +
    '<button id="theme-toggle" class="ghost-btn" aria-label="Toggle colour theme">' +
    '<svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/>' +
    '<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>' +
    '<path d="M4.5 4.5l2.1 2.1"/><path d="M17.4 17.4l2.1 2.1"/><path d="M4.5 19.5l2.1-2.1"/><path d="M17.4 6.6l2.1-2.1"/></g></svg>' +
    '<svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M21 13.5A8.5 8.5 0 0 1 10.5 3a7 7 0 1 0 10.5 10.5z" fill="currentColor"/></svg>' +
    "</button></div></div></header>";

  // Inject at top of body (before any existing content)
  document.body.insertAdjacentHTML("afterbegin", html);

  // ---- Dark-mode toggle ----
  var root = document.documentElement;
  var KEY = "pathways-theme";
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* ignore */ }
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);

  var btn = document.getElementById("theme-toggle");
  if (btn) btn.addEventListener("click", function () {
    var cur = root.getAttribute("data-theme");
    if (!cur) cur = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
  });

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { list.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  // ---- Global search ----
  var input = document.getElementById("gs-input");
  var box = document.getElementById("gs-results");
  if (!input || !box || typeof window.PW === "undefined") return;

  var typePages = { framework: "frameworks.html", app: "apps.html", resource: "resources.html" };

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (q.length < 2) { box.hidden = true; return; }
    var results = window.PW.search(q).slice(0, 12);
    if (!results.length) { box.innerHTML = '<div class="gs-empty">No results</div>'; box.hidden = false; return; }
    var grouped = {};
    results.forEach(function (r) { (grouped[r.type] = grouped[r.type] || []).push(r); });
    var out = "";
    ["framework", "app", "resource"].forEach(function (t) {
      if (!grouped[t]) return;
      out += '<div class="gs-group"><div class="gs-label">' + t.charAt(0).toUpperCase() + t.slice(1) + "s</div>";
      grouped[t].forEach(function (r) {
        out += '<a class="gs-item" href="' + typePages[t] + "?id=" + r.id + '">' +
          '<span class="gs-item-name">' + r.name + "</span>" +
          '<span class="gs-item-desc">' + (r.desc || "").slice(0, 80) + "</span></a>";
      });
      out += "</div>";
    });
    box.innerHTML = out;
    box.hidden = false;
  });

  document.addEventListener("click", function (e) {
    if (!box.contains(e.target) && e.target !== input) box.hidden = true;
  });
})();
