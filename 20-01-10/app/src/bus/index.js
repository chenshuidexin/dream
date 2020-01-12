import  Vue from 'vue';

/*
import和export的组合方式
多种方式:
export const bus=new Vue()

带{}   export const xx=10

    const xx=10;
    export {xx}

不带{}

   export default xx
 
*/


const bus=new Vue();
export {bus};