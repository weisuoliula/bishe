<template>
  <div id="app">
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    
  }
};
</script>
<style scoped>
#app {
  height: 100%;
}
.box {
  height: 100%;
  background: url("http://localhost:8080/img/bg.png") no-repeat;
  background-size: 100% 100%;
}
</style>
