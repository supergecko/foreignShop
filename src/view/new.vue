<template>
  <div class="news">
    <div class="main">
      <div class="title">
        <img alt="" src="../assets/img/juxing.png" />
        <p>Home / Whole / User Center / News</p>
      </div>
      <div class="newsDetail">
        <span>-------- news --------</span>
        <div v-for="(item, index) in newsList" :key="index" class="bottom">
          <p class="time">{{ item.created_at }}</p>
          <div class="content" v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {news} from '../api/api'
export default {
  name: "news",
  data() {
    return {
        newsList: []
    }
  },
  created() {
    news({
      page: 1,
      limit: 20,
    }).then(res => {
      this.newsList = res.data.data.items
    })
  }
}
</script>

<style lang="less" scoped>
.news {
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
.newsDetail{
  background-color: white;
  width: 1200px;
  box-sizing: border-box;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 125px;
  .time {
    font-size: 20px;
    margin-bottom: 39px;
  }
  span {
    margin: 36px 0 39px 0;
    font-size: 20px;
    font-family: Montserrat-Regular;
  }

.bottom {
  width: 1114px;
  height: 240px;
  background: #F2F6FF;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 24px 25px 19px 22px;
}
}
}
}
</style>