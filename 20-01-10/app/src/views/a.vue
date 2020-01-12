<template>
    <div class="about">
        <h1>AAAAA</h1>
        <button @click="add">{{num}}</button>
        <button @click="add2">和b共同生命体</button>
    </div>
</template>

<script>
//兄弟之间的第三方沟通者
import {bus} from '../bus/index';
    export default {
        created() {
            //订阅changb事件，事件把num改成传入的值
            bus.$on('changeb',(val)=>{
                this.num=val;
            })
        },
        data(){
            return {
                num:0
            }
        },
        methods: {
            add(){
                this.num++
            },
            add2(){
                //发布事件
                console.log('changea')
                bus.$emit('changea',this.num)
            }
        },
    }
</script>