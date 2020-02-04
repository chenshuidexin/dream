import instance from './lin';


//总的域:localhost：8888/user/login

//用户登录
export const loginAPI=({account,password})=>instance.post('http://localhost:8888/user/login',{account,password})

//修改信息
export const changeUserAPI=(obj)=>instance.post('http://localhost:8888/user/update',obj);

//登录验证
export const isLoginAPI=()=>instance.get('http://localhost:8888/user/login').then(d=>d.code===0);

//请求权限接口[左菜单]
export const powerAPI=()=>instance.get('http://localhost:8888/user/power');



//员工列表
export const userListAPI=(departmentId,search='')=>{
    let url="http://localhost:8888/user/list";
    if(departmentId !== undefined){
        url += `?departmentId'${departmentId}'$search='${search}`//'?departmentId'+=departmentId+'$search='+search
    }
    return instance.get(url);
}

//员工筛选列表
export const userSelectAPI=()=> instance.get('http://localhost:8888/department/list');

//员工删除列表
export const userDeleteAPI=(id)=>instance.get('http://localhost:8888/user/delete?userId='+id);


//list统一接口
export const allListAPI=(name)=>instance.get('http://localhost:8888/'+ name +'/list');

//员工具体信息
export const userInfoAPI=(id)=>instance.get('http://localhost:8888/user/info?userId='+id);