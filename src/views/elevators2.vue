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
            <div class="view-frame">
                <div class="view" :key="item.id" v-for="item in elevators">
                    <div class="bg">
                        <div class="floor">
                            {{item.floor}}
                        </div>

                        <div class="state">
                            <img src="../images/u6058.svg" alt="">
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
                elevators: [{
                    id: 'x'
                }],
                ws: null,
            };
        },
        mounted() {
            //this.initWs();
            this.goPage(1);
        },
        destroyed() {
            this.ws && this.ws.close();
        },
        methods: {
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
                    if (response.data.code === 0) {
                        this.data = response.data.data;
                        this.total = response.data.total || 0;
                    } else {
                        this.$Message.error('系统错误，请稍后尝试');
                    }
                });
            },
            changePageSize (pageSize) {
                this.pageSize = pageSize;
                this.goPage(1);
            }
        },
        components: {
            HeaderMenu,
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
        padding: 20px 30px;
    }
    .view .bg{
        position: relative;
        width: 100%;
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
        bottom: 30px;
        padding: 10px 50px;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
    }
    .state img{
        width: 26px;
        height: 26px;
    }
    .address{
        position: absolute;

    }
</style>
