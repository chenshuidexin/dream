<template>
    <div class="about">
        <h1>BBBBB</h1>
        <button @click="add">{{num2}}</button>
        <button @click="add2">和a生命共同体</button>
    </div>
</template>

<script>
import {bus} from '../bus/index';
    export default {
        data(){
            return {
                num2:0
            }
        },
        created() {
            //订阅changea事件
            bus.$on('changea',(val)=>{
                this.num2=val;
            })
        },
        methods: {
            add(){
                this.num2++
            },
            add2(){
                bus.$emit('changeb',this.num2)
            }
        },
    }
</script>
