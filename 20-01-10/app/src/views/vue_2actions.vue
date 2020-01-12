<template>
    <div>
        <h1>Vuex-2</h1>
        {{reverse}}
        <button @click="add">同步{{num}}</button>
        <button @click='add2'>异步{{num}}</button>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
    export default {
        data(){
            return {
                val:'呵呵哒'
            }
        },
        methods:{
            ...mapActions(['asyncIcrement']),
            ...mapMutations(['increment']),
            add(){
                //直接引用
                // this.$store.commit('increment');
                //函数调用
                this.increment();
            },
            add2(){
                //直接引用
                // this.$store.dispatch('asyncIcrement')
                // 函数调用
                this.asyncIcrement()
            }
        },
        computed:{
            ...mapState(['num']),
            reverse(){
                return this.val.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>

</style>