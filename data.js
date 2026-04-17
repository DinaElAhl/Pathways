/* data.js — master loader that combines all data modules + merges stages.
   Load after data-frameworks.js, data-apps.js, data-resources.js,
   data-frameworks-stages.js, data-apps-stages.js, then this file.
*/
"use strict";

// Merge stages + liveUrl overrides into base arrays
(function () {
  var fwStages = window.PW_FW_STAGES || {};
  var appStages = window.PW_APP_STAGES || {};
  function merge(arr, overrides) {
    return (arr || []).map(function (item) {
      var extra = overrides[item.id];
      if (!extra) return item;
      var merged = {};
      for (var k in item) merged[k] = item[k];
      for (var k2 in extra) merged[k2] = extra[k2];
      return merged;
    });
  }
  window.PW_FRAMEWORKS = merge(window.PW_FRAMEWORKS, fwStages);
  window.PW_APPS = merge(window.PW_APPS, appStages);
})();

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
