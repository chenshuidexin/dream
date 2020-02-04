<template>
  <div class="father">
     <h2>父组件</h2>
     <son>
       <div class="tem" slot="up">
         <span>1111</span>
         <span>2222</span>
         <span>3333</span>
       </div>
       <!-- slot='名字' -->
       <div class="tem" slot="down">
         <span>111111</span>
         <span>222222</span>
         <span>333333</span>
       </div>
       <div class="tem">
         <span>11</span>
         <span>22</span>
         <span>33</span>
       </div>
     </son>
  </div>
</template>

<script>
// 引用子组件插槽
import son from './son'
  export default {
    data:function(){
      return{}
    },
    components:{
      son,
    }
  }
</script>

<style scoped>
.father{
  width: 100%;
  background-color: chocolate;
  height: 100%;
}
.tem{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 30%;
  margin: 0 auto;
}
.tem span{
  border: 1px solid #000;
  height: 50px;
  line-height: 50px;
  padding: 10px;
}
</style>
