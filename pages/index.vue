
<template lang="pug">
    div.container.W100.W1120
        h3 {{count}}
        LayoutsDefault
          h1 {{ msg }}

        
</template>

<script>
import LayoutsDefault from '~/components/slot'
export default {
  data() {
    return {
      msg: 'IndexIndexIndexIndexIndex',
      count: '關於 slot (插槽) 的範例說明，在官方網站並不是介紹得很清楚(參考)。標題「使用 slot 分發內容」這句話其實不易理解，但意思就是說「父組件準備好內容，分發給子組件安排的結構」。父組件只負責內容，但不負責擺放的位置；子組件負責擺放位置，但不理會內容是什麼。'
    };
  },
  components: {
      LayoutsDefault
  },
  methods: {
    
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