<template>
  <div class="fullPayment">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>Diamond studio 1/6 Nami resin statue</p>
      </div>
      <div class="shopDetails">
        <div class="upper">
          <div class="imgClass">
            <!-- 大图预览效果 -->
            <div class="firstImg">
              <pic-zoom :url="imgData[imgIndex]" :scale="2.0" />
            </div>
            <!-- /大图预览效果 -->
            <!-- <img class="firstImg" :src="dataList.ImgUrl" alt="" /> -->
            <div class="zhanshi">
              <!-- 图片容器 -->
              <div class="pic-wrap">
                <ul class="ulMove" ref="ulMove">
                  <!-- 图片列表循环 -->
                  <li class="liList" @click="imgIndex = index" v-for="(item, index) in imgData" :key="index">
                    <img :src="item" alt="">
                  </li>
                  <!-- /图片列表循环 -->
                </ul>
                <div class="arr">
                  <span @click="leftBtn($refs.ulMove)" class="left">&lt;</span>
                  <span @click="rightBtn($refs.ulMove)" class="right">&gt;</span>
                </div>
              </div>
              <!-- <img @click="picShow(index)" v-for="(item, index) in imgData" :key="index" :src=item alt="" /> -->
            </div>
          </div>
          <div class="rightText">
            <!-- <img
              v-if="dataList.GoodsType == 0"
              class="labelImg"
              alt=""
            />
            <img
              v-if="dataList.GoodsType == 1"
              class="labelImg"
              src="../assets/img/labelTwo.png"
              alt=""
            />
            <img
              v-if="dataList.GoodsType == 2"
              class="labelImg"
              src="../assets/img/labelThree.png"
              alt=""
            /> -->
            <p class="miaoshu" v-html="dataList.GoodsName"></p>
            <div class="block">
              <div class="scoreStyle">
                <el-rate
                  v-model="score"
                  :colors="colors"
                  show-score
                  score-template="{value}"
                >
                </el-rate>
                <!-- <span class="scoreValue">4.5</span> -->
              </div>
              <div class="heart"
                @click="likeIt"
              >
                <img v-if="isLike" src="../assets/img/矩形 2084 拷贝 3.png" alt="">
                <img v-else src="../assets/img/xin.png" alt="" />
              </div>
            </div>
            <p class="Line"></p>
            <p style="font-size: 34px;
              font-family: Montserrat;
              font-weight: 300;
              margin-top: 17px;
              text-decoration: line-through;
              color: #898989;"
            >
              $ <s>{{ dataList.SalePrice }}</s>
            </p>

            <!--<u>$ {{ dataList.SalePrice }}</u>-->
            <p class="money" style="font-size: 20px;!important;">
                <span class="wrap">$</span>
               {{ dataList.ActivityPrice }}
            <span style="margin-left: 25px;
              font-size: 20px;
              font-family: Montserrat;
              font-weight: 300;
              color: #000000;
              opacity: 0.5;">
              <!-- 获取积分 -->
              Get points: {{ dataList.points }}
            </span>
            </p>

            <div class="describe">
              <!-- 商品描述 -->
              <p>{{ dataList.Remark }}</p>
            </div>
            <div class="number">
              <p>
                <span> Specifications: </span>
                <!-- 规格 -->
                <span 
                  @click="activeIndex = index"
                  :class="activeIndex === index ? 'active' : '' "
                  class="biaoqian"
                  v-for="(item, index) in biaoqian"
                  :key="index"
                >
                  {{ item.specifications}}
                </span>
              </p>
              <p>
                <span> Quantity: </span>
                <el-input-number
                  v-model="countNum"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </p>
            </div>
            <div class="purchase">
              <el-button
                type="primary"
                icon="el-icon-money"
                class="button1"
                @click="fullPayment"
                >Full Payment</el-button
              >
              <el-button
                class="button2"
                plain
                icon="el-icon-shopping-bag-2"
                @click="shopping"
              ></el-button>
            </div>
            <div class="dibu">
              <p class="sold">Sold: {{ dataList.SalesVolume }}</p><br>
              <!-- <p class="collection">Collection: 8888</p> -->
            </div>
            <div class="voucher">
              <i></i>
              <el-link
                type="primary"
                @click="buyGiftCertificates"
              >
                Purchase gift certificate
              </el-link>
            </div>
          </div>
        </div>
        <!-- <p class="centerLine">Description 一一</p> -->
        <!-- 商品描述 -->
        <div class="describeFooter" v-html="dataList.Description">
          <!-- <ul>
            <li>Montserrat-Regular</li>
            <li>Size: {{dataList.Size}}</li>
            <li>Weight: Size: {{dataList.Weight}}</li>
            <li>Scale: {{dataList.Scale}}</li>
            <li>Materials: {{dataList.Materials}}</li>
          </ul>
          <ul>
            <li>Limited quantity: {{dataList.LimitedQuantity}}</li>
            <li>Release Date: {{dataList.ReleaseDate}}</li>
          </ul> -->
        </div>
        <!-- <p class="writtenWords">*Shipping includes within the U.S.</p> -->
      </div>
      <div class="message">
        <div class="messageBox">
          <p>Commodity evaluation -----</p>
          <p>More ></p>
        </div>
        <div v-for="(item, index) in commentsList" class="card"
          :key="index"
        >
          <img src="@/assets/img/touxiang.png" alt="" />
          <div class="cardRight">
            <div class="cardRightHeader">
              <h5>{{item.first_name}}</h5>
              <div class="cardRight-score">
                <el-rate
                  v-model="item.score"
                  text-color="#2F2F2F"
                  show-score
                  score-template="{value}"
                ></el-rate>
              </div>
            </div>
            <p class="cardRightComments">{{item.content}}</p>
            <div class="cardRightComImgs">
              <img src="@/assets/img/shopping.png" alt="" />
              <img src="@/assets/img/shopping.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="recommendTitle">
          <p>Similar product recommendation ---</p>
          <p>More ></p>
        </div>
        <!-- 商品推荐 -->
        <div class="commodityArea">
          <div 
            class="commodityArea-item" 
            v-for="(item, index) in recommend" 
            :key="index"
            @click="commodityArea(item)"
          >
            <div class="styleFloat">
              <img class="img_div" :src="item.ImgUrl" alt="" />
              <p class="p1">{{ item.GoodsName }}</p>
              <p class="p2">
                $ {{ item.ActivityPrice }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PicZoom from 'vue-piczoom' // vue-piczoom大图预览库
import { slowAnimation } from '@/utils/animation' // 导入自定义的动画工具函数
import "../assets/fullPayment/fullPayment.less"

import { shangpindetails, join, collectJoin, collectDel} from "@/api/api";
export default {
  name: "full-payment",
  components: {
    PicZoom
  },
  data() {
    return {
      countNum: 1, // 购买的商品数量
      score: 5, // 评分星星数量
      scoreStar: 3.7,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 不同评分的星星颜色
      imgData: [],
      dataList: {}, // 商品数据列表
      commentsList: [], // 评论列表
      recommend: [], // 推荐的商品列表
      imgIndex: 0, // 展示图片的索引
      clickIndex: 0, // 小轮播图点击的次数
      isLike: false || JSON.parse(window.localStorage.getItem('like')), // 喜欢商品的状态
      biaoqian: [], // 商品规格列表
      activeIndex: 0 // 商品规格选中的索引
    }
  },
  mounted() {
    this.shangpindetails()
  },
  methods: {
    // 推荐商品详情
    commodityArea(item) {
      shangpindetails({
        id: item.id
      }).then(res => {
        if(res.data.code === 200) {
          this.dataList = res.data.data.goods
        }
      })
    },
    // 商品收藏状态
    likeIt() {
	  if (localStorage.getItem("token")){
	  	this.isLike = !this.isLike
	  	// 收藏
	  	if(this.isLike) {
	  	  // 状态的持久化
	  	  window.localStorage.setItem('like', this.isLike)
	  	  collectJoin({
	  	    id: this.$route.query.id
	  	  }).then(res => {
	  	    if(res.data.code === 200) {
	  	      this.$message.success('收藏成功!')
	  	    }
	  	  })
	  	} else {
	  	  // 取消该商品的收藏
	  	  window.localStorage.setItem('like', this.isLike)
	  	  collectDel({
	  	    id: this.$route.query.id
	  	  }).then(res => {
	  	    if(res.data.code === 200) {
	  	      window.localStorage.setItem('like', false)
	  	      this.$message('取消收藏')
	  	    }
	  	  })
	  	}
	  } else {
	  	this.$message('请先登录');
	  }
    },
    // 小轮播图左移动
    leftBtn(ulMove) {
      if(this.clickIndex === 0) {
        ulMove.style.left = '0px'
        this.clickIndex = this.imgData.length - 1
      }
      this.clickIndex--
      var target = -this.clickIndex * 90
      slowAnimation(ulMove, target, 30)
    },
    // 小轮播图右移动
    rightBtn(ulMove) {
      if(this.clickIndex === this.imgData.length - 1) {
        this.clickIndex = 0
        ulMove.style.left = -this.clickIndex * 90
      }
      this.clickIndex++
      var target = -this.clickIndex * 90
      slowAnimation(ulMove, target, 30)
    },
    // 商品详情
    shangpindetails() {
      shangpindetails({ id: this.$route.query.id }).then((res) => {
        if (res.status == 200) {
          this.dataList = res.data.data.goods;
          this.imgData = this.dataList.SlideUrl;
          this.recommend = res.data.data.recommend
          this.biaoqian = res.data.data.goods.GoodsSpecifications

          // this.dataList.ImgUrl =
          //   "http://106.52.173.123:86/" + this.dataList.ImgUrl;
        }
      });
      // 评论列表
      // comments({
      //   id: this.$route.query.id, // 商品id
      //   page: 1,
      //   limit: 20
      // }).then(res => {
      //   console.log('评论列表', res)
      //   this.commentsList = res.data.data
      // })
    },
    // 全额付款
    fullPayment() {
      const goodsInfo = {
        goodsImg: this.dataList.ImgUrl, // 商品图片
        goodsPrice: this.dataList.ActivityPrice, // 商品价格
        goodsId: this.$route.query.id, // 商品id
        goodsNum: this.countNum, // 购买商品数量
        goodSpecifications: this.biaoqian[this. activeIndex] // 选择商品规格
      }
	  if (localStorage.getItem("token")){
		  // 去往下单页面
		  this.$router.push({ path: "/paymentPage", query: { status: true, goodsInfo: JSON.stringify(goodsInfo)} })
	  } else {
		  this.$message('请先登录');
	  }
      
    },
    // 去购物车
    shopping() {
      join({
        id: this.$route.query.id,
        num: this.countNum
      }).then(res => {
        console.log(res)
        if(res.data.code === 200) {
          this.$router.push({ path: "/shoppingCart", query: { status: true } });
        } else {
          this.$router.push('/Shopping')
        }
      })
    },
    // 购买礼券
    buyGiftCertificates() {
      const goods = {
        id: this.$route.query.id,
        num: this.countNum
      }
      this.$router.push({path: '/giftCertificates', query: {goods: JSON.stringify(goods)}})
    }
  }
}
</script>
<style lang="less" scoped >
  .voucher {
    margin-top: 45px;
    display: flex;
    i {
      width: 26px;
      height: 24px;
      background: url('../assets/img/礼物@2x.png') no-repeat;
      background-size: 100%;
      margin-right: 8px;
    }
  }
.active {
  border-color: #0330f8 !important;
  color: #0330f8 !important;
}
.number p:first-child span:not(:first-child) {
  cursor: pointer
}
.number p:first-child span {
  margin-right: 20px;
}
/deep/ .rightText {
  margin-left: 0 !important;
  .scoreStyle {
    span {
      i {
        font-size: 25px;
      }
    }
  }
}
.magnifier-box {
  display: flex;
  justify-content: center;
}
.money {
  font-size: 34px !important;
  .wrap {
    font-size: 25px;
  }
}
.describeFooter {
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 !important;
  color: red !important;
}
.miaoshu {
  overflow: hidden !important;
}

.biaoqian {
  width: 80px;
  height: 33px;
  border: 1px solid #898989;
  padding: 5px 15px 5px 15px;
  border-radius: 4px;
}
.biaoqian:active {
  border: 1px solid #3E7BFF;
  color: #3E7BFF;
}
.zhanshi {
  width: 530px;
  height: 80px;
  .pic-wrap {
    width: 530px;
    height: 80px;
    overflow: hidden;
    position: relative;
    &:hover .arr {
      display: block;
    }
    ul {
      width: 1000px;
      position: absolute;
      li {
        width: 80px;
        height: 80px;
        float: left;
        margin-right: 10px;
      }
    }
    .arr {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      display: none;
      span {
        float: left;
        width: 40px;
        height: 40px;
        color: #c2baba;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 30px;
        text-align: center;
        line-height: 40px;
      }
      .right {
        position: absolute;
        right: -490px;
      }
    }
  }
}
</style>
