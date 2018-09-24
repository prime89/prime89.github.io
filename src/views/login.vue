<template>
<div class="login-frame"  :style="panelStyle">
    <div class="login-panel">
            <Form :model="formItem" :label-width="80" ref="loginForm" :rules="ruleValidation">
                <div class="login-title"><span>电梯动态监测系统</span></div>
                <FormItem prop="username">
                    <Input size="large" v-model="formItem.username" prefix="ios-person" placeholder="用户名" style="width: 400px" />
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" size="large" v-model="formItem.password" prefix="ios-lock" placeholder="密码" style="width: 400px" />
                </FormItem>
                <FormItem prop="code">
                    <Input size="large" v-model="formItem.code" prefix="ios-keypad" placeholder="验证码" style="width: 400px" >
                        
                    </Input>
                    <img class="code" :src="codeUrl" alt="">
                </FormItem>
                
                <FormItem>
                    <Checkbox v-model="rememberMe" style="color:#fff">记住密码</Checkbox>
                </FormItem>

                <FormItem>
                    <RadioGroup v-model="role" style="color:#fff">
                        <Radio label="超级管理员"></Radio>
                        <Radio label="管理员"></Radio>
                        <Radio label="质监局"></Radio>
                        <Radio label="监控中心"></Radio>
                    </RadioGroup>
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
                role: '超级管理员',
                codeUrl: '/auth-web/setuser/validate?'+new Date().getTime(),
                formItem: { 
                    username: '',
                    password: '',
                    code: '',
                },
                ruleValidation: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur' 
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur' 
                    }],
                    code: [{
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur' 
                    }]
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
                validation: true,
                passwdChanged: false,
            };
        },
        mounted() {
            this.getCode();
        },
        methods: {
            getCode () {
                this.$http.post(this.$url.CODE).then(response => {
                    this.codeUrl = response.data.validation_1 + response.data.validation_2;
                });
            },
            login () {
                this.$refs.loginForm.validate(valid => {
                    if (!valid) {
                        return;
                    }

                    this.$http.post(this.$url.LOGIN, this.formItem).then((response) => {
                        this.loginPost(response);
                    }, () => {
                        this.loginPost({
                            userName: '章三',
                            sys_role_name: '超级管理员',
                            pdstatus: true,
                        });
                    }).catch(() => {
                        this.loginPost({
                            data: {
                                userName: '章三',
                                sys_role_name: '超级管理员',
                                pdstatus: true,
                                province: '广东省',
                                city: '深圳市',
                                area: '南山区',
                            }
                        });
                        console.log('login error');
                    });
                    
                });
            },
            loginPost (response) {
                //set user role
                const userinfo = {
                    username: response.data.userName,
                    role: this.role || response.data.sys_role_name,
                    passwdResetted: !!response.data.pdstatus,
                };
                this.$store.commit('setUser', userinfo);
                localStorage.setItem('loginUser', JSON.stringify(userinfo));
                
                this.reset();
                if (!userinfo.passwdResetted) {
                    return this.$router.push({
                        path: '/resetPasswd'
                    });
                }
                return this.$router.push({
                    path: '/overview',
                });
            },
            reset () {
                this.$refs.loginForm.resetFields();
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
.code {
    position: absolute;
    right: 100px;
    width: 100px;
    height: 36px;
}
</style>
