<template>
    <HeaderMenu>
        <Form ref="formInline" :model="search" inline label-position="left" :label-width="70" class="search-bar">
            <FormItem label="时间范围">
                <DatePicker type="daterange" :value="search.time" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem label="事件名称">
                <Select v-model="search.level" style="width:200px">
                    <Option value="info" key="11">info</Option>
                </Select>
            </FormItem>
            <FormItem label="事件级别">
                <Select v-model="search.level" style="width:200px">
                    <Option value="info" key="11">info</Option>
                </Select>
            </FormItem>
            <FormItem label="电梯注册码" :label-width="80">
                <Select v-model="search.level"  style="width:200px">
                    <Option value="info" key="11">info</Option>
                </Select>
            </FormItem>
            <FormItem label="区域">
                <Cascader :data="data" v-model="search.zone" style="width: 300px;"></Cascader>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="goPage(1)">查询</Button>
            </FormItem>
        </Form>
        <div class="main-content">
            <Table stripe :columns="columns" :data="data"></Table>
            <Page :current="page" :total="total" 
            :page-size="pageSize"
            @on-change="goPage" 
            @on-page-size-change="changePageSize" 
            show-sizer />
        </div>

         <Modal
            v-model="modal"
            title="关闭事件">
            <Form ref="formItem" :model="formItem" :label-width="100" :rules="ruleValidate">
                <FormItem label="电梯注册码">
                    <span>{{current.registerCode}}</span>
                </FormItem>
                <FormItem label="关闭原因" prop="closeReason">
                    <Input type="textarea" size="large" v-model="formItem.closeReason" placeholder="关闭原因" style="width: 300px" />
                </FormItem>
            </Form>

            <div slot="footer">
                <Button type="text" size="large" @click="cancel">取消</Button>
                <Button type="primary" size="large" @click="close">确定</Button>
            </div>
        </Modal>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    export default {
        data () {
            return {
                page: 1,
                pageSize: 10,
                total: 0,
                modal: false,
                search: {
                    time: '',
                    level: '',
                    zone: [],
                },
                formItem: {
                    registerCode: '',
                    closeReason: '',
                },
                ruleValidate: {
                    closeReason: [
                        { required: true, message: '请输入关闭原因', trigger: 'blur' }
                    ]
                },
                current: {},
                address: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
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
                        key: 'eventName'
                    },
                    {
                        title: '电梯注册码',
                        key: 'registerCode'
                    },
                    {
                        title: '电梯地址',
                        key: 'elvAddress'
                    },
                    {
                        title: '维保人员',
                        key: 'elvMpersonnel'
                    },
                    {
                        title: '维保人员电话',
                        key: 'elvMpersonnelTel'
                    },
                    {
                        title: '是否关闭',
                        key: 'eventStatus',
                        render: (h, params) => {console.log(params);
                            return h('div', {
                                class: {
                                    'close-info' : true, 
                                    'closed': params.row.eventStatus,
                                }
                            }, params.row.eventStatus == 1? '否': '是');
                        }
                    },
                    {
                        title: '关闭人',
                        key: 'closer'
                    },
                    {
                        title: '操作',
                        render: (h, params) => {
                            return h('div', {
                                class: {
                                    opr: true,
                                    disabled: params.row.isClose
                                }
                            }, [
                                h('a', {
                                    href: 'javascript:void(0)',
                                    on: {
                                        click: () => {
                                            this.openCloseModal(params.row)
                                        }
                                    }
                                }, '关闭事件')
                            ]);

                        },
                    },
                ],
                data: []
            }
        },
        mounted () {
            this.goPage(1);
        },
        methods: {
            changePageSize(pageSize) {
                this.pageSize = pageSize;
                this.goPage(1);
            },
            goPage (page) { 
                this.page = page;
                this.$http.post(this.$url.INCIDENTLIST, {
                    registerCode: '',
                    eventName: '',
                    eventLevel: '',
                    elvProvince: '',
                    elvCity: '',
                    elvArea: '',
                    pageSize: this.pageSize,
                    pageNo: 1,
                }).then((response) => {
                    const data = response.data.data;
                    this.data =  data.eventInfoList || [];
                    //TODO 分页
                    this.total = data.total || 0;
                }).catch((err) => {
                    console.log(err);
                    this.$Message.error('服务异常，请稍后尝试');
                });
            },
            openCloseModal(data) {
                this.modal = true;
                this.current = data;
                this.$refs.formItem.resetFields();
            },
            close () {
                this.$refs.formItem.validate(valid => {
                    if (!valid) {
                        return;
                    }

                    this.$http.post(this.$url.CLOSE_INCIDENT, Object.assign({
                        eventIds: [this.current.eventId],
                        closer: this.$store.state.user.userId
                    }, this.formItem)).then((data) => {
                        this.modal = false;
                        this.$Message.success('关闭成功');
                        this.goPage(this.page);//刷新当前页
                    });
                });
                
            },
            cancel() {
                this.modal = false;
            }
        },
        components: {
            HeaderMenu,
        },
        
    }
</script>
<style scoped>
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
