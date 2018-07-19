<template lang="html">
  <div class="hello">
    <p :is="diff"></p>
    <button @click="click">button</button>
  </div>
</template>
<!--  Loading(:loadPage="loadPage")-->
<script>
import a1 from '@/components/a-1'
import a2 from '@/components/a-2'

export default {
  components:{
    'com-a1':a1,
    'com-a2':a2
  },
  data(){
    return{
      diff:'com-a1'
    }
  },
  methods:{
    click(){
      this.diff = 'com-a2'
    }
  }
}
 
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