<template>
  <div id="social" class="W100 t_center">
    <div class="icon" v-on:click="(e)=>shareHandler('pin')">
        <img src="/images/icon_12.jpg" width="100%" alt="">
    </div>
    <div class="icon" v-on:click="(e)=>shareHandler('goo')">
          <img src="/images/icon_13.jpg" width="100%" alt="">
    </div>
    <div class="icon" v-on:click="(e)=>shareHandler('fb')">
        <img src="/images/icon_14.jpg" width="100%" alt="">
    </div>
    
  </div>
</template>
<script >
  window.___gcfg = {
    lang: 'zh-CN',
    parsetags: 'onload'
  };
</script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://assets.pinterest.com/js/pinit.js" type="text/javascript" async defer></script>
<script>
  export default {
    name: 'socialIcon',
    data(){
      return{
      }
    },
    props: ['title','src','shareLink'],
    computed: {
      
    },
    methods: {
      shareHandler:function(el){
        if(el==='goo'){
            window.open('https://plus.google.com/share?hl=en&url='+this.shareLink +'&title='+ this.title, 'google-popup', 'height=400,width=600');
            return false;
        } 
        if(el==='pin'){
            window.open('https://www.pinterest.com/pin/create/button/?url='+this.shareLink+'&media='+this.imgSrc+'&description='+ this.title, 'pinterest-popup', 'height=400,width=600');
            return false;
        }
        if(el==='fb'){
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.shareLink + '&t='+ this.title, 'facebook-popup', 'height=400,width=600');
            return false;
        }
      }
    },
    mounted() {
        
    }
  }
</script>

<style>
  #social {
     padding: 45px 0 0;
  }

  #social .icon{
      width: 35px;
      margin: 0 15px 0 0;
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
      padding: 25px 0 15px;
    } 
    #social .icon{
        float: none;
    }
}
</style>

