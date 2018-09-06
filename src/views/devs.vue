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
                <Button type="primary" :loading="isSearching" @click="handleSearch()">查询</Button>
            </FormItem>
        </Form>

        <div class="main-content">
            <Button style="margin-bottom: 20px;">新增设备</Button>
            <Table stripe :columns="columns" :data="data"></Table>
            <Page :current="page" :total="total" @on-change="goPage" show-sizer />
        </div>

        <Modal
            v-model="attachModal"
            title="新增"
            okText="绑定"
            @on-ok="attach"
            @on-cancel="cancel">
            <p>确定新增绑定该设备吗？</p>
            <p>绑定操作将会指向什么结果</p>
        </Modal>

        <Modal
            v-model="removeModal"
            title="删除"
            okText="解绑"
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
                total: 0,
                page: 1,
                columns: [
                    {
                        title: '设备SN码',
                        key: 'sns'
                    },
                    {
                        title: '电梯注册码',
                        key: 'regCode'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '安装地址',
                        key: 'address'
                    },
                    {
                        title: '安装人员',
                        key: 'installer'
                    },
                    {
                        title: '安装人员电话',
                        key: 'tel'
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
                                            this.openAttachModal(params.row)
                                        }
                                    }
                                }, '新增'),
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
        mounted () {
            this.getDevs();
        },
        methods: {
            goPage (page) { 
                this.page = page;
                this.getDevs();
            },
            handleSearch() {
                this.getDevs();
            },
            getDevs () {
                this.$http.get(this.$url.DEVLIST).then((response) => {
                    this.data = response.data.data || [];
                    //TODO 分页
                    this.total = response.data.total || 100;
                });
            },
            openAttachModal(data) {
                this.attachModal = true;
                this.current = data;
            },
            openRemoveModal(data) {
                this.removeModal = true;
            },
            attach () {
                this.$http.post(this.$url.DEV_BIND, {}).then((data) => {
                    this.$Message.success('绑定成功');
                });
            },
            remove () {
                this.$http.post(this.$url.DEV_UNBIND, {}).then((data) => {
                    this.$Message.success('解绑成功');
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
