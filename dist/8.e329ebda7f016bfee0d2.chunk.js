webpackJsonp([8],{

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(874)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(598),
  /* template */
  __webpack_require__(896),
  /* scopeId */
  "data-v-932edb9a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-932edb9a", Component.options)
  } else {
    hotAPI.reload("data-v-932edb9a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_permission__ = __webpack_require__(407);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            user: {
                username: ''
            },
            location: '深圳市南山区'
        };
    },
    mounted() {
        this.user = this.$store.state.user;
    },
    computed: {
        menus() {
            const role = this.$store.state.role;
            const pages = __WEBPACK_IMPORTED_MODULE_0__config_permission__["a" /* default */].pages.filter(page => {
                if (!!page.r.find(r => r === role)) {
                    page.permission = 'r';
                    return page.ismenu;
                } else if (!!page.w.find(r => r === role)) {
                    page.permission = 'w';
                    return page.ismenu;
                } else {
                    page.permission = null;
                    return false;
                }
                return false;
            });
            return pages;
        },
        isFullScreen() {
            return this.$store.state.isFullScreen;
        }
    },
    methods: {
        handleItemSelected(name) {
            if (name === 'logout') {
                return this.logout();
            } else if (name === 'userInfo') {
                return this.$router.push({
                    path: '/info'
                });
            }
            this.$router.push({
                path: this.menus[name].link
            });
        },
        logout() {
            this.user = {};
            this.$store.commit('setUser', {});
            localStorage.clear();
            this.$router.push({
                path: '/'
            });
        }
    }
});

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const roles = {
    //角色
    admin: '超级管理员',
    region_admin: '管理员',
    quality_officer: '质监局',
    monitor_seat: '坐席',
    installer: '安装人员',
    operator: '安保人员'
};

const pages = [{
    name: '电梯总览',
    link: '/overview',
    ismenu: true,
    w: [roles.admin, roles.region_admin, roles.monitor_seat],
    r: [roles.quality_officer]
}, {
    name: '电梯管理',
    link: '/elevators',
    ismenu: true,
    w: [roles.admin, roles.region_admin, roles.monitor_seat],
    r: [roles.quality_officer]
}, {
    name: '事件管理',
    link: '/incidents',
    ismenu: true,
    w: [roles.admin, roles.region_admin, roles.monitor_seat],
    r: [roles.quality_officer]
}, {
    name: '设备管理',
    link: '/devs',
    ismenu: true,
    w: [roles.admin, roles.region_admin],
    r: [roles.quality_officer]
}, {
    name: '用户管理',
    link: '/users',
    ismenu: true,
    w: [roles.admin, roles.region_admin],
    r: []
}, {
    name: '报表',
    link: '/report',
    ismenu: true,
    w: [roles.admin, roles.region_admin, roles.monitor_seat],
    r: [roles.quality_officer]
}];

/* harmony default export */ __webpack_exports__["a"] = ({
    roles: roles,
    pages: pages
});

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "846cc3d4c7f8ac4d31ecba94ad11cee9.png";

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(408)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(406),
  /* template */
  __webpack_require__(411),
  /* scopeId */
  "data-v-351bd0b6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/components/common/headerMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] headerMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-351bd0b6", Component.options)
  } else {
    hotAPI.reload("data-v-351bd0b6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Layout', [_c('Header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isFullScreen),
      expression: "!isFullScreen"
    }]
  }, [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "dark",
      "active-name": "1"
    },
    on: {
      "on-select": _vm.handleItemSelected
    }
  }, [_c('div', {
    staticClass: "layout-logo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(409),
      "alt": "",
      "width": "40px",
      "height": "40px"
    }
  }), _vm._v(" "), _c('span', [_vm._v("电梯动态监测系统")]), _vm._v(" "), _c('span', {
    staticClass: "location"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-pin"
    }
  }), _vm._v(_vm._s(_vm.location))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "layout-nav"
  }, _vm._l((_vm.menus), function(item, index) {
    return _c('MenuItem', {
      key: index,
      attrs: {
        "name": index
      }
    }, [_vm._v("\n                        " + _vm._s(item.name) + "\n                    ")])
  })), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('Submenu', {
    attrs: {
      "name": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-contact",
      "size": 28
    }
  }), _vm._v("\n                            " + _vm._s(this.user.username) + "\n                        ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "userInfo"
    }
  }, [_vm._v("用户信息")])], 2), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "logout"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-power",
      "size": 22
    }
  }), _vm._v("\n                        退出\n                    ")], 1)], 1)])], 1), _vm._v(" "), _c('Content', [_vm._t("default")], 2)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-351bd0b6", module.exports)
  }
}

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue__);
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        HeaderMenu: __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue___default.a
    }
});

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('HeaderMenu', [_vm._v("\n    xx\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-932edb9a", module.exports)
  }
}

/***/ })

});