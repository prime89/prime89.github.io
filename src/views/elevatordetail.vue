<template>
    <HeaderMenu>
    <div class="main-content">
        <Breadcrumb>
            <BreadcrumbItem to="/">电梯总览</BreadcrumbItem>
            <BreadcrumbItem>详情</BreadcrumbItem>
        </Breadcrumb>
       <EleTabs></EleTabs>

       <div>
           <Table :columns="columns" :data="baseInfo"></Table>

           <Row class="elevator-info">
                <Col span="12">
                <h3>电梯基本信息</h3>
                    <dl class="info-line">
                        <dt>电梯品牌</dt>
                        <dd>{{elvBrand || '--'}}</dd>
                        <dt>电梯类型</dt>
                        <dd>{{elvType || '--'}}</dd>
                        <dt>电梯型号</dt>
                        <dd>{{ppxh || '--'}}</dd>
                        <dt>层数</dt>
                        <dd>{{elvFloor || '--'}}</dd>
                        <dt>站数</dt>
                        <dd>{{elvStation || '--'}}</dd>
                        <dt>载重量</dt>
                        <dd>{{elvRatedload || '--'}}</dd>
                        <dt>载定速度</dt>
                        <dd>{{elvRatedspeed || '--'}}</dd>
                        <dt>安装地址</dt>
                        <dd>{{elvAddress || '--'}}</dd>
                        <dt>安装日期</dt>
                        <dd>{{ '' || '--'}}</dd>
                    </dl>

                    <h3>使用单位</h3>

                    <dl class="info-line">
                        <dt>使用单位</dt>
                        <dd>{{elvPropertyCompany|| '--'}}</dd>
                        <dt>管理负责人</dt>
                        <dd>{{elvPsecurity|| '--'}}</dd>
                        <dt>负责人电话</dt>
                        <dd>{{elvPsecurityTel|| '--'}}</dd>
                        <dt>安全管理员</dt>
                        <dd>null</dd>
                        <dt>安全管理员电话</dt>
                        <dd>null</dd>
                    </dl>

                </Col>
                <Col span="12">
                    <h3>维保单位</h3>
                    <dl class="info-line">
                        <dt>维保单位</dt>
                        <dd>{{elvMaintenanCompany || '--'}}</dd>
                        <dt>责任人</dt>
                        <dd>null</dd> 
                        <dt>责任人电话</dt>
                        <dd>null</dd>
                        <dt>维保人员</dt>
                        <dd>{{elvMpersonnel|| '--'}}</dd>
                    </dl>
                </Col>
            </Row>

            <div class="map"></div>
       </div>
       </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu';
    import EleTabs from '../components/elevator/tabs.vue';
    export default {
        components: {
            EleTabs,
            HeaderMenu,
        },
        data () {
            return {
                ws: null,
                columns: [],
                baseInfo: [],

                registerCode: '',
                elvAddress: '',
                elvBrand: '',
                elvType: '',
                ppxh: '',
                elvFloor: '',
                elvStation: '',
                elvRatedload: '',
                elvRatedspeed: '',
                elvPropertyCompany: '',
                elvPsecurity: '',
                elvPsecurityTel: '',
                elvMcompanyTel: '',
                elvMaintenanCompany: '',
                elvMcompanyTel: '',
                elvMpersonnel: '',
                elvMpersonnelTel: '',
                longitude: '',
                latitude: '',
            };
        },
        mounted() {
            this.init();
        },
        destroyed() {
            this.ws && this.ws.close();
        },
        methods: {
            init() {
                this.$http.get(this.$url.ELEVATOR_DETAIL).then((response) => {
                    const data = response.data.data;
                    this.registerCode = data.registerCode;
                    this.elvAddress = data.elvAddress;
                    this.elvBrand=data.elvBrand ;
                    this.elvType=data.elvType ;
                    this.ppxh= data.ppxh;
                    this.elvFloor= data.elvFloor;
                    this.elvStation= data.elvStation;
                    this.elvRatedload= tdatahis.elvRatedload;
                    this.elvRatedspeed= data.elvRatedspeed;
                    this.elvPropertyCompany= data.elvPropertyCompany;
                    this.elvPsecurity= data.elvPsecurity;
                    this.elvPsecurityTel= data.elvPsecurityTel;
                    this.elvMcompanyTel= data.elvMcompanyTel;
                    this.elvMaintenanCompany= data.elvMaintenanCompany;
                    this.elvMcompanyTel= data.elvMcompanyTel;
                    this.elvMpersonnel=  data.elvMpersonnel;
                    this.elvMpersonnelTel= data.elvMpersonnelTel;
                    this.longitude= data.longitude;
                    this.latitude= data.latitude;
                });
            },
            fetch() {
                const id = this.$router.params.id;
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
            update() {

            }
        }
        
    }
</script>
<style scoped>
.main-content{
    padding: 30px;
}
h3{
    font-size: 16px;
    margin-bottom: 20px;
}
.elevator-info{
    float: left;
    width: 750px;
    padding: 20px;
    border: 1px solid #eee;
    box-shadow: 0 0 1px 1px #eee;
}
.map{
    min-width: 430px;
    margin-left: 770px;
    height: 590px;
    background: #eee;
    border: 1px solid #eee;
    box-shadow: 0 0 1px 1px #eee;
}

</style>
