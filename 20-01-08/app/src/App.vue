<template>
    <div id="app">
<div id="nav">
    <router-link to="/" tag="li">home</router-link>
    <router-link to="/about" tag="li">about</router-link>
</div>
<router-view></router-view>
    </div>
</template>

<style scoped>
li{
    list-style: none;
    border: 1px solid #000;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>