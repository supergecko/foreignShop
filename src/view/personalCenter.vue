<template>
  <div class="personalCenter">
    <div class="main">
      <div class="title">
        <img src="../assets/img/juxing.png" alt="" />
        <p>Home / Whole / User Center</p>
      </div>

      <div class="personalStyle">
        <div class="personalLeft">
          <div class="firstPersonal">
            <!-- 用户头像 -->
            <img src="../assets/img/penter.png" alt="" />
            <div class="myEmail">
              <img @click="news()" src="../assets/img/youxiang.png" alt="" />
              <span @click="loginOut()">Log out</span>
			  <span @click="forget()">Change Psd</span>
              <el-button type="primary" @click="editPerDetail"
                >Editing information<i class="el-icon-edit el-icon--right"></i
              ></el-button>
            </div>
          </div>
          <div>
            <div class="twoPersonal">
              <ul>
                <li>{{ personalList.first_name }}</li>
                <li>{{ personalList.email }}</li>
              </ul>
              <ul>
                <li>User name</li>
                <li>Mailbox</li>
              </ul>
            </div>
          </div>
          <div class="middleBorder"></div>
          <div>
            <div class="threePersonal">
              <p>
                <img src="../assets/img/coordinate.png" alt="" />
                <span>Receiving address</span>
              </p>
              <p @click="addAdress">
                <img src="../assets/img/add.png" alt="" />
              </p>
            </div>
          </div>
          <div
            class="contentBackground"
            v-for="(item, index) in addressData"
            :key="index"
          >
            <div class="fourPersonal">
              <el-checkbox v-model="item.is_default"
                >Default address</el-checkbox
              >
              <p @click="editAdress(item)">Edit</p>
            </div>
            <div class="describe">
              <p>{{ item.first_name }}-{{ item.phone_number }}</p>
              <p>
                {{ item.address }}
              </p>
            </div>
          </div>
        </div>
        <div class="personalRight">
          <div class="borderBox">
            <p class="title">balance:</p>
            <div class="introduceRight">
              <p><img :src="dataList[1].img" alt="" /><span>{{personalList.balance}}</span></p>
              <p><el-button type="primary">Recharge</el-button></p>
            </div>
          </div>
          <div class="borderBox">
            <p class="title">points:</p>
            <div class="introduceRight">
              <p><img :src="dataList[0].img" alt="" /><span>{{personalList.integral}}</span></p>
              <p><el-button type="primary" @click="$router.push('/jifen')">Exchange</el-button></p>
            </div>
          </div>
          <div @click="$router.push('/dingdan')" style="width: 667px;
            height: 88px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFDF2D;
            cursor: pointer;
          ">
            <span style="width: 89px;
              height: 20px;
              font-size: 20px;
              font-family: Montserrat;
              font-weight: 400;
              color: #010101;" @click="godingdan()">My order</span>
          </div>
          <div class="cardBag">
            <ul>
              <li><i class="el-icon-s-ticket"></i> Coupon</li>
              <li><i class="el-icon-s-ticket"></i> Gift certificate</li>
              <li><i class="el-icon-star-off"></i> I like it</li>
              <li><i class="el-icon-bell"></i> Message notification</li>
            </ul>
            <ul style="text-align: right">
              <li @click="Coupon()">3 Sheets ></li>
              <li @click="integralFun">2 Sheets ></li>
              <li @click="$router.push('/like')">></li>
              <li @click="like()">></li>
              <li>
                <el-radio-group v-model="radio">
                  <el-radio :label="1">Close</el-radio>
                  <el-radio :label="2">open</el-radio>
                </el-radio-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 用户编辑弹窗 -->
    <el-dialog
      title="Change address"
      :visible="pertentVisible"
      width="40%"
      :before-close="pertentClose"
    >
      <div class="dialogStyle">
        <!-- 用户修改信息表单 -->
        <el-form :model="personalData" :rules="rules" label-position="top">

          <el-form-item label="avatar" prop="avatar">
            <el-upload
              v-model="personalData.avatar"
              class="avatar-uploader"
              :action="action"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="Name:" prop="name">
            <el-input v-model="personalData.name" autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="Email:">
            <el-input v-model="personalData.email" autocomplete="off" disabled></el-input>
          </el-form-item>

          <el-form-item label="phone:" prop="phone">
            <el-input v-model="personalData.phone_number" autocomplete="off"></el-input>
          </el-form-item>

        </el-form>
        <!-- /用户修改信息表单 -->
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="surePer">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- /用户编辑弹窗 -->
    <el-dialog
      title="Change address"
      :visible="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <div class="dialogStyle">
        <el-form :model="formData" label-position="top">
          <!-- 选择国家 -->
          <el-form-item label="Country:">
            <el-select
              v-model="formData.country"
              placeholder="Please select a country"
            >
              <!-- 循环生成国家列表 -->
              <el-option
                v-for="(item, index) in Country"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Last Name:">
            <el-input
              v-model="formData.last_name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="First Name:">
            <el-input
              v-model="formData.first_name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Phone Number:">
            <el-input
              v-model="formData.phone_number"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Address:">
            <el-input type="textarea" v-model="formData.address"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="addressSure">确 定</el-button>
          <el-button type="primary" @click="shanchu">delete</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
 
<script>
import { info, addressAdd, addressUp ,up, addressDel, country} from "@/api/api";
import { isMobile } from "@/api/validate" // 导入自定义的验证规则

export default {
  name: "personal-center",
  data() {
    return {
      personalData: {},
      addressData: [], // 用户的收获地址列表
      personalList: {}, // 用户个人信息
      formData:{ 
        avatar: false,
        name: '',
        email: '',
        phone_number: '111'
      }, 
      rules: { // 用户修改信息的验证规则
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if(!isMobile(value)) {
              callback(new Error('手机号格式错误哦'))
            } else {
              callback()
            }
          }
            , trigger: 'blur' 
          }
        ],
        avatar: [ // 用户头像
          { required: true },
          { validator: (rule, value, callback) => {
            console.log('头像', value)
          }, 
            message: '没有选择头像哦', 
            trigger: 'change' 
          }
        ]
      },
      pertentVisible: false,
      dataList: [
        {
          img: require("../assets/img/shuishuai.png"),
        },
        {
          img: require("../assets/img/goldCoin.png"),
        },
      ],
      radio: 1,
      dialogVisible: false,
      id: "",
      action: '', // 上传服务器的地址
      imageUrl: '', // 图片的临时地址
      Country: [] // 国家列表数据
    }
  },
  created () {
    this.loadCountry()
  },
  mounted() {
    this.personalInfo()
  },
  methods: {
	forget() {
		this.$router.push('/reset');
	},
    // 加载国家列表
    loadCountry() {
      country().then(res => {
        console.log('国家列表', res)
        if(res.data.code === 200) {
          this.Country = res.data.data.list
        }
      })
    },
    shanchu() {
      addressDel({id: this.formData.id}).then(res => {
        console.log(this.addressData)
        this.addressData.forEach((item, index) => {
          if(this.addressData[index].id  === this.formData.id) {
            this.addressData.splice(index ,1)
            this.dialogVisible = false
          }
        })
      })

    },
    godingdan() {
      this.$router.push('/dingdan')
    },
    news() {
      this.$router.push('/new')
    },
    loginOut() {
      window.localStorage.clear()
      this.$router.push('/Shopping')
    },
    Coupon() {
      this.$router.push('/coupon')
    },
    // 用户信息详情
    personalInfo() {
      info({}).then((res) => {
        console.log('用户信息详情', res)
        if (res.data.code == 200) {
          // console.log(res.data.data.user);
          this.personalList = res.data.data.user;
          this.addressData = res.data.data.address;
          this.$store.commit('setUserName', res.data.data.user.first_name)
          this.$store.commit('setEmail', res.data.data.user.email)
        }
      });
    },
    addAdress() {
      this.formData = {};
      this.dialogVisible = true;
    },
    pertentClose() {
      this.pertentVisible = false;
    },
    // 确认修改用户信息
    surePer() {
	  console.log(this.personalData)
      up().then((res) =>{
        if(res.data.code == 200){
          this.pertentVisible = false
          this.personalInfo()
          }
      })
    },
    addressSure() {
      if (!this.formData.id) {
        addressAdd(this.formData).then((res) => {
          if (res.data.code == 200) {
            console.log(res);
            this.dialogVisible = false;
            this.personalInfo();
            this.$message.success(res.data.msg);
          }
        });
      } else {
        addressUp(this.formData).then((res) => {
          if (res.data.code == 200) {
            this.personalInfo();
            this.dialogVisible = false;
            this.$message.success(res.data.msg);
          }
        });
      }
    },

    editPerDetail() {
      this.pertentVisible = true;
      this.personalData = JSON.parse(JSON.stringify(this.personalList))
    },
    editAdress(val) {
      this.formData = JSON.parse(JSON.stringify(val));
      console.log(val);
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    integralFun() {
      this.$router.push({ path: "/integral", query: { status: true } });
    },
    // 上传图片成功
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      console.log(this.imageUrl)
    },
    // 上传图片之前
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/jpg ' || 'image/png ' || 'image/gif'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 图片 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
}
</script>
<style scoped lang='less'>
.personalCenter {
  background: #f4f4f4;
  overflow: hidden;
  .dialogStyle {
    margin: 0 140px;
    .el-select {
      width: 100%;
    }
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
    .contentBackground {
      background: #f2f6ff;
      padding: 10px;
      margin-top: 20px;
    }
    .personalStyle {
      background-color: white;
      padding: 50px 40px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .personalLeft {
        width: 365px;
        .firstPersonal {
          display: flex;
          justify-content: space-between;
          img {
            width: 140px;
            height: 140px;
          }
          .myEmail {
            width: 200px;
            margin-top: 25px;
            img {
              width: 64px;
              height: 50px;
              float: left;
			  margin-top: 20px;
            }
            span {
              font-size: 20px;
              font-family: Montserrat;
              font-weight: 400;
              text-decoration: underline;
              color: #2f2f2f;
              margin-top: 11px;
              float: right;
            }
            .el-button {
              margin-top: 30px;
              width: 100%;
            }
          }
        }
        .twoPersonal {
          height: 120px;
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          ul {
            height: 50px;
            line-height: 50px;
          }
          ul:nth-child(1) {
            font-size: 20px;
            font-family: Montserrat;
            font-weight: 400;
            color: #000000;
          }
          ul:nth-child(2) {
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 300;
            color: #c0bebe;
          }
        }
        .middleBorder {
          border-top: 1px solid #eee;
        }
        .threePersonal {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          p:nth-child(1) {
            img {
              width: 12px;
              height: 21px;
            }
            span {
              margin-left: 10px;
              font-size: 20px;
              font-family: Montserrat;
              font-weight: 400;
              color: #000000;
            }
          }
          p:nth-child(2) {
            cursor: pointer;
            img {
              width: 50px;
              height: 20px;
              margin-top: 5px;
            }
          }
        }
        .fourPersonal {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          p {
            color: #3e7bff;
            cursor: pointer;
          }
        }
        .describe {
          margin-top: 10px;
          border-top: 1px solid;
          p:nth-child(1) {
            font-size: 20px;
            font-family: Montserrat;
            font-weight: 400;
            color: #3e7bff;
            padding-top: 10px;
          }
          p:nth-child(2) {
            margin-top: 15px;
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 300;
            color: #3e7bff;
          }
        }
      }
      .personalRight {
        width: 700px;
        .borderBox {
          border-left: 20px solid #eee;
          padding-left: 15px;
        }
        .cardBag {
          display: flex;
          justify-content: space-between;
          margin-top: 70px;
          ul > li {
            height: 40px;
            line-height: 40px;
          }
          ul:nth-child(1) {
            font-size: 20px;
            font-family: Montserrat;
            font-weight: 400;
            color: #1f1f1f;
            li:nth-child(4) {
              margin-top: 60px;
            }
          }
          ul:nth-child(2) {
            li {
              cursor: pointer;
            }
            color: #3e7bff;
            li:nth-child(4) {
              margin-top: 60px;
            }
          }
        }
        .title {
          font-size: 20px;
          font-family: Montserrat;
          font-weight: 300;
          color: #acacac;
        }
        .introduceRight {
          border-bottom: 2px solid #eee;
          display: flex;
          justify-content: space-between;
          p:nth-child(1) {
            span {
              font-size: 40px;
              font-family: Montserrat;
              font-weight: 400;
              color: #000000;
              margin-left: 14px;
            }
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
  .avatar-uploader {
    text-align: center;
  }
  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
