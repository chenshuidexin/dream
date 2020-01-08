<template>
    <div>
        <h4>共有的路由</h4>
        <router-link tag="button" to="/public/p1">to p1</router-link>
        <router-link tag="button" to="/public/p2">to p2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>