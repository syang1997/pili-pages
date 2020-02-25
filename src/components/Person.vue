<template>
    <div>
        <nav-bar></nav-bar>
        <div class="person_main">
            <el-tabs v-model="activeName" type="border-card" :tab-position="tabPosition">
                <el-tab-pane name="1">
                    <span slot="label"><i class="el-icon-user"></i> 我的信息</span>
                    <div class="right_tillte">
                        <span class="right_tille_icon"></span>
                        <span class="right_tille_txt">
                        我的信息
                        </span>
                    </div>
                    <div class="right_main">
                        <div style="width: 300px">
                            <el-form ref="userFormRef" :rules="userFormRules" :model="userForm">
                                <el-form-item prop="name" label="昵称">
                                    <el-input v-model="userForm.name" :placeholder="userForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group v-model="userForm.sex">
                                        <el-radio label="男"></el-radio>
                                        <el-radio label="女"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="updataUser">保存</el-button>
                                </el-form-item>
                            </el-form>

                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="2">
                    <span slot="label"><i class="el-icon-picture-outline-round"></i> 我的头像</span>
                    <div class="right_tillte">
                        <span class="right_tille_icon"></span>
                        <span class="right_tille_txt">
                        我的头像
                        </span>
                    </div>
                    <div class="right_main">
                        <div class="modle_img">
                            <div class="modle_img_r">
                                <el-upload
                                        class="upload-demo"
                                        drag
                                        action="http://localhost:8181/user/import"
                                        :data="userForm"
                                        multiple
                                        :on-success="imgsuccess">
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                            </div>
                            <div class="border-line"></div>
                            <div class="modle_img_l">
                                <el-avatar class="now_img" :src="userForm.image"></el-avatar>
                                <div class="pre_info">当前头像</div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="4">
                    <span slot="label"><i class="el-icon-data-analysis"></i> 投稿中心</span>
                    <div class="right_tillte">
                        <span class="right_tille_icon"></span>
                        <span class="right_tille_txt">
                        投稿中心
                        </span>
                    </div>
                    <div class="right_main">
                        <div class="contribute_box">

                            <el-tabs v-model="activeName2" @tab-click="handleClick">
                                <el-tab-pane label="视频投稿" name="one">
                                    <div class="contribute_main">
                                        <el-form ref="videoForm" :model="videoForm" label-width="80px">
                                            <el-form-item label="标题">
                                                <el-input v-model="videoForm.vname"></el-input>
                                            </el-form-item>
                                            <el-form-item label="封面">
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="http://localhost:8181/video/cover"
                                                        :show-file-list="false"
                                                        :data="userForm"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload">
                                                    <img v-if="videoForm.cover" :src="videoForm.cover" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                            </el-form-item>
                                            <el-form-item label="分区">
                                                <el-select v-model="videoForm.classify" placeholder="请选择活动区域">
                                                    <el-option label="动画" value="动画"></el-option>
                                                    <el-option label="音乐" value="音乐"></el-option>
                                                    <el-option label="舞蹈" value="舞蹈"></el-option>
                                                    <el-option label="游戏" value="游戏"></el-option>
                                                    <el-option label="科技" value="科技"></el-option>
                                                    <el-option label="生活" value="生活"></el-option>
                                                    <el-option label="鬼畜" value="鬼畜"></el-option>
                                                    <el-option label="时尚" value="时尚"></el-option>
                                                    <el-option label="广告" value="广告"></el-option>
                                                    <el-option label="娱乐" value="娱乐"></el-option>
                                                    <el-option label="影视" value="影视"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item label="原创">
                                                <el-switch v-model="videoForm.original"></el-switch>
                                            </el-form-item>
                                            <el-form-item label="简介">
                                                <el-input type="textarea" v-model="videoForm.intro"></el-input>
                                            </el-form-item>
                                            <el-form-item label="视频">
                                                <el-upload
                                                        class="upload-demo"
                                                        drag
                                                        action="http://localhost:8181/video/upload"
                                                        :before-upload="beforeUploadVideo"
                                                        :on-progress="uploadVideoProcess"
                                                        :on-success="handleVideoSuccess"
                                                        :data="userForm"
                                                        multiple>
                                                    <i class="el-icon-upload"></i>
                                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                                </el-upload>
                                                <div v-if="videoFlag==true">
                                                    <el-progress :text-inside="true" :stroke-width="26"
                                                                 :percentage="videoUploadPercent"></el-progress>
                                                </div>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="contribute">立即创建</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="投稿管理" name="two">
                                    <div style="margin:0 0 0 40px">
                                        <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                                            <div v-for="dhitem in videos.content" :key="dhitem.value">
                                                <li class="item">
                                                    <a @click="playVideo(dhitem)" class="img-link">
                                                        <img :src="dhitem.cover" alt="#">
                                                        <span class="mask"></span>
                                                        <span class="time">{{dhitem.duration}}</span>
                                                    </a>
                                                    <div class="img-info">
                                                        <a href="#">{{dhitem.vname}}</a>
                                                    </div>
                                                    <div>
                                                        <el-button type="info"
                                                                   @click="updataDialogVisible = true,updVideo=dhitem">
                                                            修改
                                                        </el-button>
                                                        <el-button type="danger"
                                                                   @click="deleteDialogVisible = true,delVideo = dhitem">
                                                            删除
                                                        </el-button>
                                                    </div>
                                                </li>

                                            </div>
                                        </ul>
                                        <el-pagination
                                                layout="prev, pager, next"
                                                :total="this.total"
                                                @current-change="getPages"
                                                :hide-on-single-page="this.xian"
                                                :current-page="this.page">
                                        </el-pagination>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="数据中心" name="three">
                                    <div>

                                        <el-row :gutter="20">
                                            <el-col :span="6"><div class="item-boby">
                                                <div  class="bccol"
                                                      style="padding-left: 8px; padding-right: 8px;">
                                                    <div  class="section-item">
                                                        <div  class="data-name">
                                                            视频播放
                                                            <!----></div>
                                                        <div  class="text-content"><!----> <span
                                                        >{{myData.hits}}</span></div>
                                                    </div>
                                                </div>
                                            </div></el-col>
                                            <el-col :span="6"><div class="item-boby">
                                                <div  class="bccol"
                                                      style="padding-left: 8px; padding-right: 8px;">
                                                    <div  class="section-item">
                                                        <div  class="data-name">
                                                            评论数量
                                                            <!----></div>
                                                        <div  class="text-content"><!----> <span
                                                        >{{myData.replies}}</span></div>
                                                    </div>
                                                </div>
                                            </div></el-col>
                                            <el-col :span="6"><div class="item-boby">
                                                <div  class="bccol"
                                                      style="padding-left: 8px; padding-right: 8px;">
                                                    <div  class="section-item">
                                                        <div  class="data-name">
                                                            收藏数量
                                                            <!----></div>
                                                        <div  class="text-content"><!----> <span
                                                        >{{myData.collect}}</span></div>
                                                    </div>
                                                </div>
                                            </div></el-col>
                                            <el-col :span="6"><div class="item-boby">
                                                <div  class="bccol"
                                                      style="padding-left: 8px; padding-right: 8px;">
                                                    <div  class="section-item">
                                                        <div  class="data-name">
                                                            关注数量
                                                            <!----></div>
                                                        <div  class="text-content"><!----> <span
                                                        >{{myData.fans}}</span></div>
                                                    </div>
                                                </div>
                                            </div></el-col>
                                        </el-row>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="3">
                    <span slot="label"><a href="/person"><i class="el-icon-video-camera"></i> 个人空间</a></span>
                </el-tab-pane>
                <el-tab-pane name="5">
                    <span slot="label"><a @click="logout"><i class="el-icon-switch-button"></i> 退出登录</a></span>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog
                title="修改"
                :visible.sync="updataDialogVisible"
                width="30%"
        >
            <el-form ref="updVideo" :model="updVideo" label-width="80px">
                <el-form-item label="标题">
                    <el-input v-model="updVideo.vname"></el-input>
                </el-form-item>
                <el-form-item label="分区">
                    <el-select v-model="updVideo.classify" placeholder="请选择活动区域">
                        <el-option label="动画" value="动画"></el-option>
                        <el-option label="音乐" value="音乐"></el-option>
                        <el-option label="舞蹈" value="舞蹈"></el-option>
                        <el-option label="游戏" value="游戏"></el-option>
                        <el-option label="科技" value="科技"></el-option>
                        <el-option label="生活" value="生活"></el-option>
                        <el-option label="鬼畜" value="鬼畜"></el-option>
                        <el-option label="时尚" value="时尚"></el-option>
                        <el-option label="广告" value="广告"></el-option>
                        <el-option label="娱乐" value="娱乐"></el-option>
                        <el-option label="影视" value="影视"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="原创">
                    <el-switch v-model="updVideo.original"></el-switch>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input type="textarea" v-model="updVideo.intro"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="updataDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="updataVideo()">确 定</el-button>
          </span>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="deleteDialogVisible"
                width="30%"
        >
            <span>确认删除本视频</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteVideo()">确 定</el-button>
          </span>
        </el-dialog>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import FootBar from '../components/FootBar.vue'

    export default {
        name: "Person",
        components: {
            NavBar,
            FootBar
        },
        data() {
            return {
                myData:{
                    fans:0,
                    hits:0,
                    collect:0,
                    replies:0,
                },
                delVideo: {
                    vurl: '',
                    vname: '',
                    classify: '',
                    original: true,
                    intro: '',
                    cover: '',
                },
                updVideo: {
                    vurl: '',
                    vname: '',
                    classify: '',
                    original: true,
                    intro: '',
                    cover: '',
                },
                total: 0,
                page: 0,
                xian: true,
                updataDialogVisible: false,
                deleteDialogVisible: false,
                videos: {},
                videoFlag: false, //是否显示进度条
                videoUploadPercent: 0, //进度条的进度，
                isShowUploadVideo: false, //
                videoFlag: false,
                activeName: '1',
                activeName2: 'one',
                tabPosition: 'left',
                userForm: {
                    uid: 0,
                    name: '',
                    sex: '',
                    image: '',
                    fans: 0,
                },
                userFormRules: {
                    name: [
                        {required: true, message: '请输入昵称', trigger: 'blur'},
                    ]
                },
                videoForm: {
                    vurl: '',
                    vname: '',
                    classify: '',
                    original: true,
                    intro: '',
                    cover: '',
                    author: '',
                    duration: ''
                }
            };
        },
        methods: {
            deleteVideo() {
                const _this = this;
                axios.post('http://localhost:8181/video/delete', _this.delVideo).then(function (res) {
                    if (res.data.code == 200) {
                        _this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        _this.deleteDialogVisible = false;
                        _this.getMyVideos(_this.page);
                    }
                })
            },
            getMyData(){
                const _this = this;
                let data = new URLSearchParams();
                data.append('uid', this.userForm.uid);
                axios.post('http://localhost:8181/video/data', data).then(function (res) {
                    if (res.data.code == 200) {
                        console.log(res.data.data)
                        _this.myData.hits=res.data.data[0][0];
                        _this.myData.collect=res.data.data[0][1];
                        _this.myData.replies=res.data.data[0][2];
                        _this.myData.fans=_this.userForm.fans;
                    }
                })
            },
            updataVideo() {
                const _this = this;
                axios.post('http://localhost:8181/video/updata', _this.updVideo).then(function (res) {
                    if (res.data.code == 200) {
                        _this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        _this.updataDialogVisible = false;
                        _this.getMyVideos(_this.page);
                    }
                })
            },
            beforeUploadVideo(file) {
                const isLt300M = file.size / 1024 / 1024 < 300;
                if (['video/mp4', 'video/flv', 'video/avi', 'video/wmv'].indexOf(file.type) == -1) {
                    this.$message.error('请上传正确的视频格式');
                    return false;
                }
                if (!isLt300M) {
                    this.$message.error('上传视频大小不能超过300MB哦!');
                    return false;
                }
            },
            //进度条
            uploadVideoProcess(event, file, fileList) {
                this.videoFlag = true;
                this.videoUploadPercent = parseInt(file.percentage.toFixed(0));
            },
            handleVideoSuccess(res, file) {
//获取上传图片地址
                this.videoUploadPercent = 100;
                if (res.code == 200) {
                    this.videoForm.vurl = res.data.vurl;
                    this.videoForm.duration = res.data.duration;
                } else {
                    this.$message.error('视频上传失败，请重新上传！');
                }
            },
            handleClick(tab, event) {
            },
            init() {
                if (typeof this.$session.get('user') !== 'undefined') {
                    this.userForm = this.$session.get('user');
                }
            },
            logout() {
                this.$cookies.remove('token');
                this.$session.remove('user');
                this.$router.push("/home");
            }
            ,
            updataUser() {
                const _this = this
                this.$refs.userFormRef.validate(valid => {
                    if (valid) {
                        // 发送 POST 请求
                        axios.post('http://localhost:8181/user/updata', _this.userForm)
                            .then(function (response) {
                                if (response.data.code == 200) {
                                    _this.$message({
                                        message: '修改成功',
                                        type: 'success'
                                    });
                                    _this.$session.set('user', response.data.data, 60 * 60 * 24 * 2);
                                    _this.$cookies.set('token', response.data.data.token, 60 * 60 * 24 * 2);
                                    _this.userForm = response.data.data;
                                }
                                if (response.data.code != 200) {
                                    _this.$message.error(response.data.prompt);
                                }
                            });
                    }
                })
            },
            imgsuccess(response, file, fileList) {
                this.$session.get('user').image = response.data;
            },
            handleAvatarSuccess(res, file) {
                this.videoForm.cover = res.data;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            contribute() {
                const _this = this;
                this.videoForm.author = this.userForm;
                axios.post('http://localhost:8181/video/contribute', _this.videoForm).then(function (res) {
                    if (res.data.code == 200) {
                        _this.$message({
                            message: '投稿成功',
                            type: 'success'
                        });
                    } else {
                        _this.$message.error(res.data.prompt);
                    }
                })
            },
            getMyVideos(num) {
                const _this = this;
                let data = new URLSearchParams();
                data.append('uid', this.userForm.uid);
                data.append('num', num);
                axios.post('http://localhost:8181/video/my', data).then(function (res) {
                    if (res.data.code == 200) {
                        _this.videos = res.data.data;
                        _this.page = res.data.data.pageable.pageNumber + 1;
                        _this.total = res.data.data.totalPages * 10;
                        if (_this.total >= 10) {
                            _this.xian = false;
                        }
                        _this.$set(_this.videos, 'videos', res.data.data)
                    }
                })
            },
            getPages(val) {
                this.getMyVideos(val);
            }
        },
        created() {
            this.init();
            if (typeof this.$route.query.activeName2 !== 'undefined') {
                this.activeName = '4';
                this.activeName2 = this.$route.query.activeName2;
            }
            this.getMyVideos(1);
            this.getMyData();
        }
    }
</script>

<style scoped>
    .bccol{
        display: block;
    }
    .section-item{
        vertical-align: middle;
        background: rgba(0,161,214,.03);
        border-radius: 4px;
        padding: 16px 12.5%;
    }
    .data-name{
        font-size: 14px;
        line-height: 18px;
        color: #757575;
    }
    .text-content{
        position: relative;
        margin-top: 12px;
        margin-bottom: 16px;
        line-height: 32px;
        font-size: 28px;
        color: #00a1d6;
        font-weight: 600;
    }
    .person_main {
        overflow: hidden;
        width: 980px;
        height: 100%;
        margin: 10px auto 100px;
        border: 1px solid #e1e2e5;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
        background: #fafafa;
        border-radius: 4px;
    }

    .right_tillte {
        height: 50px;
        padding-left: 30px;
        border-bottom: 1px solid #ddd;
    }

    .right_tille_txt {
        float: left;
        margin: 19px 0 0 5px;
        color: #00a1d6;
        font-size: 14px;
        cursor: default;
    }

    .right_tille_icon {
        float: left;
        width: 4px;
        height: 16px;
        margin-top: 18px;
        background-color: #00a1d6;
        border-radius: 4px;
    }

    .right_main {
        padding: 20px 20px 0;
        position: relative;
    }

    .border-line {
        height: 182px;
        width: 1px;
        background: #e5e9ef;
        float: left;
    }

    .modle_img {
        padding: 80px 20px 56px;
        display: inline-block;
    }

    .modle_img_r {
        float: left;
        position: relative;
        margin-right: 40px;
    }

    .modle_img_l {
        margin-left: 40px;
        margin-top: 30px;
        float: left;
    }

    .now_img {
        width: 96px;
        height: 96px;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #e6eaf0;
        background-size: cover;
    }

    .pre_info {
        margin-top: 20px;
        font-size: 12px;
        color: #99a2aa;
    }

    .contribute_box {
        position: relative;
        margin: 0 auto;
    }

    .contribute_main {
        padding: 0 10%;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
    }

    .avatar-uploader {
        width: 320px;
        height: 200px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader :hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 320px;
        height: 200px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 320px;
        height: 200px;
        display: block;
    }
</style>