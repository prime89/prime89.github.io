<template>
    <HeaderMenu>
        <div class="map-container">
        <div id="map" @click="closeWindow"></div>
        <div class="type-cells">
            <CellGroup @on-click="select">
                <Cell :name="key" :title="group.name" :key="key" :selected="group.selected" v-for="(group, key) in types"/>
            </CellGroup>
        </div>

        <div class="statistics">
            <p><span>全部电梯：</span><span>{{allCount}}</span><span>台</span></p>
            <br>
            <p><span>在线电梯：</span><span>{{onlineCount}}</span><span>台</span></p>
            <p><span>离线电梯：</span><span>{{offlineCount}}</span><span>台</span></p>
            <br>
            <br>
            <p style="color:#3ecb9f;"><span>正常电梯：</span><span>{{normalCount}}</span><span>台</span></p>
            <p style="color:#fe936b;"><span>异常电梯：</span><span>{{incidentCount}}</span><span>台</span></p>
            <p style="color:#ff4c4c;"><span>故障电梯：</span><span>{{badCount}}</span><span>台</span></p>
        </div>

        <div class="operation" v-show="!searchBarOpened">
            <!-- <Tooltip content="搜索">
                <Icon type="ios-search" class="btn" @click="searchBarOpened=true"></Icon>
            </Tooltip> -->
        
            <Tooltip content="全屏" v-show="!isFullScreen">
                <Icon type="md-expand" class="btn" @click="fullScreen"></Icon>
            </Tooltip>

            <Tooltip content="退出全屏" v-show="isFullScreen">
                <Icon type="md-power" class="btn" @click="shrink"></Icon>
            </Tooltip>
            
        </div>

        <Form ref="formInline" label-position="right" :class="{'search-opened': searchBarOpened}"
         :model="search" inline :label-width="70" class="search-bar ">
            <FormItem label="设备SN码" :label-width="80" prop="snCode">
                <Input type="text" v-model="search.snCode"></Input>
            </FormItem>
            <FormItem label="安装地址" prop="address">
                <Input type="text" v-model="search.address"></Input>
            </FormItem>
            <FormItem label="电梯注册码" :label-width="80" prop="registerCode">
                <Input type="text" v-model="search.registerCode"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="isSearching" @click="handleSearch()">查询</Button>
                <Button ghost @click="handleReset">重置</Button>
            </FormItem>

            <div class="btn">
                <Icon class="icon" type="ios-close" size="30" @click="searchBarOpened=false"></Icon>
            </div>
        </Form>
        </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    import { mapMutations } from 'vuex'

    const mutations = mapMutations(['fullScreen', 'shrink']);

    const statusMap = ['', '一般', '异常', '故障'];

    const colors = [
        '#888888',
        '#90e36f',
        '#ff9e00',
        '#ff1800'
    ];
    export default {
        data () {
            return {
                allCount: 0,
                onlineCount: 0,
                offlineCount: 0,
                elevatorData: {},

                normalCount: 0,
                incidentCount: 0,
                badCount: 0,
                current: 'all',
                map: null,
                infoWindow: null,
                layer: null,
                cluster: null,
                count: 0,
                search: {
                    snCode: '',
                    installer: '',
                    address: '',
                    registerCode: ''
                },
                isSearching: false,
                searchBarOpened: false,
                pointSimplifierIns: null,
                types: {
                    all: {
                        key: 'all',
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
                    accident: {
                        key: 'accident',
                        name: '故障电梯',
                        selected: false,
                    },
                },
            };
        },
        mounted () {
            this.initMap();
            this.getData();
            setInterval(() => {
                if (this.newData) {
                    this.newData = false;
                    this.rerenderMap(); 
                } 
            }, 500);
        },
        methods: {
            fullScreen: mutations.fullScreen,
            shrink: mutations.shrink,
            initMap () {
                const self = this;
                var amap = new AMap.Map('map',{
                    resizeEnable: true,
                    zoom: 10,  //设置地图显示的缩放级别
                    //center: [116.397428, 39.90923],//设置地图中心点坐标
                    mapStyle: 'amap://styles/darkblue',  //设置地图的显示样式
                    viewMode: '2D',  //设置地图模式
                    lang:'zh_cn',  //设置地图语言类型
                });

                const infoWindow = this.infoWindow = new AMap.InfoWindow();

                var opts = {
                    extensions: 'all',
                    subdistrict: 1,   //返回下一级行政区
                    showbiz:false  //最后一级返回街道信息
                };
                const district = new AMap.DistrictSearch(opts);
                const province = this.$store.state.user.province;
                const city = this.$store.state.user.city;
                const area = this.$store.state.user.area;

                let searchs = [], zoom = 4;
                if (area) {
                    searchs = [area, city, province];
                } else if (city) {
                    searchs = [city, province];
                } else if (province) {
                    searchs = [province];
                } else {
                    searchs = ['全国']
                }

                search(searchs.pop());

                function search(address) {
                    district.setExtensions('all');
                    district.search(address, function(status, result) {
                        if(status === 'complete'){

                            if (searchs.length > 0) {
                                const s = searchs.pop();
                                const one = ((result.districtList[0] || []).districtList || []).find(d => d.name == s);
                                if (one) {
                                    search(one.adcode);
                                } else {
                                    setLayer((result.districtList[0] || []));
                                }
                            } else {
                                setLayer((result.districtList[0] || []));                     
                            }
                        }
                    });
                }

                let polygons = [];
                function setLayer(zone) {
                    amap.remove(polygons)//清除上次结果
                    polygons = [];
                    var bounds = zone.boundaries;
                    if (bounds) {
                        for (var i = 0, l = bounds.length; i < l; i++) {
                            //生成行政区划polygon
                            var polygon = new AMap.Polygon({
                                strokeWeight: 1,
                                path: bounds[i],
                                fillOpacity: 0.4,
                                fillColor: '#80d8ff',
                                strokeColor: '#0091ea',
                                bubble: true,
                            });
                            polygons.push(polygon);
                        }
                    }
                    amap.add(polygons);
                    amap.setFitView(polygons);//视口自适应


                    AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], function(PointSimplifier, $) {

                        if (!PointSimplifier.supportCanvas) {
                            self.$Message.warning('当前环境不支持 Canvas！');
                            return;
                        }

                        self.pointSimplifierIns = new PointSimplifier({
                            zIndex: 99999,
                            autoSetFitView: false,
                            map: amap, //所属的地图实例

                            getPosition: function(item) {
                                if (!item) {
                                    return null;
                                }
                                return [item.longitude, item.latitude];
                            },
                            compareDataItem: function (item1, item2, index1, index2) {
                                //事件级别高的优先显示
                                return item1.eventLevel > item2.eventLevel ? -1:1;
                            },
                            getHoverTitle: function(dataItem, idx) {
                                const rawData = dataItem;
                                let state = '在线';
                                if (!+rawData.onlineState || !+rawData.eventLevel) {
                                    state = '离线';
                                } else if (rawData.eventLevel == 3) {
                                    state = '故障';
                                } else if (rawData.eventLevel == 2) {
                                    state = '异常';
                                }
                                return "<b>注册码：</b>" + dataItem.registerCode + "<br><b>地址：</b>" + dataItem.address + '<br><b>状态：</b>' + state;
                            },
                            //使用GroupStyleRender
                            renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                            renderOptions: {
                                //点的样式
                                pointStyle: {
                                    fillStyle: '#888888',
                                    width: 5,
                                    height: 5
                                },
                                getGroupId: function(item, idx) {
                                    //根据电梯状态（eventLevel）显示不同样式
                                    if( !+item.eventLevel || !+item.onlineState) {
                                        return 0;
                                    }
                                    return +item.eventLevel;
                                },
                                groupStyleOptions: function(gid) {
                                    var size = 8;
                                    return {
                                        pointStyle: {
                                            //content: gid % 2 ? 'circle' : 'rect',
                                            fillStyle: colors[gid % colors.length],
                                            width: size,
                                            height: size
                                        },
                                        pointHardcoreStyle: {
                                            width: size - 2,
                                            height: size - 2
                                        }
                                    };
                                }
                            }
                        });

                        self.pointSimplifierIns.on('pointClick', function(e, record) {
                            self.viewDetail(record.data)
                        })

                        self.initWs();
                    });

                }

                // function setLayer(zone) {
                //     amap.setCenter(zone.center);

                //     var outer = [
                //         new AMap.LngLat(-360,90,true),
                //         new AMap.LngLat(-360,-90,true),
                //         new AMap.LngLat(360,-90,true),
                //         new AMap.LngLat(360,90,true),
                //     ];
                //     var pathArray = [
                //         //outer
                //     ];
                    

                //     var bounds = zone.boundaries;

                //     pathArray.push.apply(pathArray,bounds)
                //     if (bounds) {
                //         var polygon = new AMap.Polygon({
                //             map: amap,
                //             strokeWeight: 1,
                //             strokeColor: '#3b5565',
                //             fillColor: '#ffffff',
                //             fillOpacity: 0.8,
                //             pathL: pathArray
                //         });
                //         polygon.setPath(pathArray);
                //         amap.add(polygon)
                //         //amap.setFitView();//地图自适应
                //     }
                    

                //     const map = Loca.create(amap);

                //     const layer = self.layer = Loca.visualLayer({
                //         eventSupport: true,
                //         container: map,
                //         // 指定数据类型
                //         type: 'point',
                //         // 展示形状
                //         shape: 'circle'
                //     });

                //     // layer.setData([{
                //     //     name: '北京市',
                //     //     center: '114.088616,22.551412'
                //     // }], {
                //     //     lnglat: 'center'
                //     // }); 
                //     layer.setData([], {
                //         lnglat: 'center'
                //     });

                //     layer.setOptions({
                //         style: {
                //             radius: 6,
                //             //fill: '#4fc2ff',
                //             fill: function(res) {
                //                 const eventLevel = res.value.eventLevel;
                //                 const onlineState = res.value.onlineState;

                //                 if (eventLevel == 3) {
                //                     return '#ff1800';
                //                 } else if (eventLevel == 2) {
                //                     return '#ff9e00'
                //                 }
                //                 if (onlineState == 0) {
                //                     return '#888888';
                //                 }
                //                 return '#90e36f';
                //             },
                //             lineWidth: 1,
                //             stroke3: '#eeeeee',
                //             opacity: 0.8
                //         },
                //         // 样式改变条件为 mouseenter 及 mouseleave，没有设置的属性会继承 style 中的配置
                //         selectStyle: {
                //             radius: 6,
                //             fill: '#ffe30a',
                //             lineWidth: 1,
                //             stroke: '#ffffff',
                //             opacity: 0.9,
                //         }
                //     });

                //     layer.on('mouseenter', (e) => {
                //         const rawData = e.rawData;
                //         let state = '在线';
                //         if (rawData.eventLevel == 3) {
                //             state = '故障';
                //         } else if (rawData.eventLevel == 2) {
                //             state = '异常';
                //         } else if (rawData.onlineState == 0) {
                //             state = '离线';
                //         }
                //         infoWindow.setContent([
                //             '<b>电梯注册码：</b>' + rawData.registerCode,
                //             '<b>安装地址：</b>' + rawData.address,
                //             '<b>状态：</b>' + state,
                //             ].join('<br>'));
                //         infoWindow.open(amap, rawData.center.split(','));


                //         layer.off('mouseleave').on('mouseleave', () => {
                //             self.closeWindow();
                //         })
                //     });

                    


                //     layer.on('click', function(ev) {
                //         var rawData = ev.rawData;
                //         self.viewDetail(rawData);
                //     });

                //     layer.render();

                //     self.initWs();
                // }
            },
            closeWindow() {
                this.infoWindow && this.infoWindow.close();
            },
            getData () {
                this.$http.post(this.$url.ONLINE_NUM, {
                    userId: this.$store.state.user.id,
                }).then((response) => {
                    const data = response.data.data || [];
                    this.allCount = data.total || 0;
                    this.offlineCount = data.offlineElvNum || 0;
                    this.onlineCount = data.onlineElvNum || 0;
                });

                this.$http.post(this.$url.STATUS_NUM, {
                    userId: this.$store.state.user.id,
                }).then((response) => {
                    const data = response.data.data || [];
                    this.normalCount = data.common_event || 0;
                    this.incidentCount = data.unusual_event || 0;
                    this.badCount = data.breakdown_event || 0;
                });
            },
            viewDetail (point) {
                const id = point.registerCode || '';
                if (!id){
                    return;
                }
                this.$router.push({
                    path: `/elevators/${id}`
                });
            },
            select (name) {
                this.$set(this.types[this.current], 'selected', false);
                this.$set(this.types[name], 'selected', true);
                this.current = name;

                //get data by type
                this.handleSearch();
            }, 
            openSearchBar () {
                this.searchBarOpened = true;
            },
            initWs() {
                const self = this;
                //websocket更新
                const ws = this.ws = new WebSocket(this.$url.ws_base + this.$url.ws_elevator_map + '?userId=' + this.$store.state.user.id);
                ws.onopen = function () {
                // 使用 send() 方法发送数据
                };
                
                // 接收服务端数据时触发事件
                ws.onmessage = function (evt) {
                    let msg;
                    try {
                        msg = JSON.parse(evt.data);
                    } catch(e) {
                        console.error('parse data to json obj error');
                    }
                    if (msg) {
                        self.newData = true;
                        self.updateList(msg.data);
                    }
                };
                
                // 断开 web socket 连接成功触发事件
                ws.onclose = function () {
                };
            },
            updateList(data) {
                (data || []).forEach(d => {
                    // const existMarker = (this.elevatorData[d.registerCode] || {}).marker;
                    // const m = new AMap.Marker({
                    //     position: new AMap.LngLat((+d.longitude).toFixed(6), (+d.latitude).toFixed(6)),
                    //     content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
                    //     offset: new AMap.Pixel(-15, -15)
                    // });
                    this.elevatorData[d.registerCode] = {
                        center: `${(+d.longitude).toFixed(6)},${(+d.latitude).toFixed(6)}`,
                        longitude: (+d.longitude).toFixed(6),
                        latitude: (+d.latitude).toFixed(6),
                        registerCode: d.registerCode,
                        eventLevel: d.eventLevel,
                        address: d.address,
                        onlineState: d.onlineState,
                        sn: d.sn,
                    };

                    if (!this.layer) {
                        return;
                    }
                });
            },
            rerenderMap () {console.log('rendermap');
                //this.pointSimplifierIns.off('pointClick', this.pointClick.bind(this))
                const self = this;
                this.pointSimplifierIns.setData(this.filterData());
            },
            handleReset() {
                this.$refs.formInline.resetFields();
                this.handleSearch();
            },
            handleSearch() {
                if (!this.pointSimplifierIns) {
                    return;
                }
                this.rerenderMap();
            },
            filterData() {
                const snCode = this.search.snCode;
                const installer = this.search.installer;
                const address = this.search.address;
                const registerCode = this.search.registerCode;
                const currentState = this.current;

                const d = Object.values(this.elevatorData).filter(d => {
                    let flag = true;
                    if (snCode && !(d.snCode || '').includes(snCode)) {
                        flag = false;
                    }
                    else if (address && !(d.address || '').includes(address)) {
                        flag = false;
                    }
                    else if (registerCode && !(d.registerCode || '').includes(registerCode)) {
                        flag = false;
                    }
                    else if (currentState == 'accident' && (+d.eventLevel != 3 || !+d.onlineState)) {
                        flag = false;
                    }
                    else if ((currentState == 'online') && (!+d.onlineState || !+d.eventLevel)) {
                        flag = false;
                    }
                    else if ((currentState == 'offline') && (!!(+d.onlineState))) {
                        flag = false;
                    }
                    return flag;
                }); 
                return d;
            }

        },
        computed: {
            isFullScreen () {
                return this.$store.state.isFullScreen;
            }
        },
        watch: {
        },
        components: {
            HeaderMenu,
        }
    }
</script>
<style scoped>
    .map-container{
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    #map{
        margin-top: -5%;
        height: 150%;
    }
    .type-cells{
        position: absolute;
        top: 20px;
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
    .operation {
        width: 80px;
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        background-color: rgba(51, 51, 51, 0.9);
        text-align: center;
    }

    .operation .btn{
        margin: 5px 5px;
        cursor: pointer;
        font-size: 24px;
    }

    .operation .btn:hover{
        color: #54a1f3;
    }

    .search-bar {
        position: absolute;
        padding: 20px;
        width: 100%;
        left: 0;
        top:0;
        display: none;
        color: #fff;
        background: #333;
        background-color: rgba(51, 51, 51, 0.9);
        z-index: 1020;
    }
    .search-opened {
        display: block;
    }
    .search-bar .btn{
        position: relative;
    }
    .search-bar .btn .icon{
        position: absolute;
        cursor: pointer;
        right: -15px;
        top: -75px;
    }
    .search-bar .btn .icon:hover{
        color: #54a1f3;
    }
</style>
