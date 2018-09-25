<template>
    <HeaderMenu>
        <div>
        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar">
            <FormItem label="电梯注册码" :label-width="80">
                <Input type="text" v-model="search.registerCode"></Input>
            </FormItem>
            <FormItem label="安装人员">
                <Input type="text" v-model="search.installer"></Input>
            </FormItem>
            <FormItem label="安装地址">
                <Input type="text" v-model="search.elvAddress"></Input>
            </FormItem>
            <FormItem label="状态">
                <Select v-model="search.status" style="width:200px">
                    <Option value="all" key="all">全部</Option>
                    <Option value="online" key="online">在线</Option>
                    <Option value="offline" key="offline">离线</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="goPage(1)">查询</Button>
            </FormItem>
        </Form>

        <div class="main-content">
            <div class="view-frame" :style="viewFrameStyle">
                <div class="view"
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
                        <div class="floor">
                            <Led :class="ledCls(item.floor01)"></Led><Led :class="ledCls(item.floor02)"></Led>
                        </div>

                        <div class="state">
                            <div class="icon running-icon"></div>
                            <div class="icon "></div>
                            <div class="icon overload-icon"></div>
                        </div>
                        <div class="address"></div>
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
    export default {
        data () {
            return {
                isSearching: false,
                search: {
                    registerCode: '',
                    installer: '',
                    elvAddress: '',
                    status: 'all',
                },
                total: 0,
                page: 1,
                pageSize: 20,//default
                elevators: [],
                ws: null,
                splitWidth: 0,
                num: 0,
            };
        },
        mounted() {
            //this.initWs();
            this.goPage(1);
            this.setBlockSize();
            window.onresize = () => {
                this.setBlockSize();
            }
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
                //websocket更新
                this.ws = new WebSocket(this.$urls.ws_elevator_detail);
                ws.onopen = function () {
                // 使用 send() 方法发送数据
                ws.send("发送数据");
                    alert("数据发送中...");
                };
                
                // 接收服务端数据时触发事件
                ws.onmessage = function (evt) {
                    var received_msg = evt.data;
                    alert("数据已接收...");
                    this.update();
                };
                
                // 断开 web socket 连接成功触发事件
                ws.onclose = function () {
                    alert("连接已关闭...");

                };
            },
            goPage (page) {
                this.$http.post(this.$url.ELEVATORLIST, Object.assign({pageNo: page, pageSize: this.pageSize}, this.search)).then((response) => {
                    const data = response.data.data;
                    let i = 0;
                    this.elevators = data.elevatorInfoList.map(e => {
                        e.runningState = e.runningState? e.runningState : {
                            running: 0,
                            door: "0",
                            online: "0",
                            alarm: "0",
                            overload: "0",
                        };
                        e.floor01 = parseInt(i/10);
                        e.floor02 = i++%10;
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
        background: #eee;
        border: 1px solid #eee;
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
    .floor{
        position: absolute;
        width: 100%;
        text-align: center;
        color: red;
        top: 10px;
        font-weight: bold;
        font-size: 13px;
    }
    .state{
        position: absolute;
        display: flex;
        bottom: 30px;
        padding: 10px 42px;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
    }
    .state .icon{
        width: 26px;
        height: 26px;
        margin: 0 8px;
        background: url('../images/u6058.svg');
        background-size: 26px 26px;
    }
    .up .running-icon{
        background: url('../images/u6060.svg');
         background-size: 26px 26px;
    }
    .stop .running-icon{
        width: 30px;
        height: 30px;
        background: url('../images/u1483.svg');
        background-size: 30px 30px;

    }
    .overload .overload-icon{
        width: 30px;
        height: 30px;
        background: url('../images/u1475.svg');
        background-size: 30px 30px;
    }
    .non-overload .overload-icon{
        background: url('../images/u6058.svg');
        background-size: 26px 26px;
    }

    .address{
        position: absolute;

    }
</style>
