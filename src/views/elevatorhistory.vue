<template>
    <HeaderMenu>
    <div class="main-content">
        <Breadcrumb>
            <BreadcrumbItem to="/">电梯总览</BreadcrumbItem>
            <BreadcrumbItem>{{elevator.elvAddress}}</BreadcrumbItem>
        </Breadcrumb>
       <EleTabs></EleTabs>

       <div>
           <Form ref="formInline" :model="search" inline label-position="left" :label-width="70">
                <FormItem label="时间范围">
                    <DatePicker format="yyyy-MM-dd HH:mm:ss" type="datetimerange" v-model="search.time" split-panels placeholder="选择时间" style="width: 300px"></DatePicker>
                </FormItem>
                <FormItem label="事件级别">
                    <Select v-model="search.eventLevel" style="width:200px">
                        <Option value="" key="">全部</Option>
                        <Option value="1" key="1">一般</Option>
                        <Option value="2" key="2">异常</Option>
                        <Option value="3" key="3">严重</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="goPage(1)">查询</Button>
                </FormItem>
            </Form>

            <Table stripe :columns="columns" :data="data"></Table>
            <Page :current="page" :total="total" 
            :page-size="pageSize"
            @on-change="goPage" 
            @on-page-size-change="changePageSize" 
            show-sizer />
       </div>
    </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    import EleTabs from '../components/elevator/tabs.vue';
    export default {
        data () {
            const levelMap = ['', '一般', '异常', '故障'];
            const now = new Date();
            const _30Ago = new Date();
            _30Ago.setTime(now.getTime() - 30 * 24 * 3600 * 1000);
            return {
                search: {
                    time: [_30Ago, now],
                    eventLevel: '',
                },
                pageSize: 20,
                page: 1,
                total: 0,
                elevator: {},
                columns: [
                    {
                        title: '时间',
                        key: 'eventTime'
                    },
                    {
                        title: '事件名称',
                        key: 'eventName'
                    },
                    {
                        title: '事件级别',
                        key: 'eventLevel',
                        render (h, params) {
                            const l = params.row.eventLevel;
                            return h('div', {
                                class: {
                                    'level-info' : true, 
                                    ['level-' + l]: true,
                                }
                            }, levelMap[l]);
                        },
                    },
                ],
                data: []
            }
        },
        mounted() {
            this.goPage(1);
            this.getElevatorInfo();
        },
        methods: {
            getElevatorInfo() {
                this.$http.post(this.$url.ELEVATOR_DETAIL, {
                    registerCode: this.$route.params.id
                }).then((response) => {
                    this.elevator = (response.data.data || []).eleInfo || {};
                });
            },
            changePageSize(pageSize) {
                this.pageSize = pageSize;
                this.goPage(1);
            },
            goPage (page) { 
                this.page = page;
                const postData = {
                    registerCode: this.$route.params.id,
                    eventLevel: this.search.eventLevel || '',
                    pageSize: this.pageSize,
                    pageNo: page,
                }
                if (this.search.time[0]) {
                    postData.startTime = this.search.time[0];
                }
                if (this.search.time[1]) {
                    postData.endTime = this.search.time[1];
                }

                this.$http.post(this.$url.INCIDENTLIST, postData).then((response) => {
                    const data = response.data.data;
                    this.data =  (data.eventInfoList || []).map(e => {
                        const signalList = e.signalList;
                        return e;
                    });
                    //TODO 分页
                    this.total = data.total || 0;
                }).catch((err) => {
                    console.log(err);
                    this.$Message.error('服务异常，请稍后尝试');
                });
            },
        },
        components: {
            EleTabs,
            HeaderMenu,
        },
        
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
.elevator-img{
    float:left;
    width: 300px;
}
.elevator-img img{
    width: 300px;
}
.elevator-info{
    margin-left: 330px;
}
</style>
