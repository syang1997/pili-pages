<template>
    <div class="nav-bar">
        <header id="header">
            <div id="page_top">
                <div class="bg-wrap">
                    <div class="bg"></div>
                    <div class="mask"></div>
                </div>
                <div class="header-top">
                    <div class="page-width clearfix">
                        <div class="header-top__nav">
                            <ul>
                                <li class="item item-home">
                                    <a href="/home">主站</a>
                                </li>
                            </ul>
                        </div>
                        <div class="header-top__user">
                            <div class="user_box" v-if="loginUser.uid!==''">
                                <el-avatar  :size="30" style="margin: 6px 0 0 0 "
                                           :src="loginUser.image"></el-avatar>
                                <el-dropdown class="dt_list">
                                  <span class="el-dropdown-link"  style="font-size: 13px">
                                    动态<i class="el-icon-arrow-down el-icon--right"></i>
                                  </span>
                                    <el-dropdown-menu  slot="dropdown">
                                        <el-dropdown-item class="dt">
                                            <el-card :body-style="{ padding: '0px' }">
                                                <div class="dt">
                                                    <el-row>
                                                        <el-col :span="5"><div class="grid-content bg-purple">
                                                            <div class="dtf">
                                                                <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                            </div>
                                                        </div></el-col>
                                                        <el-col :span="11"><div class="grid-content bg-purple-light">
                                                            <div class="name_line">
                                                            <span class="user_name" >upup</span><span class="pulish_time">1小时前</span>
                                                            </div>
                                                            <a class="content">标题标题标题标题标题</a>
                                                        </div></el-col>
                                                        <el-col :span="8"><div class="grid-content bg-purple-light">
                                                            <a href="Video.vue"> <img class="dtr" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></a>
                                                        </div></el-col>
                                                    </el-row>
                                                </div>
                                            </el-card>
                                        </el-dropdown-item>
                                        <el-dropdown-item class="dt">
                                            <el-card :body-style="{ padding: '0px' }">
                                                <div class="dt">
                                                    <el-row>
                                                        <el-col :span="5"><div class="grid-content bg-purple">
                                                            <div class="dtf">
                                                                <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                            </div>
                                                        </div></el-col>
                                                        <el-col :span="11"><div class="grid-content bg-purple-light">
                                                            <div class="name_line">
                                                            <span class="user_name" >upup</span><span class="pulish_time">1小时前</span>
                                                            </div>
                                                            <a class="content">标题标题标题标题标题</a>
                                                        </div></el-col>
                                                        <el-col :span="8"><div class="grid-content bg-purple-light">
                                                            <a href="Video.vue"> <img class="dtr" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></a>
                                                        </div></el-col>
                                                    </el-row>
                                                </div>
                                            </el-card>
                                        </el-dropdown-item>
                                        <el-dropdown-item class="dt">
                                            <el-card :body-style="{ padding: '0px' }">
                                                <div class="dt">
                                                    <el-row>
                                                        <el-col :span="5"><div class="grid-content bg-purple">
                                                            <div class="dtf">
                                                                <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                            </div>
                                                        </div></el-col>
                                                        <el-col :span="11"><div class="grid-content bg-purple-light">
                                                            <div class="name_line">
                                                                <span class="user_name" >upup</span><span class="pulish_time">1小时前</span>
                                                            </div>
                                                            <a class="content">标题标题标题标题标题</a>
                                                        </div></el-col>
                                                        <el-col :span="8"><div class="grid-content bg-purple-light">
                                                            <a href="Video.vue"> <img class="dtr" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></a>
                                                        </div></el-col>
                                                    </el-row>
                                                </div>
                                            </el-card>
                                        </el-dropdown-item>
                                        <el-dropdown-item class="dt">
                                            <el-card :body-style="{ padding: '0px' }">
                                                <div class="dt">
                                                    <el-row>
                                                        <el-col :span="5"><div class="grid-content bg-purple">
                                                            <div class="dtf">
                                                                <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                                            </div>
                                                        </div></el-col>
                                                        <el-col :span="11"><div class="grid-content bg-purple-light">
                                                            <div class="name_line">
                                                                <span class="user_name" >upup</span><span class="pulish_time">1小时前</span>
                                                            </div>
                                                            <a class="content">标题标题标题标题标题</a>
                                                        </div></el-col>
                                                        <el-col :span="8"><div class="grid-content bg-purple-light">
                                                            <a href="Video.vue"> <img class="dtr" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></a>
                                                        </div></el-col>
                                                    </el-row>
                                                </div>
                                            </el-card>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                            <div class="login-box">
                                <div v-if="loginUser.uid!==''">
                                    <a href="/person">个人中心</a>
                                </div>
                                <div v-if="loginUser.uid===''">
                                    <a href="/login">登录</a>
                                    <span></span>
                                    <a href="/register">注册</a>
                                </div>
                            </div>
                            <div class="user-post">
                                <a href="#" class="link">投 稿</a>
                                <div class="user-post__hover header-hover">
                                    <a @click="gotg('one')" class="post">视频投稿</a>
                                    <a @click="gotg('two')" class="manage">投稿管理</a>
                                    <a @click="gotg('three')" class="create">创作中心</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-c">
                <div class="page-width">
                    <div id="search" class="clearfix">
                            <div class="search-rank" @click="gotop()">排行榜</div>
                        <div class="search-box">
                            <input type="text" class="text" placeholder="Search here...">
                            <a href="#" class="btn"><i></i></a>
                        </div>
                    </div>
                    <div class="header-title">哔哩哔哩 (゜-゜)つロ 干杯~</div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Heard",
        data() {
            return {
                loginUser: {
                    uid: '',
                    name: '',
                    image:''
                }
            }
        },
        methods: {
            init() {
                const _this = this
                if (typeof this.$cookies.get('token') !== 'undefined' && typeof this.$session.get('user') === 'undefined') {
                    axios.post('http://localhost:8181/user/token', {'token': this.$cookies.get('token')})
                        .then(function (response) {
                            if (response.data.code == 200) {
                                _this.$session.set('user', response.data.data, 60 * 60 * 24 * 2);
                                location.reload();
                            }
                            if (response.data.code != 200) {
                                _this.$message.error(response.data.prompt);
                            }
                        });
                }
                if (typeof this.$session.get('user') !== 'undefined') {
                    this.loginUser.uid = this.$session.get('user').uid;
                    this.loginUser.name = this.$session.get('user').name;
                    this.loginUser.image = this.$session.get('user').image;
                }
            },
            gotg(index){
                this.$router.push({path:'person',query:{activeName2:index}})
            },
            gotop(){
                this.$router.push({path:'top'});
            }
        }
        ,
        created() {
            this.init();
        }
    }
</script>

<style lang="less" scoped>
    .user_box {
        position: relative;
        float: left;
        margin: 0 0 0 0;
    }

    .dt {
        width: 350px;
        height: 80px;
    }

    .dtf {
        margin: 20px 10px auto ;
    }

    .dtc {

    }
    .dt_list{
        display: inline-block;
        padding: 0 10px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        position: relative;
        top: -10px;
    }
    .name_line{
        font-size: 12px;
        color: #505050;
        white-space:nowrap;
    }
    .user_name{
        color: inherit;
        border: 0;
    }
    .pulish_time{
        margin-left: 10px;
        color: #999;
        display: inline-block;
    }
    .content{
        margin-top: 6px;
        font-size: 14px;
        color: #212121;
        font-weight: 500;
        max-width: 200px;
    }
    .dtr {
        height: 82px;
        width: 120px;
    }


    .el-dropdown-link {
        height: 42px;
        line-height: 42px;
        text-align: center;
        padding: 0 12px;
        color: #fff;
        font-size: 12px;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

</style>