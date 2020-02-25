<template>
    <div>
        <nav-bar></nav-bar>
            <el-select class="toptime" @change="change()"  v-model="toptime" placeholder="日排行">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        <div class="mianbor">
            <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全站" name="全站">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.all" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="动画" name="动画">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.dh" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="音乐" name="音乐">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="舞蹈" name="舞蹈">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="游戏" name="游戏">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="科技" name="科技">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="生活" name="生活">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="鬼畜" name="鬼畜">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="时尚" name="时尚">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="广告" name="广告">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="娱乐" name="娱乐">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="影视" name="影视">
                    <ul class="rank-lit">
                        <li v-for="(item,index) in tops.yy" :key="item.value" class="rank-item">
                            <div class="rank-num">
                                {{index+1}}
                            </div>
                            <div class="rank-item-content">
                                <div class="content-img">
                                    <div class="img-cover">
                                        <a href="#">
                                            <img style="width: 100%;height: 100%;" :src="item.cover">
                                        </a>
                                    </div>
                                </div>
                                <div class="content-info">
                                    <a class="content-til" href="#">{{item.vname}}</a>
                                    <div class="content-detail">
                                        <span class="content-databox"><i
                                                class="el-icon-video-play"></i>{{item.hits}}</span>
                                        <span class="content-databox"><i class="el-icon-chat-line-round"></i>123</span>
                                        <a class="forget" href="#"><span class="content-databox"><i
                                                class="el-icon-user"></i>{{item.author.name}}</span></a>
                                    </div>
                                </div>
                                <div class="pts">
                                    <div>{{item.hits*10+item.replies*100}}</div>
                                    综合得分
                                </div>
                            </div>
                        </li>
                    </ul>
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
        name: "Tops",
        components: {
            NavBar,
            FootBar
        },
        data() {
            return {
                activeName: '全站',
                options: [{
                    value: 1,
                    label: '日排行'
                }, {
                    value: 7,
                    label: '周排行'
                }, {
                    value: 30,
                    label: '月排行'
                },],
                    toptime: 7,
                tops: {
                    all: {},
                    dh: {},
                    yy: {},
                    wd: {},
                    yx: {},
                    kj: {},
                    sh: {},
                    gc: {},
                    ss: {},
                    gg: {},
                    yl: {},
                    ys: {},
                },
            };
        },
        created() {
            this.getTop(this.activeName, this.toptime);
        }
        ,
        methods: {
            change(){
                this.tops.all={};
                this.tops.dh={};
                this.tops.yy={};
                this.tops.wd={};
                this.tops.yx={};
                this.tops.kj={};
                this.tops.sh={};
                this.tops.gc={};
                this.tops.ss={};
                this.tops.gg={};
                this.tops.yl={};
                this.tops.ys={};
                this.getTop(this.activeName, this.toptime);
            },
            handleClick(tab) {
                this.getTop(tab.label + '', this.toptime);
            },
            needupdata(classify){
                switch (classify) {
                    case '全站':
                        if (JSON.stringify(this.tops.all)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '动画':
                        if (JSON.stringify(this.tops.dh)=='{}'){
                            return true;
                        }else {
                            return  false;
                        }
                    case '音乐':
                        if ( JSON.stringify(this.tops.yy)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '舞蹈':
                        if ( JSON.stringify(this.tops.wd)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '游戏':
                        if ( JSON.stringify(this.tops.yx)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '科技':
                        if ( JSON.stringify(this.tops.kj)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '生活':
                        if ( JSON.stringify(this.tops.sh)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '鬼畜':
                        if ( JSON.stringify(this.tops.gc)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '时尚':
                        if ( JSON.stringify(this.tops.ss)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '广告':
                        if ( JSON.stringify(this.tops.gg)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '娱乐':
                        if ( JSON.stringify(this.tops.yl)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                    case '影视':
                        if ( JSON.stringify(this.tops.ys)=='{}') {
                            return true;
                        }else {
                            return  false;
                        }
                }

            }
            ,
            getTop(classify, time) {
                if (this.needupdata(classify)){
                    const _this = this;
                    let data = new URLSearchParams();
                    data.append("num", 20);
                    data.append("classify", classify);
                    data.append("time", time);
                    axios.post('http://localhost:8181/video/top', data).then(function (res) {
                        if (res.data.code == 200) {
                            switch (classify) {
                                case '全站':
                                    _this.tops.all = res.data.data;
                                    break;
                                case '动画':
                                    _this.tops.dh = res.data.data;
                                    break;
                                case '音乐':
                                    _this.tops.yy = res.data.data;
                                    break;
                                case '舞蹈':
                                    _this.tops.wd = res.data.data;
                                    break;
                                case '游戏':
                                    _this.tops.yx = res.data.data;
                                    break;
                                case '科技':
                                    _this.tops.kj = res.data.data;
                                    break;
                                case '生活':
                                    _this.tops.sh = res.data.data;
                                    break;
                                case '鬼畜':
                                    _this.tops.gc = res.data.data;
                                    break;
                                case '时尚':
                                    _this.tops.ss = res.data.data;
                                    break;
                                case '广告':
                                    _this.tops.gg = res.data.data;
                                    break;
                                case '娱乐':
                                    _this.tops.yl = res.data.data;
                                    break;
                                case '影视':
                                    _this.tops.ys = res.data.data;
                                    break;
                            }
                        } else {

                        }
                    })
                }
            }
        },
    }
</script>

<style scoped>
    .forget {
        display: contents;
        color: #99a2aa;

    }

    a:hover {
        outline: 0;
        color: #00a1d6 !important;
        text-decoration: none;
        cursor: pointer;
    }

    .mianbor {
        border: 0;
        margin: 30px 10%;
        border-radius: 4px;
    }
    .toptime{
        float: right;
        margin: -5px 150px;
        width: 90px;
    }

    .rank-lit {
        list-style: none;
    }

    .rank-item {
        margin: 0 3px;
        transition: .2s;
        overflow: hidden;
        border-bottom: 1px solid #e5e9ef;
        position: relative
    }

    .rank-item:hover {
        box-shadow: 0 2px 5px #ccc;
    }

    .rank-num {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 20px;
        left: 0;
        line-height: 70px;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        color: #b8c0cc;
        font-family: simhei;
    }

    .rank-item-content {
        padding: 20px 0 0 70px;
        overflow: hidden;
    }

    .content-img {
        position: relative;
        float: left;
    }

    .img-cover {
        width: 114px;
        height: 70px;
    }

    .content-info {
        padding-bottom: 20px;
        margin-left: 130px;
        height: 70px;
        position: relative;
        display: block;
    }

    .content-til {
        height: 20px;
        line-height: 20px;
        font-weight: 700;
        font-size: 14px;
        color: #222;
        transition: .3s;
        display: inline-block;
    }

    .content-detail {
        margin-top: 20px;
        color: #99a2aa;
    }

    .content-databox {
        width: 80px;
        margin-right: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .pts {
        height: 20px;
        color: #b8c0cc;
        line-height: 20px;
        position: absolute;
        bottom: 40px;
        right: 20px;
        text-align: center;
    }
</style>