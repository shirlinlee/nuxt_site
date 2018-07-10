<template>
  <transition name="fade">
    <div id="index">
      <div id="kv">
        <no-ssr>
          <carousel class="kv_slide W100" v-bind:class="kvNum" navigationNextLabel=" " navigationPrevLabel=" " :paginationPadding="5" paginationActiveColor="#fff" paginationColor="#999" :perPage="1" :autoplay="true" :speed="1200" :autoplayTimeout="8500" :navigationEnabled="true" :autoplayHoverPause="true"
            :loop="true">
            <slide class="kv_slide_item" v-for="(banner,index) in banners" :key="`kv_slide_${index}`">
              <img :src="banner.imagePath||''" width="100%" />
              <div class="kv_text f_white W50 poA">
                <h1 class="title f55" v-html="banner.title">{{ banner.title }}</h1>
                <p class="kv_des f17">{{ banner.subTitle }}</p>
              </div>
            </slide>
          </carousel>
        </no-ssr>
      </div>
  
      <div id="stories_news">
        <div class="news_area W1120">
          <h4 class="title_sec" v-scroll-reveal.reset="{ delay: 0 }">{{$t('home.sec4_title')}}</h4>
          <div class="news_wrapper">
            <div class="news_item" v-for="(item,index) in total" :key="`news_${index}`" v-if="index<=2"  v-on:click="()=>seeDetail(item.cata, item.id)" v-scroll-reveal.reset="{ delay: 50 }">
              <div class="news_img_wrapper trn4">
                <img src="/images/index_news_cover.png" class="W100 cover" v-if="item.src" v-bind:style="{ backgroundImage:'url('+item.src+')' }" />
                <img src="/images/index_news_cover.png" class="W100 cover" v-else v-bind:style="{ backgroundImage:'url(/images/index_news_bg.png)' }" />
                
              </div>
              <div class="bg_orange trn4 detail">
                <p class="f15 f_white">{{item.title}}</p>
                <p class="time f_grey f13 poA">{{item.date}}</p>
                <a href="javascript:void(0)" class="plus poA">+</a>
              </div>
            </div>

            
          </div>
          <div class="W100 t_center">
            <nuxt-link class="btn" v-scroll-reveal.reset="{ delay: 0 }" :to="$i18n.path('company#blog')" exact><span class="f_grey">{{$t('home.sec4_btn')}}</span></nuxt-link>
          </div>
        </div>
      </div>
  
    </div>
  
  </transition>
</template>

<script>
  import axios from 'axios'

  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  
  export default {
    name: 'Index',
    async fetch({app,store}) { 
      await store.dispatch('GET_INDEX');
      await store.dispatch('GET_DATA');
      
    }, 
    data() {
      const storeData = this.$store.state;
      return {
        total: [],
        total_number: 0,
        news_array:this.$store.state[this.$store.state.locale].news_order,
        blog_array:this.$store.state[this.$store.state.locale].blog_order,
        video_array:this.$store.state[this.$store.state.locale].video_order,
        banners: storeData[storeData.locale].index.banners,
        stories: storeData[storeData.locale].index.stories,
        imgDefault: 'http://www.bomb01.com/upload/news/original/a29af7ee95d9cf379049b44016d1cd4f.jpg',
      }
    },
    computed: {
      kvNum: function() {
        return 'num_'+this.banners.length;
      },
      
      
    },
    head() {
      return {
        // title: this.kv_slide.des
      }
    },
    components: {
      Carousel,
      Slide
    },
    methods: {
      latest: function() {
          var tempObj =  Object.values(Object.assign(this.news_array, this.blog_array,this.video_array));
          this.total =  tempObj;
      },
      seeDetail: function(cata,id){
        // console.log(`/${this.$store.state.locale}/${cata}/${id}`);
        window.location=`/${this.$store.state.locale}/${cata}/${id}`;
      },
    },
    mounted: function() {
      console.log(this.$store.state[this.$store.state.locale]);
      this.latest();
    }
  }
</script>

<style>
  #kv {
    max-height: 95vh;
    overflow: hidden;
    position: relative;
  }
  
  #kv h1 {
    /* white-space: nowrap; */
    padding-bottom: 15px;
    letter-spacing: 0;
  }
  
  #kv .VueCarousel-navigation-button {
    z-index: 50;
    position: absolute;
    top: 11px;
    left: 0;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    transform: none;
  }
  
  #kv a.VueCarousel-navigation-prev {
    background-image: url(/images/arrow_03.png);
    left: initial;
  }
  
  #kv a.VueCarousel-navigation-next {
    background-image: url(/images/arrow_04.png);
    right: 12px;
    left: initial;
  }
  
  .VueCarousel-navigation {
    position: absolute;
    top: 0;
    right: 0;
  }
  
  .VueCarousel-slide {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .kv_slide_item:after {
    content: "";
    display: block;
    position: absolute;
    width: 65%;
    left: -15%;
    top: 0;
    height: 100vh;
    -webkit-transform: skewX(50deg);
    transform: skewX(20deg);
    opacity: .75;
    background-color: #f57f42;
    max-width: 1150px;
  }

  #kv .num_3 a.VueCarousel-navigation-prev{
    right: 135px;
  }
  #kv .num_4 a.VueCarousel-navigation-prev{
    right: 155px;
  }
  #kv .num_5 a.VueCarousel-navigation-prev{
    right: 170px;
  }
  
  .kv_text {
    top: 24vh;
    left: 5%;
    transform: translate(0,-30%);
    z-index: 50;
    max-width: 530px;
  }
  
  .kv_des {
    line-height:1.5;
    font-size:  19px;
  }
  
  #home_intro {
    padding: 70px 0;
    text-align: center;
    background-image: url(/images/index_bg_01.png);
    background-repeat: repeat-x;
    /* background-size: contain; */
    margin-top: -150px;
    z-index: 50;
    position: relative;
    overflow: visible;
  }
  
  #home_intro p {
    padding-bottom: 20px;
  }
  
  #home_intro img {
    bottom: 0;
    left: 10%;
  }
  
  #home_system {
    padding: 90px 0 140px;
    text-align: center;
    background-image: url(/images/index_bg_03.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 50;
    position: relative;
  }

  
  div#stories_news {
    margin: 0;
    position: relative;
    z-index: 50;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 70px;
  }
  
  .news_area {
    padding: 80px 30px;
  }
  
  .news_wrapper {
    padding-top: 20px;
  }

  .news_area img.news_img {
      top: 50%;
      left: 50%;
      z-index:40;
  }
  .news_area img.cover{
      overflow: hidden;
      background-size: cover;
      background-position: center;
      z-index:10;
  }
  
  @media screen and (min-width: 781px) {
    .news_item:hover {
      margin-top: -20px;
      margin-bottom: 20px;
    }
    
  }

  
  @media screen and (max-width: 780px) {
    .news_area {
      background-color: #fff;
    }

    .kv_text {
      max-width: 400px;
      top: 17vh
    }
    #kv {
      padding-top: 60px;
      overflow: visible;
    }
    
  }
  
  @media screen and (max-width: 414px) {
      
    .kv_des {
      font-size:14.5px;
    }
    #kv{
      background-color: #f57f42;
    }
    
    .news_area {
      padding: 50px 30px;
    }
    
    #kv h1 {
      padding-bottom:10px;
      font-size: 19px;
      line-height: 1.3;
    }
    .kv_text {
      transform: translate(0,0);
      top: initial;
      width: 100%;
      position: relative;
      padding: 15px 15px 20px;
      left: 0;
    }
    #home_intro {
      padding: 70px 0 30px;
    }

  }
  
  @media screen and (max-width: 375px) {

  }
  
  @media screen and (max-width: 320px) {

  }
</style>


