<template>
  <div class="like-container">
    <div class="main">
      <div class="title">
        <span class="line"></span>
        <span class="text">Home / Whole / like</span>
      </div>
      <div class="content">
        <div
          class="goods-item"
          v-for="(item, index) in likeList"
          :key="index"
        >
          <img :src="item.ImgUrl" alt="">
          <p class="name">
            {{item.GoodsName}}
          </p>
          <div class="bottom">
            <div class="price">
              <span>$</span>
              <span>{{item.ActivityPrice}}</span>
            </div>
            <!-- 收藏状态 -->
            <i @click="cancel(index, item)" class="like"></i>
          </div>
        </div>
        <!-- 分页器 -->
        <el-pagination
          class="pagination"
          background
          :page-size="6"
          :page-count="100"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {collect, collectDel} from '@/api/api'

export default {
  name: 'like',
  data () {
    return {
      likeList: [], // 所有的喜欢商品数据
    }
  },
  methods: {
    // 加载喜欢列表
    loadLike() {
      collect({}).then(res => {
        if(res.data.code === 200) {
          this.likeList = res.data.data.items
        }
      })
    },
    // 当前页码变化
    handleCurrentChange(val) {
      console.log(`当前第${val}页`)
    },
    // 取消收藏
    cancel(index, item) {
      this.likeList.splice(index, 1)
      collectDel({
        id: item.id
      }).then(res => {
        // console.log(res)
        if(res.data.code === 200) {
          // 取消收藏成功, 可弹窗提示用户
          window.localStorage.setItem('like', false)
        }
      })
    }
  },
  created () {
    this.loadLike()
  }
}
</script>

<style scoped lang="less">
  .like-container {
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    .main {
      .title {
        display: flex;
        align-items: center;
        margin: 29px 0;
        .line {
          width: 10px;
          height: 40px;
          margin-right: 15px;
          background-color: #3E7BFF;
        }
        .text {
          font-size: 20px;
        }
      }
      .content {
        width: 1200px;
        height: 1250px;
        background-color: #fff;
        margin-bottom: 72px;
        flex-wrap: wrap;
        position: relative;
        box-sizing: border-box;
        padding: 10px 0;
        .pagination {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .goods-item {
          margin: 25px 20px;
          width: 360px;
          height: 500px;
          float: left;
          background-color: #EFEFEF;
          img {
            width: 100%;
            height: 360px;
          }
          .name {
            height: 36px;
            margin: 16px 31px 43px 13px;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            padding: 0 14px;
            .price {
              display: flex;
              align-items: center;
              span:first-child {
                font-size: 19px;
              }
              span:last-child {
                font-size: 24px;
                margin-left: 2px;
              }
            }
            .like {
              width: 33px;
              height: 28px;
              background: url('../assets/img/矩形 2084 拷贝 3.png') no-repeat;
              background-size: 100%;
            }
          }
        }
      }
    }
  }
</style>