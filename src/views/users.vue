<template>
    <HeaderMenu>
        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar">
            <FormItem label="用户名" :label-width="80">
                <Input type="text" v-model="search.regCode"></Input>
            </FormItem>
            <FormItem label="联系方式">
                <Input type="text" v-model="search.installer"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="isSearching" @click="goPage(1)">查询</Button>
            </FormItem>
        </Form>

        <div class="main-content">
            <Table stripe :columns="columns" :data="data" style="margin-bottom:20px;"></Table>
            <Page :total="100" page-size="pageSize"
            @on-page-size-change="changePageSize"
            @change="goPage"
            show-sizer />
        </div>

        <Modal
            v-model="resetModal"
            title="重置密码"
            okText="重置"
            @on-ok="resetPasswd"
            @on-cancel="cancel">
            <p>确定重置该用户密码吗？</p>
        </Modal>

        <Modal
            v-model="deleteModal"
            title="删除用户"
            okText="删除"
            @on-ok="deleteUser"
            @on-cancel="cancel">
            <p>确定删除该用户吗</p>
        </Modal>

        <Modal
            v-model="modifyModal"
            title="修改用户"
            >
            <Form ref="formItem" :model="formItem" :label-width="80" :rules="ruleValidate">
                <FormItem label="用户名" prop="username">
                    <Input size="large" v-model="formItem.username" placeholder="请输入用户名" style="width: 400px" />
                </FormItem>
                <FormItem label="联系方式" prop="telephone">
                    <Input size="large" v-model="formItem.telephone" placeholder="联系方式" style="width: 400px" />
                </FormItem>
            </Form>

            <div slot="footer">
                <Button type="text" size="large" @click="cancel('modifyModal')">取消</Button>
                <Button type="primary" size="large" @click="modifyUser()">确定</Button>
            </div>
        </Modal>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    export default {
        data () {
            return {
                isSearching: false,
                modifyModal: false,
                deleteModal: false,
                resetModal: false,
                pageSize: 10,
                pageNo: 1,
                search: {
                    regCode: '',
                    installer: '',
                    address: '',
                    status: 'all',
                },
                formItem: {
                    username: '',
                    telephone: '',
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    telephone: [
                        { required: true, message: '请输入联系方式', trigger: 'blur' }
                    ],
                },
                columns: [
                    {
                        title: '用户名',
                        key: 'username'
                    },
                    {
                        title: '角色',
                        key: 'role'
                    },
                    {
                        title: '联系方式',
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
                                            this.openResetModal(params.row)
                                        }
                                    }
                                }, '重置密码'),
                                h('a', {
                                    href: 'javascript:void(0)',
                                    on: {
                                        click: () => {
                                            this.openModifyModal(params.row)
                                        }
                                    }
                                }, '修改'),
                                h('a', {
                                    href: 'javascript:void(0)',
                                    on: {
                                        click: () => {
                                            this.openDeleteModal(params.row)
                                        }
                                    }
                                }, '删除'),
                            ]);

                        },
                    },
                ],
                data: []
            };
        },
        mounted () {
            this.goPage(1);
        },
        methods: {
            changePageSize (size) {
                this.pageSize = size;
                this.goPage(1);
            },
            goPage (pageNo) {
                this.$http.post(this.$url.USERLIST, {
                    userName: '',
                    telephone: '',
                    num: String(pageNo),
                }).then(((response) => {
                    this.data = response.data.data || [];
                    this.total = response.data.total || 0;
                }).bind(this));
            },
            openResetModal () {
                this.resetModal = true;
            },
            openModifyModal () {
                this.modifyModal = true;
            },
            openDeleteModal () {
                this.deleteModal = true;
            },
            resetPasswd () {
                this.$http.post(this.$url.RESET_USER_PASSWD).then(((data) => {
                    this.$Message.success('重置密码成功');
                }).bind(this));
            },
            deleteUser () {
                this.$http.post(this.$url.DELETE_USER).then((() => {
                    this.$Message.success('删除成功');
                    this.getUsers();
                }).bind(this));
            },
            modifyUser () {
                this.$refs['formItem'].validate((valid) => {
                    if (valid) {
                        this.$http.post(this.$url.MODIFY_USER).then((() => {
                            this.modifyModal = false;
                            this.getUsers();
                            this.$Message.success('修改成功');
                        }).bind(this));
                    }
                });
                
            },
            cancel (name) {
                if (name) {
                    this[name] = false;
                }
            },
        },
        components: {
            HeaderMenu,
        }
    }
</script>
<style scoped>
</style>
