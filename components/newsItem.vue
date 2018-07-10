<template>
    <div class="support_detail W100 W1120" v-bind:class="kind" v-scroll-reveal="{ delay: 0, reset:false }">
        <div class="news_item" v-for="(item,index) in news_array" :key="`${kind}_${index}`">
            <div class="news_img_wrapper trn4">
                <img v-bind:src="item.src||''" alt="" width="100%">
                <font class="f_white poA f17"><b>QUARKBIO</b>news</font>
            </div>
            <div class="bg_white trn4 detail">
                <p class="f15 f_grey">Co-development of tumor microenvironment panel with ACT Genomics to assist in predicting immunotherapy response in cancer patients.Co-development of tumor microenvironment panel with ACT Genomics to assist in predicting immunotherapy response in cancer patients</p>
                <p class="time f_grey f13 poA">Jan 13, 2017</p>
                <a href="#" class="plus poA">+</a>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'newsItem',
    data(){
      const storeData = this.$store.state;
      return{
        news_array:storeData[storeData.locale].news,
        blog_array:storeData[storeData.locale].blog,
        video_array:storeData[storeData.locale].video,

      }
    },
    props: ['kind','currentTab'],
    computed: {
      
    },
    methods: {
        seeDetail: function(id){
            console.log('123');
            window.location=`${this.kind}/${id}`;
        },
    },
    mounted() {

        
    },
    beforeMount: function(){
        console.log(this.news_array)
    }
  }
</script>

<style>
  #social {
     padding: 45px 0 0;
  }

  #social .icon{
      width: 35px;
      margin: 15px 15px 0 0;
      display: inline-block;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      float: left;
  }

  #social .icon img{
      transition: all .4s;
  }

  #social .icon:hover img{
      transform:  scale(1.1)
  }
  

@media screen and (max-width: 880px) {

    
}

  
@media screen and (max-width: 414px) {
    #social {
      padding: 25px 0;
    } 
    #social .icon{
        float: none;
    }
}
</style>

