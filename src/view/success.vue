<template>
  <div class="success">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>Home / Whole / User Center / News</p>

      </div>
      <div class="successDetail">
        <img src="@/assets/img/success.png" />
        <span>Checkout success</span>
        <button @click="back()">Back to home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.success {
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
.successDetail {
  width: 1200px;
  height: 682px;
  background: #FFFFFF;
  padding: 50px 40px 0 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 164px;
    height: 164px;
  }
  span{
    width: 181px;
    height: 15px;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 400;
    color: #000000;
    margin-top: 36px;
  }
  button {
    margin-top: 83px;
    width: 600px;
    height: 50px;
    background: #3E7BFF;
    border-radius: 4px;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 400;
    color: #FFFFFF;
  }
}
}
}

</style>