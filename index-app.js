/* index-app.js — homepage interactivity. Waits for window.PW before init. */
"use strict";
(function () {
  function init() {
    if (!window.PW) { setTimeout(init, 50); return; }

    // ---- Animated counter stats ----
    var counters = document.querySelectorAll("[data-count]");
    if (counters.length && "IntersectionObserver" in window) {
      var animated = false;
      var io = new IntersectionObserver(function (entries) {
        if (animated) return;
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          animated = true;
          io.disconnect();
          counters.forEach(function (dd) {
            var raw = dd.getAttribute("data-count");
            var target = parseInt(raw, 10);
            var hasPlus = raw.indexOf("+") > -1;
            var duration = 1200;
            var start = performance.now();
            (function tick(now) {
              var t = Math.min((now - start) / duration, 1);
              dd.textContent = Math.round(t * target);
              if (t < 1) requestAnimationFrame(tick);
              else dd.textContent = target + (hasPlus ? "+" : "");
            })(start);
          });
        });
      }, { threshold: 0.3 });
      counters.forEach(function (dd) { io.observe(dd); });
    }

    // ---- Quick explore (3 featured frameworks with related apps) ----
    var grid = document.getElementById("quick-explore");
    if (grid) {
      var featured = ["e2", "udl3", "blooms-taxonomy"];
      var html = "";
      featured.forEach(function (fid) {
        var fw = PW.findFramework(fid);
        if (!fw) return;
        var apps = (fw.relatedApps || []).slice(0, 3).map(function (aid) {
          var a = PW.findApp(aid);
          return a ? '<a class="explore-pill" href="apps.html?id=' + a.id + '">' + a.icon + " " + a.name + "</a>" : "";
        }).join("");
        html +=
          '<article class="explore-card">' +
          '<h3><a href="frameworks.html?id=' + fw.id + '">' + fw.name + "</a></h3>" +
          '<p class="muted">' + fw.shortDesc + "</p>" +
          '<div class="explore-apps">' + apps + "</div>" +
          "</article>";
      });
      grid.innerHTML = html;
    }

    // ---- Your current path ----
    var status = document.getElementById("path-status");
    var cta = document.getElementById("path-cta");
    if (status && cta) {
      var raw = null;
      try { raw = localStorage.getItem("pathways_path"); } catch (e) { /* ignore */ }
      var path = [];
      try { path = raw ? JSON.parse(raw) : []; } catch (e) { path = []; }
      if (path.length) {
        status.textContent = path.length + " item" + (path.length > 1 ? "s" : "") + " in your path.";
        cta.textContent = "Continue building \u2192";
      } else {
        status.textContent = "You haven\u2019t started a path yet.";
        cta.textContent = "Start your first path \u2192";
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
