<template>
    <HeaderMenu>
        <div ref="mainDiv" class="main-content">
            <div class="screen-bar">
                <div class="time bar">
                    {{time | formatDate}}
                </div>
                <div class="title bar">
                    <div class="text">
                        电梯动态监控报表
                    </div>
                </div>
                <div class="operation bar">
                     <Tooltip content="全屏" v-show="!isFullScreen">
                        <Icon type="md-expand" size="24" class="btn" @click="fullScreen"></Icon>
                    </Tooltip>

                    <Tooltip content="退出全屏" v-show="isFullScreen">
                        <Icon type="md-power" size="24" class="btn" @click="shrink"></Icon>
                    </Tooltip>
                </div>
            </div>
            <div class="row upper">
                <div class="col brand-chart" id="brand-chart"></div>
                <div class="col status-chart" >
                    <div class="period-slt">
                        <RadioGroup v-model="period" type="button" class="period-radio">
                            <Radio label="year">按年</Radio>
                            <Radio label="month">按月</Radio>
                        </RadioGroup>
                    </div>
                    <div  id="status-chart"></div>
                </div>
            </div>
            <div class="row bellow" >
                <div class="col" id="bad-chart" ></div>
            </div>
        </div>
    </HeaderMenu>
</template>
<script>
    const echarts = require('echarts');
    import HeaderMenu from '../components/common/headerMenu.vue';
    import { mapMutations } from 'vuex'


    const mutations = mapMutations(['fullScreen', 'shrink']);

    export default {
        data () {
            return {
                time: new Date().getTime(),
                internal: null,
                period: 'year',
            }
        },
        mounted () {
            this.getBrandData();
            this.getStatusData();
            this.getBadData();
            this.startInternal();
        },
        destroyed () {
            clearInterval(this.internal);
        },
        computed: {
            isFullScreen () {
                return this.$store.state.isFullScreen;
            },
            badChartStyle () {
                return {
                    height: '200px'
                };
            }
        },
        methods : {
            fullScreen: mutations.fullScreen,
            shrink: mutations.shrink,
            getBrandData() {
                this.$http.post(this.$url.REPORT_BRAND_DATA, {userId: 1}).then((response) => {
                    this.initBrandChart(response.data.data);
                });
            },
            getStatusData() {
                this.$http.post(this.$url.REPORT_STATUS_DATA, {userId: 1, period: this.period}).then((response) => {
                    this.initStatusChart(response.data.data);
                }).catch((data) => {console.log(1);
                    this.initStatusChart( [
                        {
                            "elv_area": "南山区",
                            "num": 1,
                            "event_level": "2"
                        },
                        {
                            "elv_area": "福田区",
                            "num": 1,
                            "event_level": "1"
                        },
                        {
                            "elv_area": "福田区",
                            "num": 1,
                            "event_level": "2"
                        },
                        {
                            "elv_area": "罗湖区",
                            "num": 1,
                            "event_level": "3"
                        }
                    ]);
                });
            },
            getBadData() {
                this.$http.post(this.$url.REPORT_BAD_DATA, {userId: 1}).then((response) => {
                    this.initBadChart(response.data.data); 
                });
            },
            startInternal () {
                clearInterval(this.internal);
                this.internal = setInterval(() => {
                    this.time = new Date().getTime();
                }, 1000);
            },
            initBrandChart (data) {
                const brandNames = [];
                const brandData = data.brandRatio.map(b => {
                    brandNames.push(b.ppxh);
                    return {
                        name: b.ppxh,
                        value: b.count, 
                    }
                });

                const chart = echarts.init(document.getElementById('brand-chart'));
                const option = {
                    title : {
                        text: '电梯品牌占比图',
                        textStyle: {
                            color: '#4d97a8',
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        textStyle: {
                            color: '#fff',
                        },
                        data: brandNames,
                    },
                    series : [
                        {
                            name: '品牌',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data: brandData,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                chart.setOption(option);
            },
            initStatusChart (data) {
                const areas = {};
                const eventMap = {
                    1: 'normal',
                    2: 'exception',
                    3: 'accident',
                };
                (data || []).forEach(d => {
                    if (!areas[d.elv_area]) {
                        areas[d.elv_area] = {
                            'normal': 0,
                            'exception': 0,
                            'accident': 0,
                        };
                    } 
                    areas[d.elv_area][eventMap[d.event_level]] = d.num;    
                });

                const optData = [{
                        name:'正常',
                        type:'bar',
                        stack: 'status',
                        data:[],
                        barMaxWidth: 40,
                    },
                    {
                        name:'异常',
                        type:'bar',
                        stack: 'status',
                        data:[],
                        barMaxWidth: 40,
                    },
                    {
                        name:'故障',
                        type:'bar',
                        stack: 'status',
                        data:[],
                        barMaxWidth: 40,
                    },];

                const areaKeys = Object.keys(areas);
                areaKeys.forEach(a => {
                    optData[0].data.push(areas[a].normal);
                    optData[1].data.push(areas[a].exception);
                    optData[2].data.push(areas[a].accident);
                });
                console.log(optData);

                const chart = echarts.init(document.getElementById('status-chart'));
                const option = {
                    title: {
                        text: '深圳市各区域电梯状态对比图',
                        textStyle: {
                            color: '#4d97a8',
                        }
                    },
                    textStyle: {
                        color: '#fff',
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        textStyle: {
                            color: '#fff',
                        },
                        data:['正常','异常','故障',]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : areaKeys
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : optData,
                    
                };
                chart.setOption(option);
            },
            initBadChart (data) {
                const months = [];
                const datas =( data || []).map(d => {
                    months.push(d.month);
                    return d.count;
                });


                const chart = echarts.init(document.getElementById('bad-chart'));
                const option = {
                    title: {
                        text: '深圳市故障电梯数量变化趋势图',
                        textStyle: {
                            color: '#4d97a8',
                        }
                    },
                    textStyle: {
                        color: '#fff',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: months
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: datas,
                        type: 'line'
                    }],
                };
                chart.setOption(option);
            },
        },
        watch: {
            period () {
                this.getStatusData();
            }
        },

        components: {
            HeaderMenu,
        }
    }
</script>
<style scoped>
.main-content{
    height: 100%;
    padding: 0;
    background: #21202e;
}

.screen-bar{
    display: flex;
    background: #282735;
}
.screen-bar .bar{
    width: 33.3333%;
    line-height: 36px;
}
.screen-bar .time{
    padding-left: 20px;
    color: #4d97a8;
}
.screen-bar .title{
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    display: flex;
}
.screen-bar .title .text{
    background: #21202e;
    width: 100%;
    font-size: 22px;
}
.screen-bar .title::before, .screen-bar .title::after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-width:40px;
    border-color: #fff;
    border-width:0 0 36px 18px;
    border-style:solid;
    border-color:transparent transparent #21202e;
}
.screen-bar .title::after{
    border-width:0 18px 36px 0;
}
.screen-bar .operation{
    text-align: right;
    padding-right: 20px;
}
.screen-bar .operation .btn{
    cursor: pointer;
}
.row{
    display: flex;
    height: calc(50% - 16px);
    padding: 10px;
    background: #21202e;
}
.upper{
    min-height: 400px;
}
.bellow{
    min-height: 300px;
}
.row .col{
    margin: 0 10px;
    border: 2px solid #242331;
    background: #21202e;
    height: 100%;
    width: 100%;
}
.row .brand-chart{
    width: 33.3333%;
    height: 100%;
}
.row .status-chart{
    position: relative;
    width: 66.6666%;
    height: 100%;
}
.row .status-chart .period-slt{
    position: absolute;
    right: 20px;
    z-index: 999;
}
 #status-chart{
     width: 100%;
     height: 100%;
 }
</style>
