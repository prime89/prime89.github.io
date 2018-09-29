<template>
    <HeaderMenu>
        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar">
            <FormItem label="用户名" :label-width="80">
                <Input type="text" v-model="search.userName"></Input>
            </FormItem>
            <FormItem label="联系方式">
                <Input type="text" v-model="search.telephone"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="isSearching" @click="goPage(1)">查询</Button>
            </FormItem>
        </Form>

        <div class="main-content">
            <Table stripe :columns="columns" :data="data" style="margin-bottom:20px;"></Table>
            <Page :total="total" :page-size="pageSize"
            :current="pageNo"
            @on-page-size-change="changePageSize"
            @on-change="goPage"
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
            <Form ref="formItem" :model="formItem" :label-width="100">
                <FormItem label="用户名" prop="username">
                    <Input size="large" v-model="formItem.USERNAME" placeholder="请输入用户名" style="width: 300px" />
                </FormItem>
                <FormItem label="真实姓名" prop="realName">
                    <Input size="large" v-model="formItem.REALNAME" placeholder="请输入真实姓名" style="width: 300px" />
                </FormItem>
                <FormItem label="地区" prop="zone">
                    <Cascader :data="provinceData" v-model="formItem.zone" style="width: 300px;"></Cascader>
                </FormItem>
                <FormItem label="性别" prop="gender">
                    <Select v-model="formItem.GENDER" style="width:300px">
                        <Option value="男" key="男">男</Option>
                        <Option value="女" key="女">女</Option>
                    </Select>
                </FormItem>
                <FormItem label="区域级别" prop="level">
                    <Select v-model="formItem.LEVEL" style="width:300px">
                        <Option value="1" key="1">省级</Option>
                        <Option value="2" key="2">市级</Option>
                        <Option value="3" key="3">区县级</Option>
                    </Select>
                </FormItem>
                <FormItem label="联系方式" prop="telephone">
                    <Input size="large" v-model="formItem.TELEPHONE" placeholder="联系方式" style="width: 300px" />
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
    import permission from '../config/permission';
    import provinceData from '../libs/province';

    export default {
        data () {
            return {
                isSearching: false,
                modifyModal: false,
                deleteModal: false,
                resetModal: false,
                current: null,
                provinceData: provinceData,
                pageSize: 10,
                pageNo: 1,
                total: 0,
                search: {
                    userName: '',
                    telephone: '',
                },
                formItem: {
                    username: '',
                    telephone: '',
                    zone: [],
                    gender: '',
                    level: '',
                },
                // ruleValidate: {
                //     username: [
                //         { required: true, message: '请输入用户名', trigger: 'blur' }
                //     ],
                //     telephone: [
                //         { required: true, message: '请输入联系方式', trigger: 'blur' }
                //     ],
                // },
                columns: [
                    {
                        title: '用户名',
                        key: 'USERNAME'
                    },
                    {
                        title: '角色',
                        key: 'roleName',
                        render (h, params) {
                            return h('span', permission.roles[params.row.roleName]);
                        },
                    },
                    {
                        title: '联系方式',
                        key: 'TELEPHONE'
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
            goPage (pageNo) {console.log(pageNo);
                this.pageNo = pageNo || this.pageNo;
                this.$http.post(this.$url.USERLIST, {
                    userName: this.search.userName,
                    telephone: this.search.telephone,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo,
                }).then(((response) => {
                    const data = response.data.data;
                    this.data =  data.userList || [];
                    this.total = data.total || 0;
                }).bind(this));
            },
            openResetModal (data) {
                this.current  = data;
                this.resetModal = true;
            },
            openModifyModal (data) {
                this.current = data;
                this.formItem = Object.assign({}, data);
                this.modifyModal = true;
            },
            openDeleteModal (data) {
                this.current = data;
                this.deleteModal = true;
            },
            resetPasswd () {
                this.$http.post(this.$url.RESET_USER_PASSWD, {
                    userName: this.current.userName
                }).then(((data) => {
                    this.$Message.success('重置密码成功');
                }).bind(this));
            },
            deleteUser () {
                this.$http.post(this.$url.DELETE_USER, {
                    userName: this.current.USERNAME,
                }).then((() => {
                    this.$Message.success('删除成功');
                    this.getUsers();
                }).bind(this));
            },
            modifyUser () {
                this.$refs['formItem'].validate((valid) => {
                    if (valid) {
                        this.$http.post(this.$url.MODIFY_USER, {
                            id: this.formItem.userId,
                            userName: this.formItem.USERNAME,
                            realName: this.formItem.REALNAME,
                            province: this.formItem.zone[0],
                            city: this.formItem.zone[1],
                            area: this.formItem.zone[2],
                            gender: this.formItem.GENDER,
                            telephone: this.formItem.TELEPHONE,
                            level: this.formItem.LEVEL,
                        }).then((() => {
                            this.modifyModal = false;
                            this.goPage(1);
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
