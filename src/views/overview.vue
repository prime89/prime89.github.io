<template>
    <HeaderMenu>
        <div id="allmap"></div>
        <div class="type-cells">
            <CellGroup @on-click="select">
                <Cell :name="key" :title="group.name" :key="key" :selected="group.selected" v-for="(group, key) in types"/>
            </CellGroup>
        </div>

        <div class="statistics">
            <p><span>全部电梯：</span><span>{{allCount}}</span><span>台</span></p>
            <br>
            <p><span>全部电梯：</span><span>{{onlineCount}}</span><span>台</span></p>
            <p><span>全部电梯：</span><span>{{offlineCount}}</span><span>台</span></p>
            <br>
            <br>
            <p style="color:#3ecb9f;"><span>正常电梯：</span><span>{{allCount}}</span><span>台</span></p>
            <p style="color:#fe936b;"><span>异常电梯：</span><span>{{onlineCount}}</span><span>台</span></p>
            <p style="color:#ff4c4c;"><span>故障电梯：</span><span>{{offlineCount}}</span><span>台</span></p>
        </div>

        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar search-opened">
            <FormItem label="设备SN码" :label-width="80">
                <Input type="text" v-model="search.snCode"></Input>
            </FormItem>
            <FormItem label="安装人员">
                <Input type="text" v-model="search.installer"></Input>
            </FormItem>
            <FormItem label="安装地址">
                <Input type="text" v-model="search.address"></Input>
            </FormItem>
            <FormItem label="电梯注册码" :label-width="80">
                <Input type="text" v-model="search.regCode"></Input>
            </FormItem>
            <FormItem label="状态">
                <Select v-model="search.status" style="width:200px">
                    <Option value="all" key="all">全部</Option>
                    <Option value="online" key="online">在线</Option>
                    <Option value="offline" key="offline">离线</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="isSearching" @click="handleSearch()">查询</Button>
            </FormItem>
        </Form>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    import data from '../libs/data';
    export default {
        data () {
            return {
                allCount: 0,
                onlineCount: 0,
                offlineCount: 0,
                current: 'all',
                map: null,
                search: {},
                isSearching: false,
                types: {
                    all: {
                        name: '全部电梯',
                        selected: true,
                    }, 
                    online: {
                        key: 'online',
                        name: '在线电梯',
                        selected: false,
                    }, 
                    offline: {
                        key: 'offline',
                        name: '离线电梯',
                        selected: false,
                    }, 
                    bad: {
                        key: 'bad',
                        name: '故障电梯',
                        selected: false,
                    }
                },
            };
        },
        mounted () {
            this.initMap();
        },
        methods: {
            initMap () {
                const self = this;
                var map = this.map = new BMap.Map("allmap");    // 创建Map实例
                map.centerAndZoom('深圳市罗湖区', 14);  // 初始化地图,设置中心点坐标和地图级别  new BMap.Point(114.07, 22.63)
                //添加地图类型控件
                map.addControl(new BMap.MapTypeControl({
                    mapTypes:[
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]}));	  
                map.setMapStyle({style: 'midnight'});
                map.setCurrentCity("深圳市");          // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

                map.enableScrollWheelZoom();                        //启用滚轮放大缩小
                if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                    var points = [];  // 添加海量点数据
                    for (var i = 0; i < data.data.length; i++) {
                        const p = new BMap.Point(data.data[i][0], data.data[i][1]);
                        p.data = {hello: 'world'};
                        points.push(p);
                    }
                    var options = {
                        size: BMAP_POINT_SIZE_BIG,
                        shape: BMAP_POINT_SHAPE_CIRCLE,
                        color: '#d340c3',
                    }
                    var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                    pointCollection.addEventListener('click', ((e) => {
                        this.viewDetail(e.point);
                    }).bind(this));
                    map.addOverlay(pointCollection);  // 添加Overlay
                } else {
                    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                }
            },
            viewDetail (point) {
                console.log(point);
                const id = point.id || 'test';
                this.$router.push({
                    path: `/elevators/${id}`
                });
            },
            select (name) {
                this.$set(this.types[this.current], 'selected', false);
                this.$set(this.types[name], 'selected', true);
                this.current = name;

                //get data by type
            }, 
        },
        computed: {
            points () {
                return this.$store.state.elevators;
            }
        },
        watch: {
            points (val) {
                
            }
        },
        components: {
            HeaderMenu,
        }
    }
</script>
<style scoped>
    #allmap{
        height: 100%;
    }
    .type-cells{
        position: absolute;
        top: 80px;
        left: 20px;
        z-index: 1000;
        background: #fff;
    }
    .statistics{
        position: absolute;
        padding: 20px 20px;
        bottom: 0;
        left: 0;
        width: 220px;
        color: #fff;
        background: #333;
        background-color: rgba(51, 51, 51, 0.9);
        text-align: center;
    }

    .statistics p span{
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
    }

    .search-bar {
        position: absolute;
        padding: 20px;
        width: 100%;
        left: 0;
        top: 60px;
        display: none;
        color: #fff;
        background: #333;
        background-color: rgba(51, 51, 51, 0.9);
        z-index: 1020;
    }
    .search-opened {
        display: block;
    }
</style>
