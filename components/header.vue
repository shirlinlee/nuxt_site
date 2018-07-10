<template>
  <div id="top" class="W100 t_center" v-on:mouseleave="isPc ? openSub('',false):null" >
    <div class="W100">
      <nuxt-link class="logo go_left" @click.native="menuClick" :to="$i18n.path('')" exact>
        <img src="/images/header_logo.png" class="W100" alt="">
        <img src="/images/header_logo_change.png" class="W100 poA" alt="">
        
      </nuxt-link>
        <nav v-bind:class="{open:mb_menu_open}" class="headerMenu inline go_left">
          <div class="inline">
            <nuxt-link class="headerLink f15" @click.native="menuClick" :to="$i18n.path('')" exact>
              {{ $t('links.home') }}
            </nuxt-link>
          </div>
          
          <div class="headerLink f15 sub_link" v-on:mouseenter="isPc ? openSub('company',true):null"  v-on:touchstart="!isPc ? openSub('company',true): null">
            <span>{{ $t('links.company') }}</span>
            <div v-bind:class="{'show': support_open }" v-on:click="mb_menu_open = false" class="sub_menu hx4">
                <nuxt-link :to="$i18n.path('company#blog')" exact>{{ $t('links.blog') }}</nuxt-link>
            </div>
          </div>
          
          <ul class="langMenu">
            <li class="langLink">
              <nuxt-link v-bind:class="{ 'active': $i18n.locale === 'en' }" :to="{ params: { lang: 'en' }}" @click.native="menuClick" active-class="none" exact>
                {{ $t('links.english') }}
              </nuxt-link>
            </li>
            <li class="langLink">
              <nuxt-link v-bind:class="{ 'active': $i18n.locale === 'tw' }" :to="{ params: { lang: 'tw' }}"  @click.native="menuClick" active-class="none" exact>
                {{ $t('links.tradition') }}
              </nuxt-link>
            </li>
            
          </ul>
        </nav>
        
        <div v-bind:class="{ham:true,open:mb_menu_open}" @click="menuHandler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        isPc:true,
        product_open:false,
        support_open:false,
        mb_menu_open: false,
        hovering: false,
        
      }
    },
    computed: {
      sub_menu_handler: function() {
        if ( this.support_open ||  this.product_open ) {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      openSub: function(el ,enter){
        this.hovering = true;
        if(enter){
          if(el==="product" ) {
            this.product_open=true;
            this.support_open=false;
          }
          if(el==="company") {
            this.support_open=true;
            this.product_open=false;
          }
        } else {
          this.product_open=this.support_open=false;
        }

        // setTimeout(function(){
        //   this.hovering = false;
        // },10);
        
        if( this.mb_menu_open && this.product_open || this.mb_menu_open && this.support_open ) {
          // console.log('in')
        }
      },
      menuHandler:function(){
        if(!this.mb_menu_open) {
          this.support_open=this.product_open=false;
        }
        this.mb_menu_open=!this.mb_menu_open;
      },
      menuClick: function(){
        this.mb_menu_open = this.support_open = this.product_open = false; 
      }
    },
    beforeMount() {
      // console.log($route.fullPath);
      if( window.innerWidth <= 780 ) {
        this.isPc = false;
      }
      // console.log(window.innerWidth)
    }
  }
</script>

<style>
  #top {
    /** position: fixed;  **/
    height: 80px;
    border-bottom: 5px solid #f57f42;
    background: #fff;
    z-index: 90;
    padding-top: 22px;
    z-index: 3000;
    padding-left: 15px;
  }
  
  .headerMenu {
    float: left;
    margin: 0 0 0 20px;
  }
  
  .headerLink {
    font-size: 16px;
    color: #666;
    padding: 7px 14px;
    margin-left: 10px;
    display: inline-block;
  }

  
  .nuxt-link-active {
    /* color: cyan; */
  }

  .logo{
    width: 240px;
    z-index: 300;
    position: relative;
  }

  .logo .poA{
    left: 0;
    top: 0;
    -webkit-animation: logoAni 7s infinite; /* Safari 4+ */
    -moz-animation:    logoAni 7s infinite; /* Fx 5+ */
    -o-animation:      logoAni 7s infinite; /* Opera 12+ */
    animation:         logoAni 7s infinite; /* IE 10+, Fx 29+ */
  }

  @-webkit-keyframes logoAni {
    0%   { opacity: 0; }
    50%  { opacity: 1 }
    100% { opacity: 0; }
  }
  @-moz-keyframes logoAni {
    0%   { opacity: 0; }
    50%  { opacity: 1 }
    100% { opacity: 0; }
  }
  @-o-keyframes logoAni {
    0%   { opacity: 0; }
    50%  { opacity: 1 }
    100% { opacity: 0; }
  }
  @keyframes logoAni {
    0%   { opacity: 0; }
    50%  { opacity: 1 }
    100% { opacity: 0; }
  }

  ul.langMenu {
    display: inline-block;
    height: 35px;
    position: absolute;
    right: 15px;
    top: 0;
  }
  
  ul.langMenu li {
    float: left;
    line-height: 35px;
  }
  
  ul.langMenu li a {
    color: #999;
    line-height: 1;
    padding: 0 5px;
    margin: 0 5px;
    font-size: 12px;
    line-height: 35px;
    display: inline-block;
    border-top: 1.5px solid transparent;
  }
  
  ul.langMenu li a.active {
    cursor: default;
    border-top: 1.5px solid #f57e42;
  }

  .sub_link {
    position: relative;
    cursor: pointer;
  }

  .sub_link span{
    padding-right: 20px;
    background-image: url(/images/arrow_02.png);
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: right 5px;
  }


  @media screen and (min-width: 781px) {
    ul.langMenu li a:hover {
      color: #000;
    }
    .headerLink:hover {
      color: #2e2f30;
      background-color: #fff;
    }
    .sub_menu{
        width: 100%;
        position: fixed;
        top: 80px;
        height: 0;
        left: 0;
        background: #f57e42;
        transition: all .5s;
        padding-left: 5%;
    }
    .sub_menu.show{
        height: 40px;
        overflow: hidden;
      
    }

    .sub_menu a{
        line-height: 35px;
        height: 35px;
        vertical-align: top;
        color: #ffffff;
        font-size: 15px;
        display: inline-block;
        padding: 0 25px 0 0;
        float: left;
        opacity: .85;
    }
    .sub_link .sub_menu{
      display: none;
    }
    .sub_menu a:hover{
        
       opacity: 1;
    }

  }


  @media screen and (max-width: 780px) {
    .sub_menu.W100{
        display: none;
    }
    .sub_menu a{
        line-height: 40px;
        height: 40px;
        color: #777;
        font-size: 15px;
        display: block;
        width: 100%;
        background-color: #f9f9f9;
    }
    .sub_menu.hx2, .sub_menu.hx4{
      height: 0;
      transition: all .3s .1s;
    }
    .sub_menu.hx2.show{
      height: 80px;
    }
    .sub_menu.hx4.show{
      height: 160px;
    }
    .sub_link span{
      margin-left: 25px;

    }
    #top {
      height: 60px;
      border-bottom: none;
      padding-top: 15px;
      background: transparent;
    }
    #top::after{
      content: "";
      display: block;
      background: 100%;
      height: 57px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 200;
      background: #fff;
      border-bottom: 3px solid #f57f42;
      box-sizing: content-box;
    }
    #top .W1120{
      padding: 0;
    }
    .logo {
        width: 190px;
        /* margin-left: 15px; */
    }
    .headerMenu{
      position: fixed;
      width: 100%;
      background: #fff;
      left: 0;
      top: 59px;
      margin-left: 0;
      transition: all .5s;
      transform: translate(0, -150%);
      box-shadow: 0 0 15px rgba(0,0,0,.2);
    }

    .headerMenu.open{
      transform: translate(0, 0);
    }
    /* .product.show {
        height: 72px;
    }
    .support.show {
        height: 150px;
    } */
    .headerMenu>*{
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      margin: 0
    }
    .ham{
      width: 22px;
      position: absolute;
      right: 15px;
      z-index: 300;
    }
    
    .ham span{
      height: 3px;
      width: 100%;
      display: block;
      background: #f57e42;
      margin: 4px 0;
      transition: all .5s;

    }

    .ham.open span:nth-child(1){
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      transform-origin: left top;
    }
    .ham.open span:nth-child(2){
      opacity: 0;

    }
    .ham.open span:nth-child(3){
    -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      transform-origin: left bottom;
    }

    ul.langMenu li a {
      padding: 0 3px;
      margin: 0 3px;
    }

    ul.langMenu{
      /* display: none; */
      position: relative;
      padding: 5px 0;
      height: 50px;
      right:0;
    }
    ul.langMenu li {
      float: none;
      display: inline-block;
      margin-top: 5px;
    }

    .sub_menu{
      width: 100%;
      position: relative;
      background: #fbfbfb;
      top: 0;
      margin-bottom: -7px;
      overflow: hidden;
    }
    .sub_menu a{
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
    }
    .sub_menu a:last-child{
      border-bottom: none;
    }
    .sub_link{
      background-position: 61% 10px;
      padding: 7px 0 ;
      line-height: 45px;
    }
    .sub_link>span{
      padding-bottom: 7px;
      display: inline-block;
      background-position: right 14px;
    }
    .sub_menu a {
        font-size: 13px;
    }
    
  }

  

</style>

