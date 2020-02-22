<template>
    <div id="app">
        <nav-bar ref="headerChild"></nav-bar>
        <div class="videl_box">
            <el-row>
                <el-col :span="17">
                    <div class="grid-content bg-purple">
                        <div>
                            <h1 title="标题" class="info_til">
                                <span>{{videomsg.vname}}</span>
                            </h1>
                        </div>
                        <div>
                            <div class="video-data"><span class="a-crumbs"><a target="_blank"
                                                                              href="//www.bilibili.com/v/game/">{{videomsg.classify}}</a></span>
                                <i class="el-icon-arrow-right"></i>
                                <span>{{dateFormat(videomsg.createtime)}}</span>
                                <!----></div>
                        </div>
                        <div class="video-data"><span title="总播放数" class="view">{{hitFormat(videomsg.hits)}}播放&nbsp;·&nbsp;</span><span
                                class="dm">{{dnum}}弹幕</span><span class="copyright"><i
                                class="el-icon-error"></i>未经作者授权，禁止转载</span><!----></div>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content bg-purple-light">
                        <div>
                            <el-avatar :size="70"
                                       :src="videomsg.author.image"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple-light">
                        <div>
                            <a href="#" class="user_name">
                                {{videomsg.author.name}}
                            </a>
                        </div>
                        <div>
                            <el-button type="danger" icon="el-icon-plus" plain>关注</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="Dplayer_box">
            <div class="player_av" id="dplayer"></div>

            <div class="Dplayer_danmu">
                <div class="Dplayer_watching">
                    <span class="Dplayer-watching-number" title="这个数据是假的">24</span>
                    人正在观看,<span class="danmuku_num">{{dnum}}</span>条弹幕
                </div>

                <ul class="Dplayer_list">
                    <li>时间</li>
                    <li style="float: right;margin: 0 47px 0 0;">发送内容</li>
                </ul>
                <ul class="list_ovefiow">
                    <ol class="danmuku_list" v-for="item in danmus" :key="item.value">
                        <li>{{danmuTimeFormat(item.time)}}</li>
                        <li style="float: right">{{item.text}}</li>
                    </ol>
                </ul>

            </div>

        </div>
        <div class="alert_back">加载中</div>
        <div class="video-down">
            <div class="video-toolbar">
                <div class="ops">
                    <i class="el-icon-chat-dot-round" style="font-size: 28px;"></i><span> 123</span>
                    <i class="el-icon-star-off" style="font-size: 28px;"></i><span> 123</span>
                </div>
            </div>
            <el-collapse>
                <el-collapse-item title="视频简介" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                </el-collapse-item>
            </el-collapse>
            <div class="comment-send">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item>
                        <div>
                            <el-avatar :size="55"
                                       :src="user.image"></el-avatar>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea" style="width: 520px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="height: 54px;" type="primary">评论</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-tabs v-model="activeName">
                <el-tab-pane label="按热度排序" name="first">
                    <div class="block">
                        <div class="comment-item">
                            <div class="user-face"><div>
                                <el-avatar :size="55"
                                           :src="user.image"></el-avatar>
                            </div></div>
                            <div class="con">
                                <div class="user">
                                    test
                                </div>
                                <p class="text">建议改成 祖 安 男 妈 马</p>
                                <div class="info">
                                    <span class="re">2012</span>
                                    <span class="re"><i class="el-icon-thumb"></i>12</span>
                                    <span class="re">回复</span>
                                </div>
                                <div class="user-face"><div>
                                    <el-avatar :size="35"
                                               :src="user.image"></el-avatar>
                                </div></div>
                                <div class="cont">
                                    <div class="user">
                                        test
                                    </div>
                                    <p class="text">@test:建议改成 祖 安 男 妈 马</p>
                                    <div class="info">
                                        <span class="re">2012</span>
                                        <span class="re"><i class="el-icon-thumb"></i>12</span>
                                        <span class="re">回复</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comment-item">
                            <div class="user-face"><div>
                                <el-avatar :size="55"
                                           :src="user.image"></el-avatar>
                            </div></div>
                            <div class="con">
                                <div class="user">
                                    test
                                </div>
                                <p class="text">建议改成 祖 安 男 妈 马</p>
                                <div class="info">
                                    <span class="re">2012</span>
                                    <span class="re"><i class="el-icon-thumb"></i>12</span>
                                    <span class="re">回复</span>
                                </div>
                                <div class="user-face"><div>
                                    <el-avatar :size="35"
                                               :src="user.image"></el-avatar>
                                </div></div>
                                <div class="cont">
                                    <div class="user">
                                        test
                                    </div>
                                    <p class="text">建议改成 祖 安 男 妈 马</p>
                                    <div class="info">
                                        <span class="re">2012</span>
                                        <span class="re"><i class="el-icon-thumb"></i>12</span>
                                        <span class="re">回复</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="按时间排序" name="second">
                    <div class="block">
                        <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import GitHubBadge from 'vue-github-badge'
    import NavBar from '../components/NavBar.vue'
    import FootBar from '../components/FootBar.vue'
    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';

    export default {
        data() {
            return {
                activeName: 'first',
                dp: {},
                danmus: {},
                dnum: 0,
                user: {},
                videomsg: {
                    vid: 0,
                    vurl: '',
                    vname: '',
                    classify: '',
                    original: true,
                    intro: '',
                    cover: '',
                    author: {
                        uid: 0,
                        name: '',
                        fans: '',
                        image: '',
                    },
                    createtime: '',
                    hits: 0,
                    collect: 0,
                },
            }
        },
        mounted() {
            this.user = this.$refs.headerChild.loginUser;
            if (typeof this.$route.query.vn !== 'undefined') {
                this.videomsg.vid = this.$route.query.vn;
                this.getVideo();
            }
            if (typeof this.$route.query.vu !== 'undefined') {
                var url = this.$route.query.vu;
                var id = url.slice(35, 71);
                this.dp = new DPlayer({
                    container: document.getElementById('dplayer'),
                    video: {
                        url: url,
                    }, danmaku: {
                        id: id,
                        api: 'https://dplayer.moerats.com/',
                        maximum: 1000,
                        user: 'pilipili',
                    }
                });
                const _this = this;
                axios.get('/dans/v3/?id=3401bcf1-2a37-4e9f-8308-ab2111acbf09').then(function (res) {
                    _this.danmus = _this.dp.danmaku.dan;
                    _this.dnum = _this.danmus.length;
                })
            }
        },
        methods: {
            getVideo() {
                const _this = this;
                axios.post('http://localhost:8181/video/play', _this.videomsg).then(function (response) {
                    if (response.data.code == 200) {
                        _this.videomsg = response.data.data;
                    }
                })
            }
            ,
            //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
            dateFormat: function (time) {
                var date = new Date(time);
                var year = date.getFullYear();
                /* 在日期格式中，月份是从0开始的，因此要加0
                 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
                 * */
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                // 拼接
                return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
            },
            hitFormat: function (hit) {
                var nhit = hit < 10000 ? hit : (hit / 10000).toFixed(2) + "万";
                return nhit;
            },
            danmuTimeFormat: function (time) {
                var theTime = parseInt(time);// 秒
                var middle = 0;// 分
                var hour = 0;// 小时

                if (theTime > 60) {
                    middle = parseInt(theTime / 60);
                    theTime = parseInt(theTime % 60);
                    if (middle > 60) {
                        hour = parseInt(middle / 60);
                        middle = parseInt(middle % 60);
                    }
                }
                var result = (Array(2).join(0) + theTime).slice(-2);
                result = "" + (Array(2).join(0) + middle).slice(-2) + ":" + result;
                result = "" + (Array(2).join(0) + hour).slice(-2) + ":" + result;
                return result;
            }
        },
        components: {
            'github-badge': GitHubBadge,
            NavBar,
            FootBar
        }
    }
</script>

<style scoped>
    @import "../assets/css/base.css";
    @import "../assets/css/css.css";
    @import "../assets/css/DPlayer.min.css";

    .comment-send {
        margin: 10px 0 -30px 0;
    }

    .user-face {
        float: left;
        margin: 24px 0 0 5px;
        position: relative;
    }

    .con {
        position: relative;
        margin-left: 85px;
        padding: 22px 0 14px;
        border-top: 1px solid #e5e9ef;
    }.cont {
        position: relative;
        margin-left: 55px;
        padding: 5px;
    }

    .user {
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        padding-bottom: 4px;
        display: block;
        word-wrap: break-word;
    }
    .text{
        line-height: 20px;
        padding: 2px 0;
        font-size: 14px;
        text-shadow: none;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-word;
    }
    .info{
        color: #99a2aa;
        line-height: 26px;
        font-size: 12px;
    }
    .re{
        margin-right: 20px;
    }
    .video-down {
        width: 680px;
        margin: 16px 10px 16px 267px;
    }

    .video-toolbar {
        line-height: 30px;
        height: 28px;
        font-size: 16px;
        color: #505050;
        border-bottom: 1px solid #e5e9f0;
        padding-bottom: 12px;
        position: relative;

    }

    .ops {
        float: left;
        height: 24px;
        -ms-user-select: none;
        user-select: none;
    }

    .video-toolbar .ops > span {
        width: 92px;
        margin-right: 8px;
        cursor: pointer;
        transition: all .3s;
        display: inline-block;
        white-space: nowrap;
        color: #505050;
        position: relative;
    }

    .Dplayer_box {
        overflow: hidden;
        width: 980px;
        height: 382px;
        margin: 0 auto;
        display: block;
        border-top: 1px solid #e5e9ef;
        border-bottom: 1px solid #e5e9ef;
        background-color: #f6f9fa
    }

    .videl_box {
        overflow: hidden;
        width: 980px;
        height: 90px;
        margin: 0 auto;
        display: block;
    }

    .video-data {
        margin-top: 11px;
        font-size: 12px;
        height: 16px;
        color: #999;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .info_til {
        font-size: 18px;
        font-weight: 500;
        color: #212121;
        line-height: 26px;
        height: 26px;
        margin-bottom: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .user_name {
        font-size: 14px;
        color: #212121;
        font-weight: 500;
        display: inline-block;
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: top;
        margin: 0 0 10px 0;
        color: #fb7299 !important;
    }

    #player1 {
        background-size: 100% 100%;
        margin-top: 30px
    }

    .player_av {
        width: 680px;
        height: 100%;
        float: left;
        background: #000
    }

    .Dplayer_danmu {
        width: 299px;
        float: right;
        height: 100%
    }

    .Dplayer_watching {
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        font-size: 12px;
        color: #99a2aa;
        box-shadow: #ddd 0 0 5px
    }

    .Dplayer-watching-number {
        margin-left: 20px;
        font-size: 18px;
        font-weight: 700;
        color: #222;
        padding: 0
    }

    .Dplayer_list {
        width: 100%;
        height: 30px;
        overflow: hidden
    }

    .Dplayer_list li {
        width: 60px;
        height: 30px;
        float: left;
        color: #99a2aa;
        font-size: 12px;
        text-align: center;
        line-height: 30px
    }

    .Dplayer_list li:nth-child(1) {
        width: 58px !important
    }

    .Dplayer_list li:nth-child(2) {
        width: 136px !important
    }

    .list_ovefiow {
        width: 100%;
        height: 293px;
        overflow: auto
    }

    .danmuku_list {
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: left;
        color: #99a2aa;
        font-size: 12px;
        display: block;
        margin: auto;
        overflow: auto;
        margin-top: 5px
    }

    .danmuku_list li {
        float: left;
        width: 60px;
        height: 20px;
        white-space: nowrap;
        cursor: pointer
    }

    .danmuku_list li:nth-child(1) {
        width: 58px;
        margin-left: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .danmuku_list li:nth-child(2) {
        width: 125px;
        margin-right: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .danmuku_list li:nth-child(2):hover {
        color: #00a1d6
    }

    .danmuku_list li:nth-child(3) {
        margin-left: 5px
    }
</style>
