<template>
    <div>
        <h2>登陆页面</h2>
        姓名:<input type="text" v-model="val">
        <br>
        <button @click="click">点击登陆</button>
    </div>
</template>

<script>
//引入api接口
import {get,post} from '../api/api'
    export default {
        data(){
            return {
                val:''
            }
        },
        methods: {
            click(){
                //提前进行测试
                // get().then(data=>{
                //     console.log(data)
                // });
                post(this.val).then(data=>{
                    if(data.code === 0){
                        this.$router.push('/');
                    }else{
                        alert('登不上去了您啊！')
                    }
                    this.val='';
                })
            }
        },
    }
</script>

<style scoped>

</style>