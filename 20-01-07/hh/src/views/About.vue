<template>
  <div class="about">
    <router-link to="/">Home</router-link> |
    <router-link to='/about/nizp/id/1'>About1</router-link>
    <router-link to='/about/kkw/id/2'>About2</router-link>
    <router-link to='/public'>public</router-link>

    <!-- <div v-if="$route.params.id === 1">111111111111的天下</div>
    <div v-if="$route.params.id === 2">222222222222的天下</div> -->


<div>
  用户:{{$route.params.uname}}
  <h2 v-if="$route.params.id === '1'">你真胖1111111</h2>
  <p v-if="$route.params.id === '2'">凯宝222222222</p>
</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        num:0
      }
    },
    created() {
      this.num=1;
      if(this.$route.params.id === '1'){
        setTimeout(()=>{
          console.log('请求接口1')
        },1000)
      }else if(this.$route.params.id === '2'){
        setTimeout(()=>{
          console.log('请求接口2')
        },1000)
      }
    },
    watch:{
      '$route'(to,from){
        if(this.$route.params.id === '1'){
          setTimeout(()=>{
            console.log('请求接口1')
          },1000)
        }else if(this.$route.params.id === '2'){
          setTimeout(()=>{
            console.log('请求接口2')
        },1000)
      }
      }
    }
  }
</script>
