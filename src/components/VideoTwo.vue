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
                            <el-button v-if="!isConcern" @click="addConcern" type="danger" icon="el-icon-plus" plain>关注<span v-if="videomsg.author.fans>0">{{hitFormat(videomsg.author.fans)}}</span></el-button>
                            <el-button v-if="isConcern" @click="delConcern" type="info" icon="el-icon-plus" plain>已关注<span v-if="videomsg.author.fans>0">{{hitFormat(videomsg.author.fans)}}</span></el-button>
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
                    <i class="el-icon-chat-dot-round" style="font-size: 28px;"></i><span> {{videomsg.replies}}</span>
                    <span v-if="!isCollect" @click="addCollect">
                    <i  class="el-icon-star-off"  style="font-size: 28px;"></i><span> {{videomsg.collect}}</span>
                    </span>
                    <span v-if="isCollect" @click="delCollect">
                    <i  class="el-icon-star-on"  style="font-size: 28px;"></i><span> {{videomsg.collect}}</span>
                    </span>
                </div>
            </div>
            <el-collapse>
                <el-collapse-item title="视频简介" name="1">
                    <div>{{videomsg.intro}}</div>
                </el-collapse-item>
            </el-collapse>
            <div class="comment-send">
                <el-form :inline="true" :model="comment" class="demo-form-inline">
                    <el-form-item>
                        <div>
                            <el-avatar :size="55"
                                       :src="user.image"></el-avatar>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea" v-model="comment.msg" style="width: 520px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="height: 54px;" @click="sendComment()" type="primary">评论</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-tabs v-model="activeName" :stretch="true"  @tab-click="handleClick">
                <el-tab-pane label="按热度排序" name="first">
                    <div class="block">
                        <div v-if="videomsg.replies==0" class="no-more-reply">看看下面~来发评论吧</div>

                        <div v-for="(item,index) in dcomments" :key="item.value" class="comment-item">
                            <div class="user-face"><div>
                                <el-avatar :size="55"
                                           :src="item.publisher.image"></el-avatar>
                            </div></div>
                            <div class="con">
                                <div class="user">
                                    {{item.publisher.name}}
                                </div>
                                <p class="text">{{item.msg}}</p>
                                <div >
                                    <div class="info">
                                        <span class="re">{{dateFormat(item.createtime)}}</span>
                                        <span class="re" @click="dianzhan(0,item)"><i style="font-size: 15px;" class="el-icon-thumb"></i><span v-if="item.praise!=0">{{item.praise}}</span></span>
                                        <span class="re" @click="getRevert(item.cid,item.publisher)"><i style="font-size: 15px;" class="el-icon-chat-line-round"></i><span v-if="item.replies!=0">{{item.replies}}</span></span>

                                        <el-collapse style="border-top: 0px;margin: -39px 0 0 0;">
                                            <el-collapse-item v-if="item.replies==0" :disabled="true">
                                                <template slot="title" >
                                                    <div style="width: 100px;margin: 0 0 0 545px">
                                                        展开
                                                    </div>
                                                </template>
                                                <div v-for="(sitem,sindex) in item.sends" :key="sitem.value">
                                                    <div class="user-face"><div>
                                                        <el-avatar :size="35"
                                                                   :src="sitem.publisher.image"></el-avatar>
                                                    </div></div>
                                                    <div class="cont">
                                                        <div class="user">
                                                            {{sitem.publisher.name}}
                                                        </div>
                                                        <p class="text"><span>@{{sitem.acceptor.name}}:</span>{{sitem.msg}}</p>
                                                        <div class="info">
                                                            <span class="re">{{dateFormat(sitem.createtime)}}</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item v-if="item.replies!=0"  :disabled="false">
                                                <template slot="title" >
                                                    <div style="width: 100px;margin: 0 0 0 545px">
                                                        展开
                                                    </div>
                                                </template>
                                                <div v-for="(sitem,sindex) in item.sends" :key="sitem.value">
                                                    <div class="user-face"><div>
                                                        <el-avatar :size="35"
                                                                   :src="sitem.publisher.image"></el-avatar>
                                                    </div></div>
                                                    <div class="cont">
                                                        <div class="user">
                                                            {{sitem.publisher.name}}
                                                        </div>
                                                        <p class="text"><span>@{{sitem.acceptor.name}}:</span>{{sitem.msg}}</p>
                                                        <div class="info">
                                                            <span class="re">{{dateFormat(sitem.createtime)}}</span>
                                                            <span class="re" @click="dianzhan(1,sitem)"><i style="font-size: 15px;" class="el-icon-thumb"></i><span v-if="item.praise!=0">{{sitem.praise}}</span></span>
                                                            <span class="re" @click="getRevert(item.cid,sitem.publisher)"><i style="font-size: 15px;" class="el-icon-chat-line-round"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <el-pagination
                                layout="prev, pager, next"
                                :total="this.Dtotal"
                                @current-change="getZhanPage"
                                :hide-on-single-page="this.Dxian"
                                :current-page="this.Dpage">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="按时间排序" name="second">
                    <div class="block">
                        <div v-if="videomsg.replies==0" class="no-more-reply">看看下面~来发评论吧</div>
                        <div v-for="(item,index) in tcomments" :key="item.value" class="comment-item">
                            <div class="user-face"><div>
                                <el-avatar :size="55"
                                           :src="item.publisher.image"></el-avatar>
                            </div></div>
                            <div class="con">
                                <div class="user">
                                    {{item.publisher.name}}
                                </div>
                                <p class="text">{{item.msg}}</p>
                                <div >
                                    <div class="info">
                                        <span class="re">{{dateFormat(item.createtime)}}</span>
                                        <span class="re" @click="dianzhan(0,item)"><i style="font-size: 15px;" class="el-icon-thumb"></i><span v-if="item.praise!=0">{{item.praise}}</span></span>
                                        <span class="re" @click="getRevert(item.cid,item.publisher)"><i style="font-size: 15px;" class="el-icon-chat-line-round"></i><span v-if="item.replies!=0">{{item.replies}}</span></span>

                                        <el-collapse style="border-top: 0px;margin: -39px 0 0 0;">
                                            <el-collapse-item v-if="item.replies==0" :disabled="true">
                                                <template slot="title" >
                                                    <div style="width: 100px;margin: 0 0 0 545px">
                                                        展开
                                                    </div>
                                                </template>
                                                <div v-for="(sitem,sindex) in item.sends" :key="sitem.value">
                                                    <div class="user-face"><div>
                                                        <el-avatar :size="35"
                                                                   :src="sitem.publisher.image"></el-avatar>
                                                    </div></div>
                                                    <div class="cont">
                                                        <div class="user">
                                                            {{sitem.publisher.name}}
                                                        </div>
                                                        <p class="text"><span>@{{sitem.acceptor.name}}:</span>{{sitem.msg}}</p>
                                                        <div class="info">
                                                            <span class="re">{{dateFormat(sitem.createtime)}}</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </el-collapse-item>
                                            <el-collapse-item v-if="item.replies!=0"  :disabled="false">
                                                <template slot="title" >
                                                    <div style="width: 100px;margin: 0 0 0 545px">
                                                        展开
                                                    </div>
                                                </template>
                                                <div v-for="(sitem,sindex) in item.sends" :key="sitem.value">
                                                    <div class="user-face"><div>
                                                        <el-avatar :size="35"
                                                                   :src="sitem.publisher.image"></el-avatar>
                                                    </div></div>
                                                    <div class="cont">
                                                        <div class="user">
                                                            {{sitem.publisher.name}}
                                                        </div>
                                                        <p class="text"><span>@{{sitem.acceptor.name}}:</span>{{sitem.msg}}</p>
                                                        <div class="info">
                                                            <span class="re">{{dateFormat(sitem.createtime)}}</span>
                                                            <span class="re" @click="dianzhan(1,sitem)"><i style="font-size: 15px;" class="el-icon-thumb"></i><span v-if="item.praise!=0">{{sitem.praise}}</span></span>
                                                            <span class="re" @click="getRevert(item.cid,sitem.publisher)"><i style="font-size: 15px;" class="el-icon-chat-line-round"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <el-pagination
                                layout="prev, pager, next"
                                :total="this.Ttotal"
                                @current-change="getTimePage"
                                :hide-on-single-page="this.Txian"
                                :current-page="this.Tpage">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog
                :title="'回复：'+this.revert.acceptor.name"
                :visible.sync="dialogVisible"
                width="30%">
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="revert.msg">
            </el-input>
            <span slot="footer" class="dialog-footer">
                                                <el-button @click="dialogVisible = false">取 消</el-button>
                                                <el-button type="primary" @click="sendRevert()">确 定</el-button>
                                              </span>
        </el-dialog>
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
                isConcern:false,
                isCollect:false,
                Ttotal:0,
                Dtotal:0,
                Tpage:0,
                Dpage:0,
                Txian:true,
                Dxian:true,
                activeName: 'first',
                dialogVisible:false,
                dp: {},
                danmus: {},
                dnum: 0,
                user: {},
                comments:{},
                dcomments:{},
                tcomments:{},
                comment:{
                    msg:'',
                    vid:0,
                    acceptor:{},
                    publisher:{},
                },
                revert:{
                    msg:'',
                    superior:0,
                    acceptor:{},
                    publisher:{},
                },
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
                    replies:0
                },
            }
        },
        mounted() {
            this.user = this.$refs.headerChild.loginUser;
            if (typeof this.$route.query.vn !== 'undefined') {
                this.videomsg.vid = this.$route.query.vn;
                this.getVideo();
                this.getComments("zhan",1);
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
                });
            }
        },
        methods: {
            checkConcern(fans,up){
                let data=new URLSearchParams();
                data.append('fans',fans);
                data.append('up',up);
                const _this = this;
                axios.post('http://localhost:8181/concern/check', data).then(function (response) {
                    if (response.data.code == 200) {
                        _this.isConcern=response.data.data;
                    }
                })
            },
            addConcern(){
                let data=new URLSearchParams();
                data.append('fans',this.user.uid);
                data.append('up',this.videomsg.author.uid);
                const _this = this;
                axios.post('http://localhost:8181/concern/add', data).then(function (response) {
                    if (response.data.code == 200) {
                        _this.isConcern=true;
                        _this.videomsg.author.fans++;
                    }
                })
            },
            delConcern(){
                let data=new URLSearchParams();
                data.append('fans',this.user.uid);
                data.append('up',this.videomsg.author.uid);
                const _this = this;
                axios.post('http://localhost:8181/concern/cancel', data).then(function (response) {
                    if (response.data.code == 200) {
                        _this.isConcern=false;
                        _this.videomsg.author.fans--;
                    }
                })
            },
            checkCollect(uid,vid){
                let data=new URLSearchParams();
                data.append('uid',uid);
                data.append('vid',vid);
                const _this = this;
                axios.post('http://localhost:8181/collect/check', data).then(function (response) {
                    if (response.data.code == 200) {
                        _this.isCollect=response.data.data;
                    }
                })
            },
            addCollect(){
                let data=new URLSearchParams();
                data.append('uid',this.user.uid);
                data.append('vid',this.videomsg.vid);
                const _this = this;
                axios.post('http://localhost:8181/collect/add', data).then(function (response) {
                    if (response.data.code == 200) {
                        _this.isCollect=true;
                        _this.videomsg.collect++;
                        _this.$message({
                            message: '收藏成功',
                            type: 'success'
                        });
                    }
                })
            },
            delCollect(){
                let data=new URLSearchParams();
                data.append('uid',this.user.uid);
                data.append('vid',this.videomsg.vid);
                const _this = this;
                axios.post('http://localhost:8181/collect/cancel', data).then(function (response) {
                    if (response.data.code == 200) {
                        _this.isCollect=false;
                        _this.videomsg.collect--;
                        _this.$message({
                            message: '取消收藏',
                            type: 'info'
                        });
                    }
                })
            },
            getTimePage(val){
                this.getComments('time',val);
            },
            getZhanPage(val){
                this.getComments('zhan',val);
            },
            handleClick(tab, event){
                if (tab.paneName=='second') {
                    if(JSON.stringify(this.tcomments)=='{}'){
                        this.getComments('time',1);
                    }
                }
                if (tab.paneName=='first') {
                    if(JSON.stringify(this.dcomments)=='{}'){
                        this.getComments('zhan',1);
                    }
                }
            },
            getRevert(cid,uid){
              this.dialogVisible=true;
              this.revert.superior=cid;
              this.revert.acceptor=uid;
              this.revert.publisher=this.user;
            },
            sendRevert(){
                const _this = this;
                axios.post('http://localhost:8181/revert/send', _this.revert).then(function (response) {
                    if (response.data.code == 200) {
                        _this.$message({
                            message: '发布成功',
                            type: 'success'
                        });
                        _this.revert.msg='';
                        _this.dialogVisible=false;
                    }
                })
            },
            dianzhan(type,id){
                let data=new URLSearchParams();
              if (type==0){
                  data.append("id",id.cid);
                  const _this = this;
                  axios.post('http://localhost:8181/comment/zhan',data).then(function (response) {
                      if (response.data.code == 200) {
                          _this.$message({
                              message: '点赞成功成功',
                              type: 'success'
                          });
                          id.praise++;
                      }
                  })
              } else if(type==1){
                  const _this = this;
                  data.append("id",id.rid);
                  axios.post('http://localhost:8181/revert/zhan',data).then(function (response) {
                      if (response.data.code == 200) {
                          _this.$message({
                              message: '点赞成功成功',
                              type: 'success'
                          });
                          id.praise++;
                      }
                  })
              }
            },
            sendComment(){
                const _this = this;
                //一级评论初始化
                this.comment.acceptor=this.videomsg.author;
                this.comment.publisher=this.user;
                this.comment.vid=this.videomsg.vid;
                axios.post('http://localhost:8181/comment/send', _this.comment).then(function (response) {
                    if (response.data.code == 200) {
                        _this.$message({
                            message: '发布成功',
                            type: 'success'
                        });
                        _this.comment.msg='';
                    }
                })
            },
            getComments(type,num){
                const _this = this;
                let data=new URLSearchParams();
                data.append("vid",this.videomsg.vid);
                data.append("type",type);
                data.append("num",num);
                axios.post('http://localhost:8181/comment/all', data).then(function (response) {
                    if (response.data.code == 200) {
                        if (type=='time'){
                            _this.tcomments=response.data.data.content;
                            _this.Tpage=response.data.data.pageable.pageNumber+1;
                            _this.Ttotal=response.data.data.totalPages*10;
                            if (_this.Ttotal>=10){
                                _this.Txian=false;
                            }
                            _this.$set(_this.tcomments,'tcomments',response.data.data.content)
                        } else if (type=='zhan'){
                            _this.dcomments=response.data.data.content;
                            _this.Dpage=response.data.data.pageable.pageNumber+1;
                            _this.Dtotal=response.data.data.totalPages*10;
                            if (_this.Dtotal>=10){
                                _this.Dxian=false;
                            }
                            _this.$set(_this.dcomments,'dcomments',response.data.data.content)
                        }
                    }
                })
            },
            getVideo() {
                const _this = this;
                axios.post('http://localhost:8181/video/play', _this.videomsg).then(function (response) {
                    if (response.data.code == 200) {
                        _this.videomsg = response.data.data;
                        _this.checkConcern(_this.user.uid,_this.videomsg.author.uid);
                        _this.checkCollect(_this.user.uid,_this.videomsg.vid);
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
    .no-more-reply{
        color: #99a2aa;
        text-align: center;
        padding: 30px 0;
        font-size: 12px;
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
