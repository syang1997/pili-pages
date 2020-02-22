<template>
   <div>
       <nav-bar ></nav-bar>
       <nav id="nav">
           <div class="page-width clearfix">
               <ul class="nav-list">
                   <li class="item item-home">
                       <a href="#" class="link">首页</a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>887</i></div>
                           动画
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>999+</i></div>
                           音乐
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>152</i></div>
                           舞蹈
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>999+</i></div>
                           游戏
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>999+</i></div>
                           科技
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>999+</i></div>
                           生活
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>77</i></div>
                           鬼畜
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>416</i></div>
                           时尚
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>100</i></div>
                           广告
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>999+</i></div>
                           娱乐
                       </a>
                   </li>
                   <li class="item">
                       <a href="#" class="link">
                           <div class="num"><i>916</i></div>
                           影视
                       </a>
                   </li>
                   <li class="item item-square">
                       <a href="#" class="link">排行榜</a>
                   </li>
               </ul>
           </div>
       </nav>

       <div id="banner">
           <div class="page-width clearfix">
               <div class="slider fl">
<!--                   <div class="slider-img">-->
<!--                       <a href="#" slider-title="pic1"><img src="../assets/images/cont/slider_img1.png" alt="#"></a>-->
<!--                       <a href="#" slider-title="pic2"><img src="../assets/images/cont/slider_img2.png" alt="#"></a>-->
<!--                       <a href="#" slider-title="pic3"><img src="../assets/images/cont/slider_img3.png" alt="#"></a>-->
<!--                       <a href="#" slider-title="pic4"><img src="../assets/images/cont/slider_img4.png" alt="#"></a>-->
<!--                   </div>-->
<!--                   <div class="slider-title"><p>pic1</p></div>-->
<!--                   <div class="slider-btn">-->
<!--                       <span class="cur"></span>-->
<!--                       <span></span>-->
<!--                       <span></span>-->
<!--                       <span></span>-->
<!--                   </div>-->
<!--                   <a href="#" class="slider-more">More</a>-->
                   <div class="block">
                       <el-carousel>
                           <el-carousel-item v-for="item in lbimages" :key="item">
                               <img :src="require('../assets/images/cont/'+item)">
                           </el-carousel-item>
                       </el-carousel>
                   </div>
               </div>
               <div class="banner-list fr">
                   <ul>
                       <li>
                           <a href="#">
                               <img src="images/cont/main_pic.jpg" alt="#">
                               <div class="info">
                                   <p class="title">【初音ミク】39 TECHNO【八王子P】</p>
                                   <p class="author">up主：丧尸の桑</p>
                                   <p class="play">播放：48243</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="images/cont/main_pic.jpg" alt="#">
                               <div class="info">
                                   <p class="title">【初音ミク】39 TECHNO【八王子P】</p>
                                   <p class="author">up主：丧尸の桑</p>
                                   <p class="play">播放：48243</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="images/cont/main_pic.jpg" alt="#">
                               <div class="info">
                                   <p class="title">【初音ミク】39 TECHNO【八王子P】</p>
                                   <p class="author">up主：丧尸の桑</p>
                                   <p class="play">播放：48243</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="images/cont/main_pic.jpg" alt="#">
                               <div class="info">
                                   <p class="title">【初音ミク】39 TECHNO【八王子P】</p>
                                   <p class="author">up主：丧尸の桑</p>
                                   <p class="play">播放：48243</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="images/cont/main_pic.jpg" alt="#">
                               <div class="info">
                                   <p class="title">【初音ミク】39 TECHNO【八王子P】</p>
                                   <p class="author">up主：丧尸の桑</p>
                                   <p class="play">播放：48243</p>
                               </div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <img src="images/cont/main_pic.jpg" alt="#">
                               <div class="info">
                                   <p class="title">【初音ミク】39 TECHNO【八王子P】</p>
                                   <p class="author">up主：丧尸の桑</p>
                                   <p class="play">播放：48243</p>
                               </div>
                           </a>
                       </li>
                   </ul>
                   <a href="#" class="btn btn-prev">昨日</a>
                   <a href="#" class="btn btn-next">一周</a>
               </div>
           </div>
       </div>

       <div id="main">
           <div class="page-width">

               <!-- 动画 -->
               <div class="mainCont clearfix" id="animation" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-animation"></i>
                           <h2>动画</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="dhitem in hots.dh" :key="dhitem.value">
                               <li class="item">
                                   <a @click="playVideo(dhitem)" class="img-link">
                                       <img :src="dhitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{dhitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{dhitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{dhitem.author.name}}</div>
                                           <div class="online"><i></i>{{dhitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>
                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank" >
                                   <div style="margin-bottom: 13px;" v-for="(dhtopitem,dhindex) in tops.dh" :key="dhtopitem.value">
                                       <li v-if="dhindex==0 " class="item item-one">
                                           <a @click="playVideo(dhtopitem)">
                                               <i class="n1">1</i>
                                               <img :src="dhtopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{dhtopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="dhindex==1" class="item">
                                           <a @click="playVideo(dhtopitem)" ><i class="n2">2</i>{{dhtopitem.vname}}</a>
                                       </li>
                                       <li v-if="dhindex==2" class="item">
                                           <a @click="playVideo(dhtopitem)"><i class="n3">3</i>{{dhtopitem.vname}}</a>
                                       </li>
                                       <li v-if="dhindex>2" class="item">
                                           <a @click="playVideo(dhtopitem)"><i>{{dhindex+1}}</i>{{dhtopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 音乐 -->
               <div class="mainCont clearfix" id="music" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-music"></i>
                           <h2>音乐</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="yyitem in hots.yy" :key="yyitem.value">
                               <li class="item">
                                   <a @click="playVideo(yyitem)" class="img-link">
                                       <img :src="yyitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{yyitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{yyitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{yyitem.author.name}}</div>
                                           <div class="online"><i></i>{{yyitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(yytopitem,yyindex) in tops.dh" :key="yytopitem.value">
                                       <li v-if="yyindex==0 " class="item item-one">
                                           <a @click="playVideo(yytopitem)">
                                               <i class="n1">1</i>
                                               <img :src="yytopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{yytopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="yyindex==1" class="item">
                                           <a @click="playVideo(yytopitem)"><i class="n2">2</i>{{yytopitem.vname}}</a>
                                       </li>
                                       <li v-if="yyindex==2" class="item">
                                           <a @click="playVideo(yytopitem)"><i class="n3">3</i>{{yytopitem.vname}}</a>
                                       </li>
                                       <li v-if="yyindex>2" class="item">
                                           <a @click="playVideo(yytopitem)"><i>{{yyindex+1}}</i>{{yytopitem.vname}}</a>
                                       </li>
                                   </div>
                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 舞蹈 -->
               <div class="mainCont clearfix" id="dance" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-dance"></i>
                           <h2>舞蹈</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="wditem in hots.wd" :key="wditem.value">
                               <li class="item">
                                   <a @click="playVideo(wditem)" class="img-link">
                                       <img :src="wditem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{wditem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{wditem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{wditem.author.name}}</div>
                                           <div class="online"><i></i>{{wditem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(wdtopitem,wdindex) in tops.dh" :key="wdtopitem.value">
                                       <li v-if="wdindex==0 " class="item item-one">
                                           <a @click="playVideo(wdtopitem)">
                                               <i class="n1">1</i>
                                               <img :src="wdtopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{wdtopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="wdindex==1" class="item">
                                           <a @click="playVideo(wdtopitem)"><i class="n2">2</i>{{wdtopitem.vname}}</a>
                                       </li>
                                       <li v-if="wdindex==2" class="item">
                                           <a @click="playVideo(wdtopitem)"><i class="n3">3</i>{{wdtopitem.vname}}</a>
                                       </li>
                                       <li v-if="wdindex>2" class="item">
                                           <a @click="playVideo(wdtopitem)"><i>{{wdindex+1}}</i>{{wdtopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 游戏 -->
               <div class="mainCont clearfix" id="game" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-game"></i>
                           <h2>游戏</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="yxitem in hots.yx" :key="yxitem.value">
                               <li class="item">
                                   <a @click="playVideo(yxitem)" class="img-link">
                                       <img :src="yxitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{yxitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{yxitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{yxitem.author.name}}</div>
                                           <div class="online"><i></i>{{yxitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(yxtopitem,yxindex) in tops.dh" :key="yxtopitem.value">
                                       <li v-if="yxindex==0 " class="item item-one">
                                           <a @click="playVideo(yxtopitem)">
                                               <i class="n1">1</i>
                                               <img :src="yxtopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{yxtopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="yxindex==1" class="item">
                                           <a @click="playVideo(yxtopitem)"><i class="n2">2</i>{{yxtopitem.vname}}</a>
                                       </li>
                                       <li v-if="yxindex==2" class="item">
                                           <a @click="playVideo(yxtopitem)"><i class="n3">3</i>{{yxtopitem.vname}}</a>
                                       </li>
                                       <li v-if="yxindex>2" class="item">
                                           <a @click="playVideo(yxtopitem)"><i>{{yxindex+1}}</i>{{yxtopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 科技 -->
               <div class="mainCont clearfix" id="technology" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-technology"></i>
                           <h2>科技</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="kjitem in hots.kj" :key="kjitem.value">
                               <li class="item">
                                   <a @click="playVideo(kjitem)" class="img-link">
                                       <img :src="kjitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{kjitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{kjitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{kjitem.author.name}}</div>
                                           <div class="online"><i></i>{{kjitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(kjtopitem,kjindex) in tops.dh" :key="kjtopitem.value">
                                       <li v-if="kjindex==0 " class="item item-one">
                                           <a @click="playVideo(kjtopitem)">
                                               <i class="n1">1</i>
                                               <img :src="kjtopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{kjtopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="kjindex==1" class="item">
                                           <a @click="playVideo(kjtopitem)"><i class="n2">2</i>{{kjtopitem.vname}}</a>
                                       </li>
                                       <li v-if="kjindex==2" class="item">
                                           <a @click="playVideo(kjtopitem)"><i class="n3">3</i>{{kjtopitem.vname}}</a>
                                       </li>
                                       <li v-if="kjindex>2" class="item">
                                           <a @click="playVideo(kjtopitem)"><i>{{kjindex+1}}</i>{{kjtopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 生活 -->
               <div class="mainCont clearfix" id="life" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-life"></i>
                           <h2>生活</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="shitem in hots.sh" :key="shitem.value">
                               <li class="item">
                                   <a @click="playVideo(shitem)" class="img-link">
                                       <img :src="shitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{shitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{shitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{shitem.author.name}}</div>
                                           <div class="online"><i></i>{{shitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(shtopitem,shindex) in tops.dh" :key="shtopitem.value">
                                       <li v-if="shindex==0 " class="item item-one">
                                           <a @click="playVideo(shtopitem)">
                                               <i class="n1">1</i>
                                               <img :src="shtopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{shtopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="shindex==1" class="item">
                                           <a @click="playVideo(shtopitem)"><i class="n2">2</i>{{shtopitem.vname}}</a>
                                       </li>
                                       <li v-if="shindex==2" class="item">
                                           <a @click="playVideo(shtopitem)"><i class="n3">3</i>{{shtopitem.vname}}</a>
                                       </li>
                                       <li v-if="shindex>2" class="item">
                                           <a @click="playVideo(shtopitem)"><i>{{shindex+1}}</i>{{shtopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 鬼畜 -->
               <div class="mainCont clearfix" id="guichu" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-guichu"></i>
                           <h2>鬼畜</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="gcitem in hots.gc" :key="gcitem.value">
                               <li class="item">
                                   <a @click="playVideo(gcitem)" class="img-link">
                                       <img :src="gcitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{gcitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{gcitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{gcitem.author.name}}</div>
                                           <div class="online"><i></i>{{gcitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(gctopitem,gcindex) in tops.dh" :key="gctopitem.value">
                                       <li v-if="gcindex==0 " class="item item-one">
                                           <a @click="playVideo(gctopitem)">
                                               <i class="n1">1</i>
                                               <img :src="gctopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{gctopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="gcindex==1" class="item">
                                           <a @click="playVideo(gctopitem)"><i class="n2">2</i>{{gctopitem.vname}}</a>
                                       </li>
                                       <li v-if="gcindex==2" class="item">
                                           <a @click="playVideo(gctopitem)"><i class="n3">3</i>{{gctopitem.vname}}</a>
                                       </li>
                                       <li v-if="gcindex>2" class="item">
                                           <a @click="playVideo(gctopitem)"><i>{{gcindex+1}}</i>{{gctopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 时尚 -->
               <div class="mainCont clearfix" id="fasion" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-fasion"></i>
                           <h2>时尚</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="ssitem in hots.ss" :key="ssitem.value">
                               <li class="item">
                                   <a @click="playVideo(ssitem)" class="img-link">
                                       <img :src="ssitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{ssitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{ssitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{ssitem.author.name}}</div>
                                           <div class="online"><i></i>{{ssitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(sstopitem,ssindex) in tops.dh" :key="sstopitem.value">
                                       <li v-if="ssindex==0 " class="item item-one">
                                           <a @click="playVideo(sstopitem)">
                                               <i class="n1">1</i>
                                               <img :src="sstopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{sstopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="ssindex==1" class="item">
                                           <a @click="playVideo(sstopitem)"><i class="n2">2</i>{{sstopitem.vname}}</a>
                                       </li>
                                       <li v-if="ssindex==2" class="item">
                                           <a @click="playVideo(sstopitem)"><i class="n3">3</i>{{sstopitem.vname}}</a>
                                       </li>
                                       <li v-if="ssindex>2" class="item">
                                           <a @click="playVideo(sstopitem)"><i>{{ssindex+1}}</i>{{sstopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 广告 -->
               <div class="mainCont clearfix" id="gg" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-gg"></i>
                           <h2>广告</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="ggitem in hots.gg" :key="ggitem.value">
                               <li class="item">
                                   <a @click="playVideo(ggitem)" class="img-link">
                                       <img :src="ggitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{ggitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{ggitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{ggitem.author.name}}</div>
                                           <div class="online"><i></i>{{ggitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(ggitem,ggindex) in tops.dh" :key="ggitem.value">
                                       <li v-if="ggindex==0 " class="item item-one">
                                           <a @click="playVideo(ggitem)">
                                               <i class="n1">1</i>
                                               <img :src="ggitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{ggitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="ggindex==1" class="item">
                                           <a @click="playVideo(ggitem)"><i class="n2">2</i>{{ggitem.vname}}</a>
                                       </li>
                                       <li v-if="ggindex==2" class="item">
                                           <a @click="playVideo(ggitem)"><i class="n3">3</i>{{ggitem.vname}}</a>
                                       </li>
                                       <li v-if="ggindex>2" class="item">
                                           <a @click="playVideo(ggitem)"><i>{{ggindex+1}}</i>{{ggitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 娱乐 -->
               <div class="mainCont clearfix" id="yule" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-yule"></i>
                           <h2>娱乐</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="ylitem in hots.yl" :key="ylitem.value">
                               <li class="item">
                                   <a @click="playVideo(ylitem)" class="img-link">
                                       <img :src="ylitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{ylitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{ylitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{ylitem.author.name}}</div>
                                           <div class="online"><i></i>{{ylitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>

                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>
                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(yltopitem,ylindex) in tops.dh" :key="yltopitem.value">
                                       <li v-if="ylindex==0 " class="item item-one">
                                           <a @click="playVideo(ylitem)" >
                                               <i class="n1">1</i>
                                               <img :src="yltopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{yltopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="ylindex==1" class="item">
                                           <a @click="playVideo(ylitem)" ><i class="n2">2</i>{{yltopitem.vname}}</a>
                                       </li>
                                       <li v-if="ylindex==2" class="item">
                                           <a @click="playVideo(ylitem)" ><i class="n3">3</i>{{yltopitem.vname}}</a>
                                       </li>
                                       <li v-if="ylindex>2" class="item">
                                           <a @click="playVideo(ylitem)" ><i>{{ylindex+1}}</i>{{yltopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
               </div>

               <!-- 电影 -->
               <div class="mainCont clearfix" id="movie" js-move="true">
                   <div class="pic-list fl" js-tab="true">
                       <div class="pic-list__title">
                           <i class="icon icon-movie"></i>
                           <h2>影视</h2>
                           <div class="tab-title">
                               <a href="#" class="cur">有新动态</a>
                               <a href="#">最新投稿</a>
                           </div>
                           <a href="#" class="main-link"><i></i>我的十月新番打开方式一定有问题</a>
                           <div class="more-wrap">
                               <a href="#" class="dynamic"><i></i>392条新动态</a>
                               <a href="#" class="more">更多<i></i></a>
                           </div>
                       </div>
                       <ul class="pic-list__wrapper clearfix tab-cont__item tab-cont__cur">
                           <div v-for="ysitem in hots.ys" :key="ysitem.value">
                               <li class="item">
                                   <a  @click="playVideo(ysitem)" class="img-link">
                                       <img :src="ysitem.cover" alt="#">
                                       <span class="mask"></span>
                                       <span class="time">{{ysitem.duration}}</span>
                                   </a>
                                   <div class="img-info">
                                       <a href="#">{{ysitem.vname}}</a>
                                       <div class="btm">
                                           <div class="user"><i></i>{{ysitem.author.name}}</div>
                                           <div class="online"><i></i>{{ysitem.hits}}</div>
                                       </div>
                                   </div>
                               </li>

                           </div>
                       </ul>
                   </div>
                   <div class="main-side fr" js-tab="true">
                       <div class="main-side__title">
                           <div class="rank-t">
                               <h3>排行</h3>
                           </div>
                           <div class="tab-title">
                               <a href="#" class="cur">全部</a>
                               <a href="#">原创</a>
                           </div>

                       </div>
                       <div class="main-side__cont">
                           <div class="tab-cont">
                               <ul class="tab-cont__item main-rank">
                                   <div style="margin-bottom: 13px;" v-for="(ystopitem,ysindex) in tops.dh" :key="ystopitem.value">
                                       <li v-if="ysindex==0 " class="item item-one">
                                           <a @click="playVideo(ystopitem)">
                                               <i class="n1">1</i>
                                               <img :src="ystopitem.cover" alt="#">
                                               <div>
                                                   <p class="title">{{ystopitem.vname}}</p>
                                               </div>
                                           </a>
                                       </li>
                                       <li v-if="ysindex==1" class="item">
                                           <a @click="playVideo(ystopitem)"><i class="n2">2</i>{{ystopitem.vname}}</a>
                                       </li>
                                       <li v-if="ysindex==2" class="item">
                                           <a @click="playVideo(ystopitem)"><i class="n3">3</i>{{ystopitem.vname}}</a>
                                       </li>
                                       <li v-if="ysindex>2" class="item">
                                           <a @click="playVideo(ystopitem)"><i>{{ysindex+1}}</i>{{ystopitem.vname}}</a>
                                       </li>
                                   </div>

                               </ul>
                           </div>
                           <a href="/top" class="more">查看更多<i></i></a>
                       </div>
                   </div>
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
        name: "Test",
        components: {
            NavBar,
            FootBar
        },
        data(){
            return {
                lbimages:['slider_img1.png',
                    'slider_img2.png',
                    'slider_img3.png',
                    'slider_img4.png'
                ],
                hots:{
                    dh:{},
                    yy:{},
                    wd:{},
                    yx:{},
                    kj:{},
                    sh:{},
                    gc:{},
                    ss:{},
                    gg:{},
                    yl:{},
                    ys:{},
                },tops:{
                    dh:{},
                    yy:{},
                    wd:{},
                    yx:{},
                    kj:{},
                    sh:{},
                    gc:{},
                    ss:{},
                    gg:{},
                    yl:{},
                    ys:{},
                },
            }

        },
        methods:{
            playVideo(vi){
                this.$router.push({path:'videot',query:{vn:vi.vid,vu:vi.vurl}})
            },
            getHot(){
                const _this = this;
                axios.post('http://localhost:8181/video/hot').then(function (res) {
                    if(res.data.code==200){
                        _this.hots.dh=res.data.data.动画;
                        _this.hots.yy=res.data.data.音乐;
                        _this.hots.wd=res.data.data.舞蹈;
                        _this.hots.yx=res.data.data.游戏;
                        _this.hots.kj=res.data.data.科技;
                        _this.hots.sh=res.data.data.生活;
                        _this.hots.gc=res.data.data.鬼畜;
                        _this.hots.ss=res.data.data.时尚;
                        _this.hots.gg=res.data.data.广告;
                        _this.hots.yl=res.data.data.娱乐;
                        _this.hots.ys=res.data.data.影视;
                    }else {

                    }
                })
            },
            getTop(){
                const _this = this;
                let data=new URLSearchParams();
                data.append("num",8);
                axios.post('http://localhost:8181/video/tops',data).then(function (res) {
                    if(res.data.code==200){
                        _this.tops.dh=res.data.data.动画;
                        _this.tops.yy=res.data.data.音乐;
                        _this.tops.wd=res.data.data.舞蹈;
                        _this.tops.yx=res.data.data.游戏;
                        _this.tops.kj=res.data.data.科技;
                        _this.tops.sh=res.data.data.生活;
                        _this.tops.gc=res.data.data.鬼畜;
                        _this.tops.ss=res.data.data.时尚;
                        _this.tops.gg=res.data.data.广告;
                        _this.tops.yl=res.data.data.娱乐;
                        _this.tops.ys=res.data.data.影视;
                    }else {

                    }
                })
            }
        },
        created() {
            this.getHot();
            this.getTop();
        }
    }
</script>

<style scoped>

</style>