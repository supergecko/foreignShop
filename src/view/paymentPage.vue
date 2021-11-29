<template>
  <div class="paymentPage">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>Diamond studio 1/6 Nami resin statue / Confirm order</p>
      </div>
      <div class="purchaseDetails">
        <div class="titleDescribe">
          <p>Product information</p>
          <p>Purchase quantity</p>
          <p>Price</p>
        </div>
        <div class="shopIntroduce">
          <img :src="goodsInfo.goodsImg" alt="" />
          <div class="shopRight">
            <div class="firstLine">
              <img src="../assets/img/LineX.png" alt="" /><span
                >Diamond studio 1/6 Nami resin statue</span
              >
            </div>
            <div class="secondLine">
              <p>Direct full purchase</p>
              <p>
                <el-input-number
                  v-model="choseNum"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </p>
              <p>${{ goodsInfo.goodsPrice }}</p>
            </div>
            <div class="thirdLine">${{ goodsInfo.goodsPrice }}</div>
          </div>
        </div>
        <div class="priceResults">
          <ul>
            <li>Total</li>
            <li>Freight</li>
            <li>Coupon</li>
          </ul>
          <ul>
            <li>$ 130.00</li>
            <li>$ 0.00</li>
            <li>选择</li>
          </ul>
          <ul>
            <li>$ 总计</li>
          </ul>
        </div>
      </div>
      <div class="address">
        <div class="addressTitle">
          <p>My shipping address</p>
          <p>New shipping address</p>
        </div>
        <div class="selectChose">
          <p>Receiving address:</p>
          <el-select v-model="cityValue" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
          <div class="Payment">
            <p class="PaymentTitle">Payment</p>
            <div class="PaymentMethod">
              <p>Payment method:</p>
              <p>$130.00</p>
            </div>
            <div class="chosePayment">
              <el-select v-model="Payment" placeholder="请选择支付方式">
                <el-option
                  v-for="(item, index) in paymentList"
                  :key="index"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </div>
            <div class="confirmPayment">
              <el-button type="primary" @click="pay()">Pay with PayPal</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import {paymentPlatform} from '@/api/api'

export default {
  name: "payment-page",
  data() {
    return {
      choseNum: 1 || goodsInfo.goodsNum , // 购买商品的数量,默认为1
      cityValue: "", // 收货的地址
      cities: [], // 收货的地址列表
      Payment: "", // 支付的方式(微信，支付宝……)
      goodsInfo: {}, // 购买商品的信息
      paymentList: [] // 支付方式列表
    };
  },
  methods: {
    // 用户支付
    pay() {
      console.log('用户在支付');
    },
    // 加载支付商品的方式
    loadPaymentPlatform() {
      paymentPlatform().then(res => {
        if(res.data.code === 200) {
          this.paymentList = res.data.data.payment
        }
      })
    },
    // 加载购买的商品信息
    loadGoods() {
      const goods = JSON.parse(this.$route.query.goodsInfo)
      this.goodsInfo = goods
    }
  },
  created () {
    this.loadGoods()
    this.loadPaymentPlatform()
  }
}
</script>
<style scoped lang='less'>
.paymentPage {
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
  }
  .purchaseDetails {
    background-color: white;
    padding: 50px 40px;
    box-sizing: border-box;
    .titleDescribe {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      p {
        font-size: 16px;
        font-family: Montserrat;
        font-weight: 300;
        color: #000000;
        opacity: 0.2;
      }
      P:nth-child(2) {
        margin-left: 120px;
      }
    }
    .shopIntroduce {
      margin-top: 14px;
      display: flex;
      justify-content: space-between;
      img {
        width: 200px;
        height: 200px;
      }
      .shopRight {
        background: #f2f6ff;
        height: 200px;
        width: 100%;
        padding: 17px 14px;
        box-sizing: border-box;
        .firstLine {
          display: flex;
          img {
            width: 77px;
            height: 26px;
          }
          span {
            font-size: 20px;
            font-family: Montserrat;
            font-weight: 400;
            color: #2f2f2f;
          }
        }
      }
      .secondLine {
        display: flex;
        justify-content: space-between;
        height: 80px;
        line-height: 80px;
        p:nth-child(1) {
          color: #818181;
        }
        p:nth-child(3) {
          font-size: 34px;
          font-family: Montserrat;
          font-weight: 400;
          color: #2f2f2f;
        }
      }
      .thirdLine {
        font-size: 26px;
        font-family: Montserrat;
        font-weight: 300;
        color: #2f2f2f;
        margin-top: 30px;
      }
    }
    .priceResults {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #eee;
      margin-top: 50px;
      ul {
        margin-top: 30px;
      }
      ul:nth-child(1) {
        font-size: 20px;
        font-family: Montserrat;
        font-weight: 400;
        color: #000000;
        li {
          height: 40px;
          line-height: 40px;
        }
      }
      ul:nth-child(2) {
        padding-right: 24px;
        border-right: 1px solid #eee;
        text-align: right;
        margin-left: 200px;
        li {
          height: 40px;
          line-height: 40px;
        }
        li:nth-child(1) {
          font-size: 26px;
          font-family: Montserrat;
          font-weight: 300;
          color: #2f2f2f;
        }
        li:nth-child(2) {
          font-size: 26px;
          font-family: Montserrat;
          font-weight: 300;
          color: #2f2f2f;
        }
        li:nth-child(3) {
          color: #3e7bff;
          border: 1px solid #3e7bff;
          border-radius: 4px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          margin: 8px 0;
          cursor: pointer;
        }
        li:nth-child(4) {
          height: 24px;
          color: #3e7bff;
          border: 1px solid #3e7bff;
          border-radius: 4px;
          text-align: center;
          line-height: 24px;
          margin: 8px 0;
        }
      }
      ul:nth-child(3) {
        font-size: 40px;
        font-family: Montserrat;
        font-weight: 400;
        color: #404040;
        margin-right: 100px;
        line-height: 160px;
      }
    }
  }
  .address {
    margin: 30px 0 80px 0;
    background-color: white;
    padding: 15px 136px;
    box-sizing: border-box;
    .addressTitle {
      display: flex;
      justify-content: space-between;
      p {
        width: 360px;
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      P:nth-child(1) {
        background: #e9f0ff;
        border-radius: 40px;
        font-size: 26px;
        font-family: Montserrat;
        font-weight: 400;
        color: #296afe;
      }
      P:nth-child(2) {
        font-size: 26px;
        font-family: Montserrat;
        font-weight: 400;
        color: #000000;
      }
    }
    .selectChose {
      width: 600px;
      margin: 0 auto;
      p {
        margin-top: 100px;
        font-size: 20px;

        font-family: Montserrat;
        font-weight: 400;
        color: #000000;
      }
      .el-select {
        width: 100%;
        margin-top: 10px;
      }
      .Payment {
        .PaymentTitle {
          font-size: 26px;
          font-family: Montserrat;
          font-weight: 400;
          color: #000000;
          text-align: center;
        }
        .PaymentMethod {
          display: flex;
          justify-content: space-between;
          p:nth-child(1) {
            font-size: 20px;
            font-family: Montserrat;
            font-weight: 400;
            color: #000000;
          }
          p:nth-child(2) {
            font-size: 20px;
            font-family: Montserrat;
            font-weight: 300;
            color: #3e7bff;
          }
        }
        .chosePayment {
          margin: 10px 0;
        }
        .confirmPayment {
          margin-bottom: 100px;
          .el-button--primary {
            width: 100%;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
