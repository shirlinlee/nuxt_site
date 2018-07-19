
<template lang="pug">
  transition(name="slide-fade")
  
    div.container.W100
      div#list-demo
        div.tab(v-for="cata in catagories" v-bind:key="cata" v-on:click="()=>tabHandler(cata)" v-bind:class="{hover:cata!==currentItem}") {{cata}}
  
      transition-group( name="list" tag="div")
        Article(v-for="item, index in news" v-bind:key="index" :post-title="item.title" v-show="currentItem===item.catagory")
          p {{ item.des }} 

      Loading(:loadPage="loadPage")
      
</template>
<!--  Loading(:loadPage="loadPage")-->
<script>
import Article from '~/components/article'
import Loading from '~/components/loading'

export default {
  data() {
    return {
      loadPage: true,
      currentItem: '健康',
      catagories:['健康','氣象','大陸','生活'],
      news:[
        {catagory:'健康',title:'「葉教授」走了！有這些症狀你也要小心', des:'心海羅盤「葉教授」突然傳出大腸癌過世的消息，讓許多人都驚訝，懷疑可能發現時已末期，才會走得突然，醫師表示，大腸癌是國人發生率最高的癌症，每年新增患者達到一萬多人，死亡人數則有5000多人，如果有排便習慣改變等狀況，應接受大腸鏡檢查，早發現效果好，避免一發現時已是難醫治的末期。'},
        {catagory:'氣象',title:'第9號颱風山神成形？ 氣象局：待觀察', des:'「目前位於菲律賓東方海面上的熱帶性低氣壓，不排除有機會形成颱風，16日下半天後將影響花東、恆春半島。」中央氣象局預報員徐仲毅15日受訪時表示，未來一周，從南海一直到菲律賓東方海面，都會有低壓帶，迎風面的東半部地區可能有局部下雨，西半部地區則以午後雷陣雨為主。天氣風險公司總監賈新興根據Nature的一篇研究分析1949至2016年全球熱帶氣旋的移動速度，發現暖化竟然讓颱風懶得動了。'},
        {catagory:'生活',title:'難民之子變法國足球新星！姆巴佩捐2千萬獎金：為國踢球不該拿錢', des:'今年世足賽由法國贏得冠軍， 拿下隊史世界盃第2冠，其中法國新星姆巴佩（Kylian Mbappe）是最受期待的年輕球員之一，年僅19歲的他不僅場上表現精彩，熱心公益的事蹟也被外界讚賞，外媒報導指出，拿下本屆最佳年輕球員獎的姆巴佩將把全數（約新台幣2615.8萬）獎金全捐給慈善機構，而理由是因為他認為「為國家出賽不應該收錢」。'},
        {catagory:'大陸',title:'央視直擊郭董發飆拍桌！郭董：領導要霸氣像「老虎帶綿羊」', des:'鴻海集團總裁郭台銘霸氣的管理風格，不只讓員工信服，就連央視也對郭董讚譽有加，在貼身採訪過程中現場體驗到「霸道總裁」的威力，直擊郭董因為不滿簽到簿的設計，當場對著高層發飆，不禁以「霸道總裁」、「代工皇帝」、「年富力強的工作狂人」形容鴻海董座郭台銘。'},
        {catagory:'生活',title:'只知晴空塔、淺草不夠！ 隱藏東京的15個「日本之最」', des:'經過東京的銀座山野樂器，你知道這裡的地價是日本最貴的嗎？出國旅遊時，總有許多「驚喜」等著我們發掘，臉書粉專『東京走著瞧』分享了15個在東京的「日本之最」，快來看看這些厲害的地方，你是否曾經造訪過呢？'},
        {catagory:'大陸',title:'5歲童「獨留家」摔出20樓陽台　奇蹟掛19樓驚險影片曝光', des:'還在學習走路的幼童，家長真的不要讓他獨自在家，否則一個不小心可能就會發生意外！中國大陸四川省就有一名5歲男童被家人獨留在家，結果他就自己從20樓家中陽台翻出去，所幸他死死抓住了19樓外的護欄，直到被社區居民發現報警，救援人員火速趕來破門救援，才將他平安的拉回屋內。'},]
    };
  },
  components: {
      Article,
      Loading
  },
  computed:{
    total: function(){
      return this.news.length
    }
  },
  mounted () {
    var $this = this;
    
    this.$nextTick(() => {
      // $(window).on('load',function(){
      //     $this.loadPage = false;
      // })
      setTimeout(function(){$this.loadPage = false} , 500)
      
      // this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    fun1:function(){
      alert('123')
    },
    tabHandler: function (el) {
      this.currentItem = el;

    },
    
  }
};
</script>

<style lang="scss">
  .container {
    h3{
      padding: 20px;
      line-height: 1.8;
    }
  }
  #list-demo {
    display: inline-block;
    margin: 30px auto;
    .tab{
      border-radius: 8px;
      margin: 0 5px;
      line-height: 30px;
      padding: 0 20px;
      display: inline-block;
      background: #f57f42;
      color: #fff;
      cursor: default;

      &.hover{
        cursor: pointer;

      }
    }
  }

  
</style>