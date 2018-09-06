<template>
<div class="login-frame"  :style="panelStyle">
    <div class="login-panel">
            <Form :model="formItem" :label-width="80">
                <div class="login-title"><span>电梯动态监测系统</span></div>
                <FormItem>
                    <Input size="large" v-model="formItem.username" prefix="logo-usd" placeholder="用户名" style="width: 400px" />
                </FormItem>
                <FormItem>
                    <Input size="large" v-model="formItem.password" prefix="logo-usd" placeholder="密码" style="width: 400px" />
                </FormItem>

                
                <FormItem>
                    <Checkbox v-model="rememberMe" style="color:#fff">记住密码</Checkbox>
                </FormItem>
                <FormItem>
                    <Verify @success="validateOk()" @error="error" type="puzzle" :barSize="barSize"
                    :imgSize="imgSize" :imgUrl="imgUrl" :imgName="imgName"></Verify>
                </FormItem>
                <FormItem>
                     <Button @click="login" type="info" style="width: 400px;">登陆</Button>
                </FormItem>
               
            </Form>
        </div>
        </div>
</template>
<script>
    import Verify from 'vue2-verify'
    export default {
        data () {
            return {
                formItem: { 
                    username: '',
                    password: '',
                },
                imgSize: {
                    width: '398px',
                    height: '100px',
                },
                barSize: {
                    width: '398px',
                    height: '40px',
                },
                imgUrl: 'dist/images/validates/',
                imgName: ['1.jpg', '2.png'],
                rememberMe: false,
                validation: false,
                passwdChanged: false,
            };
        },
        methods: {
            validateOk () {
                this.validation = true;
            },
            login () {
                if (!this.validation) {
                    console.log('validation error');
                    return 
                }
                this.$store.commit('setUser', {
                    username: this.formItem.username,
                    passwdResetted: false,
                });
                localStorage.setItem('loginUser', JSON.stringify({username: this.formItem.username}));
                
                this.reset();
                if (!this.passwdChanged) {
                    return this.$router.push({
                        path: '/resetPasswd'
                    });
                }
                return this.$router.push({
                    path: '/overview',
                });
                this.$http.post(this.$url.LOGIN, this.formItem).then(((data) => {
                    this.$router.push({
                    path: this.menus[name].link,
                });
                }).bind(this));
            },
            error (obj) {
                obj.refresh();
            },
            reset () {
                this.validation = false;
                this.username = '';
                this.password = '';
            }
        },
        computed: {
            panelStyle () {
                let top = window.innerHeight < 530 ? 10: window.innerHeight - 530;
                if (top > 200) {
                    top = 200;
                }
                return {
                    'padding-top': `${top}px`,
                }
            }
        },
        components: {
            Verify,
        },
    }
</script>
<style scoped>
.login-frame{
    height: 100%;
    background-image: url('../images/u3.jpg');
    background-repeat: no-repeat;
    background-position: 0100%;
    background-size:100% 100%; 
}
.login-panel{
    width: 600px;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
    background: transparent;
    background-color: rgba(0, 0, 0, 0.298039215686275);
}
.login-title{
    text-align: center;
}
.login-title span{
    font-size: 28px;
    color: #fff;
    font-weight: bold;
}
</style>
