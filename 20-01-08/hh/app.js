const express = require('express');
const bodyParser = require('body-parser');
const app=express();
//序列化对象
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let ary=['kkw','kb'];
// 可以利用jsonwebtoken生成tokenid,在加密的过程中把用户信息加密进去，通过解码的形式可以获取到用户信息，tokenid可以设置过期时间，一般用于检验用户身份状态（处于登录还是过期中）   在头部请求！！！！！！
const jwt=require('jsonwebtoken');

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    // 第二个参数表示允许跨域的域名，* 代表所有域名  
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET, POST') // 允许的 http 请求的方法
    // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
    //*****Authorization*****--->  类似token
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next();
    }
});

//测试得玩

app.get('/test',(req,res)=>{
    res.json({
        code:0,
        msg:'test'
    })
});
const secret='zf';
//selector:本身是一个对象，用于储存用户信息的   secret:加密字段，可以自己随便定义   expiresIn：过期时间单位是秒。
app.post('/login',(req,res)=>{
    const {uname}=req.body;
    if(ary.includes(uname)){
        res.json({
            code:0,
            msg:'登陆成功啦!',
            //成功创建token值
            token:jwt.sign({user:uname},secret,{expiresIn:20})
        })
    }else{
        res.json({
            code:1,
            msg:'失败了^~^'
        })
    }
});


app.post('/islogin',(req,res)=>{
//Authorization值是可变的，一般Authorization||token,使用哪个是根据Access-Control-Allow-Headers的配置而来
const token=req.headers.authorization;
if(token){
    jwt.verify(token,secret,(error,data)=>{
        if(error){
            res.json({
                code:2,
                msg:'失效了重新来吧'
            })
            return;
        }
        res.json({
            code:0,
            msg:'权限在呢，所以呢!',
            //每次请求验证成功的，都会发一个新的指令给前端，保证令牌持久化操作
            token:jwt.sign({user:data.user},secret,{
                expiresIn:20
            })
        })
    })
}else{
    res.json({
        code:1,
        msg:'没有登陆'
    })
}
})
app.listen(80);