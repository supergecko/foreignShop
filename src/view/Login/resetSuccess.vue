<template>
  <div class="resetSuccess">
    <div class="father">
      <div class="son">
        <p>
          <img src="../../assets/img/success.png" alt="" />
        </p>
        <p @click="resetSuccess"><el-button type="primary">Reset successfully, log in</el-button></p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "reset-success",
  data() {
    return {
      input: "",
    };
  },
  methods:{
      resetSuccess(){
          this.$router.push('/Login')
      }
  }
};
</script>
<style scoped lang='less'>
.resetSuccess {
  display: table;
  width: 100%;
  height: 100vh;
}
.father {
  display: table-cell;
  vertical-align: middle;
}
.son {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 240px;
    height: 240px;
  }
  .el-button {
    width: 600px;
    height: 60px;
    margin-top: 50px;
  }
}
</style>
