webpackJsonp([5],{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(867)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(604),
  /* template */
  __webpack_require__(886),
  /* scopeId */
  "data-v-085b272e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/views/users.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] users.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-085b272e", Component.options)
  } else {
    hotAPI.reload("data-v-085b272e", Component.options)
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

/***/ 604:
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
            isSearching: false,
            modifyModal: false,
            deleteModal: false,
            resetModal: false,
            search: {
                regCode: '',
                installer: '',
                address: '',
                status: 'all'
            },
            formItem: {
                username: '',
                telephone: ''
            },
            ruleValidate: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                telephone: [{ required: true, message: '请输入联系方式', trigger: 'blur' }]
            },
            columns: [{
                title: '用户名',
                key: 'username'
            }, {
                title: '角色',
                key: 'role'
            }, {
                title: '联系方式',
                key: 'tel'
            }, {
                title: '操作',
                render: (h, params) => {
                    return h('div', {
                        class: {
                            opr: true
                        }
                    }, [h('a', {
                        href: 'javascript:void(0)',
                        on: {
                            click: () => {
                                this.openResetModal(params.row);
                            }
                        }
                    }, '重置密码'), h('a', {
                        href: 'javascript:void(0)',
                        on: {
                            click: () => {
                                this.openModifyModal(params.row);
                            }
                        }
                    }, '修改'), h('a', {
                        href: 'javascript:void(0)',
                        on: {
                            click: () => {
                                this.openDeleteModal(params.row);
                            }
                        }
                    }, '删除')]);
                }
            }],
            data: []
        };
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        handleSearch() {
            this.getUsers();
        },
        getUsers() {
            this.$http.get(this.$url.USERLIST, {}).then((response => {
                this.data = response.data.data || [];
                this.total = response.data.total || 0;
            }).bind(this));
        },
        openResetModal() {
            this.resetModal = true;
        },
        openModifyModal() {
            this.modifyModal = true;
        },
        openDeleteModal() {
            this.deleteModal = true;
        },
        resetPasswd() {
            this.$http.post(this.$url.RESET_USER_PASSWD).then((data => {
                this.$Message.success('重置密码成功');
            }).bind(this));
        },
        deleteUser() {
            this.$http.post(this.$url.DELETE_USER).then((() => {
                this.$Message.success('删除成功');
                this.getUsers();
            }).bind(this));
        },
        modifyUser() {
            this.$refs['formItem'].validate(valid => {
                if (valid) {
                    this.$http.post(this.$url.MODIFY_USER).then((() => {
                        this.modifyModal = false;
                        this.getUsers();
                        this.$Message.success('修改成功');
                    }).bind(this));
                }
            });
        },
        cancel(name) {
            if (name) {
                this[name] = false;
            }
        }
    },
    components: {
        HeaderMenu: __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue___default.a
    }
});

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('HeaderMenu', [_c('Form', {
    ref: "formInline",
    staticClass: "search-bar",
    attrs: {
      "label-position": "right",
      "model": _vm.search,
      "inline": "",
      "label-width": 70
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "用户名",
      "label-width": 80
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.search.regCode),
      callback: function($$v) {
        _vm.$set(_vm.search, "regCode", $$v)
      },
      expression: "search.regCode"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "联系方式"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.search.installer),
      callback: function($$v) {
        _vm.$set(_vm.search, "installer", $$v)
      },
      expression: "search.installer"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.isSearching
    },
    on: {
      "click": function($event) {
        _vm.handleSearch()
      }
    }
  }, [_vm._v("查询")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content"
  }, [_c('Table', {
    staticStyle: {
      "margin-bottom": "20px"
    },
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.data
    }
  }), _vm._v(" "), _c('Page', {
    attrs: {
      "total": 100,
      "show-sizer": ""
    }
  })], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "重置密码",
      "okText": "重置"
    },
    on: {
      "on-ok": _vm.resetPasswd,
      "on-cancel": _vm.cancel
    },
    model: {
      value: (_vm.resetModal),
      callback: function($$v) {
        _vm.resetModal = $$v
      },
      expression: "resetModal"
    }
  }, [_c('p', [_vm._v("确定重置该用户密码吗？")])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "删除用户",
      "okText": "删除"
    },
    on: {
      "on-ok": _vm.deleteUser,
      "on-cancel": _vm.cancel
    },
    model: {
      value: (_vm.deleteModal),
      callback: function($$v) {
        _vm.deleteModal = $$v
      },
      expression: "deleteModal"
    }
  }, [_c('p', [_vm._v("确定删除该用户吗")])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "修改用户"
    },
    model: {
      value: (_vm.modifyModal),
      callback: function($$v) {
        _vm.modifyModal = $$v
      },
      expression: "modifyModal"
    }
  }, [_c('Form', {
    ref: "formItem",
    attrs: {
      "model": _vm.formItem,
      "label-width": 80,
      "rules": _vm.ruleValidate
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "用户名",
      "prop": "username"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "size": "large",
      "placeholder": "请输入用户名"
    },
    model: {
      value: (_vm.formItem.username),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "username", $$v)
      },
      expression: "formItem.username"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "联系方式",
      "prop": "telephone"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "size": "large",
      "placeholder": "联系方式"
    },
    model: {
      value: (_vm.formItem.telephone),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "telephone", $$v)
      },
      expression: "formItem.telephone"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "text",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.cancel('modifyModal')
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.modifyUser()
      }
    }
  }, [_vm._v("确定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-085b272e", module.exports)
  }
}

/***/ })

});