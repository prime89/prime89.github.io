<template>
    <HeaderMenu>
        <div>
        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar">
            <FormItem label="区域">
                <Cascader :data="provinceData" change-on-select v-model="search.zone" style="width: 300px;"></Cascader>
            </FormItem>
            <FormItem label="电梯注册码" :label-width="80">
                <Input type="text" v-model="search.registerCode"></Input>
            </FormItem>
            <FormItem label="安装人员">
                <Input type="text" v-model="search.installer"></Input>
            </FormItem>
            <FormItem label="状态">
                <Select v-model="search.status" style="width:200px">
                    <Option value="" key="">全部</Option>
                    <Option value="1" key="1">在线</Option>
                    <Option value="0" key="0">离线</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="goPage(1)">查询</Button>
            </FormItem>
        </Form>

        <div class="main-content">
            <div class="view-frame" :style="viewFrameStyle">
                <div class="view"
                @click="viewDetail(item)"
                :class="{
                    'up': item.runningState.running == 1,
                    'stop': item.runningState.running == 0,
                    'down': item.runningState.running == 2,
                    'open': item.runningState.door == 1,
                    'close': item.runningState.door == 0,
                    'online': item.runningState.online == 1,
                    'offline': item.runningState.online == 0,
                    'alarm': item.runningState.alarm == 1,
                    'non-alarm': item.runningState.alarm == 0,
                    'overload': item.runningState.overload == 1,
                    'en-overload': item.runningState.overload == 2,
                    'non-overload': item.runningState.overload == 0,
                }"
                 :style="viewStyle" :key="item.id" v-for="item in elevators">
                    <div class="bg">
                        <div class="inner-body">
                        <div class="floor">
                            <!-- <Led :class="ledCls(item.floor01)"></Led><Led :class="ledCls(item.floor02)"></Led>
                             -->
                             {{item.floor || 0}}
                        </div>

                        <div class="state">
                            <div class="icon running-status"></div>
                            <div class="icon open-status"></div>
                            <div class="icon overload-status"></div>
                        </div>
                        <div class="address">
                            {{item.elvAddress}}
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <Page :current="page" :total="total" :page-size="pageSize"
             @on-page-size-change="changePageSize"
             @on-change="goPage" show-sizer />
        </div>
        </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    import Led from '../components/common/led.vue';
    import provinceData from '../libs/province';
    export default {
        data () {
            return {
                provinceData: provinceData,
                isSearching: false,
                search: {
                    registerCode: '',
                    installer: '',
                    elvAddress: '',
                    status: '',
                    zone: [],
                },
                total: 0,
                page: 1,
                pageSize: 10,//default
                elevators: [],
                ws: null,
                splitWidth: 0,
                num: 0,
            };
        },
        mounted() {
            this.initWs();
            this.goPage(1);
            this.setBlockSize();
            window.onresize = () => {
                this.setBlockSize();
            }
            const self = this;

            let flag1 = 0;
            let flag2 = 0;
            let flag3 = 0;
            let flag4 = 0;
            let flag5 = 0;
            let flag6 = 0;
            setInterval(() => {
                self.updateStatus({
                    running: flag1++%2,
                    door: flag2++%2,
                    online: flag3++%2,
                    alarm: flag4++%2,
                    overload: flag5++%2,
                    floor: flag6++%20,
                    deviceSnCode: 114,
                });
            }, 1000);
        },
        destroyed() {
            window.onresize = null;
            this.ws && this.ws.close();
        },
        computed: {
            viewFrameStyle() {
                const width = (this.splitWidth + 240) * this.num;
                return {
                    width: `${width}px`,
                    margin: 'auto',
                };
            },
            viewStyle() {
                return {
                    width: `${this.splitWidth + 220}px`
                }
            }
        },
        methods: {
            viewDetail(item) {
                this.$router.push({
                    path: '/elevators/' + item.registerCode
                });
            },
            ledCls(floor) {
                const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
                const cls = {};
                cls[arr[floor || 0]] = true;
                return cls;
            },
            setBlockSize () {
                const totalWidth = window.document.body.scrollWidth - 40;
                const num = this.num = Math.floor(totalWidth/240);
                this.splitWidth = (totalWidth - 240 * num)/num;
                console.log(num);
            },
            initWs() {
                const self = this;
                //websocket更新
                let ws = this.ws = new WebSocket('ws://193.112.97.65:28080/auth-web' + this.$url.ws_elevator_detail);
                ws.onopen = function () {}
                // 使用 send() 方法发送数据
                
                // 接收服务端数据时触发事件
                ws.onmessage = function (evt) {
                    let msg;
                    try {
                        msg = JSON.parse(evt.data);
                    } catch(e) {
                        console.log('parse data to json obj error');
                    }
                    console.log(evt);
                    if (msg) {
                        self.updateStatus(msg.data);
                    }
                };
                
                // 断开 web socket 连接成功触发事件
                ws.onclose = function () {
                    console.log("连接已关闭...");

                };
            },
            updateStatus(data) {
                const one = this.elevators.find(e => e.runningState.deviceSnCode == data.deviceSnCode);
                if (!one) {
                    return ;
                } 
                this.$set(one.runningState, 'running', data.running);
                this.$set(one.runningState, 'door', data.door);
                //this.$set(one.runningState, 'online', data.online);
                this.$set(one.runningState, 'alarm', data.alarm);
                this.$set(one.runningState, 'overload', data.overload);
                this.$set(one, 'floor', data.floor);
            },
            goPage (page) {
                this.$http.post(this.$url.ELEVATORLIST, 
                Object.assign({
                    pageNo: page, 
                    pageSize: this.pageSize,
                    userId: this.$store.state.user.id,
                    elvProvince: this.search.zone[0] || '',
                    elvCity: this.search.zone[1] || '',
                    elvArea: this.search.zone[2] || '',
                    }, this.search)).then((response) => {
                    const data = response.data.data;
                    let i = 0;
                    const sncodes = [];
                    this.elevators = (data.elevatorInfoList || []).map(e => {
                        e.runningState = e.runningState? e.runningState : {
                            running: 0,
                            door: "0",
                            online: "0",
                            alarm: "0",
                            overload: "0",
                        };
                        e.floor = e.floor || 1;
                        e.runningState.deviceSnCode && sncodes.push(e.runningState.deviceSnCode);

                        this.ws && this.ws.send(JSON.stringify({
                            type: 'init',
                            version: 1,
                            data: sncodes,
                        }));
                        return e;
                    });
                    
                    this.total = data.total || 0;
                });
            },
            changePageSize (pageSize) {
                this.pageSize = pageSize;
                this.goPage(1);
            }
        },
        components: {
            HeaderMenu,
            Led,
        }
    }
</script>
<style scoped>
    .view-frame{

    }
    .view-frame::after{
        content: '';
        display: block;
        clear: both;
    }
    .view{
        float: left;
        width: 280px;
        height: 310px;
        margin: 10px;
        box-shadow: 0px 0px 3px 0px rgba(54, 204, 173, 1) inset;
        border-radius: 4px;
        padding: 20px 0;
    }
    .view .bg{
        position: relative;
        margin: auto;
        width: 218px;
        height: 100%;
        background: url('../images/u6744.jpg') no-repeat;
        background-size:220px 270px;
    }
    .inner-body{
        height: 100%;
    }
    .offline .inner-body{
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        font-size: 40px;
    
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: rgba(153, 153, 153, 0.8);
    }
    .offline .inner-body:after{
        content: "\e906";        
        position: absolute;
        left: 89px;
        top: 114px;
    }
    .floor{
        position: absolute;
        width: 100%;
        text-align: center;
        color: red;
        font-weight: bold;
        font-size: 24px;
    }
    .state{
        position: absolute;
        display: flex;
        bottom: 30px;
        padding: 10px 42px;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
    }
    .view .icon{
         /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        font-size: 30px;
        margin: auto 10px;
    
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .up .running-status::before{
        content: "\e90b";
        color: #36ccad;
    }
    .down .running-status::before{
        content: "\e902";
        color: #36ccad;
    }
    .stop .running-status::before{
        content: "\e90a";
        color: #777;
    }
    .overload .overload-status::before{
        content: "\e909";
        color: #f96;
    }
    .state .open-status{
        font-size: 26px;
    }
    .state .overload-status{ 
        font-size: 24px;
    }
    .non-overload .overload-status::before{    
        content: "\e905";
        color: #36ccad;
    }
    .en-overload .overload-status::before{
        content: "\e903";
        color: #ff4c4c;
    }
    .open .open-status::before{
        content: "\e908";
        color: #3dcca6;
    }
    .close .open-status::before{
        content: "\e901";
        color: #777;
    }

    .address{
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        color: #000;
    }
    .offline .address {
        color: #fff;
    }

    .offline .state{
        display: none;
    }
    .alarm.view{
        box-shadow: 0px 0px 3px 0px rgb(204, 77, 54) inset;
    }
    .offline.view{
        box-shadow: 0px 0px 3px 0px rgb(194, 193, 193) inset;
    }
    
</style>
