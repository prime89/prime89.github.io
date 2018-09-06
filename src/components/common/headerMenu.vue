<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1"  @on-select="handleItemSelected">
                    <div class="layout-logo">
                        <img src="../../images/u96.png" alt="" width="40px" height="40px">
                        <span>电梯动态监测系统</span>
                    </div>
                    <div class="layout-nav">
                        <MenuItem 
                        :name="index" 
                        :key="index"
                        v-for="(item, index) in menus">
                            {{item.name}}
                        </MenuItem>
                    </div>

                    <div style="float:right;">
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-contact" :size="28"/>
                                {{this.user.username}}
                            </template>
                            <MenuItem name="userInfo">用户信息</MenuItem>
                        </Submenu>
                        <div style="float:left;">|</div>
                        <MenuItem name="logout">
                            <Icon type="md-power" :size="22"></Icon>
                            退出
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content>
                <slot></slot>
            </Content>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                user: {
                    username: '',
                },
                menus: [{
                    name: '电梯总览',
                    link: '/overview',
                }, {
                    name: '电梯管理',
                    link: '/elevators',
                }, {
                    name: '事件管理',
                    link: '/incidents',
                }, {
                    name: '设备管理',
                    link: '/devs',
                }, {
                    name: '用户管理',
                    link: '/users',
                }, {
                    name: '报表',
                    link: '/report',
                }, ],
            }
        },
        mounted () {
            this.user = this.$store.state.user;

        },
        methods: {
            handleItemSelected(name) {
                if (name === 'logout') {
                    return this.logout();
                } else if (name === 'userInfo') {
                    return;
                }
                this.$router.push({
                    path: this.menus[name].link,
                });
            },
            logout () {
                this.user = {};
                this.$store.commit('setUser', {});
                localStorage.clear();
                this.$router.push({
                    path: '/',
                });
            }
        },
    }
</script>
<style scoped>
.layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    min-width: 1200px;
}
.layout-logo{
    float: left;
    position: relative;
    left: 20px;
}
.layout-logo img{
    top:12px;
    position: absolute;
}
.layout-logo span{
    margin-left: 60px;
    font-family: '微软雅黑 Regular', '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: white;
}
.layout-nav{
    width: 1000px; 
    margin: 0 auto;
    margin-left: 300px;
}
.layout-footer-center{
    text-align: center;
}
</style>
