webpackJsonp([9],{

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(877)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(597),
  /* template */
  __webpack_require__(899),
  /* scopeId */
  "data-v-c246d97c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/views/incidents.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] incidents.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c246d97c", Component.options)
  } else {
    hotAPI.reload("data-v-c246d97c", Component.options)
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

/***/ 597:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            page: 1,
            total: 0,
            modal: false,
            search: {
                time: '',
                level: '',
                zone: []
            },
            formItem: {
                registerCode: '',
                closeReason: ''
            },
            ruleValidate: {
                closeReason: [{ required: true, message: '请输入关闭原因', trigger: 'blur' }]
            },
            current: {},
            address: [{
                value: 'beijing',
                label: '北京',
                children: [{
                    value: 'gugong',
                    label: '故宫'
                }, {
                    value: 'tiantan',
                    label: '天坛'
                }, {
                    value: 'wangfujing',
                    label: '王府井'
                }]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [{
                    value: 'nanjing',
                    label: '南京',
                    children: [{
                        value: 'fuzimiao',
                        label: '夫子庙'
                    }]
                }, {
                    value: 'suzhou',
                    label: '苏州',
                    children: [{
                        value: 'zhuozhengyuan',
                        label: '拙政园'
                    }, {
                        value: 'shizilin',
                        label: '狮子林'
                    }]
                }]
            }],
            columns: [{
                title: '时间',
                key: 'eventTime'
            }, {
                title: '事件名称',
                key: 'eventName'
            }, {
                title: '事件级别',
                key: 'eventName'
            }, {
                title: '电梯注册码',
                key: 'registerCode'
            }, {
                title: '电梯地址',
                key: 'elevatorAddress'
            }, {
                title: '维保人员',
                key: 'security'
            }, {
                title: '维保人员电话',
                key: 'securityTel'
            }, {
                title: '是否关闭',
                key: 'isClose',
                render: (h, params) => {
                    return h('div', {
                        class: {
                            'close-info': true,
                            'closed': params.isClose
                        }
                    }, params.isClose ? '是' : '否');
                }
            }, {
                title: '关闭人',
                key: 'closePersonnel'
            }, {
                title: '操作',
                render: (h, params) => {
                    return h('div', {
                        class: {
                            opr: true,
                            disabled: params.row.isClose
                        }
                    }, [h('a', {
                        href: 'javascript:void(0)',
                        on: {
                            click: () => {
                                this.openCloseModal(params.row);
                            }
                        }
                    }, '关闭事件')]);
                }
            }],
            data: []
        };
    },
    mounted() {
        this.goPage(1);
    },
    methods: {
        goPage(page) {
            this.page = page;
            this.$http.get(this.$url.INCIDENTLIST).then(response => {
                this.data = response.data.data || [];
                //TODO 分页
                this.total = response.data.total || 100;
            }).catch(err => {
                console.log(err);
                this.$Message.error('服务异常，请稍后尝试');
            });
        },
        openCloseModal(data) {
            this.modal = true;
            this.current = data;
            this.$refs.formItem.resetFields();
        },
        close() {
            this.$refs.formItem.validate(valid => {
                if (!valid) {
                    return;
                }

                this.formItem.registerCode = this.current.registerCode;
                this.$http.post(this.$url.CLOSE_INCIDENT, this.formItem).then(data => {
                    this.modal = false;
                    this.$Message.success('关闭成功');
                    this.goPage(this.page); //刷新当前页
                });
            });
        },
        cancel() {
            this.modal = false;
        }
    },
    components: {
        HeaderMenu: __WEBPACK_IMPORTED_MODULE_0__components_common_headerMenu_vue___default.a
    }

});

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('HeaderMenu', [_c('Form', {
    ref: "formInline",
    staticClass: "search-bar",
    attrs: {
      "model": _vm.search,
      "inline": "",
      "label-position": "left",
      "label-width": 70
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "时间范围"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "daterange",
      "value": _vm.search.time,
      "split-panels": "",
      "placeholder": "Select date"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "事件名称"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.search.level),
      callback: function($$v) {
        _vm.$set(_vm.search, "level", $$v)
      },
      expression: "search.level"
    }
  }, [_c('Option', {
    key: "11",
    attrs: {
      "value": "info"
    }
  }, [_vm._v("info")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "事件级别"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.search.level),
      callback: function($$v) {
        _vm.$set(_vm.search, "level", $$v)
      },
      expression: "search.level"
    }
  }, [_c('Option', {
    key: "11",
    attrs: {
      "value": "info"
    }
  }, [_vm._v("info")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "电梯注册码",
      "label-width": 80
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.search.level),
      callback: function($$v) {
        _vm.$set(_vm.search, "level", $$v)
      },
      expression: "search.level"
    }
  }, [_c('Option', {
    key: "11",
    attrs: {
      "value": "info"
    }
  }, [_vm._v("info")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "区域"
    }
  }, [_c('Cascader', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "data": _vm.data
    },
    model: {
      value: (_vm.search.zone),
      callback: function($$v) {
        _vm.$set(_vm.search, "zone", $$v)
      },
      expression: "search.zone"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.goPage(1)
      }
    }
  }, [_vm._v("查询")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content"
  }, [_c('Table', {
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
      "title": "关闭事件"
    },
    model: {
      value: (_vm.modal),
      callback: function($$v) {
        _vm.modal = $$v
      },
      expression: "modal"
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
      "label": "电梯注册码"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.current.registerCode))])]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "关闭原因",
      "prop": "closeReason"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "type": "textarea",
      "size": "large",
      "placeholder": "关闭原因"
    },
    model: {
      value: (_vm.formItem.closeReason),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "closeReason", $$v)
      },
      expression: "formItem.closeReason"
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
      "click": _vm.cancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("确定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c246d97c", module.exports)
  }
}

/***/ })

});