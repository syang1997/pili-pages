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
                                <div class="dt_box">
                                    <el-popover
                                            placement="top"
                                            trigger="hover"
                                            v-model="visible">
                                        <div >
                                            <ul class="infinite-list" v-infinite-scroll="dtload" style="overflow:auto;max-height: 400px">
                                                <li v-for="item in dynamic" class="infinite-list-item" :key="dynamic.value">
                                                    <div class="dt">
                                                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                                                            <div class="dt">
                                                                <el-row>
                                                                    <el-col :span="5"><div class="grid-content bg-purple">
                                                                        <div class="dtf">
                                                                            <el-avatar :size="50" :src="item.author.image"></el-avatar>
                                                                        </div>
                                                                    </div></el-col>
                                                                    <el-col :span="11"><div class="grid-content bg-purple-light">
                                                                        <div class="name_line">
                                                                            <span class="user_name" >upup</span><span class="pulish_time">{{dateFormat(item.createtime)}}</span>
                                                                        </div>
                                                                        <a class="content">{{item.vname}}</a>
                                                                    </div></el-col>
                                                                    <el-col :span="8"><div class="grid-content bg-purple-light">
                                                                        <a @click="playVideo(item)"> <img class="dtr" :src="item.cover"></a>
                                                                    </div></el-col>
                                                                </el-row>
                                                            </div>
                                                        </el-card>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a class="dtfu" slot="reference"  @mouseover="visible = !visible" >动态</a>
                                    </el-popover>
                                </div>
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
                dtcf:123,
                visible:false,
                loginUser: {
                    uid: '',
                    name: '',
                    image:''
                },
                dynum:1,
                dynamic:{}
            }
        },
        methods: {
            dtload () {
                this.dynum++;
                this.getdynamic(this.dynum);
            },
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
            getdynamic(num){
                const _this = this;
                    let data=new URLSearchParams();
                    data.append("uid",this.loginUser.uid);
                    data.append("num",num);
                    axios.post('http://localhost:8181/concern/dynamic',data )
                        .then(function (response) {
                            if (response.data.code == 200) {
                                if ( JSON.stringify(_this.dynamic)=='{}') {
                                    _this.dynamic=response.data.data;
                                }else {
                                    _this.dynamic= _this.dynamic.concat(response.data.data);
                                }
                            }
                        });
            },
            gotg(index){
                this.$router.push({path:'person',query:{activeName2:index}})
            },
            gotop(){
                this.$router.push({path:'top'});
            },
            //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
            dateFormat: function (timestamp) {
                var arrTimestamp = (timestamp + '').split('');
                for (var start = 0; start < 13; start++) {
                    if (!arrTimestamp[start]) {
                        arrTimestamp[start] = '0';
                    }
                }
                timestamp = arrTimestamp.join('') * 1;
                var minute = 1000 * 60;
                var hour = minute * 60;
                var day = hour * 24;
                var halfamonth = day * 15;
                var month = day * 30;
                var now = new Date().getTime();
                var diffValue = now - timestamp;

                // 如果本地时间反而小于变量时间
                if (diffValue < 0) {
                    return '不久前';
                }
                // 计算差异时间的量级
                var monthC = diffValue / month;
                var weekC = diffValue / (7 * day);
                var dayC = diffValue / day;
                var hourC = diffValue / hour;
                var minC = diffValue / minute;

                // 数值补0方法
                var zero = function (value) {
                    if (value < 10) {
                        return '0' + value;
                    }
                    return value;
                };

                // 使用
                if (monthC > 4) {
                    // 超过1年，直接显示年月日
                    return (function () {
                        var date = new Date(timestamp);
                        return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
                    })();
                } else if (monthC >= 1) {
                    return parseInt(monthC) + "月前";
                } else if (weekC >= 1) {
                    return parseInt(weekC) + "周前";
                } else if (dayC >= 1) {
                    return parseInt(dayC) + "天前";
                } else if (hourC >= 1) {
                    return parseInt(hourC) + "小时前";
                } else if (minC >= 1) {
                    return parseInt(minC) + "分钟前";
                }
                return '刚刚';
            },
            playVideo(vi){
                this.$router.push({path:'videot',query:{vn:vi.vid,vu:vi.vurl}})
            },
        }
        ,
        created() {
            this.init();
            this.getdynamic(this.dynum);
        }
    }
</script>

<style lang="less" scoped>
    .user_box {
        position: relative;
        float: left;
        margin: 0 0 0 0;
    }
    .dt_box{
        margin: -37px 0 0 30px;
    }
    .dt {
        width: 350px;
        height: 80px;
        padding: 10px 0 10px 0;
    }

    .dtf {
        margin: 20px 10px auto ;
    }

    .dtc {

    }
    .infinite-list-item{
        margin: 0 0 10px 0 ;
    }
    .dtfu{
        height: 42px;
        line-height: 42px;
        text-align: center;
        padding: 0 12px;
        color: #fff;
        font-size: 12px;
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