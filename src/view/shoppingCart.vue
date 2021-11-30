<template>
  <div class="shoppingCart">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>Home / Shopping Cart</p>
      </div>
      <div class="shoppingCartDetail">
        <el-button @click="AllDelete()">All Delete</el-button>
        <div class="titleDescribe">
          <p>Choice</p>
          <p>Product information</p>
          <p>Purchase quantity</p>
          <p>Price</p>
        </div>
        <div
          class="shopDetails"
          v-for="(item, index) in cartList"
          :key="index"
        >
          <!-- <div class="close">X</div> -->
          <div class="checkbox">
            <!-- <el-checkbox-group v-model="item.checked">
              <el-checkbox-button>
                <i class="el-icon-plus"></i
              ></el-checkbox-button>
            </el-checkbox-group> -->
<!--            <el-radio v-model="item.flag" label="1"></el-radio>-->
            <el-checkbox v-model="item.flag"></el-checkbox>
<!--            <el-checkbox-group v-model="checkList">-->
<!--              <el-checkbox label="复选框 A"></el-checkbox>-->
<!--            </el-checkbox-group>-->
<!--            <img src="../assets/img/choose.png" alt="" />-->
          </div>

          <img :src=item.ImgUrl  alt="" />
          <div class="shopRight">
            <div class="firstLine">
              <div style="
                display: flex;"
              >
                <img src="../assets/img/LineX.png" alt="" />
                <span>{{item.GoodsName}}</span>
              </div>
              <span @click="Delete(item, index)">X</span>
            </div>
            <div class="secondLine">
              <p>Direct full purchase</p>
              <p>
                <el-input-number
                  v-model="item.num"
                  @change="handleChange(item)"
                  :min="1"
                  :max="10"
                ></el-input-number>
              </p>
              <p>$ {{price}}{{item.num * item.SalePrice}}</p>
            </div>
            <div class="thirdLine">$ {{item.SalePrice}}</div>
          </div>
        </div>
        <div class="settlementTotal">
          <ul>
          </ul>
          <ul>
            <li>Total</li>
            <li>Freight</li>
            <li>Coupon</li>
            <li>Gift certificate</li>
          </ul>
          <ul>
            <li>{{num}}</li>
            <li>$ 0.00</li>
            <li @click="settlement = true">Choice</li>
            <li>Choice</li>
          </ul>
          <ul>
            <li>{{sum}}</li>
            <li>
              <el-button type="primary" @click="add()"
                >Settlement<i class="el-icon-arrow-down el-icon--right"></i
              ></el-button>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="settlement2" class="address">
        <div class="addressTitle">
          <p :class="oldd?'flag':''" @click="old()">My shipping address</p>
          <p :class="newww?'flag':''" @click="neww()">New shipping address</p>
        </div>
        <div v-if="oldd" class="selectChose">
          <p>Receiving address:</p>
          <el-select v-model="cityValue" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.id"
              :label="item.address"
              :value="item.id"
            >
            <!--<span style="float: left">{{ item.label }}</span>-->
            <!--<span style="float: right; color: #8492a6; font-size: 13px">{{-->
            <!--item.value-->
            <!--}}</span>-->
            </el-option>
          </el-select>
          <div class="Payment">
            <p class="PaymentTitle">Payment</p>
            <div class="PaymentMethod">
              <p>Payment method:</p>
              <p>$130.00</p>
            </div>
            <div class="chosePayment">
              <el-select v-model="Payment" placeholder="请选择">
                <el-option
                  v-for="(item, index) in options"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <!-- 支付按钮 -->
            <div class="confirmPayment">
              <el-button type="primary" @click="pay()">Pay with PayPal</el-button>
            </div>
          </div>
        </div>
        <div v-if="newww" class="selectChose">
        <el-form>
          <el-row>
            <el-col>
              <el-form-item label="Country:">
                <el-select v-model="formData.country">
                  <el-option
                    v-for="(item, index) in countryList"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :justify="center" :align="top">
              <el-form-item label="First Name:">
                <el-input  v-model="formData.first_name"/>
              </el-form-item>
              <el-form-item label="Last Name:">
                <el-input  v-model="formData.last_name"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Phone Number:">
                <el-input v-model="formData.phone_number"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Address:">
                <el-input type="textarea" v-model="formData.address"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item>
                <!-- <el-checkbox v-model="is_default">
                  <span style="color: black">
                    Use address and add to my shipping address
                  </span>
                </el-checkbox> -->

              </el-form-item>
            </el-col>
          </el-row>
          <div class="Payment">
            <p class="PaymentTitle">Payment</p>
            <div class="PaymentMethod">
              <p>Payment method:</p>
              <p>$130.00</p>
            </div>
            <div class="chosePayment">
              <el-select v-model="Payment" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="confirmPayment">
              <el-button type="primary" @click="pay()">Pay with PayPal</el-button>
            </div>
          </div>
        </el-form>
        </div>
      </div>
    </div>
    <el-dialog
      title="Full reduction"
      :visible.sync="settlement"
      :before-close="handleClose"
    >
      <div class="fatherCoupon">
        <div class="coupon">
          <p>Up to 80 available</p>
          <p>$20</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { cart, del, clear, cartup, num, shippingAddress, paymentPlatform} from '../api/api'
export default {
  name: "shopping-cart",
  data() {
    return {
      checkList: [],
      choseNum: 1,
      cityValue: "",
      Payment: "",
      settlement: false,
      formData: {
        country: '',
        first_name	: '',
        last_name: '',
        phone_number: '',
        address: '',
        is_default: ''
      },
      is_default: false,
      countryList: [
        {
          value: "中国",
          label: "中国",
        },
        {
          value: "美国",
          label: "美国",
        }
      ],
      checked: true, // 商品选中的状态
      // cities: [
      //   {
      //     value: "Default",
      //     label: "Jack-12345678910",
      //   },
      //   {
      //     value: "beautiful",
      //     label: "Jack-12345678911",
      //   },
      //   {
      //     value: "address",
      //     label: "Jack-12345678912",
      //   },
      //   {
      //     value: "",
      //     label: "Jack-12345678913",
      //   },
      // ],
      options: [
        {
          value: "选项1",
          label: "支付宝",
        },
        {
          value: "选项2",
          label: "paypal",
        },
        {
          value: "选项3",
          label: "微信",
        },
      ],
      shoppingDetail: [
        {
          checked: true,
        },
        {
          checked: false,
        },
      ],
      checked: true,
      cartList: [],
      newww: false,
      oldd: true,
      //url: 'http://shop.xlhack.cn/',
	  url: 'http://106.52.200.225/',
      settlement2: false,
      num:'',
      sumList: 0
    };
  },
  computed: {
    sum() {
      this.sumList = 0
      this.cartList.forEach(item => {
        if(item.flag === true) {
          this.sumList+= item.num * item.SalePrice
        }
      })
      return this.sumList
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      cart().then(res => {
        this.cartList = res.data.data.list
        this.cartList.forEach((item, index) => {
          this.$set(this.cartList[index], 'flag', false)
        })
      })
      num().then(res => {
        this.num = res.data.data.num
      })
      shippingAddress().then(res => {
        this.cities = res.data.data.list
      })
    },
    add() {
      if(this.settlement2 === true) {
        this.settlement2 = false
      }else {
        this.settlement2 = true
      }
    },
    neww() {
      this.newww = true
      this.oldd = false
    },
    old() {
      this.newww = false
      this.oldd = true
    },
    handleChange(value) {
      console.log(value);
      cartup({
        id: value.id,
        num: value.num
      }).then(res => {

      })
    },
    handleClose() {
      this.settlement = false;
    },
    Delete(row, index) {
      del({id: row.id}).then(res => {
        this.cartList.splice(index, 1)
      })
    },
    AllDelete() {
      clear().then(res => {
        this.cartList = []
        num().then(res => {
          this.num = res.data.data.num
        })
      })
    },
    // 支付商品
    pay() {
      // if(this.newww) {
      //   if(this.is_default === true) {
      //     this.formData.is_default = '1'
      //   }else {
      //     this.formData.is_default = '0'
      //   }
      //   addressAdd(this.formData)
      // }
      // this.$router.push('/success')
      paymentPlatform().then(res => {
        console.log(res)
      })
    }
  },
};
</script>
<style scoped lang='less'>
.shoppingCart {
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
    .shoppingCartDetail {
      background-color: white;
      padding: 50px 40px 0 40px;
      box-sizing: border-box;
      margin-bottom: 20px;
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
      }
      .shopDetails {
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
        position: relative;
        .close {
          position: absolute;
          right: 0;
          top: 0;
        }
        img {
          width: 200px;
          height: 200px;
        }
        .checkbox {
          line-height: 200px;
          margin: 0 30px;
          img {
            width: 30px;
            height: 30px;
          }
        }
        .shopRight {
          background: #f2f6ff;
          height: 200px;
          width: 100%;
          padding: 17px 14px;
          box-sizing: border-box;
          .firstLine {
            display: flex;
            justify-content: space-between;
            div{
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
            p:nth-child(2) {
              margin-left: 120px;
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
      }
    }
    .settlementTotal {
      display: flex;
      justify-content: space-between;
      padding: 30px;
      height: 200px;
      box-sizing: border-box;
      ul:nth-child(1) {
        line-height: 160px;
        img {
          width: 30px;
          height: 30px;
        }
      }
      ul:nth-child(2) {
        li {
          height: 40px;
        }
        font-size: 20px;
        font-family: Montserrat;
        font-weight: 400;
        color: #000000;
      }
      ul:nth-child(3) {
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
      ul:nth-child(4) {
        margin: 20px 20px 0 0;
        li:nth-child(1) {
          font-size: 40px;
          font-family: Montserrat;
          font-weight: 400;
          color: #3e7bff;
        }
        li:nth-child(2) {
          text-align: center;
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
          color: black;
          cursor: pointer;
        }
        /*P:nth-child(1) {*/
        /*  background: #e9f0ff;*/
        /*  border-radius: 40px;*/
        /*  font-size: 26px;*/
        /*  font-family: Montserrat;*/
        /*  font-weight: 400;*/
        /*  color: #296afe;*/
        /*}*/
        /*P:nth-child(2) {*/
        /*  font-size: 26px;*/
        /*  font-family: Montserrat;*/
        /*  font-weight: 400;*/
        /*  color: #000000;*/
        /*}*/
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
}
.flag{
  background: #e9f0ff;
  border-radius: 40px;
  font-size: 26px;
  font-family: Montserrat;
  font-weight: 400;
  color: #296afe;
}
.fatherCoupon {
  background: linear-gradient(90deg, #ffcd6c 0%, #ffb19f 100%);
  // box-sizing: border-box;
  height: 75px;
  line-height: 75px;
  margin: 0 90px;
  padding: 20px 20px;
  // box-sizing: border-box;
}
.coupon {
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  // padding: 10px;
  // width: 700px;
  p:nth-child(1) {
    margin-left: 20px;
    font-size: 30px;
    font-family: Montserrat;
    font-weight: 300;
    color: #ffffff;
  }
  p:nth-child(2) {
    margin-right: 20px;
    font-size: 36px;
    font-family: Montserrat;
    font-weight: 400;
  }
}
</style>
