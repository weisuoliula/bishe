<template>
  <div class="login_box">
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
        <p @click="toggle()">账号已注册,请登录</p>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="tijiao"
            style="width:100%"
          >注册</el-button>
          <!--  <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* import axios from "axios"; */
import { register } from "@api/recommend";
export default {
  name: "Register",
  data() {
    /*   var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    }; */
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
      /* this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      }); */
      //console.log(this.ruleForm.pass,this.ruleForm.checkPass)
      let data = await register(this.ruleForm.pass, this.ruleForm.checkPass);
      if (data.code == 200) {
        this.$message.success("注册成功!");
        this.$router.push("/sign");
      }
    },
    /*  resetForm(formName) {
      this.$refs[formName].resetFields();
    } */
    toggle() {
      this.$router.push("/sign");
    }
  }
};
</script>

<style scoped>
.login_box {
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