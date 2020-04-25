<template>
  <div class="bookslist">
    <el-table :data="tableData" style="width: 100%;">
      <!-- ----------------------------------------------------- -->
      <el-table-column label="书籍ID" style="font-size:16px">
        <template slot-scope="scope">
          <span style="margin-left: 10px;font-size:12px;">{{ scope.row._id }}</span>
        </template>
      </el-table-column>
      <!-- ---------------------------------------------------------- -->
      <!-- <el-table-column label="姓名">
        <template slot-scope="scope">
          <el-popover >
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>-->
      <el-table-column label="书籍作者" style="font-size:16px">
        <template slot-scope="scope">
          <span style="margin-left: 10px;font-size:14px;">{{ scope.row.booksAuth }}</span>
        </template>
      </el-table-column>
      <el-table-column label="书籍名称" style="font-size:16px">
        <template slot-scope="scope">
          <span style="margin-left: 10px;font-size:14px;">{{ scope.row.booksName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="书籍状态" style="font-size:16px">
        <template slot-scope="scope">
          <span style="margin-left: 10px;font-size:14px;">{{ scope.row.booksStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column label="书籍价格" style="font-size:16px">
        <template slot-scope="scope">
          <span style="margin-left: 10px;font-size:14px;">{{ scope.row.booksPrice }}</span>
        </template>
      </el-table-column>
      <!-- ------------------------------------------------------------------- -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <!-- ------------------------------------------------------------- -->
    </el-table>
    <!-- -----------------------------编辑弹出框-------------------------------- -->
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="书籍作者" :label-width="formLabelWidth">
          <el-input v-model="form.author" autocomplete="off" style=" width:300px"></el-input>
        </el-form-item>
        <el-form-item label="书籍名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style=" width:300px"></el-input>
        </el-form-item>
        <el-form-item label="书籍状态" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择书籍状态" style=" width:300px">
            <el-option label="连载中" value="连载中"></el-option>
            <el-option label="已完结" value="已完结"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="书籍价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off" style=" width:300px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { bookslist, bookdel, bookmodify } from "@api/recommend";
export default {
  name: "bookslist",
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        author: "",
        region: "",
        price: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        id:""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.bookslist();
  },
  methods: {
    async handleEdit(index, row) {
      //console.log(index, row);
      this.dialogFormVisible = true;
      this.form.author = row.booksAuth;
      this.form.name = row.booksName;
      this.form.price = row.booksPrice;
      this.form.region = row.booksStatus;
      this.id=row._id;
    },
    async modify() {
      this.dialogFormVisible = false;
      let modifydata = await bookmodify(
        this.form.author,
        this.form.name,
        this.form.region,
        this.form.price,
        this.id
      );
      //console.log(modifydata);
      this.bookslist();
    },
    async handleDelete(index, row) {
      //console.log(index, row);
      let deldata = await bookdel(row._id);
      this.bookslist();
      //console.log(deldata)
    },
    async bookslist() {
      let bookslistdata = await bookslist(
        this.form.author,
        this.form.name,
        this.form.region,
        this.form.price
      );
      this.tableData = bookslistdata.data.list;
      //console.log(this.tableData)
    }
  }
};
</script>

<style scoped>
</style>