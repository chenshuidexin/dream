<template>
<footer class="footer">
<span class="todo-count">
    <strong>{{num}}</strong>
    <span>条未选中</span>
</span>
<ul class="filters">
    <li
    v-for='val in footerList' :key="val.id"
    >
    <a
    :href="val.hash"
    :class="{selected:hash === val.hash}"
    @click="changehash(val.hash)"
    >{{val.txt}}</a>
    </li>
</ul>
</footer>
</template>

<script>
    export default {
        props:{
            num:{
                // 类型是数字  默认值是0
                type:Number,
                default:0
                
            }
        },
        data(){
            return {
                //返回的是hash值的内容
                hash:'#/all',
                footerList:[
                    {
                        id:0,
                        hash:'#/all',
                        txt:'全部'
                    },
                    {
                        id:1,
                        hash:'#/unchecked',
                        txt:'未选中'
                    },
                    {
                        id:2,
                        hash:'#/checked',
                        txt:'已选中'
                    },
                ]
            }
        },
        methods: {
            changehash(val){
                this.hash=val;
                this.$emit('chs',val)
            }
        },
    }
</script>

<style >

</style>