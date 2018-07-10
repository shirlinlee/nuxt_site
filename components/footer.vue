<template>
  <div id="footer" class="W100">
    <div class="W1120 W100">
      <div class="go_left">
          <ul class="f_grey f13 t_left info">
            <li><p>{{ $t('footer.tel') }}</p></li>
            <li><p>{{ $t('footer.mail') }}</p></li>
            <li><p>{{ $t('footer.address') }}</p></li>
          </ul>             
      </div>
      <div class="go_right">
          <img src="/images/footer_logo.png" alt="" class="footer_logo go_right">
          <p class="f_grey f13 go_right t_left right">2018<br>{{ $t('footer.right') }}</p>
          <ul class="social go_right">
            <li class="go_left"><a href="https://www.facebook.com/QuarkBio/" target="_blank"><img src="/images/footer_icon_fb.png" width="100%" alt=""></a></li>
            <li class="go_left"><a href="https://www.instagram.com/quarkbio/" target="_blank"><img src="/images/footer_icon_ig.png" width="100%" alt=""></a></li>
            <li class="go_left"><a href="https://twitter.com/quarkbio" target="_blank"><img src="/images/footer_icon_tw.png" width="100%" alt=""></a></li>
            <li class="go_left"><a href="https://www.linkedin.com/company/quarkbio-inc." target="_blank"><img src="/images/footer_icon_in.png" width="100%" alt=""></a></li>
          </ul>
      </div>
    </div>
    <div class="goTop" v-on:click="goTop">
      <img src="/images/btn_gotop.png" width="100%" alt="">
      <p class="f_grey f15">{{ $t('footer.top') }}</p>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    methods:{
      goTop:function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          $body.animate({scrollTop:0 }, 800);
      }
    },
  
    mounted() {
      $(window).scroll(function(e){
        ( this.scrollY === 0 ) ? $('.goTop').addClass('hide'): $('.goTop').removeClass('hide');
      })
    }
  }
</script>

<style>
  #footer {
    position: relative;
    /* height: 120px; */
    background-color: #fff;
    text-align: center;
    overflow: visible;
   
  }
  #footer div.go_right{
    height: 40px;
    margin-top: 40px;
  }
  #footer .W1120{
    border-top: 1px solid #7a828c;
    padding: 20px 0 25px;
    display: inline-block;
  }
  .footer_logo{
    width: 75px;
    margin-left: 15px;
    margin-top: -30px;
  }
  .social{
    vertical-align: bottom;
    margin-right: 15px;
  }
  .social li{
    border: 1px solid #7a828c;
    width: 40px;
    margin: 0 3px;
    display: inline-block;
    border-radius: 50%;
  }
  .goTop{
    width: 50px;
    position: absolute;
    right: 15px;
    top: -100px;
    z-index: 300;
    cursor: pointer;
    transition:all .3s;
  }
  .goTop img{
    margin-bottom: 5px;
    opacity: .8;
    transition: all .5s;
  }  
  .en .goTop img{
    margin-bottom: 0;
  }
  .tw .goTop p{
    font-size: 14px;
    letter-spacing: 2px;
  }
  
  .goTop p{
    transform: rotate(90deg); 
    transition: all .5s;
    padding: 5px;
  }
  .goTop:hover img{
    opacity: 1;
  } 
  .goTop:hover p{
    transform: rotate(0deg); 
  } 
  
  @media screen and (max-width: 1050px) {
    #footer{
      padding-left: 20px;
      padding-right: 20px;
      
    }
  }

  @media screen and (max-width: 414px) {
      #footer div.go_right, #footer>.go_left{
        width: 100%;
      }
      #footer div.go_right{
        height: inherit;
        position: relative;
        margin-top: 20px;
        padding-bottom: 40px;
        text-align: center;
      }
      .footer_logo{
        display: none;
      }
      .social{
        margin: 5px 0;
        float: none;
        display: inline-block;
      }
      .info{
        padding-left: 75px;
        background-image: url(/images/footer_logo.png);
        background-size: 60px;
        background-position: 0 5px;
        background-repeat: no-repeat;
      }
      .right {
          position: absolute;
          width: 100%;
          display: block;
          text-align: center;
          bottom: -5px;
      }
      .goTop{
        top: inherit;
        bottom: 20px;
        position: fixed;
        
      }
      .goTop.hide{
        transform: scale(0);
      }
      .goTop p{
        display: none;
      }
      
  }  

        

</style>

