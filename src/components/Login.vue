<template>
    <div id="login" >
        <nav-bar></nav-bar>
        <!--登录组件-->
        <div class="login-container">
            <div class="tilte-line"><span class="tit" style="font-size: 38px;">登录</span></div>
            <div class="login-box">
                <div class="login-from">
                    <el-form ref="loginFormRef"  :model="loginForm" :rules="loginFormRules" label-width="0px">
                        <!--用户名-->
                        <el-form-item prop="email">
                            <el-input v-model="loginForm.email" placeholder="账号" prefix-icon="el-icon-user"  ></el-input>
                        </el-form-item>
                        <!--密码-->
                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" placeholder="密码"prefix-icon="el-icon-lock" type="password"></el-input>
                        </el-form-item>
                        <!--按钮-->
                        <el-form-item class="btns">
                            <el-button icon="iconfont icon-bilibili-line" @click="login" type="primary">登录</el-button>
                            <el-button icon="el-icon-thumb" @click="goregister">注册</el-button>
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
        name: 'login',
        components: {
            NavBar,
            FootBar
        },
        data(){
            return{
                loginForm: {
                    email: '',
                    password: ''
                },
                loginFormRules: {
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6,max: 15,message: '密码在6到15个字符', trigger: ['blur', 'change'] }
                    ]
                }
            };
        },
        methods: {
            login(){
                const _this=this
               this.$refs.loginFormRef.validate( valid=>{
                   if(valid){
                       // 发送 POST 请求
                       axios.post('http://localhost:8181/user/login',this.loginForm)
                           .then(function (response) {
                               if (response.data.code==200){
                                   _this.$message({
                                       message: '登录成功',
                                       type: 'success'
                                   });
                                   _this.$session.set('user',response.data.data,60*60*24*2);
                                   _this.$cookies.set('token',response.data.data.token,60*60*24*2);
                                   _this.$router.push("/home");
                               }
                               if(response.data.code!=200){
                                   _this.$message.error(response.data.prompt);
                               }
                           });
                   }
               })
            },
            goregister(){
                this.$router.push("/register");
            }
        }
    };
</script>

<style lang="less" scoped>
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
        height: 250px;
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