<template>
  <div class="addbooks">
    <el-form :inline="false" :model="formInline" class="demo-form-inline">
      <el-form-item label="书籍作者" style="display:inline-block;margin-bottom:0">
        <el-input v-model="formInline.user" placeholder="请输入" style="width:217px;"></el-input>
      </el-form-item>
      <el-form-item label="书籍名称" style="display:inline-block;margin-bottom:0">
        <el-input v-model="formInline.name" placeholder="请输入" style="width:217px"></el-input>
      </el-form-item>
      <el-form-item label="书籍状态" style="margin-bottom:-5px">
        <br />
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="连载中" value="连载中"></el-option>
          <el-option label="已完结" value="已完结"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="书籍价格" style="display:inline-block">
        <el-input v-model="formInline.price" placeholder="请输入" style="width:217px"></el-input>
      </el-form-item>
      <el-form-item label="书籍图片" style="display:inline-block">
        <!-- <el-input v-model="formInline.pic" placeholder="请输入" style="width:217px" type="file" @change="hangload"></el-input> -->
        <input type="file" ref="bookpic" @change="hangload" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加书籍</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { addbooks, bookpic } from "@api/recommend";
export default {
  name: "addbooks",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        name: "",
        price: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      //console.log(this.formInline)
      let addbooksdata = await addbooks(
        this.formInline.user,
        this.formInline.name,
        this.formInline.region,
        this.formInline.price
      );
      /* console.log(addbooksdata) */
      if (addbooksdata.data.status == 1) {
        this.$router.push("/index/booklist");
      }
    },
    hangload() {
      console.log(this.$refs.bookpic.files[0]);
      let form = new FormData();
      form.append("booksLogo", this.$refs.bookpic.files[0]);
      axios.post("/api/upload/urlImage", form, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        processData: false,
        cache: false,
        contentType: false
      });
    }
  }
};
</script>

<style scoped>
.addbooks {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>