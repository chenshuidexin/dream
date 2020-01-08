<template>
    <div>
        <p>登录页面</p>
        姓名:<input v-model="uname" type="text">
        <br>
        密码:<input v-model="pass" type="password">
        <button 
        @click="login"
        >登陆</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                uname:'',
                pass:''
            }
        },
        methods:{
            login(){
                const {uname,pass}=this;
                setTimeout(()=>{
                    if(uname === 'kkw'&&pass==='666'){
                        this.$router.push({
                            name:'home',
                            params:{
                                un:'kkw'
                            }
                        })
                    }
                },2000)
            }
        }
    }
</script>

<style scoped>

</style>