<template>
  <div class="sign_box">
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!--  <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>-->
        <p @click="handletoggle()">账号不存在,请注册</p>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="tijiao"
            style="width:100%"
          >登录</el-button>
          <!--  <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { register, login } from "@api/recommend";
export default {
  name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } /*  else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } */ else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
        //age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    async submitForm() {
      let data = await login(this.ruleForm.pass, this.ruleForm.checkPass);
      if (data.code == 200) {
        this.$message.success("登录成功!");
        this.$router.push("/index");
      }
    },
    handletoggle() {
      this.$router.push("/log");
    }
  }
};
</script>

<style scoped>
.sign_box {
  width: 100%;
  height: 100%;
  background: url("http://localhost:8080/img/bg.png") no-repeat;
}
.login {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.login p {
  font-size: 14px;
  color: #606266;
  margin-left: 60px;
  margin-bottom: 15px;
  cursor: pointer;
}
</style>