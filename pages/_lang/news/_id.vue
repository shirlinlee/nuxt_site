<template>
  <section class="news_page bg_white">
      <div class="W100">
          <img :src="src" width="100%" alt="" class="article_img">
        </div>
      <div class="W100 W880">
        <h4>
           {{ title }}
        </h4>
        <h6>{{ date }}</h6>
        <div class="detail" v-html="des"/>
      </div>
      <br/>
      <div class="W100 W880 t_center">
        <SocialIcon :title="title" :src="src" :shareLink="shareLink"/>
        <nuxt-link :to="$i18n.path('company#news')" class="btn" exact><span class="f_orange">Back</span></nuxt-link>
      </div>
      

  </section>
</template>

<script>
import SocialIcon from '~/components/socialIcon.vue'
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'News',
  validate ({ params }) { 
    // Must be a number 
    return /^\d+$/.test(params.id) 
  },
  head() {
      return {
        title: this.title,
        meta: [
            { name: 'description', hid: 'description', content: this.shareDes },
            // Open Grapg
            { property: 'og:title', content: this.title },
            { property: 'og:description', content: this.shareDes },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: this.shareLink },
            { property: 'og:image', content: this.src },
        ],
        link: [
            { rel: 'canonical', href: this.shareLink }
        ]
      }
  },
  components: {
    SocialIcon
  },
  async fetch({app,store}) {
      const lang = store.state.locale; 
      if( store.state[lang].news === undefined ){
         await store.dispatch('GET_NEWS')
      } 
  },
  data () {
    const idNumber = Number(this.$route.params.id)
    const detail = this.$store.state[this.$store.state.locale].news[idNumber];
    
    return {
      host: 'http://www.sixdotsit.com:82',
      id: detail.id,
      title: detail.title,
      sub_title: detail.sub_title,
      src: detail.src,
      des: detail.des,
      date: detail.date,
      tags: detail.tags,
      getInfo: true
    }
  },
  computed:{
    shareLink:function(){
      return this.host + this.$router.history.current.fullPath;
    },
    shareDes: function(){
      var cleanText = this.des.replace(/<\/?[^>]+(>|$)/g, "");
      return cleanText;
    }
  },
  mounted: function () {
   
  },
  methods:{
    dataHandler:function(){
      const dataHandler = this.$store.state[this.$store.state.locale].news;
      console.log(this.src);
      $.each(dataHandler, (key, obj) => {
        if(obj['id'] === this.id) {
          this.title = obj['title'];
          this.sub_title = obj['sub_title'];
          this.des = obj['des'];
          this.src = obj['src'];
          this.date = obj['date'];
        } else {
          this.getInfo = false;
        }
      })

    },
  },
  beforeDestroy: function(){
     this.getInfo = true;
  },

  
}
</script>

<style scoped>
.news_page {
  text-align: center; 
  padding: 110px 0;
}


.W880 a{

}
.news_page h4{
  font-size: 19px;
  color: #f57f42;
  line-height: 1.3;
  padding: 25px 0 0;
  text-align: left;
}

.news_page h6{
  display: inline-block;
  width: 100%;
  color: #666;
  font-size: 13px;
  line-height: 1.4;
  padding: 25px 0 0;
  text-align: left;
}

.detail{
  border-top: solid 1px #ccc;
  margin-top: 15px;
  font-size: 15px;
  color: #333;
  padding: 25px 0;
  line-height: 1.6;
  text-align: left;
}


.btn {
    padding: 0 25px 0 38px;
    margin-top: -40px;
    float: right;
    height: 43px;
    line-height: 43px;
}

.article_img{
  max-width: 880px;
}

@media screen and (max-width: 880px) {
  .news_page{
    padding: 25px 0 90px;
  }
}

@media screen and (max-width: 414px) {
  .btn {
    margin: 10px auto;
    float: none;
    width: 100%;
  }
}
  
</style>
