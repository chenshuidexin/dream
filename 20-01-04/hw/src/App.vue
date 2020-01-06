<template>
  <div>
    <button @click="fn">计数{{num}}</button>
    <MySlot :data="ary" #list="cdata">
      <h2>{{cdata.n}}</h2>
      <p>{{cdata.age}}</p>
    </MySlot>
  </div>
</template>

<script>
import  appa from './components/HelloWorld';
import  MySlot from './components/slot';
  export default {
    data(){
      return {
        num:0,
        ary:[
          {
            key:'kkw',
            id:0,
            age:8
          },
          {
            key:'kb',
            id:1,
            age:20
          }
        ]
      }
    },
    methods: {
      fn(){
        this.num++;
      }
    },
    components:{
      ppa:appa,
      MySlot
    }
  }
</script>

<style scoped>

</style>
