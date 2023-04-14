// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _authController = require("./controllers/AuthController");
var _chatPage = require("./pages/ChatPage/ChatPage");
var _chatPageDefault = parcelHelpers.interopDefault(_chatPage);
var _editPasswordPage = require("./pages/EditPasswordPage/EditPasswordPage");
var _editPasswordPageDefault = parcelHelpers.interopDefault(_editPasswordPage);
var _editProfilePage = require("./pages/EditProfilePage/EditProfilePage");
var _editProfilePageDefault = parcelHelpers.interopDefault(_editProfilePage);
var _errorPage = require("./pages/ErrorPage/ErrorPage");
var _profilePage = require("./pages/ProfilePage/ProfilePage");
var _profilePageDefault = parcelHelpers.interopDefault(_profilePage);
var _signInPage = require("./pages/SignInPage/SignInPage");
var _signInPageDefault = parcelHelpers.interopDefault(_signInPage);
var _signUpPage = require("./pages/SignUpPage/SignUpPage");
var _signUpPageDefault = parcelHelpers.interopDefault(_signUpPage);
var _router = require("./Router/Router");
window.addEventListener("DOMContentLoaded", async ()=>{
    new (0, _router.Router)("#app").use((0, _router.Routes).SignInPage, (0, _signInPageDefault.default), {}).use((0, _router.Routes).SignUpPage, (0, _signUpPageDefault.default), {}).use((0, _router.Routes).Chat, (0, _chatPageDefault.default), {}).use((0, _router.Routes).EditProfilePage, (0, _editProfilePageDefault.default), {}).use((0, _router.Routes).EditPasswordPage, (0, _editPasswordPageDefault.default), {}).use((0, _router.Routes).Profile, (0, _profilePageDefault.default), {}).use((0, _router.Routes).NotFoundPage, (0, _errorPage.ErrorPage), {
        statusCode: 404,
        text: "Не найдено"
    }).use((0, _router.Routes).ServerError, (0, _errorPage.ErrorPage), {
        statusCode: 500,
        text: "Что-то пошло не так"
    }).start();
    const authController = new (0, _authController.AuthController)();
    await authController.getUser();
});

},{"./controllers/AuthController":"btuLA","./pages/ChatPage/ChatPage":"3SJDk","./pages/EditPasswordPage/EditPasswordPage":"ibc2x","./pages/EditProfilePage/EditProfilePage":"7R3ps","./pages/ErrorPage/ErrorPage":"4iCbF","./pages/ProfilePage/ProfilePage":"fsCEu","./pages/SignInPage/SignInPage":"ki9cz","./pages/SignUpPage/SignUpPage":"iwJWL","./Router/Router":"3NHNR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btuLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthController", ()=>AuthController);
var _authApi = require("../api/AuthApi");
var _constants = require("../api/constants");
var _router = require("../Router/Router");
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _messagesController = require("./MessagesController");
class AuthController {
    constructor(){
        this.api = new (0, _authApi.AuthAPI)();
        this.router = new (0, _router.Router)("#app");
    }
    async signUp(data) {
        await this.api.signup(data);
        await this.getUser();
        this.router.replace((0, _router.Routes).Profile);
    }
    async signIn(data) {
        await this.api.signin(data);
        await this.getUser();
        this.router.replace((0, _router.Routes).Chat);
    }
    async getUser() {
        try {
            const user = await this.api.getUser();
            user.avatar = (0, _constants.AppLinks).ResourcesUrl + user.avatar;
            (0, _storeDefault.default).set("user", user);
            const currentPathName = this.router.getCurrentPathName();
            this.router.replace(currentPathName !== "" ? currentPathName : (0, _router.Routes).Chat);
        } catch (error) {
            this.router.replace((0, _router.Routes).SignInPage);
            console.error(error);
        }
    }
    async logout(redirectPath) {
        try {
            (0, _messagesController.MessagesController).closeAll();
            await this.api.logout();
            this.router.replace(redirectPath ?? (0, _router.Routes).SignUpPage);
            (0, _storeDefault.default).set("user", undefined);
        } catch (error) {
            console.error(error);
        }
    }
}

},{"../api/AuthApi":"3et0L","../api/constants":"g5L3l","../Router/Router":"3NHNR","../utils/Store":"euxgo","./MessagesController":"031LW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3et0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthAPI", ()=>AuthAPI);
var _fetch = require("../utils/Fetch");
var _httpTransport = require("../utils/HttpTransport");
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class AuthAPI extends (0, _baseApiDefault.default) {
    constructor(){
        super("/auth");
    }
    signup(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "/signup", {
            method: (0, _httpTransport.METHODS).POST,
            retries: 1,
            data
        });
    }
    signin(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "/signin", {
            method: (0, _httpTransport.METHODS).POST,
            retries: 1,
            data
        });
    }
    async getUser() {
        return (0, _fetch.fetchWithRetry)(this.http, "/user", {
            method: (0, _httpTransport.METHODS).GET,
            retries: 1
        });
    }
    async logout() {
        return (0, _fetch.fetchWithRetry)(this.http, "/logout", {
            method: (0, _httpTransport.METHODS).POST,
            retries: 1
        });
    }
    create = undefined;
    read = undefined;
    update = undefined;
    delete = undefined;
}

},{"../utils/Fetch":"aeYEP","../utils/HttpTransport":"cuRjm","./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeYEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchWithRetry", ()=>fetchWithRetry);
var _httpTransport = require("./HttpTransport");
const fetchWithRetry = async (transport, path, options)=>{
    const { retries , method  } = options;
    let requestFunction = null;
    switch(method){
        case (0, _httpTransport.METHODS).DELETE:
            requestFunction = transport.delete.bind(transport);
            break;
        case (0, _httpTransport.METHODS).POST:
            requestFunction = transport.post.bind(transport);
            break;
        case (0, _httpTransport.METHODS).PUT:
            requestFunction = transport.put.bind(transport);
            break;
        default:
            requestFunction = transport.get.bind(transport);
    }
    let triesCount = 0;
    try {
        const res = await requestFunction(path, options);
        return res;
    } catch (err) {
        if (requestFunction === null) throw err;
        if (triesCount === retries) throw err;
        else {
            triesCount += 1;
            return requestFunction(path, options);
        }
    }
};

},{"./HttpTransport":"cuRjm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cuRjm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "METHODS", ()=>METHODS);
parcelHelpers.export(exports, "HTTPTransport", ()=>HTTPTransport);
var _constants = require("../api/constants");
let METHODS;
(function(METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["PATCH"] = "PATCH";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
class HTTPTransport {
    static API_URL = (0, _constants.AppLinks).BaseUrl;
    constructor(endpoint){
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }
    get(path = "/", options = {}) {
        const query = options.data instanceof FormData ? undefined : this.queryStringify(path, options.data);
        return this.request(this.endpoint + query, {
            ...options,
            method: METHODS.GET
        }, options.timeout);
    }
    put(path, options) {
        return this.request(this.endpoint + path, {
            ...options,
            method: METHODS.PUT
        }, options.timeout);
    }
    post(path, options) {
        return this.request(this.endpoint + path, {
            ...options,
            method: METHODS.POST
        }, options.timeout);
    }
    delete(path, options) {
        return this.request(this.endpoint + path, {
            ...options,
            method: METHODS.DELETE
        }, options.timeout);
    }
    request(url, options, timeout = 5000) {
        return new Promise(function(resolve, reject) {
            const { headers , data , method  } = options;
            const isFormData = data instanceof FormData;
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.timeout = timeout;
            if (headers) Object.entries(headers).forEach(([key, value])=>{
                xhr.setRequestHeader(key, value);
            });
            xhr.onload = function() {
                if (xhr.status < 400) {
                    const response = xhr.response;
                    resolve(response);
                } else reject(xhr.response);
            };
            if (!isFormData) xhr.setRequestHeader("Content-Type", "application/json");
            xhr.withCredentials = true;
            xhr.responseType = "json";
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (isFormData) {
                xhr.send(data);
                return;
            }
            if (method === METHODS.GET || !data) xhr.send();
            else xhr.send(JSON.stringify(data));
        });
    }
    queryStringify(url, data) {
        if (data) {
            let optionsString = "?";
            Object.entries(data).forEach(([key, value])=>{
                optionsString += `${key}=${value}&`;
            });
            return url + optionsString.slice(0, -1);
        } else return url;
    }
}

},{"../api/constants":"g5L3l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5L3l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppLinks", ()=>AppLinks);
let AppLinks;
(function(AppLinks) {
    AppLinks["BaseUrl"] = "https://ya-praktikum.tech/api/v2";
    AppLinks["ResourcesUrl"] = "https://ya-praktikum.tech/api/v2/resources";
    AppLinks["WSURL"] = "wss://ya-praktikum.tech/ws/chats";
})(AppLinks || (AppLinks = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"61JyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _httpTransport = require("../utils/HttpTransport");
class BaseAPI {
    constructor(endpoint){
        this.http = new (0, _httpTransport.HTTPTransport)(endpoint);
    }
}
exports.default = BaseAPI;

},{"../utils/HttpTransport":"cuRjm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3NHNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Routes", ()=>Routes);
parcelHelpers.export(exports, "Route", ()=>Route);
parcelHelpers.export(exports, "Router", ()=>Router);
var _trim = require("../utils/trim");
let Routes;
(function(Routes) {
    Routes["SignInPage"] = "sign-in";
    Routes["SignUpPage"] = "sign-up";
    Routes["Chat"] = "chat";
    Routes["EditProfilePage"] = "edit-profile";
    Routes["EditPasswordPage"] = "edit-password";
    Routes["Profile"] = "profile";
    Routes["NotFoundPage"] = "not-found";
    Routes["ServerError"] = "server-error";
})(Routes || (Routes = {}));
function render(query, block) {
    const root = document.querySelector(query);
    if (root === null) throw new Error(`root not found by selector "${query}"`);
    root.innerHTML = "";
    root.append(block.getContent());
    block.dispatchComponentDidMount();
    return root;
}
class Route {
    block = null;
    constructor(pathname, view, props, query){
        this.pathName = pathname;
        this.blockClass = view;
        this.props = props;
        this.query = query;
    }
    navigate(pathName) {
        if (this.match(pathName)) {
            this.pathName = pathName;
            this.render();
        }
    }
    leave() {
        this.block = null;
    }
    match(pathname) {
        return pathname === this.pathName;
    }
    render() {
        if (!this.block) {
            this.block = new this.blockClass(this.props);
            render(this.query, this.block);
            return;
        }
        render(this.query, this.block);
    }
}
class Router {
    constructor(query){
        this.query = query;
        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
        if (Router.instance) return Router.instance;
        Router.instance = this;
        this.query = query;
    }
    use(path, block, props) {
        const route = new Route(path, block, props, this.query);
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = (event)=>{
            const target = event.currentTarget;
            const pathName = target.location.pathname === "/" ? Routes.SignInPage : (0, _trim.trim)(target.location.pathname, "/");
            this.onRoute(pathName);
        };
    }
    onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            this.go(Routes.NotFoundPage);
            return;
        }
        if (this.currentRoute) this.currentRoute.leave();
        route.render();
    }
    getRoute(pathname) {
        return this.routes.find((route)=>route.match(pathname)) ?? null;
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this.onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    replace(newRoute) {
        this.history.replaceState({}, "", newRoute);
        this.onRoute(newRoute);
    }
    getCurrentPathName() {
        return (0, _trim.trim)(window.location.pathname, "/");
    }
}
exports.default = new Router("#app");

},{"../utils/trim":"f1Krc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1Krc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trim", ()=>trim);
function trim(value, chars) {
    if (chars === undefined) return value.trim();
    return value.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, "gm"), "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euxgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreEvents", ()=>StoreEvents);
var _eventBus = require("./EventBus");
var _set = require("./set");
var _setDefault = parcelHelpers.interopDefault(_set);
let StoreEvents;
(function(StoreEvents) {
    StoreEvents["Updated"] = "updated";
})(StoreEvents || (StoreEvents = {}));
class Store extends (0, _eventBus.EventBus) {
    constructor(initialState){
        super();
        this.state = initialState;
    }
    getState() {
        return this.state;
    }
    set(path, value) {
        (0, _setDefault.default)(this.state, path, value);
        this.emit(StoreEvents.Updated, this.state);
    }
}
const store = new Store({});
exports.default = store;

},{"./EventBus":"iVvKU","./set":"5RfbO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVvKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventBus", ()=>EventBus);
class EventBus {
    listeners = {};
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event]?.push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Несуществующее событие: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach((listener)=>{
            listener(...args);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RfbO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function merge(lhs, rhs) {
    for(const p in rhs){
        if (!rhs.hasOwnProperty(p)) continue;
        try {
            if (rhs[p].constructor === Object) rhs[p] = merge(lhs[p], rhs[p]);
            else lhs[p] = rhs[p];
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }
    return lhs;
}
function set(object, path, value) {
    if (typeof object !== "object" || object === null) return object;
    if (typeof path !== "string") throw new Error("path must be string");
    const result = path.split(".").reduceRight((acc, key)=>({
            [key]: acc
        }), value);
    return merge(object, result);
}
exports.default = set;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"031LW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesController", ()=>MessagesController);
var _chatsApi = require("../api/ChatsApi");
var _constants = require("../api/constants");
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _wstransport = require("../utils/WSTransport");
class MessagesController {
    sockets = new Map();
    static controller = new MessagesController();
    chatsApi = new (0, _chatsApi.ChatsApi)();
    constructor(){
        return MessagesController.controller;
    }
    static closeAll() {
        this.controller.sockets.forEach((socket)=>{
            socket.close();
        });
    }
    async connect(id, token) {
        if (this.sockets.get(id)) return;
        const userId = (0, _storeDefault.default).getState().user?.id;
        const transport = new (0, _wstransport.WSTransport)(`${(0, _constants.AppLinks).WSURL}/${userId}/${id}/${token}`);
        await transport.connect();
        this.subscribe(transport, id);
        this.sockets.set(id, transport);
    }
    async sendMessage(id, message) {
        const transport = await this.getTransport(id);
        const dto = {
            content: message,
            type: "message"
        };
        transport.send(dto);
    }
    /**
   * @id
   * Chat id
   * @offset
   * count of message starting from which 10 previous messages will be returned. Messages count starts from 0.
   */ async fetchOldMessages(id, offset) {
        const transport = await this.getTransport(id);
        const dto = {
            type: "get old",
            content: offset
        };
        transport.send(dto);
    }
    onMessage(id, messages) {
        if (!Array.isArray(messages) && messages.type !== "message") return;
        const storeKey = `messages.${id}`;
        const allOldMessages = (0, _storeDefault.default).getState().messages;
        const oldMessages = allOldMessages && allOldMessages[id];
        if (!oldMessages) {
            (0, _storeDefault.default).set(storeKey, Array.isArray(messages) ? messages.reverse() : [
                messages
            ]);
            return;
        }
        if (Array.isArray(messages)) {
            (0, _storeDefault.default).set(storeKey, [
                ...oldMessages,
                ...messages
            ]);
            return;
        }
        (0, _storeDefault.default).set(storeKey, [
            ...oldMessages,
            messages
        ]);
    }
    async getTransport(id) {
        const transport = this.sockets.get(id);
        if (!transport) {
            const { token  } = await this.chatsApi.getToken(id);
            await this.connect(id, token);
            return this.getTransport(id);
        }
        return transport;
    }
    onClose(id) {
        this.sockets.delete(id);
    }
    subscribe(transport, id) {
        transport.on((0, _wstransport.WSTransportEvents).Message, (message)=>this.onMessage(id, message));
        transport.on((0, _wstransport.WSTransportEvents).Close, ()=>this.onClose(id));
    }
}

},{"../api/ChatsApi":"cxAZB","../api/constants":"g5L3l","../utils/Store":"euxgo","../utils/WSTransport":"jqDgG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxAZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsApi", ()=>ChatsApi);
var _fetch = require("../utils/Fetch");
var _httpTransport = require("../utils/HttpTransport");
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class ChatsApi extends (0, _baseApiDefault.default) {
    constructor(){
        super("/chats");
    }
    update = undefined;
    create(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "", {
            method: (0, _httpTransport.METHODS).POST,
            retries: 1,
            data
        });
    }
    read(dto) {
        return (0, _fetch.fetchWithRetry)(this.http, "", {
            method: (0, _httpTransport.METHODS).GET,
            retries: 1,
            data: dto
        });
    }
    delete(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "", {
            method: (0, _httpTransport.METHODS).DELETE,
            retries: 1,
            data
        });
    }
    addUser(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "/users", {
            method: (0, _httpTransport.METHODS).PUT,
            retries: 1,
            data
        });
    }
    deleteUser(userId, chatId) {
        return (0, _fetch.fetchWithRetry)(this.http, "/users", {
            method: (0, _httpTransport.METHODS).DELETE,
            retries: 1,
            data: {
                users: [
                    userId
                ],
                chatId
            }
        });
    }
    getToken(id) {
        return (0, _fetch.fetchWithRetry)(this.http, `/token/${id}`, {
            method: (0, _httpTransport.METHODS).POST,
            retries: 1
        });
    }
    editAvatar(avatar) {
        return (0, _fetch.fetchWithRetry)(this.http, "/avatar", {
            method: (0, _httpTransport.METHODS).PUT,
            retries: 1,
            data: avatar
        });
    }
}

},{"../utils/Fetch":"aeYEP","../utils/HttpTransport":"cuRjm","./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqDgG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WSTransportEvents", ()=>WSTransportEvents);
parcelHelpers.export(exports, "WSTransport", ()=>WSTransport);
var _eventBus = require("./EventBus");
let WSTransportEvents;
(function(WSTransportEvents) {
    WSTransportEvents["Connected"] = "connected";
    WSTransportEvents["Error"] = "error";
    WSTransportEvents["Message"] = "message";
    WSTransportEvents["Close"] = "close";
})(WSTransportEvents || (WSTransportEvents = {}));
class WSTransport extends (0, _eventBus.EventBus) {
    constructor(url){
        super();
        this.url = url;
        this.socket = null;
    }
    connect() {
        this.socket = new WebSocket(this.url);
        this.subscribe(this.socket);
        return new Promise((resolve)=>{
            this.on(WSTransportEvents.Connected, ()=>{
                this.setupPing();
                resolve();
            });
        });
    }
    send(data) {
        if (!this.socket) throw new Error("Socket is not connected");
        this.socket.send(JSON.stringify(data));
    }
    close() {
        this.socket?.close();
    }
    setupPing() {
        this.pingInterval = setInterval(()=>this.send({
                type: "ping"
            }), 5000);
        this.on(WSTransportEvents.Close, ()=>clearInterval(this.pingInterval));
    }
    subscribe(socket) {
        socket.addEventListener("open", ()=>{
            this.emit(WSTransportEvents.Connected);
        });
        socket.addEventListener("close", ()=>{
            this.emit(WSTransportEvents.Close);
        });
        socket.addEventListener("error", (e)=>{
            this.emit(WSTransportEvents.Error, e);
        });
        socket.addEventListener("message", (message)=>{
            const data = JSON.parse(message.data);
            if (!Array.isArray(data) && data.type && (data.type === "ping" || data.type === "pong")) return;
            this.emit(WSTransportEvents.Message, data);
        });
    }
}

},{"./EventBus":"iVvKU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SJDk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chat = require("../../components/Chat/Chat");
var _chatDefault = parcelHelpers.interopDefault(_chat);
var _chatsList = require("../../components/ChatsList/ChatsList");
var _chatsListDefault = parcelHelpers.interopDefault(_chatsList);
var _block = require("../../utils/Block");
var _chatPageHbs = require("./ChatPage.hbs");
var _chatPageHbsDefault = parcelHelpers.interopDefault(_chatPageHbs);
class ChatPage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    async init() {
        this.children.Chat = new (0, _chatDefault.default)({});
        this.children.MessagesList = new (0, _chatsListDefault.default)({});
    }
    render() {
        return this.compile((0, _chatPageHbsDefault.default), this.children);
    }
}
exports.default = ChatPage;

},{"../../components/Chat/Chat":"9fr68","../../components/ChatsList/ChatsList":"7rfXc","../../utils/Block":"915bj","./ChatPage.hbs":"gzrlb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fr68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chatsController = require("../../controllers/ChatsController");
var _messagesController = require("../../controllers/MessagesController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _block = require("../../utils/Block");
var _isEqual = require("../../utils/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _modalsSwitcher = require("../../utils/modalsSwitcher");
var _button = require("../Button/Button");
var _chatMessage = require("../ChatMessage/ChatMessage");
var _chatMessageInput = require("../ChatMessageInput/ChatMessageInput");
var _chatSettings = require("../ChatSettings/ChatSettings");
var _dotsForButton = require("../ChatSettings/DotsForButton");
var _utils = require("../ChatSettings/utils");
var _chatHbs = require("./Chat.hbs");
var _chatHbsDefault = parcelHelpers.interopDefault(_chatHbs);
class Chat extends (0, _block.Block) {
    constructor(props){
        super({
            ...props,
            Modal: null,
            areSettingsOpen: false
        });
    }
    init() {
        this.children.ChatSettings = new (0, _chatSettings.ChatSettings)({
            isOpen: false,
            buttons: (0, _utils.getButtonsForNotSelectedChat)({
                clickCreateChat: ()=>this.props.Modal = "create-chat"
            }),
            openBtn: new (0, _button.Button)({
                label: "",
                noValidation: true,
                stylesType: (0, _button.ButtonStyleTypes).Custom,
                styles: "chatSettings__settingsBtn",
                child: new (0, _dotsForButton.DotsForButton)(),
                events: {
                    click: ()=>this.props.areSettingsOpen = !this.props.areSettingsOpen
                }
            })
        });
        this.children.ChatMessageInput = new (0, _chatMessageInput.ChatMessageInput)({
            sendMessage: (message)=>{
                if (this.props.chatId) this.props.messagesController.sendMessage(this.props.chatId, message);
            }
        });
    }
    closeModal() {
        this.props.Modal = null;
    }
    componentDidUpdate(oldProps, newProps) {
        if (oldProps.Modal !== newProps.Modal) {
            this.props.areSettingsOpen = false;
            if (this.props.chatId) {
                const modal = (0, _modalsSwitcher.modalsSwitcher)(this.closeModal.bind(this), this.props.chatId, this.props.chatsController, newProps.Modal);
                if (modal) modal.dispatchComponentDidMount();
                this.children.Modal = modal;
            }
        }
        if (oldProps.areSettingsOpen !== newProps.areSettingsOpen) {
            const chatSettings = this.children.ChatSettings;
            chatSettings.props.isOpen = !!newProps.areSettingsOpen;
        }
        if (oldProps.isChatSelected !== newProps.isChatSelected) {
            if (newProps.isChatSelected) {
                this.children.ChatSettings = new (0, _chatSettings.ChatSettings)({
                    isOpen: false,
                    buttons: (0, _utils.getButtonsForSelectedChat)({
                        clickDeleteChat: ()=>this.props.Modal = "delete-chat",
                        clickAddUser: ()=>this.props.Modal = "add-user",
                        clickDeleteUser: ()=>this.props.Modal = "delete-user",
                        clickEditAvatar: ()=>this.props.Modal = "change-avatar"
                    }),
                    openBtn: new (0, _button.Button)({
                        label: "",
                        noValidation: true,
                        stylesType: (0, _button.ButtonStyleTypes).Custom,
                        styles: "chatSettings__settingsBtn",
                        child: new (0, _dotsForButton.DotsForButton)(),
                        events: {
                            click: ()=>this.props.areSettingsOpen = !this.props.areSettingsOpen
                        }
                    })
                });
                this.renderMessages();
            } else this.children.ChatSettings = new (0, _chatSettings.ChatSettings)({
                isOpen: false,
                buttons: (0, _utils.getButtonsForNotSelectedChat)({
                    clickCreateChat: ()=>this.props.Modal = "create-chat"
                }),
                openBtn: new (0, _button.Button)({
                    label: "",
                    noValidation: true,
                    stylesType: (0, _button.ButtonStyleTypes).Custom,
                    styles: "chatSettings__settingsBtn",
                    child: new (0, _dotsForButton.DotsForButton)(),
                    events: {
                        click: ()=>this.props.areSettingsOpen = !this.props.areSettingsOpen
                    }
                })
            });
        }
        if (!(0, _isEqualDefault.default)(oldProps.chatMessages, newProps.chatMessages)) this.renderMessages();
        return !(0, _isEqualDefault.default)(oldProps, newProps);
    }
    renderMessages() {
        this.children.chatMessages = this.props.chatMessages?.map((message)=>{
            const messageDate = new Date(message.time);
            const messageTime = `${messageDate.getHours()}:${messageDate.getMinutes()}`;
            return new (0, _chatMessage.ChatMessage)({
                isMessageSent: message.user_id === this.props.userId,
                messageTime,
                textMessage: message.content
            });
        });
    }
    render() {
        return this.compile((0, _chatHbsDefault.default), this.props);
    }
}
const WithControllers = (0, _withControllers.withControllers)(Chat, {
    chatsController: new (0, _chatsController.ChatsController)(),
    messagesController: new (0, _messagesController.MessagesController)()
});
const mapStateToProps = (state)=>{
    const chatId = state.selectedChat?.id;
    return {
        isChatSelected: state.selectedChat !== undefined,
        chatId: chatId,
        chatMessages: chatId !== undefined && state.messages && chatId in state.messages ? [
            ...state.messages[chatId]
        ] : [],
        userId: state.user?.id,
        chatName: state.selectedChat?.chatName,
        avatarSrc: state.selectedChat?.avatarSrc
    };
};
exports.default = (0, _withStore.withStore)(mapStateToProps)(WithControllers);

},{"../../controllers/ChatsController":"jYChn","../../controllers/MessagesController":"031LW","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../utils/Block":"915bj","../../utils/isEqual":"l7TV5","../../utils/modalsSwitcher":"evEQl","../Button/Button":"87mAs","../ChatMessage/ChatMessage":"cLyXv","../ChatMessageInput/ChatMessageInput":"5OV2J","../ChatSettings/ChatSettings":"7OdUN","../ChatSettings/DotsForButton":"icAOQ","../ChatSettings/utils":"6Pzaf","./Chat.hbs":"6Jqtu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYChn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsController", ()=>ChatsController);
var _chatsApi = require("../api/ChatsApi");
var _usersApi = require("../api/UsersApi");
var _constants = require("../api/constants");
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
class ChatsController {
    constructor(){
        this.chatsApi = new (0, _chatsApi.ChatsApi)();
        this.usersApi = new (0, _usersApi.UsersApi)();
    }
    async getChats(dto) {
        const chats = await this.chatsApi.read(dto);
        const chatsWithTokens = await Promise.all(chats.map(async (chat)=>{
            const token = await this.getToken(chat.id);
            return {
                ...chat,
                token,
                avatar: chat.avatar && (0, _constants.AppLinks).ResourcesUrl + "/" + chat.avatar
            };
        }));
        (0, _storeDefault.default).set("chats", chatsWithTokens);
    }
    async selectChat(id) {
        const chat = (0, _storeDefault.default).getState().chats?.find((c)=>c.id === id);
        if (chat) (0, _storeDefault.default).set("selectedChat", {
            avatarSrc: chat.avatar,
            chatName: chat.title,
            id: id
        });
    }
    async createChat(chatName) {
        await this.chatsApi.create({
            title: chatName
        });
        await this.getChats({
            limit: 50,
            offset: 0
        });
    }
    async getToken(chatId) {
        const response = await this.chatsApi.getToken(chatId);
        return response.token;
    }
    async addUser(userName, chatId) {
        const searchResponse = await this.usersApi.searchUser(userName);
        await this.chatsApi.addUser({
            chatId,
            users: [
                searchResponse[0].id
            ]
        });
    }
    async deleteUser(userName, chatId) {
        const searchResponse = await this.usersApi.searchUser(userName);
        await this.chatsApi.deleteUser(searchResponse[0].id, chatId);
    }
    async editAvatar(avatarDto) {
        const { avatar , id  } = await this.chatsApi.editAvatar(avatarDto);
        const oldChat = (0, _storeDefault.default).getState().chats?.find((chat)=>chat.id === id);
        const notUpdatedChats = (0, _storeDefault.default).getState().chats?.filter((chat)=>chat.id !== id);
        const avatarPath = (0, _constants.AppLinks).ResourcesUrl + avatar;
        if (oldChat && notUpdatedChats) {
            (0, _storeDefault.default).set("selectedChat.avatarSrc", avatarPath);
            const updatedChat = {
                ...oldChat,
                avatar: avatarPath
            };
            const updatedChatsArr = [
                ...notUpdatedChats,
                updatedChat
            ];
            (0, _storeDefault.default).set("chats", updatedChatsArr);
        }
    }
}

},{"../api/ChatsApi":"cxAZB","../api/UsersApi":"eXc69","../api/constants":"g5L3l","../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXc69":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UsersApi", ()=>UsersApi);
var _fetch = require("../utils/Fetch");
var _httpTransport = require("../utils/HttpTransport");
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class UsersApi extends (0, _baseApiDefault.default) {
    constructor(){
        super("/user");
    }
    create = undefined;
    read = undefined;
    delete = undefined;
    update(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "/profile", {
            method: (0, _httpTransport.METHODS).PUT,
            retries: 1,
            data
        });
    }
    searchUser(login) {
        return (0, _fetch.fetchWithRetry)(this.http, "/search", {
            method: (0, _httpTransport.METHODS).POST,
            retries: 1,
            data: {
                login
            }
        });
    }
    editPassword(oldPassword, newPassword) {
        return (0, _fetch.fetchWithRetry)(this.http, "/password", {
            method: (0, _httpTransport.METHODS).PUT,
            retries: 1,
            data: {
                oldPassword,
                newPassword
            }
        });
    }
    editAvatar(data) {
        return (0, _fetch.fetchWithRetry)(this.http, "/profile/avatar", {
            method: (0, _httpTransport.METHODS).PUT,
            retries: 1,
            data
        });
    }
}

},{"../utils/Fetch":"aeYEP","../utils/HttpTransport":"cuRjm","./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Uczt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withControllers", ()=>withControllers);
function withControllers(Component, controllers) {
    return class WithController extends Component {
        constructor(props){
            const additionalProps = Object.entries(controllers).reduce((result, [name, controller])=>{
                result[name] = controller;
                return result;
            }, {});
            super({
                ...props,
                ...additionalProps
            });
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45TSc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withStore", ()=>withStore);
var _isEqual = require("../utils/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
function withStore(mapStateToProps) {
    return function wrap(Component) {
        let previousState;
        return class WithStore extends Component {
            constructor(props){
                previousState = mapStateToProps((0, _storeDefault.default).getState());
                super({
                    ...props,
                    ...previousState
                });
                (0, _storeDefault.default).on((0, _store.StoreEvents).Updated, ()=>{
                    const stateProps = mapStateToProps((0, _storeDefault.default).getState());
                    if (!(0, _isEqualDefault.default)(previousState, stateProps)) {
                        previousState = {
                            ...stateProps
                        };
                        this.setProps({
                            ...stateProps
                        });
                    }
                });
            }
        };
    };
}

},{"../utils/isEqual":"l7TV5","../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7TV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeGuards = require("./typeGuards");
const isNaNCheck = (val)=>{
    return typeof val === "number" && isNaN(val);
};
const isEqual = (a, b)=>{
    if (typeof a !== typeof b) return false;
    if (a === undefined || b === undefined) return a === b;
    const aEntries = Object.entries(a);
    const bEntries = Object.entries(b);
    const isAEmpty = aEntries.length === 0;
    const isBEmpty = bEntries.length === 0;
    const areEmpty = isAEmpty && isBEmpty;
    if (!areEmpty && (isAEmpty || isBEmpty)) return false;
    if (areEmpty) return true;
    if (aEntries.length !== bEntries.length) return false;
    let result = true;
    aEntries.forEach(([key, aValue])=>{
        const castB = b;
        if (!(key in castB)) {
            result = false;
            return;
        }
        const bValue = castB[key];
        if ((0, _typeGuards.isArrayOrObject)(aValue) && (0, _typeGuards.isArrayOrObject)(bValue)) {
            result = isEqual(aValue, bValue);
            return;
        }
        if (aValue !== bValue) result = isNaNCheck(aValue) && isNaNCheck(bValue);
    });
    return result;
};
exports.default = isEqual;

},{"./typeGuards":"fGI5R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGI5R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isArrayOrObject", ()=>isArrayOrObject);
const isObject = (value)=>{
    return typeof value === "object" && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
};
function isArrayOrObject(value) {
    return isObject(value) || Array.isArray(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"915bj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block);
var _eventBus = require("./EventBus");
var _isEqual = require("./isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
let BlockEvents;
(function(BlockEvents) {
    BlockEvents["INIT"] = "init";
    BlockEvents["FLOW_CDM"] = "flow:component-did-mount";
    BlockEvents["FLOW_CDU"] = "flow:component-did-update";
    BlockEvents["FLOW_RENDER"] = "flow:render";
})(BlockEvents || (BlockEvents = {}));
class Block {
    id = Math.random().toString(16).slice(6);
    _element = null;
    constructor(childrenWithProps){
        this.eventBus = new (0, _eventBus.EventBus)();
        this.registerEvents();
        const { props , children  } = this.separatePropsFromChildren(childrenWithProps);
        this.children = children;
        this.props = this.makePropsProxy(props);
        this.eventBus.emit(BlockEvents.INIT);
    }
    separatePropsFromChildren(childrenAndProps) {
        const props = {};
        const children = {};
        Object.entries(childrenAndProps).forEach(([key, value])=>{
            if (Array.isArray(value) && value.length > 0 && value.every((v)=>v instanceof Block)) children[key] = value;
            else if (value instanceof Block) children[key] = value;
            else props[key] = value;
        });
        return {
            props: props,
            children
        };
    }
    _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild;
        if (this._element) this._element.replaceWith(newElement);
        this._element = newElement;
        this.addEvents();
    }
    render() {
        return new DocumentFragment();
    }
    compile(template, context) {
        const contextAndStubs = {
            ...context
        };
        Object.entries(this.children).forEach(([name, component])=>{
            if (component) {
                if (Array.isArray(component)) contextAndStubs[name] = component.map((child)=>`<div data-id="${child.id}"></div>`);
                else contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });
        const html = template(contextAndStubs);
        const temp = document.createElement("template");
        temp.innerHTML = html;
        const replaceStub = (component)=>{
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
            if (!stub) return;
            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component._element);
        };
        Object.entries(this.children).forEach(([_, component])=>{
            if (component) {
                if (Array.isArray(component)) component.forEach(replaceStub);
                else replaceStub(component);
            }
        });
        return temp.content;
    }
    getContent() {
        return this._element;
    }
    setProps(nextProps) {
        if (!nextProps) return;
        Object.assign(this.props, nextProps);
    }
    addEvents() {
        const { events ={}  } = this.props;
        Object.keys(events).forEach((eventName)=>{
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }
    makePropsProxy(props) {
        return new Proxy(props, {
            get (target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target, prop, value)=>{
                const oldTarget = {
                    ...target
                };
                target[prop] = value;
                this.eventBus.emit(BlockEvents.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty () {
                throw new Error("Нет прав");
            }
        });
    }
    _componentDidMount() {
        this.componentDidMount();
    }
    componentDidMount() {}
    dispatchComponentDidMount() {
        this.eventBus.emit(BlockEvents.FLOW_CDM);
        Object.values(this.children).forEach((child)=>{
            if (child) {
                if (Array.isArray(child)) child.forEach((ch)=>ch.dispatchComponentDidMount());
                else child.dispatchComponentDidMount();
            }
        });
    }
    hide() {
        return;
    }
    _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) this.eventBus.emit(BlockEvents.FLOW_RENDER);
    }
    componentDidUpdate(oldProps, newProps) {
        return !(0, _isEqualDefault.default)(oldProps, newProps);
    }
    registerEvents() {
        this.eventBus.on(BlockEvents.INIT, this._init.bind(this));
        this.eventBus.on(BlockEvents.FLOW_RENDER, this._render.bind(this));
        this.eventBus.on(BlockEvents.FLOW_CDM, this._componentDidMount.bind(this));
        this.eventBus.on(BlockEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    _init() {
        this.init();
        this.eventBus.emit(BlockEvents.FLOW_RENDER);
    }
    init() {}
}

},{"./EventBus":"iVvKU","./isEqual":"l7TV5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evEQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modalsSwitcher", ()=>modalsSwitcher);
var _button = require("../components/Button/Button");
var _field = require("../components/Field/Field");
var _fileForm = require("../components/Form/FileForm");
var _form = require("../components/Form/Form");
var _fileInput = require("../components/Input/FileInput");
var _input = require("../components/Input/Input");
var _modal = require("../components/Modal/Modal");
const modalsSwitcher = (onCloseModal, chatId, controller, modalName)=>{
    const loginInput = new (0, _input.Input)({
        name: "login",
        inputStyle: "inputField__input"
    });
    const loginField = new (0, _field.Field)({
        input: loginInput,
        label: "Логин",
        name: "login"
    });
    const addUserForm = new (0, _form.Form)({
        fields: [
            loginField
        ],
        inputs: [
            loginInput
        ],
        submitBtn: new (0, _button.Button)({
            label: "Добавить пользователя",
            stylesType: (0, _button.ButtonStyleTypes).Submit
        }),
        submit: async ({ login  })=>{
            await controller.addUser(login, chatId);
            onCloseModal();
        }
    });
    const deleteUserForm = new (0, _form.Form)({
        fields: [
            loginField
        ],
        inputs: [
            loginInput
        ],
        submitBtn: new (0, _button.Button)({
            label: "Удалить пользователя",
            stylesType: (0, _button.ButtonStyleTypes).Submit
        }),
        submit: async ({ login  })=>{
            await controller.deleteUser(login, chatId);
            onCloseModal();
        }
    });
    const fileInput = new (0, _fileInput.FileInput)({
        type: "file",
        name: "avatar",
        id: "avatar",
        inputStyle: "modal__fileInput"
    });
    const fileField = new (0, _field.Field)({
        input: fileInput,
        label: "Выберите файл",
        name: "avatar",
        labelStyle: "modal__fileInputLabel"
    });
    const fileForm = new (0, _fileForm.FileForm)({
        fields: [
            fileField
        ],
        inputs: [
            fileInput
        ],
        submit: async ({ avatar  })=>{
            if (avatar) {
                const formData = new FormData();
                formData.append("avatar", avatar);
                formData.append("chatId", chatId.toString());
                await controller.editAvatar(formData);
            }
            onCloseModal();
        },
        submitBtn: new (0, _button.Button)({
            label: "Поменять аватар",
            stylesType: (0, _button.ButtonStyleTypes).Submit
        }),
        formClass: "modal__fileForm"
    });
    const createChatInput = new (0, _input.Input)({
        name: "chatName",
        inputStyle: "inputField__input"
    });
    const createChatField = new (0, _field.Field)({
        input: createChatInput,
        label: "Имя чата",
        name: "chatName"
    });
    const createChatForm = new (0, _form.Form)({
        fields: [
            createChatField
        ],
        inputs: [
            createChatInput
        ],
        submit: async ({ chatName  })=>{
            await controller.createChat(chatName);
            onCloseModal();
        },
        submitBtn: new (0, _button.Button)({
            label: "Создать чат",
            stylesType: (0, _button.ButtonStyleTypes).Submit
        }),
        formClass: "modal__fileForm"
    });
    switch(modalName){
        case "delete-chat":
            return new (0, _modal.Modal)({
                isOpen: true,
                content: [
                    new (0, _button.Button)({
                        label: "Подтвердить",
                        stylesType: (0, _button.ButtonStyleTypes).Submit
                    })
                ],
                header: "Удалить?",
                onClose: onCloseModal
            });
        case "add-user":
            return new (0, _modal.Modal)({
                isOpen: true,
                header: "Добавить пользователя",
                content: [
                    addUserForm
                ],
                onClose: onCloseModal
            });
        case "delete-user":
            return new (0, _modal.Modal)({
                isOpen: true,
                header: "Удалить пользователя",
                content: [
                    deleteUserForm
                ],
                onClose: onCloseModal
            });
        case "change-avatar":
            return new (0, _modal.Modal)({
                isOpen: true,
                header: "Поменять аватар",
                content: [
                    fileForm
                ],
                onClose: onCloseModal
            });
        case "create-chat":
            return new (0, _modal.Modal)({
                isOpen: true,
                header: "Создать чат",
                content: [
                    createChatForm
                ],
                onClose: onCloseModal
            });
        default:
            return undefined;
    }
};

},{"../components/Button/Button":"87mAs","../components/Field/Field":"cBUi8","../components/Form/FileForm":"d4wUu","../components/Form/Form":"alKuf","../components/Input/FileInput":"4RYz3","../components/Input/Input":"dakFV","../components/Modal/Modal":"9U34L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87mAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonStyleTypes", ()=>ButtonStyleTypes);
parcelHelpers.export(exports, "Button", ()=>Button);
var _block = require("../../utils/Block");
var _buttonHbs = require("./Button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
let ButtonStyleTypes;
(function(ButtonStyleTypes) {
    ButtonStyleTypes["Submit"] = "submit";
    ButtonStyleTypes["Attachment"] = "attachment";
    ButtonStyleTypes["Custom"] = "custom";
})(ButtonStyleTypes || (ButtonStyleTypes = {}));
class Button extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _buttonHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./Button.hbs":"7Bx6l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Bx6l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "  <button type='" + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 16
                },
                "end": {
                    "line": 2,
                    "column": 24
                }
            }
        }) : helper)) + "' class='button__button button__button_type_" + alias4((helper = (helper = lookupProperty(helpers, "stylesType") || (depth0 != null ? lookupProperty(depth0, "stylesType") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "stylesType",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 68
                },
                "end": {
                    "line": 2,
                    "column": 82
                }
            }
        }) : helper)) + " " + alias4((helper = (helper = lookupProperty(helpers, "styles") || (depth0 != null ? lookupProperty(depth0, "styles") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "styles",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 83
                },
                "end": {
                    "line": 2,
                    "column": 93
                }
            }
        }) : helper)) + "'>\r\n    " + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 13
                }
            }
        }) : helper)) + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "child") || (depth0 != null ? lookupProperty(depth0, "child") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "child",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  </button>\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "  <div class='button " + alias4((helper = (helper = lookupProperty(helpers, "containerStyles") || (depth0 != null ? lookupProperty(depth0, "containerStyles") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "containerStyles",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 21
                },
                "end": {
                    "line": 7,
                    "column": 40
                }
            }
        }) : helper)) + "'>\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "actionError") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(4, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 4
                },
                "end": {
                    "line": 10,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "    <button\r\n      type='" + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 12
                },
                "end": {
                    "line": 12,
                    "column": 20
                }
            }
        }) : helper)) + "'\r\n      class='button__button button__button_type_" + alias4((helper = (helper = lookupProperty(helpers, "stylesType") || (depth0 != null ? lookupProperty(depth0, "stylesType") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "stylesType",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 48
                },
                "end": {
                    "line": 13,
                    "column": 62
                }
            }
        }) : helper)) + " " + alias4((helper = (helper = lookupProperty(helpers, "styles") || (depth0 != null ? lookupProperty(depth0, "styles") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "styles",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 63
                },
                "end": {
                    "line": 13,
                    "column": 73
                }
            }
        }) : helper)) + "'\r\n    >" + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 5
                },
                "end": {
                    "line": 14,
                    "column": 14
                }
            }
        }) : helper)) + "</button>\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "validationError") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(6, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 4
                },
                "end": {
                    "line": 17,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "  </div>\r\n";
    },
    "4": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "      <p class='button__error'>" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "actionError") || (depth0 != null ? lookupProperty(depth0, "actionError") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "actionError",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 31
                },
                "end": {
                    "line": 9,
                    "column": 46
                }
            }
        }) : helper)) + "</p>\r\n";
    },
    "6": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "      <p class='button__error'>" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "validationError") || (depth0 != null ? lookupProperty(depth0, "validationError") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "validationError",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 31
                },
                "end": {
                    "line": 16,
                    "column": 50
                }
            }
        }) : helper)) + "</p>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "noValidation") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(3, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 19,
                    "column": 7
                }
            }
        })) != null ? stack1 : "";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7ZpO":[function(require,module,exports) {
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(3);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(36);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(5);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(37);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(43);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2["default"](inst);
            inst["default"] = inst;
            exports["default"] = inst;
            module1.exports = exports["default"];
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) return obj;
                else {
                    var newObj = {};
                    if (obj != null) {
                        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            };
            exports.__esModule = true;
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };
            exports.__esModule = true;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(9);
            var _decorators = __webpack_require__(29);
            var _logger = __webpack_require__(31);
            var _logger2 = _interopRequireDefault(_logger);
            var _internalProtoAccess = __webpack_require__(32);
            var VERSION = "4.7.7";
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 8;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = "[object Object]";
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
                    else {
                        if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2["default"].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2["default"];
        /***/ },
        /* 4 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj /* , ...source */ ) {
                for(var i = 1; i < arguments.length; i++){
                    for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */ var isFunction = function isFunction(value) {
                return typeof value === "function";
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
                return typeof value === "function" && toString.call(value) === "[object Function]";
            };
            exports.isFunction = isFunction;
            /* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for(var i = 0, len = array.length; i < len; i++){
                    if (array[i] === value) return i;
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== "string") {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) return string.toHTML();
                    else if (string == null) return "";
                    else if (!string) return string + "";
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = "" + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) return true;
                else if (isArray(value) && value.length === 0) return true;
                else return false;
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
            }
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$defineProperty = __webpack_require__(6)["default"];
            exports.__esModule = true;
            var errorProps = [
                "description",
                "fileName",
                "lineNumber",
                "endLineNumber",
                "message",
                "name",
                "number",
                "stack"
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
                if (loc) {
                    line = loc.start.line;
                    endLineNumber = loc.end.line;
                    column = loc.start.column;
                    endColumn = loc.end.column;
                    message += " - " + line + ":" + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
                /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
                try {
                    if (loc) {
                        this.lineNumber = line;
                        this.endLineNumber = endLineNumber;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */ if (_Object$defineProperty) {
                            Object.defineProperty(this, "column", {
                                value: column,
                                enumerable: true
                            });
                            Object.defineProperty(this, "endColumn", {
                                value: endColumn,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                            this.endColumn = endColumn;
                        }
                    }
                } catch (nop) {
                /* Ignore if the browser is very particular */ }
            }
            Exception.prototype = new Error();
            exports["default"] = Exception;
            module1.exports = exports["default"];
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(7),
                __esModule: true
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
            };
        /***/ },
        /* 8 */ /***/ function(module1, exports) {
            var $Object = Object;
            module1.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: ({}).propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            };
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            exports.moveHelperToHooks = moveHelperToHooks;
            var _helpersBlockHelperMissing = __webpack_require__(10);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(11);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(24);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(25);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(26);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(27);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(28);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance);
            }
            function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                    instance.hooks[helperName] = instance.helpers[helperName];
                    if (!keepHelper) delete instance.helpers[helperName];
                }
            }
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) return fn(this);
                    else if (context === false || context == null) return inverse(this);
                    else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) options.ids = [
                                options.name
                            ];
                            return instance.helpers.each(context, options);
                        } else return inverse(this);
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            };
                        }
                        return fn(context, options);
                    }
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                var _Object$keys = __webpack_require__(12)["default"];
                var _interopRequireDefault = __webpack_require__(2)["default"];
                exports.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports["default"] = function(instance) {
                    instance.registerHelper("each", function(context, options) {
                        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
                        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
                        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
                        if (_utils.isFunction(context)) context = context.call(this);
                        if (options.data) data = _utils.createFrame(options.data);
                        function execIteration(field, index, last) {
                            if (data) {
                                data.key = field;
                                data.index = index;
                                data.first = index === 0;
                                data.last = !!last;
                                if (contextPath) data.contextPath = contextPath + field;
                            }
                            ret = ret + fn(context[field], {
                                data: data,
                                blockParams: _utils.blockParams([
                                    context[field],
                                    field
                                ], [
                                    contextPath + field,
                                    null
                                ])
                            });
                        }
                        if (context && typeof context === "object") {
                            if (_utils.isArray(context)) {
                                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
                            } else if (global.Symbol && context[global.Symbol.iterator]) {
                                var newContext = [];
                                var iterator = context[global.Symbol.iterator]();
                                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                                context = newContext;
                                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
                            } else (function() {
                                var priorKey = undefined;
                                _Object$keys(context).forEach(function(key) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                                    priorKey = key;
                                    i++;
                                });
                                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
                            })();
                        }
                        if (i === 0) ret = inverse(this);
                        return ret;
                    });
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(13),
                __esModule: true
            };
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(14);
            module1.exports = __webpack_require__(20).Object.keys;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(15);
            __webpack_require__(17)("keys", function($keys) {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /* 16 */ /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), "Object", exp);
            };
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && key in target;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(param) {
                            return this instanceof C ? new C(param) : C(param);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            module1.exports = $export;
        /***/ },
        /* 19 */ /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
        /***/ },
        /* 20 */ /***/ function(module1, exports) {
            var core = module1.exports = {
                version: "1.2.6"
            };
            if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(22);
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /* 22 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it;
            };
        /***/ },
        /* 23 */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() /* [args, ]options */ {
                    if (arguments.length === 1) // A missing field in a {{foo}} construct.
                    return undefined;
                    else // Someone is actually trying to call something, blow up.
                    throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
                    if (_utils.isFunction(conditional)) conditional = conditional.call(this);
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
                    else return options.fn(this);
                });
                instance.registerHelper("unless", function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
                    return instance.helpers["if"].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 26 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("log", function() /* message, options */ {
                    var args = [
                        undefined
                    ], options = arguments[arguments.length - 1];
                    for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
                    var level = 1;
                    if (options.hash.level != null) level = options.hash.level;
                    else if (options.data && options.data.level != null) level = options.data.level;
                    args[0] = level;
                    instance.log.apply(instance, args);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 27 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                    if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
                    return obj;
                    return options.lookupProperty(obj, field);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
                    if (_utils.isFunction(context)) context = context.call(this);
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([
                                context
                            ], [
                                data && data.contextPath
                            ])
                        });
                    } else return options.inverse(this);
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(30);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance);
            }
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function(context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret;
                });
            };
            module1.exports = exports["default"];
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var logger = {
                methodMap: [
                    "debug",
                    "info",
                    "warn",
                    "error"
                ],
                level: "info",
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === "string") {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) level = levelMap;
                        else level = parseInt(level, 10);
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        // eslint-disable-next-line no-console
                        if (!console[method]) method = "log";
                        for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };
            exports["default"] = logger;
            module1.exports = exports["default"];
        /***/ },
        /* 32 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            exports.__esModule = true;
            exports.createProtoAccessControl = createProtoAccessControl;
            exports.resultIsAllowed = resultIsAllowed;
            exports.resetLoggedProperties = resetLoggedProperties;
            var _createNewLookupObject = __webpack_require__(35);
            var _logger = __webpack_require__(31);
            var logger = _interopRequireWildcard(_logger);
            var loggedProperties = _Object$create(null);
            function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList["constructor"] = false;
                defaultMethodWhiteList["__defineGetter__"] = false;
                defaultMethodWhiteList["__defineSetter__"] = false;
                defaultMethodWhiteList["__lookupGetter__"] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                // eslint-disable-next-line no-proto
                defaultPropertyWhiteList["__proto__"] = false;
                return {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }
            function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
                else return checkWhiteList(protoAccessControl.properties, propertyName);
            }
            function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
                if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
            }
            function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                    loggedProperties[propertyName] = true;
                    logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
                }
            }
            function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            }
        /***/ },
        /* 33 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(34),
                __esModule: true
            };
        /***/ },
        /* 34 */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module1.exports = function create(P, D) {
                return $.create(P, D);
            };
        /***/ },
        /* 35 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$create = __webpack_require__(33)["default"];
            exports.__esModule = true;
            exports.createNewLookupObject = createNewLookupObject;
            var _utils = __webpack_require__(4);
            /**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */ function createNewLookupObject() {
                for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                return _utils.extend.apply(undefined, [
                    _Object$create(null)
                ].concat(sources));
            }
        /***/ },
        /* 36 */ /***/ function(module1, exports) {
            // Build out our basic SafeString type
            "use strict";
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
            };
            exports["default"] = SafeString;
            module1.exports = exports["default"];
        /***/ },
        /* 37 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _Object$seal = __webpack_require__(38)["default"];
            var _Object$keys = __webpack_require__(12)["default"];
            var _interopRequireWildcard = __webpack_require__(1)["default"];
            var _interopRequireDefault = __webpack_require__(2)["default"];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(3);
            var _helpers = __webpack_require__(9);
            var _internalWrapHelper = __webpack_require__(42);
            var _internalProtoAccess = __webpack_require__(32);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else // Use the embedded version info since the runtime doesn't know about this revision yet
                throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
                if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as pseudo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) options.ids[0] = true;
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var extendedOptions = Utils.extend({}, options, {
                        hooks: this.hooks,
                        protoAccessControl: this.protoAccessControl
                    });
                    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, extendedOptions);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split("\n");
                            for(var i = 0, l = lines.length; i < l; i++){
                                if (!lines[i] && i + 1 === l) break;
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join("\n");
                        }
                        return result;
                    } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                            loc: loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        if (result == null) return result;
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
                        if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
                        return undefined;
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for(var i = 0; i < len; i++){
                            var result = depths[i] && container.lookupProperty(depths[i], name);
                            if (result != null) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === "function" ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + "_d"];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while(value && depth--)value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) obj = Utils.extend({}, common, param);
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: _Object$seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) data = initData(context, data);
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) depths = context != options.depths[0] ? [
                            context
                        ].concat(options.depths) : options.depths;
                        else depths = [
                            context
                        ];
                    }
                    function main(context /*, options*/ ) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function(options) {
                    if (!options.partial) {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        wrapHelpersToPassLookupProperty(mergedHelpers, container);
                        container.helpers = mergedHelpers;
                        if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
                        container.partials = container.mergeIfNeeded(options.partials, env.partials);
                        if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
                        container.hooks = {};
                        container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
                        _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                    } else {
                        container.protoAccessControl = options.protoAccessControl; // internal option
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                        container.hooks = options.hooks;
                    }
                };
                ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
                    if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
                        context
                    ].concat(depths);
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
                        options.blockParams
                    ].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            /**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */ function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === "@partial-block") partial = options.data["partial-block"];
                    else partial = options.partials[options.name];
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context, options) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = true;
                if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) (function() {
                    options.data = _base.createFrame(options.data);
                    // Wrapper function to get access to currentPartialBlock from the closure
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        // Restore the partial-block from the closure for the execution of the block
                        // i.e. the part inside the block of the partial call.
                        options.data = _base.createFrame(options.data);
                        options.data["partial-block"] = currentPartialBlock;
                        return fn(context, options);
                    };
                    if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
                })();
                if (partial === undefined && partialBlock) partial = partialBlock;
                if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
                else if (partial instanceof Function) return partial(context, options);
            }
            function noop() {
                return "";
            }
            function initData(context, data) {
                if (!data || !("root" in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }
            function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                    var helper = mergedHelpers[helperName];
                    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
            }
            function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                    return Utils.extend({
                        lookupProperty: lookupProperty
                    }, options);
                });
            }
        /***/ },
        /* 38 */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = {
                "default": __webpack_require__(39),
                __esModule: true
            };
        /***/ },
        /* 39 */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(40);
            module1.exports = __webpack_require__(20).Object.seal;
        /***/ },
        /* 40 */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(41);
            __webpack_require__(17)("seal", function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(it) : it;
                };
            });
        /***/ },
        /* 41 */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /* 42 */ /***/ function(module1, exports) {
            "use strict";
            exports.__esModule = true;
            exports.wrapHelper = wrapHelper;
            function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
                // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
                return helper;
                var wrapper = function wrapper() /* dynamic arguments */ {
                    var options = arguments[arguments.length - 1];
                    arguments[arguments.length - 1] = transformOptionsFn(options);
                    return helper.apply(this, arguments);
                };
                return wrapper;
            }
        /***/ },
        /* 43 */ /***/ function(module1, exports) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                "use strict";
                exports.__esModule = true;
                exports["default"] = function(Handlebars) {
                    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */ Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
                        return Handlebars;
                    };
                };
                module1.exports = exports["default"];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ }
    ]);
});

},{}],"cBUi8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Field", ()=>Field);
var _block = require("../../utils/Block");
var _fieldHbs = require("./Field.hbs");
var _fieldHbsDefault = parcelHelpers.interopDefault(_fieldHbs);
class Field extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _fieldHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./Field.hbs":"4KFP2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KFP2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class='inputField " + alias4((helper = (helper = lookupProperty(helpers, "inputWrapperStyle") || (depth0 != null ? lookupProperty(depth0, "inputWrapperStyle") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inputWrapperStyle",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 23
                },
                "end": {
                    "line": 1,
                    "column": 44
                }
            }
        }) : helper)) + "'>\r\n  <label for=" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 13
                },
                "end": {
                    "line": 2,
                    "column": 21
                }
            }
        }) : helper)) + " class='inputField__label " + alias4((helper = (helper = lookupProperty(helpers, "labelStyle") || (depth0 != null ? lookupProperty(depth0, "labelStyle") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "labelStyle",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 47
                },
                "end": {
                    "line": 2,
                    "column": 61
                }
            }
        }) : helper)) + "'>" + alias4((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 63
                },
                "end": {
                    "line": 2,
                    "column": 72
                }
            }
        }) : helper)) + "</label>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "input") || (depth0 != null ? lookupProperty(depth0, "input") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "input",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 13
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  <p class='inputField__error " + alias4((helper = (helper = lookupProperty(helpers, "errorStyle") || (depth0 != null ? lookupProperty(depth0, "errorStyle") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "errorStyle",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 30
                },
                "end": {
                    "line": 4,
                    "column": 44
                }
            }
        }) : helper)) + "'>" + alias4((helper = (helper = lookupProperty(helpers, "errorText") || (depth0 != null ? lookupProperty(depth0, "errorText") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "errorText",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 46
                },
                "end": {
                    "line": 4,
                    "column": 59
                }
            }
        }) : helper)) + "</p>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4wUu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileForm", ()=>FileForm);
var _block = require("../../utils/Block");
var _formHbs = require("./Form.hbs");
var _formHbsDefault = parcelHelpers.interopDefault(_formHbs);
class FileForm extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    getValues() {
        const values = {};
        const inputs = this.children.inputs;
        inputs.forEach((i)=>{
            const name = i.props.name;
            values[name] = i.file;
        });
        return values;
    }
    componentDidMount() {
        this.props.events = {
            submit: (e)=>{
                e.preventDefault();
                this.props.submit(this.getValues());
                if (this.props.shouldCleanOnSubmit) this.cleanValues();
            }
        };
        if (!this.props.validationRules) return;
    }
    cleanValues() {
        const inputs = this.children.inputs;
        inputs.forEach((input)=>{
            input.props.value = "";
        });
    }
    render() {
        return this.compile((0, _formHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./Form.hbs":"2joNN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2joNN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "    " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<form action='submit' class='" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "formClass") || (depth0 != null ? lookupProperty(depth0, "formClass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "formClass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 29
                },
                "end": {
                    "line": 1,
                    "column": 42
                }
            }
        }) : helper)) + "' novalidate>\r\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "fields") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "submitBtn") || (depth0 != null ? lookupProperty(depth0, "submitBtn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "submitBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Modal") || (depth0 != null ? lookupProperty(depth0, "Modal") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "Modal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 2
                },
                "end": {
                    "line": 6,
                    "column": 13
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</form>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alKuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
var _block = require("../../utils/Block");
var _eventBus = require("../../utils/EventBus");
var _formHbs = require("./Form.hbs");
var _formHbsDefault = parcelHelpers.interopDefault(_formHbs);
class Form extends (0, _block.Block) {
    constructor(props){
        super(props);
        if (this.props.validationRules) this.validationBus = new (0, _eventBus.EventBus)();
    }
    getValues() {
        const values = {};
        const inputs = this.children.inputs;
        inputs.forEach((i)=>{
            const input = i.getContent();
            const name = input.name;
            values[name] = input.value;
        });
        return values;
    }
    componentDidMount() {
        this.props.events = {
            submit: (e)=>{
                e.preventDefault();
                if (this.validationBus) {
                    this.triggerFormValidation();
                    const fields = this.children.fields;
                    const isFormInValid = fields.some((f)=>f.props.errorText && f.props.errorText !== "");
                    if (isFormInValid) return;
                }
                this.props.submit(this.getValues());
                if (this.props.shouldCleanOnSubmit) this.cleanValues();
            }
        };
        this.subscribeInputsToValidationBus();
        if (!this.props.validationRules) return;
    }
    subscribeInputsToValidationBus() {
        if (this.validationBus) {
            const inputs = this.children.inputs;
            inputs.forEach((input)=>{
                const inputName = input.props.name;
                input.props.events = {
                    blur: (_e)=>{
                        this.triggerInputValidation(inputName, input.value);
                    }
                };
                this.validationBus?.on(inputName, (v)=>this.validationListener(v, inputName));
            });
        }
    }
    triggerInputValidation(inputName, value) {
        if (this.validationBus) this.validationBus.emit(inputName, value);
    }
    triggerFormValidation() {
        const inputs = this.children.inputs;
        inputs.forEach((input)=>{
            if (this.validationBus) {
                const inputName = input.props.name;
                this.validationBus.emit(inputName, input.value);
            }
        });
    }
    validationListener(value, inputName) {
        const listener = this.props.validationRules && this.props.validationRules[inputName];
        if (listener) {
            const errorText = listener(value);
            const fields = this.children.fields;
            const inputFieldArr = fields.filter((field)=>field.props.name === inputName);
            if (!inputFieldArr[0]) throw new Error(`Поле с имененм ${inputName} не зарегистрировано`);
            if (inputFieldArr.length > 1) throw new Error("Имена полей ввода должны быть уникальными");
            const inputField = inputFieldArr[0];
            if (errorText !== null) inputField.props.errorText = errorText;
            if (errorText === null && inputField.props.errorText) inputField.props.errorText = "";
        }
    }
    cleanValues() {
        const inputs = this.children.inputs;
        inputs.forEach((input)=>{
            input.props.value = "";
        });
    }
    render() {
        return this.compile((0, _formHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","../../utils/EventBus":"iVvKU","./Form.hbs":"2joNN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RYz3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileInput", ()=>FileInput);
var _block = require("../../utils/Block");
var _inputHbs = require("./Input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
class FileInput extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    get file() {
        const element = this.getContent();
        return element.files && element.files[0];
    }
    render() {
        return this.compile((0, _inputHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./Input.hbs":"lplLK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lplLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<textarea " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "value") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 10
                },
                "end": {
                    "line": 2,
                    "column": 45
                }
            }
        })) != null ? stack1 : "") + ' class="' + alias4((helper = (helper = lookupProperty(helpers, "inputStyle") || (depth0 != null ? lookupProperty(depth0, "inputStyle") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inputStyle",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 53
                },
                "end": {
                    "line": 2,
                    "column": 67
                }
            }
        }) : helper)) + '" name=' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 74
                },
                "end": {
                    "line": 2,
                    "column": 82
                }
            }
        }) : helper)) + " placeholder=" + alias4((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 95
                },
                "end": {
                    "line": 2,
                    "column": 110
                }
            }
        }) : helper)) + ">\r\n";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "value=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 29
                },
                "end": {
                    "line": 2,
                    "column": 38
                }
            }
        }) : helper));
    },
    "4": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<input type="' + alias4((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 13
                },
                "end": {
                    "line": 4,
                    "column": 21
                }
            }
        }) : helper)) + '" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "value") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 23
                },
                "end": {
                    "line": 4,
                    "column": 58
                }
            }
        })) != null ? stack1 : "") + ' class="' + alias4((helper = (helper = lookupProperty(helpers, "inputStyle") || (depth0 != null ? lookupProperty(depth0, "inputStyle") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inputStyle",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 66
                },
                "end": {
                    "line": 4,
                    "column": 80
                }
            }
        }) : helper)) + '" name=' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 87
                },
                "end": {
                    "line": 4,
                    "column": 95
                }
            }
        }) : helper)) + " " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "id") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 96
                },
                "end": {
                    "line": 4,
                    "column": 122
                }
            }
        })) != null ? stack1 : "") + ">\r\n";
    },
    "5": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "id=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 109
                },
                "end": {
                    "line": 4,
                    "column": 115
                }
            }
        }) : helper));
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "isTextArea") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(4, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 7
                }
            }
        })) != null ? stack1 : "";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dakFV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _block = require("../../utils/Block");
var _inputHbs = require("./Input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
class Input extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    get value() {
        const element = this.getContent();
        return element.value;
    }
    render() {
        return this.compile((0, _inputHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./Input.hbs":"lplLK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9U34L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _block = require("../../utils/Block");
var _button = require("../Button/Button");
var _modalHbs = require("./Modal.hbs");
var _modalHbsDefault = parcelHelpers.interopDefault(_modalHbs);
class Modal extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.CloseBtn = new (0, _button.Button)({
            label: "",
            noValidation: true,
            styles: "closeBtn",
            events: {
                click: this.props.onClose
            }
        });
    }
    render() {
        return this.compile((0, _modalHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","../Button/Button":"87mAs","./Modal.hbs":"7fDvZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fDvZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "      " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class='modalBackground'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "CloseBtn") || (depth0 != null ? lookupProperty(depth0, "CloseBtn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "CloseBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  <div class='modal'>\r\n    <h3 class='modal__header'>" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "header") || (depth0 != null ? lookupProperty(depth0, "header") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "header",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 30
                },
                "end": {
                    "line": 4,
                    "column": 40
                }
            }
        }) : helper)) + "</h3>\r\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "content") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 7,
                    "column": 13
                }
            }
        })) != null ? stack1 : "") + "  </div>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLyXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatMessage", ()=>ChatMessage);
var _messageIsReceivedIconPng = require("../../../static/images/messageIsReceivedIcon.png");
var _messageIsReceivedIconPngDefault = parcelHelpers.interopDefault(_messageIsReceivedIconPng);
var _block = require("../../utils/Block");
var _chatMessageHbs = require("./ChatMessage.hbs");
var _chatMessageHbsDefault = parcelHelpers.interopDefault(_chatMessageHbs);
class ChatMessage extends (0, _block.Block) {
    constructor(props){
        super({
            ...props,
            messageReceivedImgPath: (0, _messageIsReceivedIconPngDefault.default)
        });
    }
    render() {
        return this.compile((0, _chatMessageHbsDefault.default), this.props);
    }
}

},{"../../../static/images/messageIsReceivedIcon.png":"kW2zC","../../utils/Block":"915bj","./ChatMessage.hbs":"eA8hb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kW2zC":[function(require,module,exports) {
module.exports = require("7c068c25d601f238").getBundleURL("7UhFu") + "messageIsReceivedIcon.558d8950.png" + "?" + Date.now();

},{"7c068c25d601f238":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eA8hb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        return '        class="chatMessage chatMessage_type_receivedMessage"\r\n';
    },
    "3": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '        <p class="chatMessage__date">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "messageDate") || (depth0 != null ? lookupProperty(depth0, "messageDate") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "messageDate",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 37
                },
                "end": {
                    "line": 8,
                    "column": 52
                }
            }
        }) : helper)) + "</p>\r\n";
    },
    "5": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "isMessageSent") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(6, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 12
                },
                "end": {
                    "line": 14,
                    "column": 19
                }
            }
        })) != null ? stack1 : "";
    },
    "6": function(container, depth0, helpers, partials, data) {
        return '                class="chatMessage__content chatMessage__content_isMessageSent chatMessage__content_type_img"\r\n';
    },
    "8": function(container, depth0, helpers, partials, data) {
        return '            class="chatMessage__content chatMessage__content_type_img"\r\n';
    },
    "10": function(container, depth0, helpers, partials, data) {
        return '            class="chatMessage__content chatMessage__content_isMessageSent"\r\n';
    },
    "12": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '        <p class="chatMessage__text">\r\n            ' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "textMessage") || (depth0 != null ? lookupProperty(depth0, "textMessage") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "textMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 26,
                    "column": 12
                },
                "end": {
                    "line": 26,
                    "column": 27
                }
            }
        }) : helper)) + "\r\n        </p>\r\n";
    },
    "14": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "            <img\r\n                src=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "imgPath") || (depth0 != null ? lookupProperty(depth0, "imgPath") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "imgPath",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 31,
                    "column": 20
                },
                "end": {
                    "line": 31,
                    "column": 31
                }
            }
        }) : helper)) + '\r\n                alt="Изображение в сообщении"\r\n                class="chatMessage__imgMessage"\r\n            >\r\n';
    },
    "16": function(container, depth0, helpers, partials, data) {
        return '                class="chatMessage__time chatMessage__time_messageContent_img"\r\n';
    },
    "18": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "isMessageDelivered") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(19, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 43,
                    "column": 14
                },
                "end": {
                    "line": 49,
                    "column": 21
                }
            }
        })) != null ? stack1 : "";
    },
    "19": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                <img\r\n                    src=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "messageReceivedImgPath") || (depth0 != null ? lookupProperty(depth0, "messageReceivedImgPath") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "messageReceivedImgPath",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 45,
                    "column": 24
                },
                "end": {
                    "line": 45,
                    "column": 50
                }
            }
        }) : helper)) + '\r\n                    alt="Знак получения сообщения"\r\n                    class="chatMessage__messageIsReceivedIcon"\r\n                >\r\n';
    },
    "21": function(container, depth0, helpers, partials, data) {
        return '                    class="chatMessage__timeSign chatMessage__timeSign_messageContent_img"\r\n';
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div>\r\n<div \r\n" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, depth0 != null ? lookupProperty(depth0, "isMessageSent") : depth0, {
            "name": "unless",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + '    class="chatMessage">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "withDate") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 4
                },
                "end": {
                    "line": 9,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "    <div \r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imgPath") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 8
                },
                "end": {
                    "line": 15,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imgPath") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(8, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 8
                },
                "end": {
                    "line": 18,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isMessageSent") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(10, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 8
                },
                "end": {
                    "line": 21,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + '        class="chatMessage__content"\r\n    >\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "textMessage") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(12, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 24,
                    "column": 8
                },
                "end": {
                    "line": 28,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imgPath") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(14, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 29,
                    "column": 8
                },
                "end": {
                    "line": 35,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "        <div\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imgPath") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(16, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 37,
                    "column": 12
                },
                "end": {
                    "line": 39,
                    "column": 19
                }
            }
        })) != null ? stack1 : "") + '            class="chatMessage__time"\r\n        >\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isMessageSent") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(18, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 42,
                    "column": 12
                },
                "end": {
                    "line": 50,
                    "column": 19
                }
            }
        })) != null ? stack1 : "") + "            <p\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imgPath") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(21, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 52,
                    "column": 16
                },
                "end": {
                    "line": 54,
                    "column": 23
                }
            }
        })) != null ? stack1 : "") + '                class="chatMessage__timeSign"\r\n            >\r\n                ' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "messageTime") || (depth0 != null ? lookupProperty(depth0, "messageTime") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "messageTime",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 57,
                    "column": 16
                },
                "end": {
                    "line": 57,
                    "column": 31
                }
            }
        }) : helper)) + "\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OV2J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatMessageInput", ()=>ChatMessageInput);
var _block = require("../../utils/Block");
var _button = require("../Button/Button");
var _field = require("../Field/Field");
var _form = require("../Form/Form");
var _input = require("../Input/Input");
var _chatMessageInputHbs = require("./ChatMessageInput.hbs");
var _chatMessageInputHbsDefault = parcelHelpers.interopDefault(_chatMessageInputHbs);
let InputNames;
(function(InputNames) {
    InputNames["Message"] = "message";
})(InputNames || (InputNames = {}));
const validator = (v, regExp, errorText)=>{
    const value = v.trim();
    const isValid = regExp.test(value);
    if (isValid) return null;
    return errorText;
};
const validationRules = {
    [InputNames.Message]: (v)=>validator(v, /(.|\s)*\S(.|\s)*/, "Пустое поле недопустимо")
};
class ChatMessageInput extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.AttachmentBtn = new (0, _button.Button)({
            stylesType: (0, _button.ButtonStyleTypes).Attachment,
            label: "",
            noValidation: true
        });
        const input = new (0, _input.Input)({
            isTextArea: true,
            name: "message",
            inputStyle: "newMessage__textArea",
            placeholder: "Сообщение"
        });
        const field = new (0, _field.Field)({
            name: "message",
            label: "",
            input: input,
            errorStyle: "newMessage__errorText",
            labelStyle: "newMessage__inputLabel"
        });
        this.children.Form = new (0, _form.Form)({
            fields: [
                field
            ],
            inputs: [
                input
            ],
            submit: ({ message  })=>{
                this.props.sendMessage(message);
            },
            submitBtn: new (0, _button.Button)({
                label: "→",
                stylesType: (0, _button.ButtonStyleTypes).Submit,
                styles: "newMessage__submitBtn",
                noValidation: true
            }),
            formClass: "newMessage__form",
            validationRules,
            shouldCleanOnSubmit: true
        });
    }
    render() {
        return this.compile((0, _chatMessageInputHbsDefault.default), this.children);
    }
}

},{"../../utils/Block":"915bj","../Button/Button":"87mAs","../Field/Field":"cBUi8","../Form/Form":"alKuf","../Input/Input":"dakFV","./ChatMessageInput.hbs":"2Bug4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Bug4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class='newMessage'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "AttachmentBtn") || (depth0 != null ? lookupProperty(depth0, "AttachmentBtn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "AttachmentBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Form") || (depth0 != null ? lookupProperty(depth0, "Form") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "Form",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 12
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OdUN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatSettings", ()=>ChatSettings);
var _block = require("../../utils/Block");
var _chatSettingsHbs = require("./ChatSettings.hbs");
var _chatSettingsHbsDefault = parcelHelpers.interopDefault(_chatSettingsHbs);
class ChatSettings extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _chatSettingsHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./ChatSettings.hbs":"89ldF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89ldF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        return "class='chatSettings__list chatSettings__list_open'";
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "      <li class='chatSettings__item'>\r\n      " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\r\n    </li>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class='chatSettings'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "openBtn") || (depth0 != null ? lookupProperty(depth0, "openBtn") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "openBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n\r\n  <ul " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isOpen") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 6
                },
                "end": {
                    "line": 4,
                    "column": 77
                }
            }
        })) != null ? stack1 : "") + ' class="chatSettings__list">\r\n' + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "buttons") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 9,
                    "column": 13
                }
            }
        })) != null ? stack1 : "") + "  </ul>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icAOQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DotsForButton", ()=>DotsForButton);
var _block = require("../../utils/Block");
var _dotsForButtonHbs = require("./DotsForButton.hbs");
var _dotsForButtonHbsDefault = parcelHelpers.interopDefault(_dotsForButtonHbs);
class DotsForButton extends (0, _block.Block) {
    constructor(){
        super({});
    }
    render() {
        return this.compile((0, _dotsForButtonHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./DotsForButton.hbs":"1gdmv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gdmv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return "<div class='chatSettings__middleSettingsDot'></div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Pzaf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getButtonsForSelectedChat", ()=>getButtonsForSelectedChat);
parcelHelpers.export(exports, "getButtonsForNotSelectedChat", ()=>getButtonsForNotSelectedChat);
var _button = require("../Button/Button");
const getButtonsForSelectedChat = ({ clickDeleteChat , clickAddUser , clickDeleteUser , clickEditAvatar  })=>[
        new (0, _button.Button)({
            label: "Удалить чат",
            noValidation: true,
            stylesType: (0, _button.ButtonStyleTypes).Custom,
            styles: "chatSettings__actionBtn",
            events: {
                click: clickDeleteChat
            }
        }),
        new (0, _button.Button)({
            label: "Добавить пользователя",
            noValidation: true,
            stylesType: (0, _button.ButtonStyleTypes).Custom,
            styles: "chatSettings__actionBtn",
            events: {
                click: clickAddUser
            }
        }),
        new (0, _button.Button)({
            label: "Удалить пользователя",
            noValidation: true,
            stylesType: (0, _button.ButtonStyleTypes).Custom,
            styles: "chatSettings__actionBtn",
            events: {
                click: clickDeleteUser
            }
        }),
        new (0, _button.Button)({
            label: "Изменить аватар",
            noValidation: true,
            stylesType: (0, _button.ButtonStyleTypes).Custom,
            styles: "chatSettings__actionBtn",
            events: {
                click: clickEditAvatar
            }
        })
    ];
const getButtonsForNotSelectedChat = ({ clickCreateChat  })=>[
        new (0, _button.Button)({
            label: "Создать чат",
            noValidation: true,
            stylesType: (0, _button.ButtonStyleTypes).Custom,
            styles: "chatSettings__actionBtn",
            events: {
                click: clickCreateChat
            }
        })
    ];

},{"../Button/Button":"87mAs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Jqtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '    <div class="chat__head">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "avatarSrc") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(2, data, 0),
            "inverse": container.program(4, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + '            <h2 class="chat__name">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "chatName") || (depth0 != null ? lookupProperty(depth0, "chatName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 35
                },
                "end": {
                    "line": 9,
                    "column": 47
                }
            }
        }) : helper)) + "</h2>\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "ChatSettings") || (depth0 != null ? lookupProperty(depth0, "ChatSettings") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "ChatSettings",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 8
                },
                "end": {
                    "line": 10,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n";
    },
    "2": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '            <img src="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "avatarSrc") || (depth0 != null ? lookupProperty(depth0, "avatarSrc") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "avatarSrc",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 22
                },
                "end": {
                    "line": 5,
                    "column": 35
                }
            }
        }) : helper)) + '" alt="avatar" class="chat__avatar">\r\n';
    },
    "4": function(container, depth0, helpers, partials, data) {
        return '            <div class="chat__avatar chat__avatar_empty"></div>\r\n';
    },
    "6": function(container, depth0, helpers, partials, data) {
        return 'class="chat__messagesWindow"';
    },
    "8": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "chatMessages") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(9, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 12
                },
                "end": {
                    "line": 17,
                    "column": 21
                }
            }
        })) != null ? stack1 : "";
    },
    "9": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "                " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\r\n";
    },
    "11": function(container, depth0, helpers, partials, data) {
        return '            <p class="chat__chooseChatSign">Выберите чат чтобы отправить сообщение</p>\r\n';
    },
    "13": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return (stack1 = (helper = (helper = lookupProperty(helpers, "ChatMessageInput") || (depth0 != null ? lookupProperty(depth0, "ChatMessageInput") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "ChatMessageInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 26
                },
                "end": {
                    "line": 22,
                    "column": 48
                }
            }
        }) : helper)) != null ? stack1 : "";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="chat">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isChatSelected") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 12,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "    <div " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isChatSelected") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(6, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 9
                },
                "end": {
                    "line": 13,
                    "column": 66
                }
            }
        })) != null ? stack1 : "") + ' class="chat__messagesWindow chat__messagesWindow_chatIsNotSelected">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isChatSelected") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(8, data, 0),
            "inverse": container.program(11, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 8
                },
                "end": {
                    "line": 20,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "    </div>\r\n    " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isChatSelected") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(13, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 4
                },
                "end": {
                    "line": 22,
                    "column": 55
                }
            }
        })) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Modal") || (depth0 != null ? lookupProperty(depth0, "Modal") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "Modal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 23,
                    "column": 4
                },
                "end": {
                    "line": 23,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rfXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chatsController = require("../../controllers/ChatsController");
var _messagesController = require("../../controllers/MessagesController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _router = require("../../Router/Router");
var _block = require("../../utils/Block");
var _isEqual = require("../../utils/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _anchorLink = require("../AnchorLink/AnchorLink");
var _chatsListItem = require("../Message/ChatsListItem");
var _chatsListHbs = require("./ChatsList.hbs");
var _chatsListHbsDefault = parcelHelpers.interopDefault(_chatsListHbs);
class ChatsList extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    async init() {
        this.children.ProfileLink = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Профиль >",
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this.props.router.go((0, _router.Routes).Profile);
                }
            },
            styles: "messages__profileLink"
        });
    }
    async componentDidMount() {
        await this.props.chatsController.getChats({
            limit: 50,
            offset: 0
        });
        this.props.chats?.forEach(async (chat)=>{
            await this.props.messagesController.connect(chat.id, chat.token);
        });
    }
    componentDidUpdate(oldProps, newProps) {
        if (!(0, _isEqualDefault.default)(oldProps.lastChatMessages, newProps.lastChatMessages)) {
            this.children.chats = this.createChats();
            return true;
        }
        return !(0, _isEqualDefault.default)(oldProps, newProps);
    }
    render() {
        return this.compile((0, _chatsListHbsDefault.default), {
            ...this.props,
            ...this.children
        });
    }
    createChats() {
        const chatsController = this.props.chatsController;
        const messagesController = this.props.messagesController;
        const props = this.props;
        const listItems = this.props.lastChatMessages?.map((m)=>{
            const ChatsListItem = (0, _chatsListItem.createChatsListItem)();
            return new ChatsListItem({
                ...m,
                events: {
                    async click () {
                        const hasOldMessages = !!props.messages && !!props.messages[m.chatId] && props.messages[m.chatId].length > 0;
                        if (hasOldMessages) {
                            chatsController.selectChat(m.chatId);
                            return;
                        }
                        await messagesController.fetchOldMessages(m.chatId, 0);
                        chatsController.selectChat(m.chatId);
                    }
                }
            });
        });
        return listItems;
    }
}
const mapStateToProps = (state)=>{
    return {
        lastChatMessages: state.chats?.map((c)=>{
            return {
                chatName: c.title,
                message: c.last_message?.content,
                messageDate: c.last_message?.time && new Date(c.last_message?.time).toString(),
                imgSrc: c.avatar,
                unreadMessagesCount: c.unread_count,
                isMessageReceived: c.unread_count === 0,
                isMessageSelected: false,
                chatId: c.id
            };
        }),
        chats: state.chats?.map((c)=>({
                id: c.id,
                token: c.token
            })),
        messages: state.messages
    };
};
const WithControllers = (0, _withControllers.withControllers)(ChatsList, {
    chatsController: new (0, _chatsController.ChatsController)(),
    messagesController: new (0, _messagesController.MessagesController)(),
    router: new (0, _router.Router)("#app")
});
exports.default = (0, _withStore.withStore)(mapStateToProps)(WithControllers);

},{"../../controllers/ChatsController":"jYChn","../../controllers/MessagesController":"031LW","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../Router/Router":"3NHNR","../../utils/Block":"915bj","../../utils/isEqual":"l7TV5","../AnchorLink/AnchorLink":"3ad4H","../Message/ChatsListItem":"1Xryy","./ChatsList.hbs":"izQf0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ad4H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnchorLink", ()=>AnchorLink);
var _block = require("../../utils/Block");
var _anchorLinkHbs = require("./AnchorLink.hbs");
var _anchorLinkHbsDefault = parcelHelpers.interopDefault(_anchorLinkHbs);
class AnchorLink extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _anchorLinkHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./AnchorLink.hbs":"crOTY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crOTY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<a href="' + alias4((helper = (helper = lookupProperty(helpers, "href") || (depth0 != null ? lookupProperty(depth0, "href") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "href",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 9
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            }
        }) : helper)) + '" class="anchorLink ' + alias4((helper = (helper = lookupProperty(helpers, "styles") || (depth0 != null ? lookupProperty(depth0, "styles") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "styles",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 37
                },
                "end": {
                    "line": 1,
                    "column": 47
                }
            }
        }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 49
                },
                "end": {
                    "line": 1,
                    "column": 57
                }
            }
        }) : helper)) + "</a>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xryy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createChatsListItem", ()=>createChatsListItem);
var _withStore = require("../../hocs/withStore");
var _block = require("../../utils/Block");
var _isEqual = require("../../utils/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _chatsListItemHbs = require("./ChatsListItem.hbs");
var _chatsListItemHbsDefault = parcelHelpers.interopDefault(_chatsListItemHbs);
class ChatsListItem extends (0, _block.Block) {
    constructor(props){
        super({
            ...props,
            isMessageSelected: props.chatId === props.selectedChatId
        });
    }
    componentDidUpdate(oldProps, newProps) {
        if (oldProps.selectedChatId !== newProps.selectedChatId) this.props.isMessageSelected = this.props.chatId === newProps.selectedChatId;
        if (newProps.selectedChatAvatar && oldProps.selectedChatAvatar !== newProps.selectedChatAvatar && this.props.isMessageSelected) this.props.imgSrc = newProps.selectedChatAvatar;
        return !(0, _isEqualDefault.default)(oldProps, newProps);
    }
    render() {
        return this.compile((0, _chatsListItemHbsDefault.default), this.props);
    }
}
const mapStateToProps = (state)=>{
    return {
        selectedChatId: state.selectedChat?.id,
        selectedChatAvatar: state.selectedChat?.avatarSrc
    };
};
const createChatsListItem = ()=>(0, _withStore.withStore)(mapStateToProps)(ChatsListItem);

},{"../../hocs/withStore":"45TSc","../../utils/Block":"915bj","../../utils/isEqual":"l7TV5","./ChatsListItem.hbs":"jkF8G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jkF8G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        return 'class="message message_unread"';
    },
    "3": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '            <img src="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "imgSrc") || (depth0 != null ? lookupProperty(depth0, "imgSrc") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "imgSrc",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 22
                },
                "end": {
                    "line": 4,
                    "column": 32
                }
            }
        }) : helper)) + '" alt="avatar" class="message__avatar">\r\n';
    },
    "5": function(container, depth0, helpers, partials, data) {
        return '            <div class="message__avatar message__avatar_empty"></div>\r\n';
    },
    "7": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '            <p class="message__text">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "message") || (depth0 != null ? lookupProperty(depth0, "message") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 37
                },
                "end": {
                    "line": 11,
                    "column": 48
                }
            }
        }) : helper)) + "</p>\r\n";
    },
    "9": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '            <p class="message__text">\r\n                <span class="message__text_highlighted">Вы:&nbsp;</span>\r\n                ' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "message") || (depth0 != null ? lookupProperty(depth0, "message") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 16
                },
                "end": {
                    "line": 15,
                    "column": 27
                }
            }
        }) : helper)) + "\r\n            </p>\r\n";
    },
    "11": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '            <p class="message__unreadCount">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "unreadMessagesCount") || (depth0 != null ? lookupProperty(depth0, "unreadMessagesCount") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "unreadMessagesCount",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 44
                },
                "end": {
                    "line": 19,
                    "column": 67
                }
            }
        }) : helper)) + "</p>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div>\r\n    <li " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isMessageSelected") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 70
                }
            }
        })) != null ? stack1 : "") + ' class="message">\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "imgSrc") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.program(5, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + '        <p class="message__chatName">' + alias4((helper = (helper = lookupProperty(helpers, "chatName") || (depth0 != null ? lookupProperty(depth0, "chatName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 37
                },
                "end": {
                    "line": 8,
                    "column": 49
                }
            }
        }) : helper)) + '</p>\r\n        <p class="message__date">' + alias4((helper = (helper = lookupProperty(helpers, "messageDate") || (depth0 != null ? lookupProperty(depth0, "messageDate") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messageDate",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 33
                },
                "end": {
                    "line": 9,
                    "column": 48
                }
            }
        }) : helper)) + "</p>\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "isMessageReceived") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(7, data, 0),
            "inverse": container.program(9, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 8
                },
                "end": {
                    "line": 17,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "unreadMessagesCount") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(11, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 8
                },
                "end": {
                    "line": 20,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "    </li>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izQf0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1;
        return "      " + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "") + "\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class='messages'>\r\n  <div class='messages__head'>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "ProfileLink") || (depth0 != null ? lookupProperty(depth0, "ProfileLink") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "ProfileLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    <input type='text' class='messages__searchInput' placeholder='Поиск' />\r\n  </div>\r\n  <ul class='messages__list'>\r\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "foundMessages") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 4
                },
                "end": {
                    "line": 9,
                    "column": 13
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "chats") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 4
                },
                "end": {
                    "line": 12,
                    "column": 13
                }
            }
        })) != null ? stack1 : "") + "  </ul>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzrlb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div>\r\n  <main class='mainGrid'>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "MessagesList") || (depth0 != null ? lookupProperty(depth0, "MessagesList") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "MessagesList",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Chat") || (depth0 != null ? lookupProperty(depth0, "Chat") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "Chat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 14
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Modal") || (depth0 != null ? lookupProperty(depth0, "Modal") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "Modal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  </main>\r\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibc2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("../../components/Button/Button");
var _field = require("../../components/Field/Field");
var _form = require("../../components/Form/Form");
var _input = require("../../components/Input/Input");
var _profileAvatar = require("../../components/ProfileAvatar/ProfileAvatar");
var _profileGoBackBtn = require("../../components/ProfileGoBackBtn/ProfileGoBackBtn");
var _authController = require("../../controllers/AuthController");
var _profileController = require("../../controllers/ProfileController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _router = require("../../Router/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _block = require("../../utils/Block");
var _editPasswordPageHbs = require("./EditPasswordPage.hbs");
var _editPasswordPageHbsDefault = parcelHelpers.interopDefault(_editPasswordPageHbs);
let InputNames;
(function(InputNames) {
    InputNames["OldPassword"] = "oldPassword";
    InputNames["NewPassword"] = "newPassword";
    InputNames["NewPasswordAgain"] = "newPasswordAgain";
    InputNames["Login"] = "login";
})(InputNames || (InputNames = {}));
const validator = (v, regExp, errorText)=>{
    const value = v.trim();
    const isValid = regExp.test(value);
    if (isValid) return null;
    return errorText;
};
const validationRules = {
    [InputNames.OldPassword]: (v)=>validator(v, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/, "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"),
    [InputNames.NewPassword]: (v)=>validator(v, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/, "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"),
    [InputNames.NewPasswordAgain]: (v)=>validator(v, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/, "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"),
    [InputNames.Login]: (v)=>validator(v, /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/, "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)")
};
class EditPasswordPage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.GoBackBtn = new (0, _profileGoBackBtn.ProfileGoBackBtn)({
            events: {
                click: ()=>(0, _routerDefault.default).back()
            }
        });
        this.children.AvatarInput = new (0, _profileAvatar.ProfileAvatar)({
            avatarSrc: this.props.avatarSrc
        });
        const oldPasswordInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "password",
            name: InputNames.OldPassword
        });
        const newPasswordInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "password",
            name: InputNames.NewPassword
        });
        const newPasswordAgainInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "password",
            name: InputNames.NewPasswordAgain
        });
        const inputs = [
            oldPasswordInput,
            newPasswordInput,
            newPasswordAgainInput
        ];
        const oldPasswordField = new (0, _field.Field)({
            name: InputNames.OldPassword,
            label: "Старый пароль",
            input: oldPasswordInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const newPasswordField = new (0, _field.Field)({
            name: InputNames.NewPassword,
            label: "Новый пароль",
            input: newPasswordInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const newPasswordAgainField = new (0, _field.Field)({
            name: InputNames.NewPasswordAgain,
            label: "Повторите пароль",
            input: newPasswordAgainInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const fields = [
            oldPasswordField,
            newPasswordField,
            newPasswordAgainField
        ];
        const submitBtn = new (0, _button.Button)({
            label: "Сохранить",
            stylesType: (0, _button.ButtonStyleTypes).Submit,
            styles: "authForm__signUpBtn"
        });
        const pageProps = this.props;
        const submit = async function({ newPassword , oldPassword  }) {
            try {
                await pageProps.profileController.editPassword(oldPassword, newPassword);
                pageProps.authController.logout((0, _router.Routes).SignInPage);
            } catch (error) {
                const e = error;
                const reason = e.reason;
                submitBtn.props.actionError = reason;
            }
        };
        this.children.form = new (0, _form.Form)({
            fields,
            submitBtn,
            submit,
            inputs,
            validationRules,
            formClass: "editProfileForm"
        });
    }
    render() {
        return this.compile((0, _editPasswordPageHbsDefault.default), this.children);
    }
}
const mapStateToProps = (state)=>{
    return {
        avatarSrc: state.user?.avatar
    };
};
const WithProps = (0, _withStore.withStore)(mapStateToProps)(EditPasswordPage);
exports.default = (0, _withControllers.withControllers)(WithProps, {
    profileController: new (0, _profileController.ProfileController)(),
    authController: new (0, _authController.AuthController)()
});

},{"../../components/Button/Button":"87mAs","../../components/Field/Field":"cBUi8","../../components/Form/Form":"alKuf","../../components/Input/Input":"dakFV","../../components/ProfileAvatar/ProfileAvatar":"a7F25","../../components/ProfileGoBackBtn/ProfileGoBackBtn":"lW7En","../../controllers/AuthController":"btuLA","../../controllers/ProfileController":"9Ggrc","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../Router/Router":"3NHNR","../../utils/Block":"915bj","./EditPasswordPage.hbs":"vVw2i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7F25":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileAvatar", ()=>ProfileAvatar);
var _block = require("../../utils/Block");
var _profileAvatarHbs = require("./ProfileAvatar.hbs");
var _profileAvatarHbsDefault = parcelHelpers.interopDefault(_profileAvatarHbs);
class ProfileAvatar extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _profileAvatarHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./ProfileAvatar.hbs":"h6IlL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h6IlL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "    <img src=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "avatarSrc") || (depth0 != null ? lookupProperty(depth0, "avatarSrc") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "avatarSrc",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 13
                },
                "end": {
                    "line": 4,
                    "column": 26
                }
            }
        }) : helper)) + " alt='Аватар' class='profile__avatar' />\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        return "    <div class='profile__avatar profile__avatar_type_tooltip'></div>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class='profile__inputWrapper'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "openModalBtn") || (depth0 != null ? lookupProperty(depth0, "openModalBtn") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
            "name": "openModalBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "avatarSrc") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(3, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 9
                }
            }
        })) != null ? stack1 : "") + "</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW7En":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileGoBackBtn", ()=>ProfileGoBackBtn);
var _block = require("../../utils/Block");
var _profileGoBackBtnHbs = require("./ProfileGoBackBtn.hbs");
var _profileGoBackBtnHbsDefault = parcelHelpers.interopDefault(_profileGoBackBtnHbs);
class ProfileGoBackBtn extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _profileGoBackBtnHbsDefault.default), this.props);
    }
}

},{"../../utils/Block":"915bj","./ProfileGoBackBtn.hbs":"dxLR1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxLR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        return '<button class="profileGoBackBtn"></button>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ggrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileController", ()=>ProfileController);
var _usersApi = require("../api/UsersApi");
var _constants = require("../api/constants");
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
class ProfileController {
    constructor(){
        this.usersApi = new (0, _usersApi.UsersApi)();
    }
    async editProfile(data) {
        const newUserData = await this.usersApi.update(data);
        (0, _storeDefault.default).set("user", newUserData);
    }
    editPassword(oldPassword, newPassword) {
        return this.usersApi.editPassword(oldPassword, newPassword);
    }
    async editAvatar(avatar) {
        const newUserData = await this.usersApi.editAvatar(avatar);
        newUserData.avatar = (0, _constants.AppLinks).ResourcesUrl + newUserData.avatar;
        (0, _storeDefault.default).set("user", newUserData);
    }
}

},{"../api/UsersApi":"eXc69","../api/constants":"g5L3l","../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vVw2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<main class='profile'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "GoBackBtn") || (depth0 != null ? lookupProperty(depth0, "GoBackBtn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "GoBackBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  <div class='profile__content'>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "AvatarInput") || (depth0 != null ? lookupProperty(depth0, "AvatarInput") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "AvatarInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "form") || (depth0 != null ? lookupProperty(depth0, "form") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "form",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 14
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  </div>\r\n</main>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7R3ps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EditProfilePage", ()=>EditProfilePage);
var _button = require("../../components/Button/Button");
var _field = require("../../components/Field/Field");
var _fileForm = require("../../components/Form/FileForm");
var _form = require("../../components/Form/Form");
var _fileInput = require("../../components/Input/FileInput");
var _input = require("../../components/Input/Input");
var _modal = require("../../components/Modal/Modal");
var _profileAvatar = require("../../components/ProfileAvatar/ProfileAvatar");
var _profileGoBackBtn = require("../../components/ProfileGoBackBtn/ProfileGoBackBtn");
var _profileController = require("../../controllers/ProfileController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _router = require("../../Router/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _block = require("../../utils/Block");
var _isEqual = require("../../utils/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _editProfilePageHbs = require("./EditProfilePage.hbs");
var _editProfilePageHbsDefault = parcelHelpers.interopDefault(_editProfilePageHbs);
let InputNames;
(function(InputNames) {
    InputNames["Name"] = "first_name";
    InputNames["Surname"] = "second_name";
    InputNames["Login"] = "login";
    InputNames["Email"] = "email";
    InputNames["Phone"] = "phone";
})(InputNames || (InputNames = {}));
const validator = (v, regExp, errorText)=>{
    const value = v.trim();
    const isValid = regExp.test(value);
    if (isValid) return null;
    return errorText;
};
const validationRules = {
    [InputNames.Name]: (v)=>validator(v, /^[A-ZА-Я][\p{L}]*$/u, "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов"),
    [InputNames.Surname]: (v)=>validator(v, /^[A-ZА-Я][\p{L}]*$/u, "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов"),
    [InputNames.Login]: (v)=>validator(v, /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/, "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)"),
    [InputNames.Email]: (v)=>validator(v, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть \xabсобака\xbb (@) и точка после неё, но перед точкой обязательно должны быть буквы"),
    [InputNames.Phone]: (v)=>validator(v, /^\+?[0-9]{10,15}$/, "От 10 до 15 символов, состоит из цифр, может начинается с плюса")
};
class EditProfilePage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.GoBackBtn = new (0, _profileGoBackBtn.ProfileGoBackBtn)({
            events: {
                click: ()=>(0, _routerDefault.default).back()
            }
        });
        this.renderForm();
    }
    componentDidUpdate(oldProps, newProps) {
        if (!(0, _isEqualDefault.default)(oldProps.user, newProps.user)) {
            this.renderForm();
            return true;
        }
        return !(0, _isEqualDefault.default)(oldProps, newProps);
    }
    closeModal() {
        this.children.AvatarModal = undefined;
        this.props.isModalOpen = false;
    }
    async submitAvatar(avatar) {
        const formData = new FormData();
        formData.append("avatar", avatar);
        await this.props.profileController.editAvatar(formData);
    }
    renderModal() {
        const fileInput = new (0, _fileInput.FileInput)({
            type: "file",
            name: "avatar",
            id: "avatar",
            inputStyle: "modal__fileInput"
        });
        const fileField = new (0, _field.Field)({
            input: fileInput,
            label: "Выберите файл",
            name: "avatar",
            labelStyle: "modal__fileInputLabel"
        });
        const fileForm = new (0, _fileForm.FileForm)({
            fields: [
                fileField
            ],
            inputs: [
                fileInput
            ],
            submit: async ({ avatar  })=>{
                if (avatar) await this.submitAvatar(avatar);
            },
            submitBtn: new (0, _button.Button)({
                label: "Поменять аватар",
                stylesType: (0, _button.ButtonStyleTypes).Submit,
                type: "submit"
            }),
            formClass: "modal__fileForm"
        });
        const modal = new (0, _modal.Modal)({
            content: [
                fileForm
            ],
            header: "Изменить аватар",
            isOpen: true,
            onClose: this.closeModal.bind(this)
        });
        this.children.AvatarModal = modal;
        this.props.isModalOpen = true;
        modal.dispatchComponentDidMount();
    }
    renderForm() {
        const openModal = this.renderModal.bind(this);
        const openModalBtn = new (0, _button.Button)({
            label: "",
            noValidation: true,
            styles: "editProfileForm__openAvatarModal profile__changeAvatarBtn",
            events: {
                click: openModal
            }
        });
        this.children.AvatarInput = new (0, _profileAvatar.ProfileAvatar)({
            openModalBtn,
            avatarSrc: this.props.user?.avatar
        });
        const nameInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "text",
            name: "first_name",
            value: this.props.user?.first_name ?? ""
        });
        const surnameInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "text",
            name: "second_name",
            value: this.props.user?.second_name ?? ""
        });
        const loginInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "text",
            name: "login",
            value: this.props.user?.login ?? ""
        });
        const emailInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "email",
            name: "email",
            value: this.props.user?.email ?? ""
        });
        const phoneInput = new (0, _input.Input)({
            inputStyle: "editProfileForm__input",
            type: "tel",
            name: "phone",
            value: this.props.user?.phone.toString() ?? ""
        });
        const inputs = [
            nameInput,
            surnameInput,
            loginInput,
            emailInput,
            phoneInput
        ];
        const firstNameField = new (0, _field.Field)({
            name: "first_name",
            label: "Имя",
            input: nameInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const secondNameField = new (0, _field.Field)({
            name: "second_name",
            label: "Фамилия",
            input: surnameInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const loginField = new (0, _field.Field)({
            name: "login",
            label: "Логин *",
            input: loginInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const emailField = new (0, _field.Field)({
            name: "email",
            label: "Email *",
            input: emailInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const phoneField = new (0, _field.Field)({
            name: "phone",
            label: "Телефон *",
            input: phoneInput,
            inputWrapperStyle: "editProfileForm__inputWrapper",
            labelStyle: "editProfileForm__inputLabel",
            errorStyle: "editProfileForm__inputError"
        });
        const fields = [
            firstNameField,
            secondNameField,
            loginField,
            emailField,
            phoneField
        ];
        const profileController = this.props.profileController;
        const oldUserData = this.props.user ?? {};
        this.children.Form = new (0, _form.Form)({
            fields,
            submitBtn: new (0, _button.Button)({
                label: "Сохранить",
                stylesType: (0, _button.ButtonStyleTypes).Submit,
                styles: "authForm__signUpBtn"
            }),
            async submit (values) {
                await profileController.editProfile({
                    ...oldUserData,
                    ...values,
                    display_name: oldUserData.display_name ?? ""
                });
            },
            inputs,
            validationRules,
            formClass: "editProfileForm"
        });
        this.children.Form.componentDidMount();
    }
    render() {
        return this.compile((0, _editProfilePageHbsDefault.default), this.children);
    }
}
const mapStateToProps = (state)=>{
    return {
        user: state.user
    };
};
const WithStore = (0, _withStore.withStore)(mapStateToProps)(EditProfilePage);
exports.default = (0, _withControllers.withControllers)(WithStore, {
    profileController: new (0, _profileController.ProfileController)()
});

},{"../../components/Button/Button":"87mAs","../../components/Field/Field":"cBUi8","../../components/Form/FileForm":"d4wUu","../../components/Form/Form":"alKuf","../../components/Input/FileInput":"4RYz3","../../components/Input/Input":"dakFV","../../components/Modal/Modal":"9U34L","../../components/ProfileAvatar/ProfileAvatar":"a7F25","../../components/ProfileGoBackBtn/ProfileGoBackBtn":"lW7En","../../controllers/ProfileController":"9Ggrc","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../Router/Router":"3NHNR","../../utils/Block":"915bj","../../utils/isEqual":"l7TV5","./EditProfilePage.hbs":"evfLZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evfLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<main class='profile'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "GoBackBtn") || (depth0 != null ? lookupProperty(depth0, "GoBackBtn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "GoBackBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  <div class='profile__content'>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "AvatarInput") || (depth0 != null ? lookupProperty(depth0, "AvatarInput") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "AvatarInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Form") || (depth0 != null ? lookupProperty(depth0, "Form") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "Form",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 14
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  </div>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "AvatarModal") || (depth0 != null ? lookupProperty(depth0, "AvatarModal") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "AvatarModal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 2
                },
                "end": {
                    "line": 7,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</main>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iCbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorPage", ()=>ErrorPage);
var _anchorLink = require("../../components/AnchorLink/AnchorLink");
var _router = require("../../Router/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _block = require("../../utils/Block");
var _errorPageHbs = require("./ErrorPage.hbs");
var _errorPageHbsDefault = parcelHelpers.interopDefault(_errorPageHbs);
class ErrorPage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.Link = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Назад к чатам",
            events: {
                click (e) {
                    e.preventDefault();
                    (0, _routerDefault.default).go((0, _router.Routes).Chat);
                }
            }
        });
    }
    render() {
        return this.compile((0, _errorPageHbsDefault.default), {
            Link: this.children.Link,
            ...this.props
        });
    }
}

},{"../../components/AnchorLink/AnchorLink":"3ad4H","../../Router/Router":"3NHNR","../../utils/Block":"915bj","./ErrorPage.hbs":"dDf6E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDf6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<main class='errorPage'>\r\n  <h2 class='errorPage__error'>" + alias4((helper = (helper = lookupProperty(helpers, "statusCode") || (depth0 != null ? lookupProperty(depth0, "statusCode") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "statusCode",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 31
                },
                "end": {
                    "line": 2,
                    "column": 45
                }
            }
        }) : helper)) + "</h2>\r\n  <p class='errorPage__text'>" + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 29
                },
                "end": {
                    "line": 3,
                    "column": 37
                }
            }
        }) : helper)) + "</p>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "Link") || (depth0 != null ? lookupProperty(depth0, "Link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "Link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 12
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</main>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsCEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _anchorLink = require("../../components/AnchorLink/AnchorLink");
var _profileGoBackBtn = require("../../components/ProfileGoBackBtn/ProfileGoBackBtn");
var _authController = require("../../controllers/AuthController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _router = require("../../Router/Router");
var _block = require("../../utils/Block");
var _profilePageHbs = require("./ProfilePage.hbs");
var _profilePageHbsDefault = parcelHelpers.interopDefault(_profilePageHbs);
class ProfilePage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        const router = this.props.router;
        const authController = this.props.authController;
        this.children.GoBackBtn = new (0, _profileGoBackBtn.ProfileGoBackBtn)({
            events: {
                click () {
                    router.back();
                }
            }
        });
        this.children.ChangeDataLink = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Изменить данные",
            styles: "profile__link",
            events: {
                click (e) {
                    e.preventDefault();
                    router.go((0, _router.Routes).EditProfilePage);
                }
            }
        });
        this.children.LogoutLink = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Выйти",
            styles: "profile__link",
            events: {
                async click (e) {
                    e.preventDefault();
                    await authController.logout();
                }
            }
        });
        this.children.ChangePasswordLink = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Изменить пароль",
            styles: "profile__link",
            events: {
                click (e) {
                    e.preventDefault();
                    router.go((0, _router.Routes).EditPasswordPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _profilePageHbsDefault.default), {
            ...this.children,
            email: this.props.user?.email,
            login: this.props.user?.login,
            name: this.props.user?.first_name,
            surname: this.props.user?.second_name,
            chatName: "Bla",
            telephone: this.props.user?.phone,
            avatarSrc: this.props.avatarSrc
        });
    }
}
const mapStateToProps = (state)=>{
    return {
        user: state.user,
        avatarSrc: state.user?.avatar
    };
};
const WithControllers = (0, _withControllers.withControllers)(ProfilePage, {
    router: new (0, _router.Router)("#app"),
    authController: new (0, _authController.AuthController)()
});
exports.default = (0, _withStore.withStore)(mapStateToProps)(WithControllers);

},{"../../components/AnchorLink/AnchorLink":"3ad4H","../../components/ProfileGoBackBtn/ProfileGoBackBtn":"lW7En","../../controllers/AuthController":"btuLA","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../Router/Router":"3NHNR","../../utils/Block":"915bj","./ProfilePage.hbs":"dzRiT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzRiT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "      <img src=" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "avatarSrc") || (depth0 != null ? lookupProperty(depth0, "avatarSrc") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "avatarSrc",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 15
                },
                "end": {
                    "line": 5,
                    "column": 28
                }
            }
        }) : helper)) + " alt='Аватар' class='profile__avatar' />\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        return "      <div class='profile__avatar profile__avatar_type_tooltip'></div>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<main class='profile'>\r\n  " + ((stack1 = (helper = (helper = lookupProperty(helpers, "GoBackBtn") || (depth0 != null ? lookupProperty(depth0, "GoBackBtn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "GoBackBtn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  <div class='profile__content'>\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "avatarSrc") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(3, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + "    <h2 class='profile__name'>" + alias4((helper = (helper = lookupProperty(helpers, "profileName") || (depth0 != null ? lookupProperty(depth0, "profileName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "profileName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 30
                },
                "end": {
                    "line": 9,
                    "column": 45
                }
            }
        }) : helper)) + "</h2>\r\n    <div class='profile__lists'>\r\n      <ul class='profile__infoList'>\r\n        <li class='profile__infoListItem'>\r\n          <p class='profile__infoListItemName'>Почта</p>\r\n          <p class='profile__infoListItemValue'>" + alias4((helper = (helper = lookupProperty(helpers, "email") || (depth0 != null ? lookupProperty(depth0, "email") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "email",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 48
                },
                "end": {
                    "line": 14,
                    "column": 57
                }
            }
        }) : helper)) + "</p>\r\n        </li>\r\n        <li class='profile__infoListItem'>\r\n          <p class='profile__infoListItemName'>Логин</p>\r\n          <p class='profile__infoListItemValue'>" + alias4((helper = (helper = lookupProperty(helpers, "login") || (depth0 != null ? lookupProperty(depth0, "login") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "login",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 48
                },
                "end": {
                    "line": 18,
                    "column": 57
                }
            }
        }) : helper)) + "</p>\r\n        </li>\r\n        <li class='profile__infoListItem'>\r\n          <p class='profile__infoListItemName'>Имя</p>\r\n          <p class='profile__infoListItemValue'>" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 48
                },
                "end": {
                    "line": 22,
                    "column": 56
                }
            }
        }) : helper)) + "</p>\r\n        </li>\r\n        <li class='profile__infoListItem'>\r\n          <p class='profile__infoListItemName'>Фамилия</p>\r\n          <p class='profile__infoListItemValue'>" + alias4((helper = (helper = lookupProperty(helpers, "surname") || (depth0 != null ? lookupProperty(depth0, "surname") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "surname",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 26,
                    "column": 48
                },
                "end": {
                    "line": 26,
                    "column": 59
                }
            }
        }) : helper)) + "</p>\r\n        </li>\r\n        <li class='profile__infoListItem'>\r\n          <p class='profile__infoListItemName'>Имя в чате</p>\r\n          <p class='profile__infoListItemValue'>" + alias4((helper = (helper = lookupProperty(helpers, "chatName") || (depth0 != null ? lookupProperty(depth0, "chatName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 30,
                    "column": 48
                },
                "end": {
                    "line": 30,
                    "column": 60
                }
            }
        }) : helper)) + "</p>\r\n        </li>\r\n        <li class='profile__infoListItem'>\r\n          <p class='profile__infoListItemName'>Телефон</p>\r\n          <p class='profile__infoListItemValue'>" + alias4((helper = (helper = lookupProperty(helpers, "telephone") || (depth0 != null ? lookupProperty(depth0, "telephone") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "telephone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 34,
                    "column": 48
                },
                "end": {
                    "line": 34,
                    "column": 61
                }
            }
        }) : helper)) + "</p>\r\n        </li>\r\n      </ul>\r\n      <ul class='profile__links'>\r\n        <li class='profile__linksItem'>\r\n          " + ((stack1 = (helper = (helper = lookupProperty(helpers, "ChangeDataLink") || (depth0 != null ? lookupProperty(depth0, "ChangeDataLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "ChangeDataLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 39,
                    "column": 10
                },
                "end": {
                    "line": 39,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </li>\r\n        <li class='profile__linksItem'>\r\n          " + ((stack1 = (helper = (helper = lookupProperty(helpers, "ChangePasswordLink") || (depth0 != null ? lookupProperty(depth0, "ChangePasswordLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "ChangePasswordLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 42,
                    "column": 10
                },
                "end": {
                    "line": 42,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </li>\r\n        <li class='profile__linksItem'>\r\n          " + ((stack1 = (helper = (helper = lookupProperty(helpers, "LogoutLink") || (depth0 != null ? lookupProperty(depth0, "LogoutLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "LogoutLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 45,
                    "column": 10
                },
                "end": {
                    "line": 45,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</main>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ki9cz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _anchorLink = require("../../components/AnchorLink/AnchorLink");
var _button = require("../../components/Button/Button");
var _field = require("../../components/Field/Field");
var _form = require("../../components/Form/Form");
var _input = require("../../components/Input/Input");
var _authController = require("../../controllers/AuthController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _router = require("../../Router/Router");
var _block = require("../../utils/Block");
var _signInPageHbs = require("./SignInPage.hbs");
var _signInPageHbsDefault = parcelHelpers.interopDefault(_signInPageHbs);
let InputNames;
(function(InputNames) {
    InputNames["Login"] = "login";
    InputNames["Password"] = "password";
})(InputNames || (InputNames = {}));
const validator = (v, regExp, errorText)=>{
    const value = v.trim();
    const isValid = regExp.test(value);
    if (isValid) return null;
    return errorText;
};
const validationRules = {
    [InputNames.Login]: (v)=>validator(v, /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/, "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)"),
    [InputNames.Password]: (v)=>validator(v, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/, "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра")
};
class SignInPage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        const loginInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "text",
            name: "login"
        });
        const passwordInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "password",
            name: "password"
        });
        const inputs = [
            loginInput,
            passwordInput
        ];
        const loginField = new (0, _field.Field)({
            name: "login",
            label: "Логин *",
            input: loginInput
        });
        const passwordField = new (0, _field.Field)({
            name: "password",
            label: "Пароль *",
            input: passwordInput
        });
        const fields = [
            loginField,
            passwordField
        ];
        const submitBtn = new (0, _button.Button)({
            label: "Войти",
            stylesType: (0, _button.ButtonStyleTypes).Submit,
            containerStyles: "authForm__submitBtn"
        });
        this.children.form = new (0, _form.Form)({
            fields,
            submitBtn,
            submit: async (values)=>{
                try {
                    await this.props.auth.signIn(values);
                } catch (error) {
                    const e = error;
                    const reason = e.reason;
                    submitBtn.props.actionError = reason;
                }
            },
            inputs,
            validationRules,
            formClass: "authForm"
        });
        this.children.signUpLink = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Нет аккаунта?",
            styles: "auth__link",
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this.props.router.go((0, _router.Routes).SignUpPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _signInPageHbsDefault.default), this.children);
    }
}
const WithControllers = (0, _withControllers.withControllers)(SignInPage, {
    auth: new (0, _authController.AuthController)(),
    router: new (0, _router.Router)("#app")
});
const mapStateToProps = (state)=>{
    return state.user;
};
const WithStore = (0, _withStore.withStore)(mapStateToProps)(WithControllers);
exports.default = WithStore;

},{"../../components/AnchorLink/AnchorLink":"3ad4H","../../components/Button/Button":"87mAs","../../components/Field/Field":"cBUi8","../../components/Form/Form":"alKuf","../../components/Input/Input":"dakFV","../../controllers/AuthController":"btuLA","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../Router/Router":"3NHNR","../../utils/Block":"915bj","./SignInPage.hbs":"bfdLC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfdLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<main class='mainGrid'>\r\n  <div class='auth'>\r\n    <h2 class='auth__header'>Вход</h2>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "form") || (depth0 != null ? lookupProperty(depth0, "form") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "form",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 14
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "signUpLink") || (depth0 != null ? lookupProperty(depth0, "signUpLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "signUpLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n  </div>\r\n</main>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwJWL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _anchorLink = require("../../components/AnchorLink/AnchorLink");
var _button = require("../../components/Button/Button");
var _field = require("../../components/Field/Field");
var _form = require("../../components/Form/Form");
var _input = require("../../components/Input/Input");
var _authController = require("../../controllers/AuthController");
var _withControllers = require("../../hocs/withControllers");
var _withStore = require("../../hocs/withStore");
var _router = require("../../Router/Router");
var _block = require("../../utils/Block");
var _signUpPageHbs = require("./SignUpPage.hbs");
var _signUpPageHbsDefault = parcelHelpers.interopDefault(_signUpPageHbs);
let InputNames;
(function(InputNames) {
    InputNames["Name"] = "first_name";
    InputNames["Surname"] = "second_name";
    InputNames["Login"] = "login";
    InputNames["Email"] = "email";
    InputNames["Phone"] = "phone";
    InputNames["Password"] = "password";
})(InputNames || (InputNames = {}));
const validator = (v, regExp, errorText)=>{
    const value = v.trim();
    const isValid = regExp.test(value);
    if (isValid) return null;
    return errorText;
};
const validationRules = {
    [InputNames.Name]: (v)=>validator(v, /^[A-ZА-Я][\p{L}]*$/u, "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов"),
    [InputNames.Surname]: (v)=>validator(v, /^[A-ZА-Я][\p{L}]*$/u, "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов"),
    [InputNames.Login]: (v)=>validator(v, /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/, "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)"),
    [InputNames.Email]: (v)=>validator(v, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть \xabсобака\xbb (@) и точка после неё, но перед точкой обязательно должны быть буквы"),
    [InputNames.Password]: (v)=>validator(v, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/, "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"),
    [InputNames.Phone]: (v)=>validator(v, /^\+?[0-9]{10,15}$/, "От 10 до 15 символов, состоит из цифр, может начинается с плюса")
};
class SignUpPage extends (0, _block.Block) {
    constructor(props){
        super(props);
    }
    init() {
        const nameInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "text",
            name: InputNames.Name
        });
        const surnameInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "text",
            name: InputNames.Surname
        });
        const loginInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "text",
            name: InputNames.Login
        });
        const emailInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "email",
            name: InputNames.Email
        });
        const phoneInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "tel",
            name: InputNames.Phone
        });
        const passwordInput = new (0, _input.Input)({
            inputStyle: "inputField__input",
            type: "password",
            name: InputNames.Password
        });
        const inputs = [
            nameInput,
            surnameInput,
            loginInput,
            emailInput,
            phoneInput,
            passwordInput
        ];
        const firstNameField = new (0, _field.Field)({
            name: InputNames.Name,
            label: "Имя",
            input: nameInput
        });
        const secondNameField = new (0, _field.Field)({
            name: InputNames.Surname,
            label: "Фамилия",
            input: surnameInput
        });
        const loginField = new (0, _field.Field)({
            name: InputNames.Login,
            label: "Логин *",
            input: loginInput
        });
        const emailField = new (0, _field.Field)({
            name: InputNames.Email,
            label: "Email *",
            input: emailInput
        });
        const phoneField = new (0, _field.Field)({
            name: InputNames.Phone,
            label: "Телефон *",
            input: phoneInput
        });
        const passwordField = new (0, _field.Field)({
            name: InputNames.Password,
            label: "Пароль *",
            input: passwordInput
        });
        const fields = [
            firstNameField,
            secondNameField,
            loginField,
            emailField,
            phoneField,
            passwordField
        ];
        const submitBtn = new (0, _button.Button)({
            label: "Зарегистрироваться",
            stylesType: (0, _button.ButtonStyleTypes).Submit,
            styles: "authForm__signUpBtn"
        });
        this.children.form = new (0, _form.Form)({
            fields,
            submitBtn,
            submit: async (values)=>{
                try {
                    await this.props.auth.signUp(values);
                } catch (error) {
                    const e = error;
                    const reason = e.reason;
                    submitBtn.props.actionError = reason;
                }
            },
            inputs,
            validationRules,
            formClass: "authForm"
        });
        this.children.signInLink = new (0, _anchorLink.AnchorLink)({
            href: "/",
            text: "Уже есть аккаунт?",
            styles: "auth__link",
            events: {
                click: (e)=>{
                    e.preventDefault();
                    this.props.router.go((0, _router.Routes).SignInPage);
                }
            }
        });
    }
    render() {
        return this.compile((0, _signUpPageHbsDefault.default), this.children);
    }
}
const WithControllers = (0, _withControllers.withControllers)(SignUpPage, {
    auth: new (0, _authController.AuthController)(),
    router: new (0, _router.Router)("#app")
});
const mapStateToProps = (state)=>{
    return state.user;
};
const WithStore = (0, _withStore.withStore)(mapStateToProps)(WithControllers);
exports.default = WithStore;

},{"../../components/AnchorLink/AnchorLink":"3ad4H","../../components/Button/Button":"87mAs","../../components/Field/Field":"cBUi8","../../components/Form/Form":"alKuf","../../components/Input/Input":"dakFV","../../controllers/AuthController":"btuLA","../../hocs/withControllers":"6Uczt","../../hocs/withStore":"45TSc","../../Router/Router":"3NHNR","../../utils/Block":"915bj","./SignUpPage.hbs":"fWeLZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fWeLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = (0, _handlebarsRuntimeDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div>\r\n  <main class='mainGrid'>\r\n    <div class='auth'>\r\n      <h2 class='auth__header'>Регистрация</h2>\r\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "form") || (depth0 != null ? lookupProperty(depth0, "form") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "form",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 6
                },
                "end": {
                    "line": 5,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n      " + ((stack1 = (helper = (helper = lookupProperty(helpers, "signInLink") || (depth0 != null ? lookupProperty(depth0, "signInLink") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "signInLink",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 6
                },
                "end": {
                    "line": 6,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n  </main>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequirefc40")

//# sourceMappingURL=index.b71e74eb.js.map
