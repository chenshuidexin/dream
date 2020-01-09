import axios from 'axios';
//axios请求数据的时候会请求两次，第一次是postion，第二次才是自己请求的方式。
//局部拦截
const instance = axios.create();
axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded';
//请求局部拦截
instance.interceptors.request.use(config => {
    console.log('请求器在拦截');
    //在发球请求的时候，把token带到服务器的头部信息中    不在body里
    const token=localStorage.getItem('token');//在存储中获取token值
    if(token){
        //常见的形式而已， authorization==>授权，批准书
        config.headers['Authorization']=token;
    }
    return config;//固定写法，要不然会报错
},error=>{
    return Promise.reject(error);//固定写法，要不然会报错
})
//响应局部拦截
instance.interceptors.response.use(config=>{
    console.log('响应器在拦截');
    //每次请求验证的时候重新更新token值  有的话重新获取token值
    if(config.data.token){
        //设置token值，从config.data中获取到
        localStorage.setItem('token',config.data.token)
    }
    return config.data;
},error=>{
    return Promise.reject(error);
});
//导出对象或是其他
export {instance}