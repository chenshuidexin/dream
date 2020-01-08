<template>
  <div id="nav">
    {{$route.params.un}}:欢迎您
    <router-link tag="li" to="/about/nizp/id/1">About1</router-link>
    <router-link tag="li" to="/about/kkw/id/2">About2</router-link>
    <router-link tag="li" to="public">public</router-link>
    <router-link tag="li" :to="{name:'p4',params:{n:'kkw'}}">p4</router-link>   
    <router-link tag="li" :to="{name:'p5',params:{nn:'kkw'}}">p5</router-link>
  </div>
</template>

<script>
  export default {
    name:'home',
    data(){
      return {
        n:'kkw'
      }
    }
  }
</script>

<style scoped>
li{list-style: none ; font-size:26px}
</style>