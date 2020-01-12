<template>
  <div class="about">
    <h1>About</h1>
    <router-link to="/about/vuex1"
    tag="button">vue-state-mutation</router-link>
    <br>
    <router-link to="/about/vuex2"
    tag="button">vue-mutation-action</router-link>
    <br>
    <router-link to="/about/vuex3"
    tag="button">vue-mutation-gettres</router-link>
    <br>
    <router-view/>
  </div>
</template>
