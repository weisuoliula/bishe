<template>
  <div class="header">
    <p>图书管理系统</p>
    <el-menu
      background-color="#999"
      text-color="#000"
      active-text-color="#fff"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style=" display: flex;justify-content:space-between;width:80%"
    >
      <el-menu-item index="1" style="margin-left:40px">首页</el-menu-item>

      <el-menu-item index="2">招生</el-menu-item>
      <!-- <el-menu-item index="3">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>-->

      <el-submenu index="3"  style="margin-left:500px;width:140px">
       
        <template slot="title">
           <p style="width:30px;height:60px;border-radius:50% 50%;display:inline-block;margin:0 15px"><img style="width:100%;height:30px;border-radius:50% 50%;display:inline-block;line-height:60px" src="http://localhost:8080/img/touxiang.jpg" alt=""></p>
          账号</template>
        <el-menu-item index="2-1">个人信息</el-menu-item>
        <el-menu-item index="2-2">修改密码</el-menu-item>
        <el-menu-item index="2-3">修改头像</el-menu-item>
        <el-menu-item index="2-4">退出登录</el-menu-item>
        <!-- <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>-->
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import Head from "@components/head";
export default {
  components: {
    Head
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background: #999;
  padding-left: 30px; 
  
}
.header p {
  font-size: 22px;
  font-weight: 550;
  display: inline-block;
}
</style>