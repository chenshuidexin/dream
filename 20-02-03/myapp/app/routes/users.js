var express = require('express');
var router = express.Router();
const fs=require('fs')//文件操作



/*
/user

/user/list   get请求


*/
/* GET users listing. */
router.post('/add',(req, res)=>{
const data=JSON.parse(fs.readFileSync('./json/user.json'));
const {user,pass}=req.body;
const obj=data.find(item=>item.name === user);
//没有就说明被占用
if(!obj){
  data.push({
    "name":user,
    pass
  });
  fs.writeFileSync('./json/user.json',JSON.stringify(data));
  console.log("11111")
  res.json({
    code:0,
    msg:'成功添加!'
  })
}else{
  res.json({
    code:1,
    msg:'已被占用'
  })
}
console.log(req.body)
});


router.get('/list',(req,res,next)=>{
  const data =fs.readFileSync('./json/user.json');
  res.send(data.toString());
})
module.exports = router;
