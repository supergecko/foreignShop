<template>
  <div class="integral">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>User Center / Points details</p>
      </div>
      <div class="integralContent">
        <div v-for="(item,index) in integralList" :key="index" class="integralBox">
          <p>Purchase:</p>
          <p>
            <img src="../assets/img/stock.png" alt="" />Diamond studio 1/6 Nami
            resin statue
          </p>
          <div class="integralTime">
            <p>2021-04-04</p>
            <p>
              Integral: <span><i class="el-icon-plus"></i> 65</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "integral",
  data() {
    return {
      integralList: [{}, {}],
    };
  },
};
</script>
<style scoped lang='less'>
.integral {
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
    .integralContent {
      background-color: white;
      padding: 50px 40px 50px 40px;
      box-sizing: border-box;
      margin-bottom: 20px;
      .integralBox{
          padding: 20px 0;
      }
      .integralTime {
        border-bottom: 1px solid #eee;
        margin-top: 65px;
        display: flex;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 20px;
          font-family: Montserrat;
          font-weight: 300;
          color: #272727;
          opacity: 0.3;
        }
        p:nth-child(2) {
          font-size: 20px;
          font-family: Montserrat;
          font-weight: 300;
          color: #272727;
        }
        span {
          margin-left: 70px;
          font-size: 60px;
          font-family: Montserrat;
          font-weight: 300;
          color: #272727;
        }
      }
      img {
        width: 80px;
        height: 30px;
      }
      p:nth-child(1) {
        font-size: 26px;
        font-family: Montserrat;
        font-weight: 300;
        color: #272727;
      }
      p:nth-child(2) {
        margin-top: 17px;
        font-size: 30px;
        font-family: Montserrat;
        font-weight: 400;
        color: #2f2f2f;
      }
    }
  }
}
</style>
