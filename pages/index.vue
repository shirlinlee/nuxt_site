
<template lang="pug">
  transition (name="slide-fade")
    div.container.W100.W1120
      p(@click="fun1" v-if="!show") {{ des }}

        
</template>

<script>

export default {
  data() {
    return {
      show: false,
      msg: 'IndexIndexIndexIndexIndex',
      des: 'Slot 是一種用於內容分配（Content Distribution / Transclusion）的元件，適用於複雜或巢狀元件的實作上，可以想像成是空間預留的方法，在迭代過程中再把內容塞進去。試想，遇到在元件中包含其他元件的狀況下，如下，在 <app> 中使用 <app-header> 和 <app-footer>（可參考原始碼），要怎麼處理（1）樣版的選擇 和（2）樣版間資料的傳遞呢？'
    };
  },
  methods: {
    fun1:function(){
      alert('123')
    }
    
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
</style>