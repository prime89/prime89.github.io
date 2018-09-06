<template>
    <HeaderMenu>
        <div class="main-content">
            <Row>
                <Col span="8">
                <Card class="chart">
                    <div  id="brand-chart" style="height: 300px;">x x</div>
                </Card>
                    
                </Col>
                <Col span="16">
                <Card class="chart">
                    <div id="status-chart" style="height: 300px;">bb</div>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                <Card class="chart">
                    <div id="bad-chart" style="height: 200px;">cc</div>
                </Card>
                </Col>
            </Row>
        </div>
    </HeaderMenu>
</template>
<script>
    const echarts = require('echarts');
    import HeaderMenu from '../components/common/headerMenu.vue';
    export default {
        mounted () {
            this.initBrandChart();
            this.initStatusChart();
            this.initBadChart();
            
        },
        methods : {
            initBrandChart () {
                const chart = echarts.init(document.getElementById('brand-chart'));
                const option = {
                    title : {
                        text: '电梯品牌占比图',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['日立','三菱','奥克斯','其他',]
                    },
                    series : [
                        {
                            name: '品牌',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'日立'},
                                {value:310, name:'三菱'},
                                {value:234, name:'奥克斯'},
                                {value:135, name:'其他'},
                            ],
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
            initStatusChart () {
                const chart = echarts.init(document.getElementById('status-chart'));
                const option = {
                    title: {
                        text: '深圳市各区域电梯状态对比图'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
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
                            data : ['罗湖区','南山区','龙岗区','福田区','龙华新区','宝安区','盐田区']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'正常',
                            type:'bar',
                            stack: 'status',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'异常',
                            type:'bar',
                            stack: 'status',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'故障',
                            type:'bar',
                            stack: 'status',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                    ]
                };
                chart.setOption(option);
            },
            initBadChart () {
                const chart = echarts.init(document.getElementById('bad-chart'));
                const option = {
                    title: {
                        text: '深圳市故障电梯数量变化趋势图'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }],
                };
                chart.setOption(option);
            },
        },

        components: {
            HeaderMenu,
        }
    }
</script>
<style scoped>
.chart{
    margin: 10px;
}
</style>
