// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"carousel/carousel-item.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var carouselItem = {
  props: {
    srcMobile: {
      type: String,
      default: ''
    },
    srcDesk: {
      type: String,
      default: ''
    },
    baseColor: {
      type: String,
      default: '#000'
    },
    active: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    direct: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  template: "\n    <div class=\"carousel__item\">\n        <div class=\"carousel__item__bk-container\" :style=\"getBkColor\" :class=\"slideAni\">\n            <div class=\"carousel__item__bk mobile\" :style=\"getMobile\" :key=\"getMobile + 'mobile'\"></div>\n            <div class=\"carousel__item__bk desk\" :style=\"getDesk\" :key=\"getDesk + 'desk'\"></div>\n        </div>\n        <div class=\"carousel__item__content\">\n            <div class=\"carousel__item__content-group\"></div>\n        </div>\n    </div>\n    ",
  computed: {
    getMobile: function getMobile() {
      return "background-image: url('".concat(this.srcMobile, "')");
    },
    getDesk: function getDesk() {
      return "background-image: url('".concat(this.srcDesk, "')");
    },
    getBkColor: function getBkColor() {
      return "background-color: ".concat(this.baseColor);
    },
    slideAni: function slideAni() {
      var result = '';
      var prev = this.direct ? -1 : 1;
      var prevActice = (this.active + prev + this.total) % this.total;
      this.index === this.active ? this.direct ? result = "next-in" : result = "prev-in" : '';
      this.index === prevActice ? result = 'prev-out' : '';
      return result;
    }
  }
};
var _default = carouselItem;
exports.default = _default;
},{}],"carousel/carousel-control-arrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var carouselControlArrow = {
  props: {
    direct: {
      type: String,
      required: true
    }
  },
  template: "\n    <div class=\"carousel__control__arrow\" \n    @click=\"$emit(getDirect)\"\n    @mouseenter=\"$emit('mouseenter')\"\n    ><span></span></div>\n    ",
  computed: {
    getDirect: function getDirect() {
      return this.direct;
    }
  }
}; // @mouseleave="$emit('mouseleave')"

var _default = carouselControlArrow;
exports.default = _default;
},{}],"carousel/carousel-control-timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var carouselControlTimer = {
  props: {
    total: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      required: true
    },
    islock: {
      type: Boolean,
      required: true
    },
    isStart: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      width: 0
    };
  },
  mounted: function mounted() {
    console.log(this.isStart);
  },
  template: "\n    <div class=\"carousel__control__timer\">\n        <ul class=\"carousel__control__timer-list\" v-if=\"total\">\n            <li v-for=\"n in total\" \n            :key=\"n + 'li'\"\n            :class=\"{active: !isStart ? false : active === n - 1}\"\n            ref=\"timerItem\">\n            <div class=\"bar\"></div\n            ></li>\n        </ul>\n    </div>\n    ",
  methods: {
    setWidth: function setWidth(index) {
      return "".concat(index === this.active ? 'width:100%;' : '');
    }
  }
};
var _default = carouselControlTimer;
exports.default = _default;
},{}],"carousel/carousel-control.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carouselControlArrow = _interopRequireDefault(require("./carousel-control-arrow"));

var _carouselControlTimer = _interopRequireDefault(require("./carousel-control-timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import carouselControlPoints from './carousel-control-points'
var carouselControl = {
  props: {
    total: {
      type: Number,
      default: 0
    },
    active: {
      type: Number,
      required: true
    },
    islock: {
      type: Boolean,
      required: true
    },
    isStart: {
      type: Boolean,
      required: true
    }
  },
  components: {
    carouselControlArrow: _carouselControlArrow.default,
    carouselControlTimer: _carouselControlTimer.default
  },
  template: "\n    <div class=\"carousel__control\">\n\n        <carousel-control-arrow class=\"next\" \n        direct=\"next\" \n        @next=\"$emit('next')\" @mouseenter=\"$emit('mousehover')\"\"\n        ></carousel-control-arrow>\n\n        <carousel-control-arrow class=\"prev\" \n        direct=\"prev\" \n        @prev=\"$emit('prev')\" @mouseenter=\"$emit('mousehover')\"\"\n        ></carousel-control-arrow>\n\n        <carousel-control-timer\n        :total=\"total\"\n        :active=\"active\"\n        :islock=\"islock\"\n        :isStart=\"isStart\"\n        ></carousel-control-timer>\n    </div>\n    ",
  methods: {
    click: function click(val) {
      this.$emit('click', val);
    }
  }
};
var _default = carouselControl;
exports.default = _default;
},{"./carousel-control-arrow":"carousel/carousel-control-arrow.js","./carousel-control-timer":"carousel/carousel-control-timer.js"}],"carousel/carousel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carouselItem = _interopRequireDefault(require("./carousel-item"));

var _carouselControl = _interopRequireDefault(require("./carousel-control"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var intervalTime = 6000;
var carousel = {
  props: {
    deskBks: {
      type: Array,
      default: null
    },
    mobileBks: {
      type: Array,
      default: null
    }
  },
  data: function data() {
    return {
      active: -1,
      default: 'desk',
      direct: 0,
      isHover: false,
      timeout: null,
      transType: 'slide',
      islock: true,
      isStart: false,
      lockTimer: null
    };
  },
  components: {
    carouselItem: _carouselItem.default,
    carouselControl: _carouselControl.default
  },
  mounted: function mounted() {
    this.active = 0;
  },
  beforeDestory: function beforeDestory() {
    this.stopTimer();
  },
  template: "\n    <div class=\"carousel\" @mouseenter=\"mouseHover\" @mouseleave=\"mouseLeave\">\n        <div class=\"carousel-container\">\n\n        \n            <transition-group tag=\"div\" class=\"carousel-pane\" name=\"opacity\" duration=\"300\">\n                <carousel-item \n                v-for=\"n in total\" \n                :key=\"n + 'a'\"\n                :srcMobile=\"getMobileSrc(n - 1)\"\n                :srcDesk=\"getDeskSrc(n - 1)\"\n                v-show=\"active === n - 1\"\n                :index=\"n - 1\"\n                :active=\"active\"\n                :direct=\"direct\"\n                :total=\"total\"\n                ></carousel-item>\n            </transition-group>\n            \n\n            <carousel-control\n            :total=\"total\"\n            :active=\"active\"\n            :islock=\"islock\"\n            :isStart=\"getStart\"\n            @click=\"changeItem\"\n            @next=\"nextHandler\"\n            @prev=\"prevHandler\"\n            @moushover=\"mouseHover\"\n            ></carousel-control> \n        </div>\n    </div>\n    ",
  computed: {
    trans: function trans() {
      var type = this.transType || 'move';
      return this.direct ? "".concat(type, "-left") : "".concat(type, "-right");
    },
    getStart: function getStart() {
      return this.isStart;
    },
    getList: function getList() {
      return this["".concat(this.default, "Bks")];
    },
    getTotal: function getTotal() {
      if (!this.deskBks && !this.mobileBks) {
        return 1;
      }

      return this.getList.length;
    },
    total: function total() {
      return this.getTotal;
    }
  },
  methods: {
    start: function start() {
      this.setTimer();
      this.isStart = true;
      this.islock = false;
    },
    getMobileSrc: function getMobileSrc(index) {
      return this.mobileBks ? this.mobileBks[index].src : '';
    },
    getDeskSrc: function getDeskSrc(index) {
      return this.deskBks ? this.deskBks[index].src : '';
    },
    setTimer: function setTimer() {
      var _this = this;

      clearInterval(this.timeout);
      this.timeout = setInterval(function () {
        _this.go();
      }, intervalTime);
    },
    stopTimer: function stopTimer() {
      clearInterval(this.timeout);
    },
    lock: function lock() {
      var _this2 = this;

      this.islock = true;
      clearTimeout(this.lockTimer);
      this.lockTimer = setTimeout(function () {
        _this2.islock = false;
        _this2.lockTimer = null;
      }, 1000);
    },
    mouseHover: function mouseHover() {
      this.isHover = true;
    },
    mouseLeave: function mouseLeave() {
      this.isHover = false;
    },
    changeItem: function changeItem(val) {
      this.active = (val + this.total) % this.total;
    },
    nextHandler: function nextHandler() {
      if (this.islock) {
        return;
      }

      this.direct = 1;
      this.changeItem(this.active + 1);
      this.lock();
    },
    prevHandler: function prevHandler() {
      if (this.islock) {
        return;
      }

      this.direct = 0;
      this.changeItem(this.active - 1);
      this.lock();
    },
    go: function go() {
      this.isHover && !this.islock ? '' : this.nextHandler();
    }
  },
  watch: {
    deskBks: function deskBks(val) {
      val || !val.length === 0 ? this.start() : '';
    }
  }
};
var _default = carousel;
exports.default = _default;
},{"./carousel-item":"carousel/carousel-item.js","./carousel-control":"carousel/carousel-control.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _carousel = _interopRequireDefault(require("./carousel/carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeout = null;
var intervalTime = 3000;
var map = {
  mobile: [{
    id: 0,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/VJMKYP67HDV81594666749129.jpg"
  }, {
    id: 1,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/VMQWGZUUN0ND1595027718598.jpg"
  }, {
    id: 2,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/6E7417V4COZK1594246631162.jpg"
  }, {
    id: 3,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/ZK264MCQVGUW1591659159544.jpg"
  }],
  desk: [{
    id: 4,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/W4V3UJZQY33J1594666746765.jpg"
  }, {
    id: 5,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/89QEFESOZFON1595027721142.jpg"
  }, {
    id: 6,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/LBSED612PBHV1594664939349.jpg"
  }, {
    id: 7,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/F3R621RGW4PY1591659159421.jpg"
  }],
  logo: [{
    id: 8,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/NCL3IWXNZLGW1594666773843.png"
  }, {
    id: 9,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/2FYMSDUM6JEN1595027713539.png"
  }, {
    id: 10,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/x3/X3HOK8D9FAEM1575327204275.png"
  }, {
    id: 11,
    src: "https://bnetcmsus-a.akamaihd.net/cms/gallery/IUCCN3GVCZFD1586209087889.png"
  }],
  text: [{
    id: 12,
    title: "全新資料片",
    btn: "立即購買"
  }, {
    id: 13,
    title: "有玩 , 有看 , 有得拿",
    btn: "瞭解詳情"
  }, {
    id: 14,
    title: "陪你上山下海的好夥伴!",
    special: "限時優惠",
    btn: "立即購買"
  }, {
    id: 15,
    title: "第四季正式上線",
    btn: "瞭解詳情"
  }]
}; // let data = {
//     bannerDeskBks: map.desk,
//     bannerMobileBks: map.mobile,
// }

var data = {
  bannerDeskBks: null,
  bannerMobileBks: null
};
new Vue({
  el: '#app',
  data: data,
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.bannerDeskBks = map.desk;
      _this.bannerMobileBks = map.mobile;
    }, 3000); //     timeout = setInterval(() => {
    //         this.carouselGo()
    //     },intervalTime)
  },
  // beforeDestory() {
  //     clearInterval(timeout)
  // },
  components: {
    carousel: _carousel.default
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.activeMenu = !this.activeMenu;
    },
    goPage: function goPage(index) {
      this.nowPath = index;
    },
    carouselGo: function carouselGo() {
      this.$children.forEach(function (com) {
        return com.go();
      });
    }
  }
});
},{"./carousel/carousel":"carousel/carousel.js"}],"../../../../.nvm/versions/node/v12.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49771" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v12.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map