<template>
  <div class="table">
    <div class="choiceLogin">
      <div class="loginDiv">
        <el-button icon="el-icon-notebook-1" type="primary"
          >Sign up with Facebook</el-button
        >
        <!-- <p class="Perhaps">Perhaps</p> -->
        <div class="spilt">
          <span class="left"></span>
          <span class="Perhaps">Perhaps</span>
          <span class="right"></span>
        </div>
        <el-button plain @click="signEmail">Sign up with email</el-button>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "choice-login",
  data() {
    return {};
  },
  methods: {
    signEmail() {
      this.$router.push("/Login");
    },
  },
};
</script>
<style scoped lang='less'>
.table {
  display: table;
  width: 100%;
  height: 100vh;
}
.choiceLogin {
  display: table-cell;
  vertical-align: middle;
}
.loginDiv {
  width: 340px;
  height: 180px;
  margin: auto;
  .el-button {
    width: 300px;
    height: 60px;
    margin-left: 20px;
  }
  .Perhaps {
    text-align: center;
    font-family: Bahnschrift;
    font-weight: 300;
    color: #000000;
  }
}
.spilt{
    line-height: 60px;
    height: 60px;
    overflow: hidden;
    >span{
        display: inline-block;
    }
    .left,.right{
        width: 140px;
        height: 1px;
        border-top: 1px solid #000000;
        vertical-align: middle;
        opacity: 0.1;
    }
}
</style>

