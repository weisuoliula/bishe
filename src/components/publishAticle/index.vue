<template>
  <div class="articlelist">
    <p>文章标题</p>
    <el-input placeholder="请输入文章标题" v-model="input" clearable style="margin-bottom:10px"></el-input>
    <quill-editor v-model="content"></quill-editor>
    <button @click="publisharticle()">发布文章</button>
  </div>
</template>

<script>
import {pubisharticle} from "@api/recommend"
export default {
  data() {
    return {
      input: "",
      content:""
    };
  },
  methods:{
    async publisharticle(){
        let con=this.content.replace(/(<\w+>)+/,"").replace(/(<\/\w+>)+/,"");
        let articlelistdata=await pubisharticle(this.input,this.content)
        //console.log(this.input,con)
        //console.log(articlelistdata)
      }
  }
};
</script>

<style scoped>
.articlelist {
  padding: 10px 10px;
}
.articlelist p{
    margin-bottom: 10px;
}
.articlelist button{
    height: 35px;
    width: 100px;
    background: #ededed;
    border: none;
    outline: none;
    border: 1px solid #999;
    border-radius: 15px 15px;
    margin-top: 30px;
}

</style>