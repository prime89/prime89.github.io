<template>
    <HeaderMenu>
    <div class="main-content">
        <Breadcrumb>
            <BreadcrumbItem to="/">电梯总览</BreadcrumbItem>
            <BreadcrumbItem>{{elvAddress}}</BreadcrumbItem>
        </Breadcrumb>
       <EleTabs></EleTabs>

       <div>
           <Row class="event-header">
               <Col span="3">
               电梯注册码
               </Col>
                <Col span="3">
               最近事件
               </Col>
                <Col span="3">
               事件级别
               </Col>
                <Col span="3">
               是否故障
               </Col>
                <Col span="3">
               发生时间
               </Col>
                <Col span="3">
               当前楼层
               </Col>
                <Col span="6">
               运行状态
               </Col>
           </Row>
            <Row class="event-info">
               <Col span="3">
               {{registerCode}}
               </Col>
                <Col span="3">
               {{eventName}}
               </Col>
                <Col span="3">
               {{
                   formatEventLevel(eventLevel)
               }}
               </Col>
                <Col span="3">
               {{
                   eventLevel==3?'是':'否'
               }}
               </Col>
                <Col span="3">
               {{eventTime}}
               </Col>
                <Col span="3">
               {{elvFloor}}
               </Col>
                <Col span="6">
               xx
               </Col>
           </Row>

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

                "eventId": "",
                "eventName": "",
                "eventLevel": "",
                "eventTime": "",
                "eventStatus": "",
                "deviceSnCode": "",
            };
        },
        mounted() {
            this.init();
        },
        destroyed() {
            this.ws && this.ws.close();
        },
        methods: {
            formatEventLevel(level) {
                const maps = ['', '一般', '异常', '故障'];
                return maps[level] || '';
            },
            init() {
                this.$http.post(this.$url.ELEVATOR_DETAIL, {
                    registerCode: this.$route.params.id
                }).then((response) => {
                    const data = (response.data.data || []).eleInfo;
                    this.registerCode = data.registerCode;
                    this.elvAddress = data.elvAddress;
                    this.elvBrand=data.elvBrand ;
                    this.elvType=data.elvType ;
                    this.ppxh= data.ppxh;
                    this.elvFloor= data.elvFloor;
                    this.elvStation= data.elvStation;
                    this.elvRatedload= data.elvRatedload;
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

                    const eventInfo = (response.data.data || []).eventinfo;
                    this.eventId = eventInfo.eventId;
                    this.eventName = eventInfo.eventName;
                    this.eventLevel = eventInfo.eventLevel;
                    this.eventTime = eventInfo.eventTime;
                    this.eventStatus = eventInfo.eventStatus;
                    this.deviceSnCode = eventInfo.deviceSnCode;
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

.event-header div{
    padding: 10px 0;
    background: #eee;
    border: 1px solid #fff;
    text-align: center;
}
.event-info {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
}
.event-info div{
    padding: 10px 0;
    border: 1px solid #fff;
    text-align: center;
}

</style>
