<template>
  <div class="coupon">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>Home / Whole / User Center / Coupon</p>
      </div>
      <div class="couponStyle">
        <div class="couponStyle-top">
          <span>Full reduction</span>
          <!-- 优惠券 -->
          <div class="voucher">
            <div class="left-wrap">
              <div class="value">
                <span class="symbol">$</span>
                <span class="price">100</span>
              </div>
              <p>Up to 150 available</p>
            </div>
            <div class="right-wrap">
              <div class="explain">
                <p>New user</p>
                <p>Exclusive benefits for newcomers</p>
                <span>Time:</span>
                <span>2021-04-04</span>
                ~
                <span>2021-05-04</span>
              </div>
            </div>
          </div>
          <div class="couponsList11" v-for="(item, index) in couponsList" :key="index">
            <div class="couponlist">
              <div>
                <span class="span1">
                  ${{item.amount}}
                </span>
                <span class="span2">
                  {{item.order_amount}}
                </span>
              </div>
              <div>
                <span>
                  {{item.msg}}
                </span>
                <span>
                  Time: {{item.start_time}}--{{item.end_time}}
                </span>
              </div>
              <div>
                <span>
                  To use >
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="couponStyle-top" style="margin-top: 78px">
          <span>Designated goods</span>
          <div class="voucher">
            <div class="left-wrap">
              <div class="value">
                <span class="symbol">$</span>
                <span class="price">100</span>
              </div>
              <p>Up to 150 available</p>
            </div>
            <div class="right-wrap">
              <div class="explain">
                <p>New user</p>
                <p>Exclusive benefits for newcomers</p>
                <span>Time:</span>
                <span>2021-04-04</span>
                ~
                <span>2021-05-04</span>
              </div>
            </div>
          </div>
          <div class="couponsList11" v-for="(item, index) in designatedList" :key="index">
            <div class="couponlist">
              <div>
                <span class="span1">
                  ${{item.amount}}
                </span>
                <span class="span2">
                  {{item.order_amount}}
                </span>
              </div>
              <div>
                <span>
                  {{item.msg}}
                </span>
                <span>
                  Time: {{item.start_time}}--{{item.end_time}}
                </span>
              </div>
              <div>
                <span>
                  To use >
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { coupons } from '../api/api'
export default {
  name: "coupon",
  data(){
    return {
      couponsList: [],
      designatedList: []
    }
  },
  created() {
    coupons({page: 1, limit: 20, status: 1}).then(res => {
      // if(res.code === 200) {
      console.log(res)
      const list = res.data.data
      console.log(list.items)


      list.items.forEach(item => {
        if(item.type === 1) {
          this.couponsList.push(item)
          // item.push(this.couponsList)
          console.log(this.couponsList )
        } else {
          this.designatedList.push(item)
        }
      })
      // this.couponsList = res.data.items
      // }
    })
  }
}
</script>

<style lang="less" scoped>
.couponsList11{
  background-image: url("../assets/img/组 75.png");
}
.coupon {
  background: #f4f4f4;
  overflow: hidden;
}
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
.couponStyle {
  background-color: white;
  padding: 50px 40px;
  box-sizing: border-box;
  /*display: flex;*/
  /*justify-content: space-between;*/
  margin-bottom: 20px;
.couponStyle-top {
  .voucher {
    width: 1112px;
    height: 200px;
    background: url('../assets/img/组 75.png');
    margin-top: 40px;
    margin-bottom: 15px;
    display: flex;
    .left-wrap {
      width: 284px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .value {
        .symbol {
          font-size: 27px;
          color: #fff;
        }
        .price {
          font-size: 73px;
          color: #fff;
        }
      }
      p {
        color: #fff;
      }
      
    }
    .right-wrap {
      flex: 1;
      display: flex;
      color: #fff;
      .explain {
        box-sizing: border-box;
        padding: 40px 0 40px 20px;
        p {
          margin-bottom: 10px;
        }
        p:nth-child(2) {
          margin-bottom: 51px;
        }
      }
      span {
        color: #fff;
      }
    }
  }
span {
  width: 137px;
  height: 16px;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 400;
  color: #292929;
}
}
}
}
.couponlist {
  width: 1112px;
  height: 200px;
  /*background: linear-gradient(90deg, #FFCD6B 0%, #FFB19F 100%);*/
  border-radius: 4px;
  margin-top:40px;
display: flex;
div:nth-of-type(1) {
  display: block;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
.span1 {
  /*display: block;*/
  font-size: 73px;
  font-family: Montserrat;
  font-weight: 400;
  color: #FEFEFE;

}
.span2{
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 300;
  color: #FFFFFF;
  position: absolute;
  top: 130px;
  left: 47px;
}
}
div:nth-of-type(2) {
  margin-top:40px;
  margin-left: 71px;
  position: relative;
  span:nth-of-type(2) {
    width: 470px;
    position: absolute;
    top: 106px;
    left: 47px;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 300;
    color: #FFFFFF;
  }
}
div:nth-of-type(3) {
  position: relative;
  span {
    position: absolute;
    top: 86px;
    right: -783px;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 400;
    /*text-decoration: underline;*/
    color: #FFFFFF !important;
  }
}
}
</style>