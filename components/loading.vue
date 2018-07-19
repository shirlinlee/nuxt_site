<template lang="pug">
    transition(name="fade")
        div.loadingPage(v-show="loadPage")
            p Loading...
    
   


</template>

<script>
export default {
	// data() {
    //     return {
    //         loading: true
    //     };
    // },
    props:['loadPage'],
    mounted:function() {
        console.log(this.loadPage);
    },
    updated() {
        console.log(this.loadPage);
    },
	// methods: {
    //     start:function () {
    //         console.log('load start');
    //         this.loading = true
    //     },
    //     finish:function () {
    //         console.log('load finish');
    //         this.loading = false
    //     }
    // }
}
</script>

<style lang="scss">
  .loadingPage {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(245, 127, 66);
    text-align: center;
    font-family: sans-serif;
    z-index: 8000;
    p {
        position: absolute;
        top: 45%;
        left: 50%;
        font-size: 21px;
        color: #fff;
        transform: translate(-25%, -25%)

    }
  }
</style>