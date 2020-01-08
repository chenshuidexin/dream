<template>
    <div>
        <span>登录页面</span>
        <br>
        姓名:<input v-model="uname" type="text">
        <br>
        密码:<input v-model="pass" type="password">
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    export default {
        created() {
            this.path=this.$route,query.topath;
        },
        data(){
            return {
                uname:'',
                pass:'',
                path:''
            }
        },
        methods:{
            login(){
                let ary=[
                    {
                        un:'kkw',
                        pass:'123'
                    },
                    {
                        un:'kb',
                        pass:'666'
                    }
                ];
                const {uname,pass}=this
                setTimeout(()=>{
                    if(ary.some(item=>item.un === uname && item.pass === pass)){
                        localStorage.setItem('login',uname);
                        this.$route.push({
                            path:this.path
                        })
                    }else{
                        localStorage.clear()
                    }
                },2000)
            }
        }
    }
</script>

<style scoped>

</style>