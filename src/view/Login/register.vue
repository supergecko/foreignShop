<template>
  <div class="register">
    <div class="registerBoxFater">
      <div class="registerBox">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-form-item label="Email Address:" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password:" prop="password">
            <el-input
              type="password"
              show-password
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password:" prop="confirm_password">
            <el-input
              type="password"
              show-password
              v-model="ruleForm.confirm_password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div class="registerStyle">
            <el-form-item label="First Name:" prop="first_name">
              <el-input v-model.number="ruleForm.first_name"></el-input>
            </el-form-item>
            <el-form-item label="Phone Number:" prop="phone_number">
              <el-input v-model.number="ruleForm.phone_number"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >Create an account</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
 
<script>
import qs from "qs";
import { registerAccount } from "@/api/api.js";
export default {
  name: "register",
  data() {
    var isEmail = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("账号不能为空"));
      } else {
        if (
          /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
            value
          )
        ) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱!"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.confirm_password !== "") {
          this.$refs.ruleForm.validateField("confirm_password");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var isName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入创建名"));
      } else {
        callback();
      }
    };
    var isMobile = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("账号不能为空"));
      } else {
        if (/^1[0-9]{10}$/.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号!"));
        }
      }
    };
    return {
      ruleForm: {
        password: "",
        confirm_password: "",
        email: "",
        first_name: "",
        phone_number: "",
      },
      rules: {
        email: [{ validator: isEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        confirm_password: [{ validator: validatePass2, trigger: "blur" }],
        first_name: [{ validator: isName, trigger: "blur" }],
        phone_number: [{ validator: isMobile, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          registerAccount(qs.stringify(this.ruleForm)).then((res) => {
            console.log(res)
            if (res.data.code == 200) {
              this.$router.push({ path: "/Login"});
            } else {
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    },
  },
};
</script>
<style scoped lang='less'>
.register {
  display: table;
  width: 100%;
  height: 95vh;
}
.registerBoxFater {
  display: table-cell;
  vertical-align: middle;
}
.registerBox {
  width: 600px;
  margin: 0 auto;
}
.registerStyle {
  display: flex;
  justify-content: space-between;
  .el-form-item {
    width: 45%;
  }
}
/deep/.el-form-item__label {
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 400;
  color: #000000;
}
.el-form-item__content {
  width: 600px;
}
.el-button {
  width: 600px;
  height: 60px;
  font-size: 20px;
  margin-top: 30px;
}
// .half{
//     /deep/.el-form-item{
//         width: 300px;
//         :nth-child(1){
//             float: left;
//         }
//         :nth-child(2){
//             float: right;
//         }
//     }
//     /deep/.el-form-item__content{
//         width: 300px;
//     }
// }
</style>
