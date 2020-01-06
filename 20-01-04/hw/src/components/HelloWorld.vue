<template id="ppa">
  <div class="box">
     我在HelloWorld里{{cc}}
  </div>
</template>

<script>
  export default {
    props:['cc']
  }
</script>

<style  scoped>
/* 相当于是在css */
.box{
  width: 100px;
  height: 100px;
  background: #333;
}
</style>
