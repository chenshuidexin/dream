<template>
    <el-container>
      <el-header>
        <h1 class="logo">CRM-客户管理系统</h1>
        <div>
          <span class="name">欢迎：{{uname}}</span> 
          <el-button 
            type="primary" 
            size="mini"
            @click="logout"
          >安全退出</el-button>  
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse?'64px':'200px'">
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;"> -->
            <el-button class="btn_primary"  type="primary" @click="isCollapse=!isCollapse">{{isCollapse?'展开':'收起'}}</el-button>
            <!-- <el-radio-button :label="false">展开</el-radio-button> -->
            <!-- <el-radio-button :label="true">收起</el-radio-button> -->
          <!-- </el-radio-group> -->
          <cbl :pcollap="isCollapse"/>
        </el-aside>
        <el-container>
          <el-main>
           home
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
import cbl from './cbl';
export default {

  created() {
    let obj = sessionStorage.getItem('power');
    if(obj){
        this.uname = JSON.parse(obj).name;
    }
  },
  data(){
    return {
      uname:'',
      isCollapse:false
    }
  },
  methods:{
    logout(){
      sessionStorage.setItem('token','');
      this.$router.push('/login');
    }
  },
  components:{
      cbl
  }
}
</script>
<style>
.btn_primary{
  width:100%;
}
.name{
  font-size:15px;
  color:#fff;
  margin-right:10px;
}
  .el-container{
    height:90vh;
  }
  .logo{
    width:18%;
    line-height: 52px;
    letter-spacing: 3px;
  }
   .el-header, .el-footer {
    background-color: #3a3d42;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding:0;
  }

  .el-header{
    display: flex;
    justify-content: space-between;
  }
  .el-header button{
   height:38px;
   margin:10px 10px 0 0;
  }
  
  .el-aside {
    background: rgb(80, 84, 94);
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

.el-button{
  border-radius: 0;
}
  /* header */
  .bg-purple{
    background:none !important;
  }
  .logo{
    color:#fff;
  }
  .el-col-6 h1{
    float: right;
    /* margin-top:10px; */
  }
  .el-col-8{
    float: left;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
