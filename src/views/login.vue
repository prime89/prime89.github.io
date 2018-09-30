<template>
<div class="login-frame"  :style="panelStyle">
    <div class="login-panel">
            <Form :model="formItem" :label-width="80" ref="loginForm" :rules="ruleValidation">
                <div class="login-title"><span>电梯动态监测系统</span></div>
                <FormItem prop="userName">
                    <Input size="large" v-model="formItem.userName" prefix="ios-person" placeholder="用户名" style="width: 400px" />
                </FormItem>
                <FormItem prop="passWord">
                    <Input type="password" size="large" v-model="formItem.passWord" prefix="ios-lock" placeholder="密码" style="width: 400px" />
                </FormItem>
                <FormItem prop="validateCode">
                    <Input size="large" v-model="formItem.validateCode" prefix="ios-keypad" placeholder="验证码" style="width: 400px" >
                        
                    </Input>
                    <img class="code" :src="codeUrl" alt="" @click="getCode">
                </FormItem>
                
                <FormItem>
                    <Checkbox v-model="rememberMe" style="color:#fff">记住密码</Checkbox>
                </FormItem>

                <!-- <FormItem>
                    <RadioGroup v-model="role" style="color:#fff">
                        <Radio label="超级管理员"></Radio>
                        <Radio label="管理员"></Radio>
                        <Radio label="质监局"></Radio>
                        <Radio label="监控中心"></Radio>
                    </RadioGroup>
                </FormItem> -->
                
                <FormItem>
                     <Button @click="login" type="info" style="width: 400px;">登录</Button>
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
                codeUrl: '',
                formItem: { 
                    userName: '',
                    passWord: '',
                    validateCode: '',
                },
                ruleValidation: {
                    userName: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur' 
                    }],
                    passWord: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur' 
                    }],
                    validateCode: [{
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
                    const data = response.data.data;
                    this.codeUrl = data.validation_1 + data.validation_2;
                });
            },
            login () {
                this.$refs.loginForm.validate(valid => {
                    if (!valid) {
                        return;
                    }

                    const formData = new FormData();
                    formData.append('userName', this.formItem.userName);
                    formData.append('passWord', this.formItem.passWord);
                    formData.append('validateCode', this.formItem.validateCode);
                    this.$http.post(this.$url.LOGIN, formData).then((response) => {
                        this.loginPost(response);
                        
                    }, () => {
                        this.getCode();
                    }).catch(() => {
                        console.log('login error');
                        this.getCode();
                    });
                    
                });
            },
            loginPost (response) {
                //set user role
                const data = response.data.data;
                const userinfo = {
                    id: data.userId,
                    username: data.userName,
                    role: data.sys_role_name,
                    passwdResetted: data.pdstatus != 0,
                    province: data.province || '',
                    city: data.city || '',
                    area: data.area || '',
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
    cursor: pointer;
    right: 81px;
    width: 100px;
    height: 34px;
    top: 1px;
}
</style>
