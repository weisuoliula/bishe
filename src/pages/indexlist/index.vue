<template>
  <div class="indexpage">
    <Head />
    <el-col :span="12" class="navbox">
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#ededed" router>
        <el-menu-item style="border-bottom:1px solid rgb(184, 181, 181)" index="/index/shouye">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item style="border-bottom:1px solid rgb(184, 181, 181)" index="/index/booklist">
          <span slot="title">书籍列表</span>
        </el-menu-item>
        <el-menu-item style="border-bottom:1px solid rgb(184, 181, 181)" index="/index/addbooks">
          <span slot="title">添加书籍</span>
        </el-menu-item>
        <el-menu-item
          style="border-bottom:1px solid rgb(184, 181, 181)"
          index="/index/publishAticle"
        >
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item style="border-bottom:1px solid rgb(184, 181, 181)" index="/index/Aticlelist">
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item style="border-bottom:1px solid rgb(184, 181, 181)">
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="conbox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Head from "@components/head";
export default {
  components: {
    Head
  },
  methods: {}
};
</script>

<style scoped>
.indexpage {
  height: 100%;
  width: 100%;
}

.navbox {
  width: 240px;
  text-align: center;
  height: 100%;
  position: absolute;
  left: 0;
  padding-top: 60px;
  top: 0;
}
.el-menu-vertical-demo {
  height: 100%;
}
.conbox {
  width: 100%;
  padding-left: 240px;
}
</style>