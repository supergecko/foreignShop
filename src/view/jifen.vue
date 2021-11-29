<template>
  <div class="pointsExchange-container">
    <div class="main">
      <div class="nav-title">
        <span class="line"></span>
        <span class="text">Home / Whole / User Center / Points exchange</span>
      </div>
      <div class="main-content">
        <span>-------- Convertible goods --------</span>
        <div class="pic">
          <div class="pic-item" v-for="(goods, index) in goodsList" :key="index">
            <img :src="goods.ImgUrl
            " alt="">
            <div class="goods-name">{{goods.GoodsName}}</div>
            <div class="goods-info">
              <div class="left">
                <span>65</span>
                <span>Points</span>
              </div>
              <div class="right">Exchange</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { convertibleGoods } from '@/api/api'

export default {
  name: 'jifen',
  data () {
    return {
      goodsList: [], // 商品列表
      page: '1', // 页码
      limit: '20' // 每页条数 默认20
    }
  },
  created () {
    this.loadConvertibleGoods()
  },
  methods: {
    // 加载可兑换列表
    loadConvertibleGoods() {
      convertibleGoods({
        page: this.page,
        limit: this.limit
      }).then(res => {
        console.log(res)
        if(res.data.code === 200) {
          this.goodsList = res.data.data.items
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .pointsExchange-container {
    background-color: #f7f3f3;
    display: flex;
    justify-content: center;
    .main {
      width: 1200px;
      .nav-title {
        display: flex;
        align-items: center;
        margin: 30px 0;
        .line {
          width: 10px;
          height: 40px;
          background-color: #3E7BFF;
          margin-right: 15px;
        }
        .text {
          font-size: 20px;
        }
      }
      .main-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 36px 42px;
        box-sizing: border-box;
        margin-bottom: 77px;
        span {
          text-align: center;
          margin: 36px 0;
        }
        .pic {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .pic-item {
            width: 360px;
            height: 500px;
            background-color: #fff;
            img {
              width: 360px;
              height: 360px;
            }
            .goods-name {
              width: 316px;
              margin: 16px 13px;
            }
            .goods-info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 20px 14px 0;
              .left {
                span:first-child {
                  font-size: 34px;
                  color: #494848;
                }
                span:last-child {
                  color: #e0dcdc;
                  font-size: 20px;
                  margin-left: 4px;
                }
              }
              .right {
                width: 121px;
                height: 35px;
                border: 1px solid #5e90fd;
                color: #5e90fd;
                text-align: center;
                line-height: 35px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>