/* builder-app.js — enhances path-builder with data.js integration,
   pathways_path sync, export, and share. Loaded after the main builder script. */
"use strict";
(function () {
  var PATH_KEY = "pathways_path";

  function getPath() {
    try { return JSON.parse(localStorage.getItem(PATH_KEY) || "[]"); } catch (e) { return []; }
  }
  function setPath(arr) {
    localStorage.setItem(PATH_KEY, JSON.stringify(arr));
  }

  // Sync pw-draft nodes → pathways_path whenever the builder saves
  function syncDraftToPath() {
    try {
      var draft = JSON.parse(localStorage.getItem("pw-draft") || "{}");
      if (!draft.nodes || !draft.nodes.length) return;
      var items = draft.nodes.map(function (n) {
        return { type: n.nodeType || n.type || "item", id: n.id, name: n.title || n.name || n.id };
      });
      setPath(items);
    } catch (e) { /* ignore */ }
  }

  // Patch the existing savePath if it exists
  if (typeof window.savePath === "function") {
    var origSave = window.savePath;
    window.savePath = function () {
      origSave();
      syncDraftToPath();
    };
  }

  // Run initial sync
  syncDraftToPath();

  // ---- Export button ----
  function exportJSON() {
    var path = getPath();
    var blob = new Blob([JSON.stringify(path, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "pathways-path.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ---- Share button ----
  function sharePath() {
    var path = getPath();
    var encoded = btoa(JSON.stringify(path));
    var url = location.origin + location.pathname + "?path=" + encodeURIComponent(encoded);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () {
        if (typeof window.toast === "function") window.toast("Link copied!", "ok");
      });
    } else {
      prompt("Copy this link:", url);
    }
  }

  // ---- Load shared path from URL ----
  var params = new URLSearchParams(location.search);
  if (params.has("path")) {
    try {
      var decoded = JSON.parse(atob(decodeURIComponent(params.get("path"))));
      if (Array.isArray(decoded) && decoded.length) {
        setPath(decoded);
        if (typeof window.toast === "function") window.toast("Shared path loaded!", "ok");
      }
    } catch (e) { /* invalid share link */ }
  }

  // ---- Inject export/share buttons into UI ----
  var target = document.querySelector(".card-body") || document.querySelector(".layout");
  if (target) {
    var div = document.createElement("div");
    div.style.cssText = "display:flex;gap:8px;margin-top:12px;flex-wrap:wrap";
    var btnExp = document.createElement("button");
    btnExp.className = "btn-sm"; btnExp.textContent = "Export JSON";
    btnExp.addEventListener("click", exportJSON);
    var btnShare = document.createElement("button");
    btnShare.className = "btn-sm"; btnShare.textContent = "Share link";
    btnShare.addEventListener("click", sharePath);
    div.appendChild(btnExp);
    div.appendChild(btnShare);
    target.appendChild(div);
  }
})();
