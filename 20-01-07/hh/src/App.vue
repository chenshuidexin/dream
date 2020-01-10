<template>
  <div id="app">
    <div id="nav">
      app页面<br>
      <!-- 挂载数据(替代app)，总页面使用，但不建议使用  在每个页面上分别加上link即可-->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <router-link to="/b1">BB1</router-link>|
      <router-link to="/b2">BB2</router-link>|
      <router-link to="/foo/1">foo1</router-link>|
      <router-link to="/foo/2">foo2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
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
