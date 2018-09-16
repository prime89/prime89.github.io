webpackJsonp([11],{

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(878)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(593),
  /* template */
  __webpack_require__(900),
  /* scopeId */
  "data-v-d75614a6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/views/devs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] devs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d75614a6", Component.options)
  } else {
    hotAPI.reload("data-v-d75614a6", Component.options)
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

/***/ 593:
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            search: {},
            isSearching: false,
            current: {},
            attachModal: false,
            removeModal: false,
            formItem: {
                deviceSNCode: '',
                liftCode: ''
            },
            ruleValidate: {
                deviceSNCode: [{ required: true, message: '请输入设备SN码', trigger: 'blur' }],
                liftCode: [{ required: true, message: '请输入电梯注册码', trigger: 'blur' }]
            },
            total: 0,
            page: 1,
            columns: [{
                title: '设备SN码',
                key: 'deviceSNCode'
            }, {
                title: '电梯注册码',
                key: 'liftCode'
            }, {
                title: '状态',
                key: 'workStatus'
            }, {
                title: '安装地址',
                key: 'address'
            }, {
                title: '安装人员',
                key: 'operator'
            }, {
                title: '安装人员电话',
                key: 'operatorPhone'
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
                                this.openRemoveModal(params.row);
                            }
                        }
                    }, '删除')]);
                }
            }],
            data: []
        };
    },
    mounted() {
        //页面渲染初始化事件
        this.goPage(1);
    },
    methods: {
        goPage(page) {
            this.page = page || this.page;
            this.getDevs();
        },
        getDevs() {
            this.$http.get(this.$url.DEVLIST).then(response => {
                this.data = response.data.data || [];
                //TODO 分页
                this.total = response.data.total || 100;
            }).catch(err => {
                console.log(err);
                this.$Message.error('服务异常，请稍后尝试');
            });
        },
        openAttachModal() {
            this.attachModal = true;
            this.current = null;
            this.$refs.formItem.resetFields();
        },
        openRemoveModal(data) {
            this.current = data;
            this.removeModal = true;
        },
        attach() {
            this.$http.post(this.$url.DEV_BIND, this.formItem).then(data => {
                this.$Message.success('绑定成功');
                this.goPage(1);
            });
        },
        remove() {
            this.$http.post(this.$url.DEV_UNBIND, this.current).then(data => {
                this.$Message.success('删除成功');
                this.goPage(1);
            });
        },
        cancel() {
            this.attachModal = false;
        }
    },
    components: {
        HeaderMenu: __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue___default.a
    }
});

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 900:
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
      "label": "设备SN码",
      "label-width": 80
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.search.snCode),
      callback: function($$v) {
        _vm.$set(_vm.search, "snCode", $$v)
      },
      expression: "search.snCode"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "安装人员"
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
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "安装地址"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.search.address),
      callback: function($$v) {
        _vm.$set(_vm.search, "address", $$v)
      },
      expression: "search.address"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "电梯注册码",
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
      "label": "状态"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.search.status),
      callback: function($$v) {
        _vm.$set(_vm.search, "status", $$v)
      },
      expression: "search.status"
    }
  }, [_c('Option', {
    key: "all",
    attrs: {
      "value": "all"
    }
  }, [_vm._v("全部")]), _vm._v(" "), _c('Option', {
    key: "online",
    attrs: {
      "value": "online"
    }
  }, [_vm._v("在线")]), _vm._v(" "), _c('Option', {
    key: "offline",
    attrs: {
      "value": "offline"
    }
  }, [_vm._v("离线")])], 1)], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.isSearching
    },
    on: {
      "click": _vm.goPage
    }
  }, [_vm._v("查询")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content"
  }, [_c('Button', {
    staticStyle: {
      "margin-bottom": "20px"
    },
    on: {
      "click": _vm.openAttachModal
    }
  }, [_vm._v("新增设备")]), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.data
    }
  }), _vm._v(" "), _c('Page', {
    attrs: {
      "current": _vm.page,
      "total": _vm.total,
      "show-sizer": ""
    },
    on: {
      "on-change": _vm.goPage
    }
  })], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "新增设备"
    },
    model: {
      value: (_vm.attachModal),
      callback: function($$v) {
        _vm.attachModal = $$v
      },
      expression: "attachModal"
    }
  }, [_c('Form', {
    ref: "formItem",
    attrs: {
      "model": _vm.formItem,
      "label-width": 100,
      "rules": _vm.ruleValidate
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "设备SN码",
      "prop": "deviceSNCode"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "size": "large",
      "placeholder": "请输入设备SN码"
    },
    model: {
      value: (_vm.formItem.deviceSNCode),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "deviceSNCode", $$v)
      },
      expression: "formItem.deviceSNCode"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "电梯注册码",
      "prop": "liftCode"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "size": "large",
      "placeholder": "请输入电梯注册码"
    },
    model: {
      value: (_vm.formItem.liftCode),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "liftCode", $$v)
      },
      expression: "formItem.liftCode"
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
      "click": _vm.attach
    }
  }, [_vm._v("确定")])], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "删除",
      "okText": "删除"
    },
    on: {
      "on-ok": _vm.remove,
      "on-cancel": _vm.cancel
    },
    model: {
      value: (_vm.removeModal),
      callback: function($$v) {
        _vm.removeModal = $$v
      },
      expression: "removeModal"
    }
  }, [_c('p', [_vm._v("确定新增绑定该设备吗？")]), _vm._v(" "), _c('p', [_vm._v("绑定操作将会指向什么结果")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d75614a6", module.exports)
  }
}

/***/ })

});