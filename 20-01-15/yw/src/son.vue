<template>
    <div class="son">
        <slot></slot>
        <!-- 显示的内容和位置 -->
        <slot name="down"></slot>
        <h3>这里是子组件</h3>
        <slot name="up"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{}
        }
    }
</script>
 
<style scoped>
.son{
    background-color: aqua;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
}
</style>