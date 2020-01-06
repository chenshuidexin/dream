<template>
	<div id="ppa">
		<router-link to="/" tag="button">首页</router-link>
		<router-link to="/about" tag="button">相关页</router-link>
		<router-link to="/public" tag="button">公众页</router-link>
		<!-- 显示出router -->
        <router-view></router-view>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>

</style>