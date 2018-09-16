webpackJsonp([1],{

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(879)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(600),
  /* template */
  __webpack_require__(901),
  /* scopeId */
  "data-v-ffdf956c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/src/views/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ffdf956c", Component.options)
  } else {
    hotAPI.reload("data-v-ffdf956c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resetSize;
function resetSize(vm) {
    var img_width, img_height, bar_width, bar_height;	//图片的宽度、高度，移动条的宽度、高度

    var parentWidth = vm.$el.parentNode.offsetWidth || window.offsetWidth
    var parentHeight = vm.$el.parentNode.offsetHeight || window.offsetHeight

    if (vm.imgSize.width.indexOf('%') != -1) {
        img_width = parseInt(this.imgSize.width) / 100 * parentWidth + 'px'
    } else {
        img_width = this.imgSize.width;
    }

    if (vm.imgSize.height.indexOf('%') != -1) {
        img_height = parseInt(this.imgSize.height) / 100 * parentHeight + 'px'
    } else {
        img_height = this.imgSize.height
    }

    if (vm.barSize.width.indexOf('%') != -1) {
        bar_width = parseInt(this.barSize.width) / 100 * parentWidth + 'px'
    } else {
        bar_width = this.barSize.width
    }

    if (vm.barSize.height.indexOf('%') != -1) {
        bar_height = parseInt(this.barSize.height) / 100 * parentHeight + 'px'
    } else {
        bar_height = this.barSize.height
    }

    return {imgWidth: img_width, imgHeight: img_height, barWidth: bar_width, barHeight: bar_height}
}

const _code_chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
/* harmony export (immutable) */ __webpack_exports__["d"] = _code_chars;

const _code_color1 = ['#fffff0', '#f0ffff', '#f0fff0', '#fff0f0']
/* harmony export (immutable) */ __webpack_exports__["c"] = _code_color1;

const _code_color2 = ['#FF0033', '#006699', '#993366', '#FF9900', '#66CC66', '#FF33CC']
/* harmony export (immutable) */ __webpack_exports__["b"] = _code_color2;


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Verify_VerifyCode__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Verify_VerifyCode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Verify_VerifyCode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Verify_VerifySlide__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Verify_VerifySlide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Verify_VerifySlide__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Verify_VerifyPoints__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Verify_VerifyPoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Verify_VerifyPoints__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Verify 验证码组件
 * @description 分发验证码使用
 * */




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Vue2Verify',
    props: {
        // 双语化
        locale: {
            require: false,
            type: String,
            default() {
                // 默认语言不输入为浏览器语言
                if (navigator.language) {
                    var language = navigator.language;
                } else {
                    var language = navigator.browserLanguage;
                }
                return language;
            }
        },
        type: {
            type: String | Number,
            require: false,
            default: 'picture'
        },
        figure: {
            type: Number
        },
        arith: {
            type: Number
        },
        width: {
            type: String
        },
        height: {
            type: String
        },
        fontSize: {
            type: String
        },
        codeLength: {
            type: Number
        },
        mode: {
            type: String
        },
        vOffset: {
            type: Number
        },
        vSpace: {
            type: Number
        },
        explain: {
            type: String
        },
        imgUrl: {
            type: String
        },
        imgName: {
            type: Array
        },
        imgSize: {
            type: Object
        },
        blockSize: {
            type: Object
        },
        barSize: {
            type: Object
        },
        //默认的文字数量
        defaultNum: {
            type: Number
        },
        //校对的文字数量
        checkNum: {
            type: Number
        }
    },
    data() {
        return {
            // 内部类型
            verifyType: undefined,
            // 所用组件类型
            componentType: undefined
        };
    },
    methods: {
        /**
         * i18n
         * @description 兼容vue-i18n 调用$t来转换ok
         * @param {String} text-被转换的目标
         * @return {String} i18n的结果
         * */
        i18n(text) {
            if (this.$t) {
                return this.$t(text);
            } else {
                // 兼容不存在的语言
                let i18n = this.$options.i18n.messages[this.locale] || this.$options.i18n.messages['en-US'];
                return i18n[text];
            }
        },
        /**
         * checkCode
         * @description 判断验证码
         * */
        checkCode() {
            if (this.instance.checkCode) {
                this.instance.checkCode();
            }
        },
        /**
         * refresh
         * @description 刷新
         * */
        refresh() {
            if (this.instance.refresh) {
                this.instance.refresh();
            }
        }

    },
    computed: {
        instance() {
            return this.$refs.instance || {};
        }
    },
    watch: {
        type: {
            immediate: true,
            handler(type) {
                switch (type.toString()) {
                    case 'picture':
                        this.verifyType = '1';
                        this.componentType = 'VerifyCode';
                        break;
                    case '1':
                        this.verifyType = '1';
                        this.componentType = 'VerifyCode';
                        break;
                    case 'compute':
                        this.verifyType = '2';
                        this.componentType = 'VerifyCode';
                        break;
                    case '2':
                        this.verifyType = '2';
                        this.componentType = 'VerifyCode';
                        break;
                    case 'slide':
                        this.verifyType = '1';
                        this.componentType = 'VerifySlide';
                        break;
                    case '3':
                        this.verifyType = '1';
                        this.componentType = 'VerifySlide';
                        break;
                    case 'puzzle':
                        this.verifyType = '2';
                        this.componentType = 'VerifySlide';
                        break;
                    case '4':
                        this.verifyType = '2';
                        this.componentType = 'VerifySlide';
                        break;
                    case 'pick':
                        this.verifyType = '';
                        this.componentType = 'VerifyPoints';
                        break;
                    case '5':
                        this.verifyType = '';
                        this.componentType = 'VerifyPoints';
                        break;
                    default:
                        this.verifyType = undefined;
                        this.componentType = undefined;
                        console.error('Unsupported Type:' + type);
                }
            }
        }
    },
    components: {
        VerifyCode: __WEBPACK_IMPORTED_MODULE_0__Verify_VerifyCode___default.a,
        VerifySlide: __WEBPACK_IMPORTED_MODULE_1__Verify_VerifySlide___default.a,
        VerifyPoints: __WEBPACK_IMPORTED_MODULE_2__Verify_VerifyPoints___default.a
    },
    i18n: {
        messages: {
            'en-US': {
                ok: 'ok'
            },
            'zh-CN': {
                ok: '确定'
            }
        }
    }
});

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(502);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Code
 * @description 常规的图片文字识别或者数字计算
 * */


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VerifyCode',
    props: {
        type: {
            type: String,
            default: '1'
        },
        //位数，仅在type=2时生效
        figure: {
            type: Number,
            default: 100
        },
        //算法，支持加减乘，0为随机，仅在type=2时生效
        arith: {
            type: Number,
            default: 0
        },
        width: {
            type: String,
            default: '200px'
        },
        height: {
            type: String,
            default: '60px'
        },
        fontSize: {
            type: String,
            default: '30px'
        },
        codeLength: {
            type: Number,
            default: 6
        }
    },
    data() {
        return {
            isEnd: false,
            // 输入的值
            inputValue: '',
            // 颜色
            containerBackgroundColor: '#fff',
            containerColor: '#fff',

            codeChose: '', // 应该输入的code
            codeShow: [] // 显示用的
        };
    },
    methods: {
        init() {
            this.setCode();

            this.$parent.$emit('ready', this);
        },

        /**
         * setCode
         * @description 设置验证码
         * */
        setCode() {
            if (this.isEnd == false) {

                this.containerBackgroundColor = __WEBPACK_IMPORTED_MODULE_0__lib_util__["c" /* _code_color1 */][Math.floor(Math.random() * 3)];
                this.containerColor = __WEBPACK_IMPORTED_MODULE_0__lib_util__["b" /* _code_color2 */][Math.floor(Math.random() * 5)];

                this.inputValue = '';

                this.codeShow = [];
                this.codeChose = '';

                if (this.type === '1') {
                    //普通验证码 图片选择
                    for (var i = 0; i < this.codeLength; i++) {
                        var charNum = Math.floor(Math.random() * 52);
                        var tmpStyle = charNum % 2 == 0 ? "font-style:italic;margin-right: 10px" : "font-weight:bolder";
                        tmpStyle += Math.floor(Math.random() * 2) == 1 ? "font-weight:bolder" : "";

                        this.codeChose += __WEBPACK_IMPORTED_MODULE_0__lib_util__["d" /* _code_chars */][charNum];
                        this.codeShow.push({
                            style: tmpStyle,
                            char: __WEBPACK_IMPORTED_MODULE_0__lib_util__["d" /* _code_chars */][charNum]
                        });
                    }
                } else if (this.type === '2') {
                    // 算法验证码
                    var num1 = Math.floor(Math.random() * this.figure);
                    var num2 = Math.floor(Math.random() * this.figure);

                    let codeShow = '';

                    if (this.arith == 0) {
                        var tmparith = Math.floor(Math.random() * 3);
                    }

                    switch (tmparith) {
                        case 1:
                            this.codeChose = parseInt(num1) + parseInt(num2);
                            codeShow = num1 + ' + ' + num2 + ' = ?';
                            break;
                        case 2:
                            if (parseInt(num1) < parseInt(num2)) {
                                var tmpnum = num1;
                                num1 = num2;
                                num2 = tmpnum;
                            }
                            this.codeChose = parseInt(num1) - parseInt(num2);
                            codeShow = num1 + ' - ' + num2 + ' = ?';
                            break;
                        default:
                            this.codeChose = parseInt(num1) * parseInt(num2);
                            codeShow = num1 + ' × ' + num2 + ' = ?';
                            break;
                    }

                    this.codeShow = codeShow.split(''); // 转数组
                }
            }
        },
        /**
         * checkCode
         * @description 验证验证码
         * */
        checkCode() {
            let inputValue;
            let codeChose;
            if (this.type === '1') {
                //普通验证码
                inputValue = this.inputValue.toUpperCase();
                codeChose = this.codeChose.toUpperCase();
            } else {
                inputValue = this.inputValue;
                codeChose = this.codeChose;
            }

            console.log(inputValue);
            console.log(codeChose);
            console.log(inputValue == codeChose);

            if (inputValue == codeChose) {
                this.isEnd = true;
                this.$parent.$emit('success', this);
            } else {
                this.$parent.$emit('error', this);
                this.setCode();
            }
        },
        /**
         * refresh
         * @description 刷新
         * */
        refresh() {
            this.isEnd = false;
            this.inputValue = '';
            this.setCode();
        }
    },
    watch: {
        // type变化则全面刷新
        type: {
            immediate: true,
            handler() {
                this.init();
            }
        }
    },
    mounted() {
        // 禁止拖拽
        this.$el.onselectstart = function () {
            return false;
        };
    },
    i18n: {
        messages: {
            'en-US': {},
            'zh-CN': {}
        }
    }
});

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(502);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * VerifyPoints
 * @description 点选
 * */



function getOffset(Node, offset = { top: 0, left: 0 }) {
    if (Node == document.body) {
        //当该节点为body节点时，结束递归
        return offset;
    }

    offset.top += Node.offsetTop;
    offset.left += Node.offsetLeft;

    return getOffset(Node.parentNode, offset); //向上累加offset里的值
}

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VerifyPoints',
    props: {
        //弹出式pop，固定fixed
        mode: {
            type: String,
            default: 'fixed'
        },
        //默认的文字数量
        defaultNum: {
            type: Number,
            default: 4
        },
        //校对的文字数量
        checkNum: {
            type: Number,
            default: 3
        },
        //间隔
        vSpace: {
            type: Number,
            default: 5
        },
        imgUrl: {
            type: String,
            default: 'http://via.placeholder.com/'
        },
        imgName: {
            type: Array,
            default() {
                return ['350x150', '350x450'];
            }
        },
        imgSize: {
            type: Object,
            default() {
                return {
                    width: '400px',
                    height: '200px'
                };
            }
        },
        barSize: {
            type: Object,
            default() {
                return {
                    width: '400px',
                    height: '40px'
                };
            }
        }
    },
    data() {
        return {
            fontPos: [], // 选中的坐标信息
            checkPosArr: [], //用户点击的坐标
            num: 1, //点击的记数
            imgRand: 0, // //随机的背景图片
            setSize: {
                imgHeight: 0,
                imgWidth: 0,
                barHeight: 0,
                barWidth: 0
            },
            showImage: true,
            tempPoints: [],
            text: '',
            barAreaColor: undefined,
            barAreaBorderColor: undefined,
            showRefresh: true,
            bindingClick: true
        };
    },
    computed: {
        resetSize() {
            return __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* resetSize */];
        }
    },
    methods: {
        init() {
            //加载页面
            this.fontPos.splice(0, this.fontPos.length);
            this.checkPosArr.splice(0, this.checkPosArr.length);
            this.num = 1;
            this.imgRand = Math.floor(Math.random() * this.imgName.length);

            this.$nextTick(() => {
                this.setSize = this.resetSize(this); //重新设置宽度高度
                this.refresh();
                this.$parent.$emit('ready', this);
            });
        },
        canvasClick(e) {
            this.checkPosArr.push(this.getMousePos(this.$refs.canvas, e));
            if (this.num == this.checkNum) {

                this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e));
                setTimeout(() => {
                    var flag = this.comparePos(this.fontPos, this.checkPosArr);
                    if (flag == false) {
                        //验证失败
                        this.$parent.$emit('error', this);
                        this.barAreaColor = '#d9534f';
                        this.barAreaBorderColor = '#d9534f';
                        this.text = '验证失败';

                        setTimeout(() => {
                            this.refresh();
                        }, 400);
                    } else {
                        //验证成功
                        this.barAreaColor = '#4cae4c';
                        this.barAreaBorderColor = '#5cb85c';
                        this.text = '验证成功';
                        this.showRefresh = false;
                        this.bindingClick = false;
                        this.$parent.$emit('success', this);
                    }
                }, 400);
            }

            if (this.num < this.checkNum) {
                this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e));
            }
        },
        //绘制合成的图片
        drawImg: function (obj, img) {
            //准备canvas环境
            var canvas = this.$refs.canvas;
            var ctx = canvas.getContext("2d");

            // 绘制图片
            ctx.drawImage(img, 0, 0, parseInt(this.setSize.imgWidth), parseInt(this.setSize.imgHeight));

            // 绘制水印
            var fontSizeArr = ['italic small-caps bold 20px microsoft yahei', 'small-caps normal 25px arial', '34px microsoft yahei'];
            var fontStr = '天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩体率宾归王'; //不重复的汉字


            var fontChars = [];

            var avg = Math.floor(parseInt(this.setSize.imgWidth) / (parseInt(this.defaultNum) + 1));
            var tmp_index = '';
            var color2Num = Math.floor(Math.random() * 5);

            for (var i = 1; i <= this.defaultNum; i++) {

                fontChars[i - 1] = this.getChars(fontStr, fontChars);

                tmp_index = Math.floor(Math.random() * 3);
                ctx.font = fontSizeArr[tmp_index];
                ctx.fillStyle = __WEBPACK_IMPORTED_MODULE_0__lib_util__["b" /* _code_color2 */][color2Num];

                if (Math.floor(Math.random() * 2) == 1) {
                    var tmp_y = Math.floor(parseInt(this.setSize.imgHeight) / 2) + tmp_index * 20 + 20;
                } else {
                    var tmp_y = Math.floor(parseInt(this.setSize.imgHeight) / 2) - tmp_index * 20;
                }

                ctx.fillText(fontChars[i - 1], avg * i, tmp_y);
                this.fontPos[i - 1] = { 'char': fontChars[i - 1], 'x': avg * i, 'y': tmp_y };
            }

            for (var i = 0; i < this.defaultNum - this.checkNum; i++) {
                this.shuffle(this.fontPos).pop();
            }

            var msgStr = '';
            for (var i = 0; i < this.fontPos.length; i++) {
                msgStr += this.fontPos[i].char + ',';
            }

            this.text = '请顺序点击【' + msgStr.substring(0, msgStr.length - 1) + '】';

            return this.fontPos;
        },
        //获取坐标
        getMousePos: function (obj, e) {
            var x = e.offsetX - 5;
            var y = e.offsetY - 5;

            return { x, y };
        },
        //递归去重
        getChars: function (fontStr, fontChars) {

            var tmp_rand = parseInt(Math.floor(Math.random() * fontStr.length));
            if (tmp_rand > 0) {
                tmp_rand = tmp_rand - 1;
            }

            var tmp_char = fontStr.charAt(tmp_rand);
            if (fontChars.indexOf(tmp_char) == -1) {
                return tmp_char;
            } else {
                return this.getChars(fontStr, fontChars);
            }
        },
        //洗牌数组
        shuffle: function (arr) {
            var m = arr.length,
                i;
            var tmpF;
            while (m) {
                i = Math.random() * m-- >>> 0;
                tmpF = arr[m];
                arr[m] = arr[i];
                arr[i] = tmpF;
                //[arr[m], arr[i]] = [arr[i], arr[m]];	//低版本浏览器不支持此写法
            }
            return arr;
        },
        //创建坐标点
        createPoint: function (pos) {
            this.tempPoints.push(Object.assign({}, pos));
            return ++this.num;
        },
        comparePos: function (fontPos, checkPosArr) {
            var flag = true;
            for (var i = 0; i < fontPos.length; i++) {
                if (!(parseInt(checkPosArr[i].x) + 40 > fontPos[i].x && parseInt(checkPosArr[i].x) - 40 < fontPos[i].x && parseInt(checkPosArr[i].y) + 40 > fontPos[i].y && parseInt(checkPosArr[i].y) - 40 < fontPos[i].y)) {
                    flag = false;
                    break;
                }
            }

            return flag;
        },
        refresh: function () {
            this.tempPoints.splice(0, this.tempPoints.length);
            this.barAreaColor = '#000';
            this.barAreaBorderColor = '#ddd';
            this.bindingClick = true;

            this.fontPos.splice(0, this.fontPos.length);
            this.checkPosArr.splice(0, this.checkPosArr.length);
            this.num = 1;

            this.imgRand = Math.floor(Math.random() * this.imgName.length); //随机的背景图片
            var img = new Image();
            img.src = this.imgUrl + this.imgName[this.imgRand];
            // 加载完成开始绘制
            var _this = this;
            img.onload = function (e) {
                _this.$nextTick(() => {
                    _this.fontPos = _this.drawImg(_this.$el, this);
                });
            };

            this.text = '验证失败';
            this.showRefresh = true;
        }
    },
    watch: {
        // type变化则全面刷新
        type: {
            immediate: true,
            handler() {
                this.init();
            }
        }
    },
    mounted() {
        // 禁止拖拽
        this.$el.onselectstart = function () {
            return false;
        };
    },
    i18n: {
        messages: {
            'en-US': {},
            'zh-CN': {}
        }
    }
});

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(502);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * VerifySlide
 * @description 滑块
 * */


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VerifySlide',
    props: {
        type: {
            type: String,
            default: '1'
        },
        //弹出式pop，固定fixed
        mode: {
            type: String,
            default: 'fixed'
        },
        vOffset: {
            type: Number,
            default: 5
        },
        vSpace: {
            type: Number,
            default: 5
        },
        explain: {
            type: String,
            default: '向右滑动完成验证'
        },
        imgUrl: {
            type: String,
            default: 'http://via.placeholder.com/'
        },
        imgName: {
            type: Array,
            default() {
                return ['350x150', '350x450'];
            }
        },
        imgSize: {
            type: Object,
            default() {
                return {
                    width: '400px',
                    height: '200px'
                };
            }
        },
        blockSize: {
            type: Object,
            default() {
                return {
                    width: '50px',
                    height: '50px'
                };
            }
        },
        barSize: {
            type: Object,
            default() {
                return {
                    width: '400px',
                    height: '40px'
                };
            }
        }
    },
    data() {
        return {
            imgRand: 0,
            text: '',
            setSize: {
                imgHeight: 0,
                imgWidth: 0,
                barHeight: 0,
                barWidth: 0
            },
            top: 0,
            left: 0,
            showImage: true,
            moveBlockLeft: undefined,
            leftBarWidth: undefined,
            // 移动中样式
            moveBlockBackgroundColor: undefined,
            leftBarBorderColor: '#ddd',
            iconColor: undefined,
            iconClass: 'icon-right',
            status: false, //鼠标状态
            isEnd: false, //是够验证完成
            showRefresh: true,
            transitionLeft: '',
            transitionWidth: ''
        };
    },
    computed: {
        barArea() {
            return this.$el.querySelector('.verify-bar-area');
        },
        resetSize() {
            return __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* resetSize */];
        }
    },
    methods: {
        init() {
            this.text = this.explain;
            this.imgRand = Math.floor(Math.random() * this.imgName.length); //随机的背景图片

            this.$nextTick(() => {
                let setSize = this.resetSize(this); //重新设置宽度高度
                // 监听的问题
                for (let key in setSize) {
                    this.$set(this.setSize, key, setSize[key]);
                }

                this.randSet();

                this.$parent.$emit('ready', this);
            });

            var _this = this;

            window.removeEventListener("touchmove", function (e) {
                _this.move(e);
            });
            window.removeEventListener("mousemove", function (e) {
                _this.move(e);
            });

            //鼠标松开
            window.removeEventListener("touchend", function () {
                _this.end();
            });
            window.removeEventListener("mouseup", function () {
                _this.end();
            });

            window.addEventListener("touchmove", function (e) {
                _this.move(e);
            });
            window.addEventListener("mousemove", function (e) {
                _this.move(e);
            });

            //鼠标松开
            window.addEventListener("touchend", function () {
                _this.end();
            });
            window.addEventListener("mouseup", function () {
                _this.end();
            });
        },

        //鼠标按下
        start: function (e) {
            if (this.isEnd == false) {
                this.text = '';
                this.moveBlockBackgroundColor = '#337ab7';
                this.leftBarBorderColor = '#337AB7';
                this.iconColor = '#fff';
                e.stopPropagation();
                this.status = true;
            }
        },
        //鼠标移动
        move: function (e) {
            if (this.status && this.isEnd == false) {
                //                    if (this.mode == 'pop') {
                //                        this.showImage = true
                //                    }

                if (!e.touches) {
                    //兼容移动端
                    var x = e.clientX;
                } else {
                    //兼容PC端
                    var x = e.touches[0].pageX;
                }
                var bar_area_left = this.getLeft(this.barArea);
                var move_block_left = x - bar_area_left; //小方块相对于父元素的left值

                if (this.type !== '1') {
                    //图片滑动
                    if (move_block_left >= this.barArea.offsetWidth - parseInt(parseInt(this.blockSize.width) / 2) - 2) {
                        move_block_left = this.barArea.offsetWidth - parseInt(parseInt(this.blockSize.width) / 2) - 2;
                    }
                } else {
                    //普通滑动
                    if (move_block_left >= this.barArea.offsetWidth - parseInt(parseInt(this.barSize.height) / 2) + 3) {
                        this.text = '松开验证';
                        move_block_left = this.barArea.offsetWidth - parseInt(parseInt(this.barSize.height) / 2) + 3;
                    } else {
                        this.text = '';
                    }
                }

                if (move_block_left <= 0) {
                    move_block_left = parseInt(parseInt(this.blockSize.width) / 2);
                }

                //拖动后小方块的left值
                this.moveBlockLeft = move_block_left - parseInt(parseInt(this.blockSize.width) / 2) + "px";
                this.leftBarWidth = move_block_left - parseInt(parseInt(this.blockSize.width) / 2) + "px";
            }
        },

        //鼠标松开
        end: function () {
            var _this = this;

            //                判断是否重合
            if (this.status && this.isEnd == false) {

                if (this.type !== '1') {
                    //图片滑动

                    var vOffset = parseInt(this.vOffset);
                    if (parseInt(this.left) >= parseInt((this.moveBlockLeft || '').replace('px', '')) - vOffset && parseInt(this.left) <= parseInt((this.moveBlockLeft || '').replace('px', '')) + vOffset) {
                        this.moveBlockBackgroundColor = '#5cb85c';
                        //                            this.htmlDoms.left_bar.css({'border-color': '#5cb85c', 'background-color': '#fff'});
                        this.leftBarBorderColor = '#5cb85c';
                        this.iconColor = '#fff';
                        this.iconClass = 'icon-check';
                        this.showRefresh = false;
                        this.isEnd = true;
                        this.$parent.$emit('success', this);
                    } else {
                        this.moveBlockBackgroundColor = '#d9534f';
                        this.leftBarBorderColor = '#d9534f';
                        this.iconColor = '#fff';
                        this.iconClass = 'icon-close';

                        setTimeout(function () {
                            _this.refresh();
                        }, 400);

                        this.$parent.$emit('error', this);
                    }
                } else {
                    //普通滑动

                    if (parseInt((this.moveBlockLeft || '').replace('px', '')) >= parseInt(this.setSize.barWidth) - parseInt(this.barSize.height) - parseInt(this.vOffset)) {
                        this.moveBlockBackgroundColor = '#5cb85c';
                        //                            this.htmlDoms.left_bar.css({
                        //                                'color': '#4cae4c',
                        //                                'border-color': '#5cb85c',
                        //                                'background-color': '#fff'
                        //                            });
                        this.leftBarBorderColor = '#5cb85c';
                        this.iconColor = '#fff';
                        this.iconClass = 'icon-check';
                        this.showRefresh = false;
                        this.text = '验证成功';
                        this.isEnd = true;
                        this.$parent.$emit('success', this);
                    } else {
                        this.text = '';
                        this.moveBlockBackgroundColor = '#d9534f';
                        this.leftBarBorderColor = '#d9534f';
                        this.iconColor = '#fff';
                        this.iconClass = 'icon-close';
                        this.isEnd = true;

                        setTimeout(function () {
                            _this.text = '';
                            _this.refresh();
                            _this.isEnd = false;
                        }, 400);

                        this.$parent.$emit('error', this);
                    }
                }

                this.status = false;
            }
        },

        //随机出生点位
        randSet: function () {
            var rand1 = Math.floor(Math.random() * 9 + 1);
            var rand2 = Math.floor(Math.random() * 9 + 1);
            var top = rand1 * parseInt(this.setSize.imgHeight) / 15 + parseInt(this.setSize.imgHeight) * 0.1;
            var left = rand2 * parseInt(this.setSize.imgWidth) / 15 + parseInt(this.setSize.imgWidth) * 0.1;

            this.top = top;
            this.left = left;
        },

        refresh: function () {
            this.showRefresh = true;
            this.text = '';

            this.transitionLeft = 'left .3s';
            this.moveBlockLeft = 0;

            this.leftBarWidth = undefined;
            this.transitionWidth = 'width .3s';

            this.leftBarBorderColor = '#ddd';
            this.moveBlockBackgroundColor = '#fff';
            this.iconColor = '#000';
            this.iconClass = 'icon-right';

            this.randSet();
            this.imgRand = Math.floor(Math.random() * this.imgName.length); //随机的背景图片

            // @todo 检查重启
            //                this.$element.find('.verify-img-panel').css({'background': 'url('+ this.options.imgUrl +this.options.imgName[this.img_rand]+')', 'background-size': this.setSize.img_width + ' '+ this.setSize.img_height});
            //                this.$element.find('.verify-sub-block').css({'background-image': 'url('+ this.options.imgUrl +this.options.imgName[this.img_rand]+')', 'background-size': this.setSize.img_width + ' '+ this.setSize.img_height});
            //
            this.isEnd = false;

            setTimeout(() => {
                this.transitionWidth = '';
                this.transitionLeft = '';
                this.text = this.explain;
            }, 300);
        },

        //获取left值
        getLeft: function (node) {
            let leftValue = 0;
            while (node) {
                leftValue += node.offsetLeft;
                node = node.offsetParent;
            }
            let finalvalue = leftValue;
            return finalvalue;
        }
    },
    watch: {
        // type变化则全面刷新
        type: {
            immediate: true,
            handler() {
                this.init();
            }
        }
    },
    mounted() {
        // 禁止拖拽
        this.$el.onselectstart = function () {
            return false;
        };
    },
    i18n: {
        messages: {
            'en-US': {},
            'zh-CN': {}
        }
    }
});

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_verify__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_verify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_verify__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            role: '超级管理员',
            formItem: {
                username: '',
                password: '',
                code: ''
            },
            ruleValidation: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }],
                code: [{
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }]
            },
            imgSize: {
                width: '398px',
                height: '100px'
            },
            barSize: {
                width: '398px',
                height: '40px'
            },
            imgUrl: 'dist/images/validates/',
            imgName: ['1.jpg', '2.png'],
            rememberMe: false,
            validation: true,
            passwdChanged: false
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                if (!valid) {
                    return;
                }

                this.loginPost();
            });
        },
        loginPost() {
            this.$http.post(this.$url.LOGIN, this.formItem).then((response => {
                console.log(response.data);
                //set user role
                const userinfo = {
                    username: response.data.userName,
                    role: this.role || response.data.sys_role_name,
                    passwdResetted: !!response.data.pdstatus
                };
                this.$store.commit('setUser', userinfo);
                localStorage.setItem('loginUser', JSON.stringify(userinfo));

                this.reset();
                if (!userinfo.passwdResetted) {
                    return this.$router.push({
                        path: '/resetPasswd'
                    });
                }
                return this.$router.push({
                    path: '/overview'
                });
            }).bind(this));
        },
        reset() {
            this.$refs.loginForm.resetFields();
        }
    },
    computed: {
        panelStyle() {
            let top = window.innerHeight < 530 ? 10 : window.innerHeight - 530;
            if (top > 200) {
                top = 200;
            }
            return {
                'padding-top': `${top}px`
            };
        }
    },
    components: {
        Verify: __WEBPACK_IMPORTED_MODULE_0_vue2_verify___default.a
    }
});

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d3e0e6774b104f268cba7d3c405c75b5.png";

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(873)

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(589),
  /* template */
  __webpack_require__(894),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/node_modules/vue2-verify/src/components/Verify.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Verify.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-733bc690", Component.options)
  } else {
    hotAPI.reload("data-v-733bc690", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(590),
  /* template */
  __webpack_require__(893),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/node_modules/vue2-verify/src/components/Verify/VerifyCode.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VerifyCode.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-692694b5", Component.options)
  } else {
    hotAPI.reload("data-v-692694b5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(591),
  /* template */
  __webpack_require__(895),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/node_modules/vue2-verify/src/components/Verify/VerifyPoints.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VerifyPoints.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c35ecab", Component.options)
  } else {
    hotAPI.reload("data-v-7c35ecab", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(148)(
  /* script */
  __webpack_require__(592),
  /* template */
  __webpack_require__(890),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/panwu/Desktop/panwu/elevator/node_modules/vue2-verify/src/components/Verify/VerifySlide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VerifySlide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bffd9ce", Component.options)
  } else {
    hotAPI.reload("data-v-5bffd9ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "position": "relative"
    },
    on: {
      "mouseover": function($event) {
        _vm.showImage = true
      },
      "mouseout": function($event) {
        _vm.showImage = true
      }
    }
  }, [(_vm.type === '2') ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showImage),
      expression: "showImage"
    }],
    staticClass: "verify-img-out",
    style: ({
      display: _vm.mode === 'pop' ? 'none' : undefined,
      position: _vm.mode === 'pop' ? 'absolute' : 'relative',
      height: (parseInt(_vm.setSize.imgHeight) + _vm.vSpace) + 'px',
      bottom: _vm.mode === 'pop' ? '42px' : undefined
    }),
    on: {
      "mouseover": function($event) {
        _vm.showImage = true
      },
      "mouseout": function($event) {
        _vm.showImage = true
      }
    }
  }, [_c('div', {
    staticClass: "verify-img-panel",
    style: ({
      width: _vm.setSize.imgWidth,
      height: _vm.setSize.imgHeight,
      background: 'url(' + _vm.imgUrl + _vm.imgName[_vm.imgRand] + ')',
      'background-size': _vm.setSize.imgWidth + ' ' + _vm.setSize.imgHeight
    })
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showRefresh),
      expression: "showRefresh"
    }],
    staticClass: "verify-refresh",
    on: {
      "click": _vm.refresh
    }
  }, [_c('i', {
    staticClass: "iconfont icon-refresh"
  })]), _vm._v(" "), _c('div', {
    staticClass: "verify-gap",
    style: ({
      'width': _vm.blockSize.width,
      'height': _vm.blockSize.height,
      top: _vm.top + 'px',
      left: _vm.left + 'px'
    })
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "verify-bar-area",
    style: ({
      width: _vm.setSize.barWidth,
      height: _vm.barSize.height,
      'line-height': _vm.barSize.height
    })
  }, [_c('span', {
    staticClass: "verify-msg",
    domProps: {
      "textContent": _vm._s(_vm.text)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "verify-left-bar",
    style: ({
      width: (_vm.leftBarWidth !== undefined) ? _vm.leftBarWidth : _vm.barSize.height,
      height: _vm.barSize.height,
      'border-color': _vm.leftBarBorderColor,
      transaction: _vm.transitionWidth
    })
  }, [_c('span', {
    staticClass: "verify-msg"
  }), _vm._v(" "), _c('div', {
    staticClass: "verify-move-block",
    style: ({
      width: _vm.barSize.height,
      height: _vm.barSize.height,
      'background-color': _vm.moveBlockBackgroundColor,
      left: _vm.moveBlockLeft,
      transition: _vm.transitionLeft
    }),
    on: {
      "touchstart": _vm.start,
      "mousedown": _vm.start
    }
  }, [_c('i', {
    class: ['verify-icon iconfont', _vm.iconClass],
    style: ({
      color: _vm.iconColor
    })
  }), _vm._v(" "), (_vm.type === '2') ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mode !== 'pop' && _vm.showImage),
      expression: "mode !== 'pop' && showImage"
    }],
    staticClass: "verify-sub-block",
    style: ({
      'width': _vm.blockSize.width,
      'height': _vm.blockSize.height,
      'top': '-' + (parseInt(_vm.setSize.imgHeight) - _vm.top + _vm.vSpace) + 'px',
      'background-image': 'url(' + _vm.imgUrl + _vm.imgName[this.imgRand] + ')',
      'background-size': _vm.setSize.imgWidth + ' ' + _vm.setSize.imgHeight,
      'background-position-y': '-' + _vm.top + 'px',
      'background-position-x': '-' + _vm.left + 'px'
    })
  }) : _vm._e()])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5bffd9ce", module.exports)
  }
}

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cerify-code-panel"
  }, [_c('div', {
    staticClass: "verify-code",
    style: ({
      'width': _vm.width,
      'height': _vm.height,
      'line-height': _vm.height,
      'font-size': _vm.fontSize,
      'background-color': _vm.containerBackgroundColor,
      'color': _vm.containerColor
    }),
    on: {
      "click": _vm.setCode
    }
  }, _vm._l((_vm.codeShow), function(code) {
    return _c('span', {
      style: (code.style)
    }, [_vm._v("\n            " + _vm._s(code.char || code) + "\n        ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "verify-code-area",
    style: ({
      'width': _vm.width
    })
  }, [_c('div', {
    staticClass: "verify-input-area"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    staticClass: "varify-input-code",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.inputValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputValue = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "verify-change-area",
    on: {
      "click": _vm.setCode
    }
  }, [_c('a', {
    staticClass: "verify-change-code"
  }, [_vm._v("换一张")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-692694b5", module.exports)
  }
}

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.componentType) ? _c(_vm.componentType, {
    ref: "instance",
    tag: "components",
    attrs: {
      "type": _vm.verifyType,
      "figure": _vm.figure,
      "arith": _vm.arith,
      "width": _vm.width,
      "height": _vm.height,
      "fontSize": _vm.fontSize,
      "codeLength": _vm.codeLength,
      "mode": _vm.mode,
      "vOffset": _vm.vOffset,
      "vSpace": _vm.vSpace,
      "explain": _vm.explain,
      "imgUrl": _vm.imgUrl,
      "imgName": _vm.imgName,
      "imgSize": _vm.imgSize,
      "blockSize": _vm.blockSize,
      "barSize": _vm.barSize,
      "defaultNum": _vm.defaultNum,
      "checkNum": _vm.checkNum
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "0",
      "height": "0"
    },
    on: {
      "click": _vm.checkCode
    }
  }, [_vm._t("check", [_c('button', {
    staticClass: "verify-btn"
  }, [_vm._v(_vm._s(_vm.i18n('ok')))])])], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-733bc690", module.exports)
  }
}

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "position": "relative"
    },
    on: {
      "mouseover": function($event) {
        _vm.mode === 'pop' ? (_vm.showImage = true) : undefined
      },
      "mouseout": function($event) {
        _vm.mode === 'pop' ? (_vm.showImage = false) : undefined
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showImage),
      expression: "showImage"
    }],
    staticClass: "verify-img-out",
    style: (_vm.mode === 'pop' ? {
      display: 'none',
      position: 'absolute',
      bottom: '42px',
      height: parseInt(_vm.setSize.imgHeight) + _vm.vSpace + 'px'
    } : {
      position: 'relative',
      height: parseInt(_vm.setSize.imgHeight) + _vm.vSpace + 'px'
    }),
    on: {
      "mouseover": function($event) {
        _vm.mode === 'pop' ? (_vm.showImage = true) : undefined
      },
      "mouseout": function($event) {
        _vm.mode === 'pop' ? (_vm.showImage = false) : undefined
      }
    }
  }, [_c('div', {
    staticClass: "verify-img-panel",
    style: ({
      'width': _vm.setSize.imgWidth,
      'height': _vm.setSize.imgHeight,
      'background-size': _vm.setSize.imgWidth + ' ' + _vm.setSize.imgHeight,
      'margin-bottom': _vm.vSpace + 'px'
    })
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showRefresh),
      expression: "showRefresh"
    }],
    staticClass: "verify-refresh",
    staticStyle: {
      "z-index": "3"
    },
    on: {
      "click": _vm.refresh
    }
  }, [_c('i', {
    staticClass: "iconfont icon-refresh"
  })]), _vm._v(" "), _c('canvas', {
    ref: "canvas",
    attrs: {
      "width": _vm.setSize.imgWidth,
      "height": _vm.setSize.imgHeight
    },
    on: {
      "click": function($event) {
        _vm.bindingClick ? _vm.canvasClick($event) : undefined
      }
    }
  }), _vm._v(" "), _vm._l((_vm.tempPoints), function(tempPoint, index) {
    return _c('div', {
      key: index,
      staticClass: "point-area",
      style: ({
        'background-color': '#1abd6c',
        color: '#fff',
        'z-index': 9999,
        width: '30px',
        height: '30px',
        'text-align': 'center',
        'line-height': '30px',
        'border-radius': '50%',
        position: 'absolute',
        top: parseInt(tempPoint.y - 10) + 'px',
        left: parseInt(tempPoint.x - 10) + 'px'
      })
    }, [_vm._v("\n                " + _vm._s(index + 1) + "\n            ")])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "verify-bar-area",
    style: ({
      'width': this.barSize.width,
      'height': this.barSize.height,
      'color': this.barAreaColor,
      'border-color': this.barAreaBorderColor,
      'line-height': this.barSize.height
    })
  }, [_c('span', {
    staticClass: "verify-msg"
  }, [_vm._v(_vm._s(_vm.text))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7c35ecab", module.exports)
  }
}

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-frame",
    style: (_vm.panelStyle)
  }, [_c('div', {
    staticClass: "login-panel"
  }, [_c('Form', {
    ref: "loginForm",
    attrs: {
      "model": _vm.formItem,
      "label-width": 80,
      "rules": _vm.ruleValidation
    }
  }, [_c('div', {
    staticClass: "login-title"
  }, [_c('span', [_vm._v("电梯动态监测系统")])]), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "username"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "size": "large",
      "prefix": "ios-person",
      "placeholder": "用户名"
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
      "prop": "password"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "password",
      "size": "large",
      "prefix": "ios-lock",
      "placeholder": "密码"
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
      "prop": "code"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "size": "large",
      "prefix": "ios-keypad",
      "placeholder": "验证码"
    },
    model: {
      value: (_vm.formItem.code),
      callback: function($$v) {
        _vm.$set(_vm.formItem, "code", $$v)
      },
      expression: "formItem.code"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "code",
    attrs: {
      "src": __webpack_require__(880),
      "alt": ""
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Checkbox', {
    staticStyle: {
      "color": "#fff"
    },
    model: {
      value: (_vm.rememberMe),
      callback: function($$v) {
        _vm.rememberMe = $$v
      },
      expression: "rememberMe"
    }
  }, [_vm._v("记住密码")])], 1), _vm._v(" "), _c('FormItem', [_c('RadioGroup', {
    staticStyle: {
      "color": "#fff"
    },
    model: {
      value: (_vm.role),
      callback: function($$v) {
        _vm.role = $$v
      },
      expression: "role"
    }
  }, [_c('Radio', {
    attrs: {
      "label": "超级管理员"
    }
  }), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "管理员"
    }
  }), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "质监局"
    }
  }), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "监控中心"
    }
  })], 1)], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登陆")])], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ffdf956c", module.exports)
  }
}

/***/ })

});