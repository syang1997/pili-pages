<template>
    <div id="register" >
        <nav-bar></nav-bar>
        <!--登录组件-->
        <div class="login-container">
            <div class="tilte-line"><span class="tit" style="font-size: 38px;">注册</span></div>
            <div class="login-box">
                <div class="login-from">
                    <el-form ref="loginForm"  :model="loginForm" :rules="loginFormRules" label-width="0px">
                        <!--用户名-->
                        <el-form-item prop="name">
                            <el-input v-model="loginForm.name" placeholder="昵称" prefix-icon="el-icon-user"  ></el-input>
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input v-model="loginForm.email" placeholder="邮箱" prefix-icon="el-icon-message"  ></el-input>
                        </el-form-item>
                        <!--密码-->
                        <el-form-item   prop="password">
                            <el-input v-model="loginForm.password" placeholder="密码"prefix-icon="el-icon-lock" type="password"></el-input>
                        </el-form-item>
                        <el-form-item prop="checkPass">
                            <el-input v-model="loginForm.checkPass" placeholder="确认密码"prefix-icon="el-icon-lock" type="password"></el-input>
                        </el-form-item>
                        <!--按钮-->
                        <el-form-item class="btns">
                            <el-button style="width: 410px;"  icon="el-icon-thumb" @click="register"  type="primary">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import FootBar from '../components/FootBar.vue'
    export default {
        name: 'Resgister',
        components: {
            NavBar,
            FootBar
        },
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.loginForm.checkPass !== '') {
                        this.$refs.loginForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.loginForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                loginForm: {
                    name: '',
                    email: '',
                    password: '',
                    checkPass: ''
                },
                loginFormRules: {
                    name: [
                        {required: true, message: '请输入昵称', trigger: 'blur'}
                        ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            register(){
                const _this=this
                this.$refs.loginForm.validate( valid=>{
                    if(valid){
                        // 发送 POST 请求
                        axios.post('http://localhost:8181/user/register',this.loginForm)
                            .then(function (response) {
                                console.log(response)
                                if (response.data.code=='200'){
                                    _this.$message({
                                        message: '注册成功',
                                        type: 'success'
                                    });
                                    _this.$router.push({ path:'/'  })
                                }
                                if(response.data.code!='200'){
                                    _this.$message.error(response.data.prompt);
                                }
                            });
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .login-container {
        background: #fff;
        height: 420px;
    }
    .tilte-line{
        padding: 10px 0 10px 0;
        width: 980px;
        height: 28px;
        margin: 0 auto;
        border-bottom: 1px solid #ddd;
        margin-bottom: 28px;
        text-align: center;
    }
    .tit{
        height: 56px;
        line-height: 56px;
        margin: 0 auto;
        padding: 0 20px;
        font-size: 40px;
        background: #fff;
        text-align: center;
    }
    .login-box {
        width: 450px;
        height: 330px;
        background-color: #ffffff;
        border-radius: 3px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
    }
    .btns{
        display: flex;
        justify-content: flex-end;

    }
    .login-from{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
</style>