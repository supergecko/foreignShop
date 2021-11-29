<template>
  <div class="dingdan">
    <div class="main">
      <div class="title">
        <img alt="" src="../assets/img/juxing.png" />
        <p>Home / Whole / Contact us</p>
      </div>
      <div class="dingdanDetail">
        <el-tabs :tab-position="tabPosition">
          <!-- 所有产品 -->
          <el-tab-pane label="All Order">
            <div class="goods-item">
              <img src="../assets/img/mainPicture.png" alt="">
              <div class="content-wrap">
                <div class="left-content">
                  <p class="goods-name">这就是一个商品的名称，叫做测试商品</p>
                  <p class="price">
                    <span>$</span>
                    <span>65</span>
                  </p>
                </div>
                <div class="right-content">
                  <el-link type="primary">商品购买了</el-link>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Reaieved Order">配置管理</el-tab-pane>
          <el-tab-pane label="Receiving goods">角色管理</el-tab-pane>
          <el-tab-pane label="Evaluate">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {  order } from '@/api/api' 

export default {
  name: "dingdan",
  data() {
    return {
      tabPosition: 'left',
    }
  },
  methods: {
    loadOrder() {
      order({}).then(res => {
        console.log('order', res)
      })
    }
  },
  created () {
    this.loadOrder()
  }
}
</script>

<style lang="less" scoped>
.dingdan {
  background: #f4f4f4;
  overflow: hidden;

.main {
  width: 1200px;
  margin: 0 auto;

.title {
  display: flex;
  padding: 30px 0;

p {
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 300;
  color: #000000;
  line-height: 40px;
  margin-left: 15px;
}

}
.dingdanDetail {
  background-color: white;
  padding: 50px 40px 0 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-bottom: 20px;
  .goods-item {
    width: 830px;
    height: 200px;
    background-color: #f2f6ff;
    border-radius: 10px;
    display: flex;
    img {
      width: 200px;
      height: 200px;
    }
    .content-wrap {
      flex: 1;
      box-sizing: border-box;
      padding: 19px;
      display: flex;
      justify-content: space-between;
      .left-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .goods-name {
          width: 320px;
        }
      }
      .right-content {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
}

}
}
.commodityArea .img_div {
  width: 360px;
  height: 360px;
}
</style>