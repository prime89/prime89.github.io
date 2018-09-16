<template>
    <HeaderMenu>
        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar">
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
                <Button type="primary" :loading="isSearching" @click="goPage">查询</Button>
            </FormItem>
        </Form>

        <div class="main-content">
            <Button style="margin-bottom: 20px;" @click="openAttachModal">新增设备</Button>
            <Table stripe :columns="columns" :data="data"></Table>
            <Page :current="page" :total="total" @on-change="goPage" show-sizer />
        </div>

        <Modal
            v-model="attachModal"
            title="新增设备">
            <Form ref="formItem" :model="formItem" :label-width="100" :rules="ruleValidate">
                <FormItem label="设备SN码" prop="deviceSNCode">
                    <Input size="large" v-model="formItem.deviceSNCode" placeholder="请输入设备SN码" style="width: 300px" />
                </FormItem>
                <FormItem label="电梯注册码" prop="liftCode">
                    <Input size="large" v-model="formItem.liftCode" placeholder="请输入电梯注册码" style="width: 300px" />
                </FormItem>
            </Form>

            <div slot="footer">
                <Button type="text" size="large" @click="cancel('modifyModal')">取消</Button>
                <Button type="primary" size="large" @click="attach">确定</Button>
            </div>
        </Modal>

        <Modal
            v-model="removeModal"
            title="删除"
            okText="删除"
            @on-ok="remove"
            @on-cancel="cancel">
            <p>确定新增绑定该设备吗？</p>
            <p>绑定操作将会指向什么结果</p>
        </Modal>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    export default {
        data () {
            return {
                search: {},
                isSearching: false,
                current: {},
                attachModal: false,
                removeModal: false,
                formItem: {
                    deviceSNCode: '',
                    liftCode: '',
                },
                ruleValidate: {
                    deviceSNCode: [
                        { required: true, message: '请输入设备SN码', trigger: 'blur' }
                    ],
                    liftCode: [
                        { required: true, message: '请输入电梯注册码', trigger: 'blur' }
                    ],
                },
                total: 0,
                page: 1,
                columns: [
                    {
                        title: '设备SN码',
                        key: 'deviceSNCode'
                    },
                    {
                        title: '电梯注册码',
                        key: 'liftCode'
                    },
                    {
                        title: '状态',
                        key: 'workStatus'
                    },
                    {
                        title: '安装地址',
                        key: 'address'
                    },
                    {
                        title: '安装人员',
                        key: 'operator'
                    },
                    {
                        title: '安装人员电话',
                        key: 'operatorPhone'
                    },
                    {
                        title: '操作',
                        render: (h, params) => {
                            return h('div', {
                                class: {
                                    opr: true,
                                }
                            }, [
                                h('a', {
                                    href: 'javascript:void(0)',
                                    on: {
                                        click: () => {
                                            this.openRemoveModal(params.row)
                                        }
                                    }
                                }, '删除')
                            ]);

                        },
                    },
                ],
                data: []
            };
        },
        mounted () {//页面渲染初始化事件
            this.goPage(1);
        },
        methods: {
            goPage (page) { 
                this.page = page || this.page;
                this.getDevs();
            },
            getDevs () {
                this.$http.get(this.$url.DEVLIST).then((response) => {
                    this.data = response.data.data || [];
                    //TODO 分页
                    this.total = response.data.total || 100;
                }).catch((err) => {
                    console.log(err);
                    this.$Message.error('服务异常，请稍后尝试');
                });
            },
            openAttachModal() {
                this.attachModal = true;
                this.current = null;
                this.$refs.formItem.resetFields();
            },
            openRemoveModal(data) {
                this.current = data;
                this.removeModal = true;
            },
            attach () {
                this.$http.post(this.$url.DEV_BIND, this.formItem).then((data) => {
                    this.$Message.success('绑定成功');
                    this.goPage(1);
                });
            },
            remove () {
                this.$http.post(this.$url.DEV_UNBIND, this.current).then((data) => {
                    this.$Message.success('删除成功');
                    this.goPage(1);
                });
            },
            cancel() {
                this.attachModal = false;
            }
        },
        components: {
            HeaderMenu,
        }
    }
</script>

<style scoped>

</style>
