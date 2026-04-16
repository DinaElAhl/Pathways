/* data.js — master loader that combines all data modules.
   Load after data-frameworks.js, data-apps.js, data-resources.js.
   Usage in HTML:
     <script src="data-frameworks.js"></script>
     <script src="data-apps.js"></script>
     <script src="data-resources.js"></script>
     <script src="data.js"></script>
   Then access: window.PW.frameworks, window.PW.apps, window.PW.resources
*/
"use strict";

window.PW = {
  frameworks: window.PW_FRAMEWORKS || [],
  apps: window.PW_APPS || [],
  resources: window.PW_RESOURCES || [],

  findFramework: function (id) {
    return this.frameworks.find(function (f) { return f.id === id; });
  },
  findApp: function (id) {
    return this.apps.find(function (a) { return a.id === id; });
  },
  findResource: function (id) {
    return this.resources.find(function (r) { return r.id === id; });
  },
  search: function (query) {
    var q = query.toLowerCase();
    var match = function (s) { return s && s.toLowerCase().indexOf(q) !== -1; };
    var results = [];
    this.frameworks.forEach(function (f) {
      if (match(f.name) || match(f.shortDesc))
        results.push({ type: "framework", id: f.id, name: f.name, desc: f.shortDesc });
    });
    this.apps.forEach(function (a) {
      if (match(a.name) || match(a.desc) || a.tags.some(match))
        results.push({ type: "app", id: a.id, name: a.name, desc: a.desc });
    });
    this.resources.forEach(function (r) {
      if (match(r.title) || match(r.desc) || r.tags.some(match))
        results.push({ type: "resource", id: r.id, name: r.title, desc: r.desc });
    });
    return results;
  }
};
