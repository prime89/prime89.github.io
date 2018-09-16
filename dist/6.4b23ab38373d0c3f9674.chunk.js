webpackJsonp([6],{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(875)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(603),
  /* template */
  __webpack_require__(897),
  /* scopeId */
  "data-v-9634bc64",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/views/resetpasswd.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] resetpasswd.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9634bc64", Component.options)
  } else {
    hotAPI.reload("data-v-9634bc64", Component.options)
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

/***/ 603:
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
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入新密码'));
            } else {
                if (this.formItem.passwordConfirm !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formItem.validateField('passwordConfirm');
                }
                callback();
            }
        };
        const validatePasswordConfirm = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入确认密码'));
            } else if (value !== this.formItem.password) {
                callback(new Error('两次输入的密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            formItem: {
                password: '',
                passwordConfirm: ''
            },
            ruleValidate: {
                password: [{ validator: validatePass, trigger: 'blur' }],
                passwordConfirm: [{ validator: validatePasswordConfirm, trigger: 'blur' }]
            }
        };
    },
    methods: {
        changePasswd(name) {
            //TODO
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$store.dispatch('resetPasswd', { password: this.formItem.password }).then(data => {
                        if (data.code === 0) {
                            this.$router.push({
                                path: '/overview'
                            });
                        } else {
                            this.$Message.error('修改失败，请稍后尝试');
                        }
                    }, () => {
                        this.$Message.error('修改失败，请稍后尝试');
                    });
                } else {
                    this.$Message.error('两次密码输入不合法，请重新输入');
                }
            });
        }
    },
    components: {
        HeaderMenu: __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue___default.a
    }
});

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('HeaderMenu', [_c('div', {
    staticClass: "main-content"
  }, [_c('h2', [_vm._v("修改初始密码")]), _vm._v(" "), _c('p', {
    staticClass: "tips"
  }, [_vm._v("为了您的账号安全，首次登陆请修改初始密码。")]), _vm._v(" "), _c('Form', {
    ref: "formItem",
    attrs: {
      "model": _vm.formItem,
      "label-width": 80,
      "rules": _vm.ruleValidate
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "新密码",
      "prop": "password"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "size": "large",
      "type": "password",
      "placeholder": "新密码"
    },
    model: {
      value: (_vm.formItem.password),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "password", $$v)
      },
      expression: "formItem.password"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "确认密码",
      "prop": "passwordConfirm"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "size": "large",
      "type": "password",
      "placeholder": "确认密码"
    },
    model: {
      value: (_vm.formItem.passwordConfirm),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "passwordConfirm", $$v)
      },
      expression: "formItem.passwordConfirm"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": function($event) {
        _vm.changePasswd('formItem')
      }
    }
  }, [_vm._v("确定")])], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9634bc64", module.exports)
  }
}

/***/ })

});