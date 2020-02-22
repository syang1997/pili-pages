<template>
    <div>
        <el-upload
                class="upload-demo"
                drag
                action="http://localhost:8181/video/upload"
                :before-upload="beforeUploadVideo"
                :on-progress="uploadVideoProcess"
                multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <div v-if="videoFlag==true">
            <el-progress :text-inside="true" :stroke-width="26" :percentage="videoUploadPercent"></el-progress>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                dataForm:{
                    videoUrl:'',
                },
                uploadUrl: "",//
                videoFlag: false, //是否显示进度条
                videoUploadPercent: "", //进度条的进度，
                isShowUploadVideo: false, //
            }
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
                this.videoUploadPercent = file.percentage.toFixed(0);
            },
            handleVideoSuccess(res, file) {
//获取上传图片地址
                this.videoUploadPercent = 100;
                if (res.code == 200) {
                } else {
                    this.$message.error('视频上传失败，请重新上传！');
                }
            },
        }
    }
</script>

<style scoped>
    .avatar-uploader  {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader :hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .video-avatar {
        width: 400px;
        height: 200px;
    }
</style>
