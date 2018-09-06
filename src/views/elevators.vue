<template>
    <HeaderMenu>
        <div>
        <Form ref="formInline" label-position="right" :model="search" inline :label-width="70" class="search-bar">
            <FormItem label="电梯注册码" :label-width="80">
                <Input type="text" v-model="search.regCode"></Input>
            </FormItem>
            <FormItem label="安装人员">
                <Input type="text" v-model="search.installer"></Input>
            </FormItem>
            <FormItem label="安装地址">
                <Input type="text" v-model="search.address"></Input>
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
            <Table stripe :columns="columns" :data="data" style="margin-bottom:20px;"></Table>
            <Page :total="100" show-sizer />
        </div>
        </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    export default {
        data () {
            return {
                isSearching: false,
                search: {
                    regCode: '',
                    installer: '',
                    address: '',
                    status: 'all',
                },
                columns: [
                    {
                        title: '电梯注册码',
                        key: 'sns'
                    },
                    {
                        title: '电梯地址',
                        key: 'address'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '楼层',
                        key: 'floor'
                    },
                    {
                        title: '事件级别',
                        key: 'level',
                        render: (h, params) => {
                            const cls = {};
                            cls[`level-${params.row.level}`] = true;
                            return h('div', {
                                class: cls,
                            }, params.row.level)

                        },
                    },
                ],
                data: [
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                    {
                        sns: 'John Brown',
                        floor: 18,
                        status: '正常',
                        address: 'New York No. 1 Lake Park',
                        level: '2016-10-03'
                    },
                ]
            };
        },
        methods: {
            handleSearch() {
                this.isSearching = true;
                
            }
        },
        components: {
            HeaderMenu,
        }
    }
</script>
<style scoped>
</style>
