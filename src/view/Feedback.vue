<template>
 <div class="feedback-container">
    <!-- 主要 -->
    <div class="main">
      <!-- 大标题 -->
      <div class="main-title">
        <span class="bar"></span>
        <span class="text">Home / Feedback</span>
      </div>
      <!-- 内容 -->
      <div class="content">
        <!-- 提示用户文本 -->
        <p class="text">
          You can submit any question and we will reply
          you as soon as possible. Please check your email.
        </p>
        <!-- 用户输入表单 -->
        <el-form :rules="rules" ref="form" :model="userInfo">
          <!-- 邮箱 -->
          <el-form-item label="Mailbox:" prop="Mailbox">
            <el-input v-model="userInfo.Mailbox"></el-input>
          </el-form-item>
          <div class="name">
            <el-row>
              <el-col :span="11">
                <!-- 名 -->
                <el-form-item label="First Name:" prop="FirstName">
                  <el-input v-model="userInfo.FirstName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :offset="1">
                <!-- 姓 -->
                <el-form-item label="Last Name:" prop="LastName">
                  <el-input v-model="userInfo.LastName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <!-- 手机号码 -->
          <el-form-item label="Phone Number:" prop="PhoneNumber">
            <el-input v-model="userInfo.PhoneNumber"></el-input>
          </el-form-item>
          <!-- 问题描述 -->
          <el-form-item label="Problem:" prop="Problem">
            <el-input type="textarea" v-model="userInfo.Problem"></el-input>
          </el-form-item>
          <el-form-item>
            <!-- 提交 -->
            <el-button class="Submit-btn" type="primary" @click="onSubmit('form')">Submit questions</el-button>
          </el-form-item>
        </el-form>
        <!-- /用户输入表单 -->
      </div>
    </div>
 </div>
</template>

<script>
import { isEmail, isMobile } from '@/api/validate' // 导入自定义的验证规则
import { problem } from '@/api/api'

export default {
  name: "feedback",
  data() {
    return {
      userInfo: { // 用户信息
        Mailbox: '', // 邮箱
        FirstName: '', // 名
        LastName: '', // 姓
        PhoneNumber: '', // 手机号
        Problem: '' // 问题描述
      },
      rules: { // 表单验证规则
        Mailbox: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if(isEmail(value) === true) {
              callback()
            } else {
              callback(new Error('邮箱格式不对哦，请重新检查'))
            }
          },
            trigger: 'blur' 
          }
        ],
        FirstName: [
          { required: true, message: '请输入名字', trigger: 'blur' }
        ],
        LastName: [
          { required: true, message: '请输入姓', trigger: 'blur' }
        ],
        PhoneNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: (rule, value, callback) => {
              if(isMobile(value) === true) {
                callback()
              } else {
                callback('手机号格式不对哦，请重新检查')
              }
            },
            trigger: 'blur'
          }
        ],
        Problem: [
          { required: true, message: '问题描述不能为空哦', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 表单提交
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 验证成功，调用接口
          problem({
            email: this.userInfo.Mailbox,
            first_name: this.userInfo.FirstName,
            last_name: this.userInfo.LastName,
            phone_number: this.userInfo.PhoneNumber,
            problem: this.userInfo.Problem
          }).then(res => {
            // console.log(res)
            if(res.data.code === 200) {
              this.$message.success('信息反馈成功!')
            } else {
              this.$message.error('反馈失败，请稍后重试')
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
  .feedback-container {
    background-color: #F4F4F4;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .main {
      .main-title {
        display: flex;
        align-items: center;
        margin: 29px 0;
        .bar {
          width: 10px;
          height: 40px;
          margin-right: 15px;
          background-color: #3E7BFF;
        }
        .text {
          color: #010101;
          font-size: 20px;
        }
      }
      .content {
        width: 1200px;
        height: 900px;
        background: #FFFFFF;
        border-radius: 10px;
        margin-bottom: 79px;
        padding: 51px 320px 108px;
        box-sizing: border-box;
        .text {
          color: #000;
          font-size: 20px;
          margin-bottom: 58px;
        }
        .Submit-btn {
          width: 100%;
          margin-top: 58px;
        }
        /deep/ .el-textarea {
          height: 200px;
          .el-textarea__inner {
            height: 100%;
            resize: none;
          }
        }
      }
    }
  }
</style>