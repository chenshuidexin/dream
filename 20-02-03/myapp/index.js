// const express =require('express');
// const app=express();
// // app.get('/',(req,res)=>res.send('早晨'))
// app.post('/',function(req,res){
//     res.send('post')
// })
// app.listen(2222,()=>console.log('监听到2222'))
const express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send("你好世界!");
});
let server=app.listen(1996,function(){
    console.log(server.address());
    let host=server.address().address;
    let port=server.address().port;
    //监听路由的数字
    console.log(`app listening at port :${port}`);
});
