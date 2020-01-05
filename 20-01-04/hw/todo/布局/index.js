    // editing completed  对应的class类名
    // editing ''
    // ''
    //completed
 
    new Vue({
        el:'.todoapp',
        data:{ 
            all:false,
            val:'',

            ary:[
            //     {
            //         id:0,
            //         txt:'哈哈',
            //         checked:true,
            //         onoff:false
            //     },
            //     {
            //         id:1,
            //         txt:'呵呵',
            //         checked:false,
            //         onoff:false
            //     }
            ],
            hash:window.location.hash || "#/all"
        },
        created(){
            window.onhashchange=()=>{
                this.hash=window.location.hash;
            }
            this.ary=getData();
        },
        methods:{
            //创建数据
            add(){
                if(!this.val)return;
                this.ary.unshift({
                    id:Date.now(),
                    txt:this.val,
                    checked:false,
                    onoff:false
                })
                this.val='';
            },
            //删除
            rm(id){
                this.ary=this.ary.filter(e=>e.id!==id)
            },
            //全选
            changeAll(ev){
                this.ary=this.ary.map(e=>{
                    e.checked=ev.target.checked;
                    return e;
                })
            },
            //双击修改
            repalce({id},num){
                this.onoff_FN(id,true)//打开编辑框
                Vue.nextTick(()=>{
                    this.$refs.edit[num].focus()//聚焦
                })
            },
            //失焦
            off({id,txt,onoff},ev){
                if(!onoff)return;
                //有内容并且内容不一样的时候，修改数据
                if(value&&txt!==value){
                    this.ary.forEach(e=>{
                        if(e.id === id){
                            e.txt=value;
                        }
                    })
                }
                this.onoff_FN(id,false)
            },
            //共有的是否是失焦
            onoff_FN(id,b){
                this.ary.forEach(e=>{
                    if(e.id === id){
                        e.onoff=b;
                    }
                })
            }
        },
        //过滤   管道符
        filters:{
            unchecked(val){
                return val.filter(e=>!e.checked).length
            }
        },
        //计算属性
        computed:{
            hashAry(){
                const {ary,hash}=this;
                return ary.filter(item=>{
                    switch(hash){
                        case '#/all':
                            return item;
                        case '#/unchecked':
                            return !item.checked;
                        case '#/checked':
                            return item.checked;
                        default:
                            return item
                    }
                })
            }
        },
        //监听数据
        watch:{
            ary:{
                handler(){
                    this.all=!!this.ary.length &&  this.ary.every(e=>e.checked);
                    if(this.ary.length){
                        localStorage.setItem('data',JSON.stringify(this.ary));
                    }
                },
                //深度监听
                deep:true,
                //从头就开始监听
                immediate:true
            }
        } 
    })

function getData(){
    let d=localStorage.getItem('data');
    return d?JSON.parse(d):[
        {
            id:0,
            txt:'哈哈',
            checked:false,
            onoff:false
        },
        {
            id:1,
            txt:'呵呵',
            checked:true,
            onoff:false
        }
    ]
}