<template>
  <div class="ContactUs-container">
    <!-- 主体 -->
    <div class="main">
      <!-- 大标题 -->
      <div class="title">
        <span class="bar"></span>
        <span class="text">Home / Contact US </span>
      </div>
      <!-- 内容 -->
      <div class="content">
        <!-- 左侧容器 -->
        <div class="content-left">
          <!-- 用户输入框 -->
          <el-input v-model="userInput" class="user-input" type="textarea" placeholder="Waiting for input"></el-input>
          <!-- 提交 -->
          <el-button class="input-btn">Leaving a message.</el-button>
          <el-link class="text" type="primary">Add picture</el-link>
        </div>
        <!-- 右侧容器 -->
        <div class="content-right">
          <!-- 标题 -->
          <el-divider class="text-line">Message Board</el-divider>
          <!-- 留言内容 -->
          <div class="item-content">
            <div class="user-info">
              <div class="name">jack</div>
              <div class="time">06.06.2021</div>
            </div>
            <div class="my-text">
              <div class="my-content">
                These products are great!!These products are great!!These products are great!!
                 <el-link type="primary">Comment</el-link>
                 <!-- 展示图片 -->
                 <div class="pic">
                   <img src="" alt="" title="图片">
                   <img src="" alt="" title="图片">
                   <img src="" alt="" title="图片">
                   <img src="" alt="" title="图片">
                   <img src="" alt="" title="图片">
                   <img src="" alt="" title="图片">
                 </div>
                 <!-- 回复内容 -->
                 <div class="reply">
                   <p>蔡徐坤: 各位明星制作人大家好，我喜欢唱 跳 rap 篮球 music!</p>
                   <p>乔碧萝殿下：颜值主播，不能露脸!</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactUs } from '@/api/api'

export default {
  name: 'ContactUs',
  data () {
    return {
      userInput: '', // 用户输入的内容
      contactUsList: {} // 
    }
  },
  methods: {
    // 加载联系我们
    loadContactUs() {
      contactUs().then(res => {
        console.log(res)
        this.contactUsList = res.data.data
      })
    }
  },
  mounted () {
    this.loadContactUs()
  }
}
</script>

<style scoped lang="less">
  .ContactUs-container {
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    .main {
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        align-items: center;
        margin: 29px 0 29px;
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
        margin-bottom: 79px;
        padding: 48px 45px;
        box-sizing: border-box;
        display: flex;
        background-color: #fff;
        .content-left {
          width: 308px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 2px solid #f1f1f1;
          /deep/ .user-input {
            width: 233px;
            height: 445px;
            .el-textarea__inner {
              height: 100%;
              resize: none;
            }
          }
          .input-btn {
            background-color: #FFDF2D;
            color: #2E2E2E;
            font-size: 21px;
            margin: 48px 0;
            &:hover {
              background-color: #fff;
              color: #409EFF;
            }
          }
          .text {
            font-size: 19px;
            align-self: flex-start;
            margin-left: 45px;
          }
        }
        .content-right {
          flex: 1;
          .text-line {
            width: 374px;
            margin: 0 auto;
            margin-bottom: 92px;
            .el-divider__text {
              font-size: 25px;
              width: 177px;
            }
          }
          .item-content {
            display: flex;
            .user-info {
              margin-left: 25px;
              margin-right: 91px;
              .name {
                font-size: 25px;
                margin-bottom: 3px;
              }
              .time {
                color: #7D7D7D;
                font-size: 13px;
              }
            }
            .my-text {
              .my-content {
                font-size: 24px;
                .pic {
                  margin-top: 16px;
                  img {
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                    background-color: pink;
                  }
                }
                .reply {
                  width: 100%;
                  font-size: 13px;
                  color: rgb(202, 198, 198);
                  background-color: #F4F4F4;
                  margin-top: 20px;
                  padding: 10px 0 17px 19px;
                  box-sizing: border-box;
                  p {
                    margin-bottom: 3px;
                  }
                }
              }
            }
          }
          .el-divider__text {
            text-align: center;
          }
        }
      }
    }
  }
</style>