<template>
  <div class="articlelist">
    <p v-for="(item,index) in articlelist" :key="index">
      <router-link to="/article/Aticlelist/articlecontent" tag="a" @click="tiaozhuan(item._id)">文章标题:"{{item.booksTitle}}</router-link>
    </p>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { articlelist, articlecontent } from "@api/recommend";
export default {
  data() {
    return {
      title: "",
      articlelist: []
    };
  },
  created() {
    this.getarticlelist();
  },
  methods: {
    async getarticlelist() {
      let articlelistdata = await articlelist();
      //console.log(articlelistdata);
      this.articlelist = articlelistdata.data.list;
    },
   async tiaozhuan(id){
     let conlistdata=await articlecontent(id);
     console.log(conlistdata)
   }
  }
};
</script>

<style scoped>
.articlelist {
  width: 400px;
  height: 100px;
  margin: 70px auto;
}
.articlelist p {
  width: 200px;
  float: left;
}
</style>