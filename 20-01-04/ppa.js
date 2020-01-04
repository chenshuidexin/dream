const ppa={
    template:'#ppa',
    created() {
        /*
        this.$parent拿到父级的实例可以通过实例获取父级的数据
        */
       console.log(this.$parent.num);
    },
    //相当于prosp:['xxx']  引用父组件的数据
    inject:['ary2']
}