<template>
    <HeaderMenu>
        <div class="map-container">
        <div id="map"></div>
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

        <div class="operation" v-show="!searchBarOpened">
            <Tooltip content="搜索">
                <Icon type="ios-search" class="btn" @click="searchBarOpened=true"></Icon>
            </Tooltip>
        
            <Tooltip content="全屏" v-show="!isFullScreen">
                <Icon type="md-expand" class="btn" @click="fullScreen"></Icon>
            </Tooltip>

            <Tooltip content="退出全屏" v-show="isFullScreen">
                <Icon type="md-power" class="btn" @click="shrink"></Icon>
            </Tooltip>
            
        </div>

        <Form ref="formInline" label-position="right" :class="{'search-opened': searchBarOpened}"
         :model="search" inline :label-width="70" class="search-bar ">
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
    import data from '../libs/data';

    const mutations = mapMutations(['fullScreen', 'shrink']);

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
                searchBarOpened: false,
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
            fullScreen: mutations.fullScreen,
            shrink: mutations.shrink,
            initMap () {
                var map = new AMap.Map('map',{
                    zoom: 10,  //设置地图显示的缩放级别
                    center: [116.397428, 39.90923],//设置地图中心点坐标
                    mapStyle: 'amap://styles/grey',  //设置地图的显示样式
                    viewMode: '2D',  //设置地图模式
                    lang:'zh_cn',  //设置地图语言类型
                });

                var opts = {
                    subdistrict: 1,   //返回下一级行政区
                    showbiz:false  //最后一级返回街道信息
                };
                const district = new AMap.DistrictSearch(opts);

                district.search('深圳市', function(status, result) {
                    if(status === 'complete'){
                        map.setCenter(result.districtList[0].center);

                        var layer = Loca.visualLayer({
                            container: map,
                            // 指定数据类型
                            type: 'point',
                            // 展示形状
                            shape: 'circle'
                        });
                    }
                });
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
            openSearchBar () {
                this.searchBarOpened = true;
            }

        },
        computed: {
            points () {
                return this.$store.state.elevators;
            },
            isFullScreen () {
                return this.$store.state.isFullScreen;
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
    .map-container{
        height: 100%;
        position: relative;
    }
    #map{
        height: 100%;
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
