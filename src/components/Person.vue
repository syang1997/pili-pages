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
                                                    <el-progress :text-inside="true" :stroke-width="26" :percentage="videoUploadPercent"></el-progress>
                                                </div>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="contribute">立即创建</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="投稿管理" name="two">投稿管理</el-tab-pane>
                                <el-tab-pane label="创作中心" name="three">创作中心</el-tab-pane>
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
                    author:'',
                    duration:''
                }
            };
        },
        methods: {

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
                this.videoUploadPercent = parseInt( file.percentage.toFixed(0));
            },
            handleVideoSuccess(res, file) {
//获取上传图片地址
                this.videoUploadPercent = 100;
                if (res.code == 200) {
                    this.videoForm.vurl=res.data.vurl;
                    this.videoForm.duration=res.data.duration;
                } else {
                    this.$message.error('视频上传失败，请重新上传！');
                }
            },
            handleClick(tab, event) {
                console.log(tab, event);
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
                console.log(response.data);
                this.imageUrl = response.data;
            },
            handleAvatarSuccess(res, file) {
                console.log(res.data);
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
            contribute(){
                const _this = this;
                this.videoForm.author=this.userForm;
                axios.post('http://localhost:8181/video/contribute', _this.videoForm).then(function (res) {
                    if(res.data.code==200){
                        _this.$message({
                            message: '投稿成功',
                            type: 'success'
                        });
                    }else {
                        _this.$message.error(res.data.prompt);
                    }
                })
            }
        },
        created() {
            this.init();
            if (typeof this.$route.query.activeName2 !== 'undefined') {
                this.activeName = '4';
                this.activeName2 = this.$route.query.activeName2;
            }
        }
    }
</script>

<style scoped>
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