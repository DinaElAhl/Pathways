/* Pathways — small client script: theme toggle + mobile nav */
(function () {
  "use strict";

  // ---------- Theme toggle ----------
  var root = document.documentElement;
  var STORAGE_KEY = "pathways-theme";
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        var prefersDark = window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        current = prefersDark ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      themeBtn.setAttribute(
        "aria-label",
        next === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    });
  }

  // ---------- Mobile nav ----------
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu after tapping a link
    list.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.tagName === "A" && list.classList.contains("open")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    // Close on resize back to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 920 && list.classList.contains("open")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Active section highlight ----------
  var navLinks = document.querySelectorAll(".nav-list a[href^='#']");
  if (navLinks.length && "IntersectionObserver" in window) {
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) sections.push({ link: link, section: section });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = sections.find(function (s) { return s.section === entry.target; });
        if (!match) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute("aria-current"); });
          match.link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    sections.forEach(function (s) { io.observe(s.section); });
  }
})();
