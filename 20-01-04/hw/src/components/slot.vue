<template>
    <div>
        <h3>插槽者</h3>
        <ul>
            <li 
            v-for="(val,key) in data"
            >
            <slot 
            :id="val.id"
            :n="val.key"
            :age="val.age"
            name="list"
            ></slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['data']
    }
</script>

<style lang="scss" scoped>

</style>