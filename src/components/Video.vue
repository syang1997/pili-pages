<template>
    <div id="app">
        <nav-bar></nav-bar>
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
                                title="历史累计弹幕数1044" class="dm">1044弹幕</span><span class="copyright"><i
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
            <div class="player_av">
                <d-player :options="options"
                          @play="play"
                          ref="player">
                </d-player>
            </div>

            <div class="Dplayer_danmu">
                <div class="Dplayer_watching">
                    <span class="Dplayer-watching-number" title="这个数据是假的">24</span>
                    人正在观看,<span class="danmuku_num">100</span>条弹幕
                </div>

                <ul class="Dplayer_list">
                    <li>时间</li>
                    <li>发送内容</li>
                    <li>用户类型</li>
                </ul>
                <ul class="list_ovefiow">

                </ul>

            </div>
        </div>

        <div class="alert_back">加载中</div>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import GitHubBadge from 'vue-github-badge'
    import NavBar from '../components/NavBar.vue'
    import FootBar from '../components/FootBar.vue'
    import VueDPlayer from 'vue-dplayer'
    import 'vue-dplayer/dist/vue-dplayer.css'
    export default {
        data() {
            return {
                videomsg:{
                    vid:0,
                    vurl: '',
                    vname: '',
                    classify: '',
                    original: true,
                    intro: '',
                    cover: '',
                    author:{
                        uid:0,
                        name:'',
                        fans:'',
                        image:'',
                    },
                    createtime:'',
                    hits:0,
                    collect:0,
                },
                options: {
                    video: {
                        url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                    },
                    danmaku: {
                        id: 'demo',
                        api: 'https://dplayer.alone88.cn/',
                    },
                    lang: 'zh-cn',
                    autoplay: false,
                    contextmenu: [
                        {
                            text: 'GitHub',
                            link: 'https://github.com/MoePlayer/vue-dplayer'
                        }
                    ]
                },
                player: null,
            }
        },
        mounted() {
            if (typeof this.$route.query.vn !== 'undefined') {
                this.videomsg.vid = this.$route.query.vn;
                this.getVideo();
            }
            this.player = this.$refs.player.dp;
        },
        methods: {
            getVideo(){
                const _this = this;
                axios.post('http://localhost:8181/video/play',_this.videomsg).then(function (response) {
                    if (response.data.code == 200) {
                        _this.videomsg=response.data.data;
                        _this.options.video.url=_this.videomsg.vurl;
                        _this.options.danmaku.id=_this.videomsg.vurl.slice(35,71);
                        _this.switchHandle(_this.videomsg.vurl,_this.videomsg.vurl.slice(35,71));
                    }
                })
            },
            play() {
                console.log('play callback')
            },
            dan(){

            },
            switchHandle(vurl,vid) {
                this.player.switchVideo({
                        url: vurl,
                    },
                    {
                        id: vid,
                        api: 'https://dplayer.alone88.cn/',
                        maximum: 3000,
                    })
            },
            //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
            dateFormat:function(time) {
                var date=new Date(time);
                var year=date.getFullYear();
                /* 在日期格式中，月份是从0开始的，因此要加0
                 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
                 * */
                var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
                var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
                var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
                var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
                var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
                // 拼接
                return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
            },
            hitFormat:function(hit) {
                var nhit=hit<10000 ? hit : (hit/10000).toFixed(2)+"万";
                return nhit;
            },
        },
        components: {
            'd-player': VueDPlayer,
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
    .info_til{
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
        height: 363px;
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
