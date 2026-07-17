/* tour.js — lightweight onboarding tour overlay. Shows once per user. */
"use strict";
(function () {
  var KEY = "pw_tour_done";
  try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }

  var steps = [
    { text: "Welcome to Pathways! Let\u2019s take a quick tour.", target: null },
    { text: "Browse 14 teaching frameworks \u2014 from E\u00b2 to WCAG.", target: ".nav-list" },
    { text: "Build a full curriculum in 7 guided steps.", target: 'a[href="curriculum-builder.html"]' },
    { text: "Explore 15 apps and 18 resources \u2014 all interconnected.", target: 'a[href="apps.html"]' },
    { text: "Your recently viewed items and path are saved locally.", target: ".path-card" },
    { text: "You\u2019re all set! Enjoy exploring Pathways.", target: null }
  ];
  var idx = 0;

  var overlay = document.createElement("div");
  overlay.className = "tour-overlay";
  var box = document.createElement("div");
  box.className = "tour-box";
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  function show() {
    var s = steps[idx];
    var isLast = idx === steps.length - 1;
    box.innerHTML = '<p class="tour-text">' + s.text + "</p>" +
      '<div class="tour-nav">' +
      '<span class="tour-dots">' + steps.map(function (_, i) {
        return '<span class="tour-dot' + (i === idx ? " on" : "") + '"></span>';
      }).join("") + "</span>" +
      '<button class="tour-skip">' + (isLast ? "Finish" : "Skip") + "</button>" +
      '<button class="tour-next">' + (isLast ? "Done \u2713" : "Next \u2192") + "</button></div>";

    document.querySelectorAll(".tour-highlight").forEach(function (el) { el.classList.remove("tour-highlight"); });
    if (s.target) {
      var el = document.querySelector(s.target);
      if (el) { el.classList.add("tour-highlight"); el.scrollIntoView({ behavior: "smooth", block: "center" }); }
    }
  }

  function close() {
    document.querySelectorAll(".tour-highlight").forEach(function (el) { el.classList.remove("tour-highlight"); });
    overlay.remove();
    try { localStorage.setItem(KEY, "1"); } catch (e) { /* ignore */ }
  }

  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("tour-next")) {
      if (idx < steps.length - 1) { idx++; show(); } else close();
    } else if (e.target.classList.contains("tour-skip")) { close(); }
  });

  var css = document.createElement("style");
  css.textContent =
    ".tour-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;align-items:center;justify-content:center}" +
    ".tour-box{background:var(--bg-elev,#fff);border-radius:16px;padding:28px 32px;max-width:420px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.25);text-align:center}" +
    ".tour-text{font-size:1rem;line-height:1.6;margin:0 0 18px;color:var(--text,#1e293b)}" +
    ".tour-nav{display:flex;align-items:center;justify-content:space-between;gap:12px}" +
    ".tour-dots{display:flex;gap:5px}" +
    ".tour-dot{width:8px;height:8px;border-radius:50%;background:var(--border,#ddd)}" +
    ".tour-dot.on{background:var(--brand-1,#7c5cff)}" +
    ".tour-next{padding:8px 18px;border:none;border-radius:8px;background:var(--grad,#7c5cff);color:#fff;font-weight:700;cursor:pointer;font-size:.9rem}" +
    ".tour-skip{background:none;border:none;color:var(--text-muted,#64748b);cursor:pointer;font-size:.85rem}" +
    ".tour-highlight{outline:3px solid var(--brand-1,#7c5cff);outline-offset:4px;border-radius:8px;z-index:10000;position:relative}";
  document.head.appendChild(css);

  setTimeout(show, 800);
})();
