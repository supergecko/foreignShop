<template>
  <div class="giftCertificates-container">
    <!-- 主体 -->
    <div class="main">
      <!-- 面包屑标题 -->
      <div class="main-title">
        <span class="bar"></span>
        <span class="text">Diamond studio 1/6 Nami resin statue / Confirm order</span>
      </div>
      <!-- 主体内容 -->
      <div class="main-content">
        <div class="main-content-title">
          <span>Product information</span>
          <span>Purchase quantity</span>
          <span>Price</span>
        </div>
        <!-- 券 -->
        <div class="mbs">
          <ul>
            <li class="mbs-pic">
              <img src="../assets/img/mainPicture.png" alt="">
            </li>
            <li class="mbs-text">
              <div class="mbs-name">Diamond studio 1/6 Nami resin statue </div>
              <div>Direct full purchase</div>
              <div class="price">$65.00</div>
            </li>
            <li class="mbs-Num">
              <el-input-number v-model="mbsNum" :min="1" label="描述文字"></el-input-number>
            </li>
            <li class="mbs-price">
              <span>$</span>
              <span>130.00</span>
            </li>
          </ul>
        </div>
        <!-- 说明 -->
        <div class="explain">
          After successful payment, a gift voucher redemption code will be automatically generated and you will tell your friend to go to the gift voucher page in the personal centre of the website to redeem the item. Friends will only need to fill in their delivery address and pay for shipping to receive the gift. Please contact customer service if you have any questions, thank you for your cooperation.
        </div>
        <!-- 购买 -->
        <div class="buy">
          <p class="title">Select Coupon</p>
          <div>
            <span>Coupon</span>
            <div class="right">
              <span>-$20.00</span>
              <span>choice</span>
            </div>
          </div>
          <p class="title">Payment</p>
          <div class="pay-title">
            <span>Payment method:</span>
            <span>$110.00</span>
          </div>
          <!-- 支付选项 -->
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="(item, index) in payList"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
          <!-- 支付按钮 -->
          <el-button class="pay-btn" type="primary">Pay with PayPal</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { paymentPlatform, giftPurchase } from '@/api/api'

export default {
  name: 'giftCertificates',
  data () {
    return {
      mbsNum: 1, // 购买券的数量，默认为1
      value: 'paypal', // 默认支付方式
      payList: [] // 支付方式列表
    }
  },
  methods: {
    // 加载支付选项
    loadPaymentPlatform() {
      paymentPlatform().then(res => {
        if(res.data.code === 200) {
          this.payList = res.data.data.payment
        }
      })
    },
    // 加载礼券信息
    loadGiftPurchase() {
      const goods = JSON.parse(this.$route.query.goods)
      console.log(goods)
      giftPurchase(
        {
          id: goods.id,
          num: goods.num
        }
      ).then(res => {
        // console.log(res)
      })
    }
  },
  created () {
    this.loadPaymentPlatform()
    this.loadGiftPurchase()
  }
}
</script>

<style scoped lang="less">
  .giftCertificates-container {
    display: flex;
    justify-content: center;
    background-color: #F4F4F4;
    .main {
      margin-top: 30px;
      .main-title {
        display: flex;
        align-items: center;
        .bar {
          width: 10px;
          height: 40px;
          margin-right: 15px;
          background-color: #3E7BFF;
        }
        .text {
          font: 20px 'Montserrat-Light';
        }
      }
      .main-content {
        width: 1200px;
        height: 1050px;
        box-sizing: border-box;
        padding: 40px 45px 119px;
        background-color: #fff;
        margin-bottom: 134px;
        .main-content-title {
          width: 100%;
          border-bottom: 1px solid #fcfbfb;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 16px;
            color: #f3eded;
          }
          span:nth-child(2) {
            margin-left: 192px;
          }
        }
        .mbs {
          margin-top: 14px;
          background-color: #F2F6FF;
          ul {
            display: flex;
            .mbs-text {
              width: 256px;
              .mbs-name {
                margin: 21px 0 25px;
              }
              div:nth-child(2) {
                color: #818181;
              }
              .price {
                margin-top: 50px;
                font-size: 26px;
                color: #2F2F2F;
              }
            }
            li:not(:nth-child(2)) {
              display: flex;
              align-items: center;
            }
            li:last-child {
              margin-left:210 px;
            }
            img {
              width: 201px;
              height: 201px;
              margin-right: 17px;
            }
            .mbs-Num {
              margin-left: 148px;
              margin-right: 150px;
            }
            .mbs-price {
              span:first-child {
                font-size: 20px;
              }
              span:last-child {
                font-size: 34px;
              }
            }
          }
        }
        .explain {
          width: 600px;
          height: 228px;
          background-color: #F4F4F4;
          box-sizing: border-box;
          padding: 30px;
          margin-top: 37px;
          color: #404040;
          margin: 0 auto;
          margin-top: 37px;
        }
        .buy {
          width: 600px;
          margin: 0 auto;
          text-align: center;
          margin-top: 55px;
          .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span:first-child {
              margin-right: 22px;
            }
            span:last-child {
              width: 80px;
              height: 24px;
              color: #3E7BFF;
              border: 1px solid #3E7BFF;
              cursor: pointer;
              border-radius: 3px;
            }
          }
          .title {
            font-size: 26px;
            margin-bottom: 36px;
          }
          div {
            display: flex;
            justify-content: space-between;
            font-size: 19px;
          }
          .pay-btn {
            margin-top: 14px;
            width: 100%;
          }
          .pay-title {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>