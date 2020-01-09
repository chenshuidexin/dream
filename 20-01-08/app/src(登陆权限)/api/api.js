import  {instance} from './index';
import QS from 'qs';
//export  创建一个文件或是模块
export const get=()=>instance.get('http://localhost/test');
export const post=(uname)=>instance.post('http://localhost/login',QS.stringify({uname})); 
export const islogin=()=>instance.post('http://localhost/islogin').then(d=>{
    if(d.code === 0){
        return true;
    }
    return false
})
//数据接口和请求数据的在这儿！！！！