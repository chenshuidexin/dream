<template>
    <div>
        <h1>VUEX--1</h1>
        {{reverse}}
        {{$store.getters.toDou}}
        <button @click='add'>{{num}}</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data(){
            return {
                val:'你说呢?'
            }
        },
        methods: {
            add(){
                this.$store.commit('increment')
            }
        },
        computed: {
            ...mapState(['num']),
            reverse(){
                return this.val.split('').reverse().join('')
            }
        },
    }
</script>

<style  scoped>

</style>