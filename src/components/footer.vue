<template>
  <div class="footer">
    <div class="minFooter">
      <ul>
        <li>Navigate</li>
        <li @click="$router.push('/FAQ')">FAQ</li>
        <li>Shipping & after sale</li>
        <li @click="$router.push('/ContactUs')">Contact Us</li>
        <li>Sitemap</li>
      </ul>
      <ul>
        <li>Categories</li>
        <li>One Piece</li>
        <li>Dragonball</li>
        <li>Naruto</li>
        <li>Saint Seiya</li>
        <li>Demon Slayer</li>
      </ul>
      <ul>
        <li style="height: 26px"></li>
        <li>Final Fantasy</li>
        <li>My Hero</li>
        <li>Bleach</li>
        <li>Pokemon</li>
        <li>Others anime</li>
      </ul>
      <ul>
        <li>Subscribe to our newsletter</li>
        <li>Get the latest updates on new products and upcoming sales</li>
        <li class="foooterInput">
          <el-form :model="user" :rules="rules" ref="ruleForm">
            <el-form-item prop="Email">
              <el-input
                v-model="user.Email"
                placeholder="订阅的邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="Subscribe-btn"
                @click="Subscription('ruleForm')"
                plain
                >Subscribe</el-button
              >
            </el-form-item>
          </el-form>
        </li>
        <!-- <li class="footerButton"></li> -->
      </ul>
    </div>
  </div>
</template>
 
<script>
import { isEmail } from "@/api/validate"; // 导入自定义的验证规则
import { subscribe } from "@/api/api"

export default {
  name: "app-footer",
  data() {
    return {
      user: {
        Email: "", // 订阅用户的邮箱
      },
      rules: {
        // 邮箱验证
        Email: [
          { required: true, message: "请输入您的邮箱", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (!isEmail(value)) {
                callback('邮箱格式错误哦，请检查')
              } else {
                callback()
              }
            },
            trigger: "blur",
          }
        ]
      }
    }
  },
  methods: {
    // 邮箱订阅
    Subscription(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 验证通过，调用接口
          subscribe({email: this.user.Email}).then(res => {
            // console.log(res)
            if(res.data.code === 200) {
              // 订阅成功，弹窗提示用户
              this.$message.success('订阅成功')
            } else {
              this.$message.errror('订阅失败，请稍后再试')
            }
          })
        } else {
          // 验证失败，用户检查错误   
          return false;
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
// .footer {
//     background-color: rgba(0, 0, 0, 0.6);
// }
/deep/ .Subscribe-btn {
  width: 148px;
  height: 40px;
  background-color: #ffdf2d;
  color: #6e6e6b;
}
.link {
  cursor: pointer;
}
.minFooter ul:not(:last-child) li:not(:first-child) {
  cursor: pointer;
}
</style>
