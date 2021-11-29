<template>
  <div class="termsConditions-container">
    <!-- 主体 -->
    <div class="main">
      <!-- 标题 -->
      <div class="title">
        <span class="bar"></span>
        <span class="text">Home / Term&Condition</span>
      </div>
      <!-- 条款内容 -->
      <div class="content">
        <span class="content-title">{{termsConditions.name}}</span>
        <!-- 条款每项 -->
        <div class="title-item">
          <p>1  Title</p>
          <p class="title-item-content" v-html="termsConditions.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { termsConditions } from '@/api/api'

export default {
  name: 'termsConditions',
  data () {
    return {
      termsConditions: {} // 条款与条款数据
    }
  },
  methods: {
    // 加载条款与条件
    loadTermsConditions() {
      termsConditions().then(res => {
        console.log(res)
        if(res.data.code === 200) {
          this.termsConditions = res.data.data
        }
      })
    }
  },
  created () {
    this.loadTermsConditions()
  }
}
</script>

<style scoped lang="less">
  .termsConditions-container {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    .main {
      .title {
        display: flex;
        align-items: center;
        margin: 28px 0;
        .bar {
          width: 10px;
          height: 40px;
          margin-right: 16px;
          background-color: #3e78ff;
        }
        .text {
          font-size: 20px;
          color: #010101;
        }
      }
      .content {
        width: 1200px;
        height: 900px;
        background-color: #fff;
        padding: 0 158px 0 111px;
        margin-bottom: 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .content-title {
          font-size: 26px;
          color: #010101;
          margin-top: 67px;
          margin-bottom: 97px;
          text-align: center;
        }
        .title-item {
          :first-child p {
            color: #000000;
          }
          .title-item-content {
            margin-top: 26px;
            margin-bottom: 74px;
            color: #808080;
          }
        }
      }
    }
  }
</style>