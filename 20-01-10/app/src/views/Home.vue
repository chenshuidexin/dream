<template>
  <div class="home">
    <h1>home</h1>
    <aa></aa>
    <bb></bb>
  </div>
</template>

<script>
import aa from './a.vue';
import bb from './b.vue';
export default {
    name:'home',
    // 模板串
    components:{
      aa,bb
    }
  }
</script>

<style scoped>

</style>