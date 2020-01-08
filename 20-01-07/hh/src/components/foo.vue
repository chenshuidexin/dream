<template>
    <div>
<h2>foo</h2>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$route.params);
        },
        beforeRouteUpdate(to,from,next){
            console.log('切换路由');
            next();//一定要有next，否则不会执行下一步
        },
        beforeRouteLeave (to, from, next) {
            // 如果用户点击确定按钮，则 confirm() 返回 true。如果点击取消按钮，则 confirm() 返回 false。
            let b=confirm('狠心抛弃我是么？');
            if(b){
                next()
            }else{
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>