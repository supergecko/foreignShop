<template>
	<div class="min">
		<div class="minSon">
			<el-carousel trigger="click">
				<el-carousel-item v-for="(item, index) in slide" :key="index">
					<img class="imgStyle" :title="item.title" :src="item.src" alt="" />
				</el-carousel-item>
			</el-carousel>
			<div class="conentClass">
				<p class="firstClass">
					<span v-for="(item, index1) in brandList" :key="index1" :class="item.flag === '1' ? 'title': '' "
						@click="handleBrand(item)"> {{item.brand_name}} </span>
					<span @click="$router.push('/feedback')">Feedback</span>
					<span @click="$router.push('/termsConditions')">Terms & Conditions</span>
					<!-- 留言板 -->
					<span @click="$router.push('/contactUs')">Contact Us</span>
				</p>
				<p class="senClass">
					<span v-for="(item, index) in cateList" :key="index" :class="item.flag === '1'?'title':''"
						@click="handleCate(item)">{{item.cate_name}}</span>
				</p>
				<p class="senClass">
					<span v-for="(item, index) in cateChildList" :key="index" :class="item.flag === '1'?'title':''"
						@click="handleCateChild(item)">{{item.cate_name}}</span>
				</p>
				<div class="commodityStyle">
					<img src="@/assets/img/juxing.png" alt="" />
					<!-- 面包屑导航 -->
					<p class="first">{{firstCateName ? firstCateName : 'whole'}}</p>
					<p class="line">/</p>
					<p class="last">{{lastCateName}}</p>
				</div>
				<div class="Shui">
					<p class="leftStyle">
						Shop By Price:
						<el-input v-model="numOne" placeholder="" prefix-icon="el-icon-present" @change="firstPrice()">
						</el-input>
						~
						<el-input v-model="numTwo" placeholder="" prefix-icon="el-icon-present" @change="secondPrice()">
						</el-input>
					</p>
					<p class="rightStyle"></p>
				</div>

				<div class="shuai">
					<p class="leftStyle">
						Sort By:
						<el-select v-model="value" placeholder="请选择" @change="handlevalue()">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</p>
				</div>
			</div>
			<div class="commodityArea">
				<div v-for="(item, index) in commodityData.items" :key="index">
					<div class="styleFloat" @click="details(item.id)">
						<!--<img v-if="item.GoodsType==0" class="labelImg" src="../assets/img/labelOne.png" alt="" />-->
						<!--<img v-if="item.GoodsType==1" class="labelImg" src="../assets/img/labelTwo.png" alt="" />-->
						<!--<img v-if="item.GoodsType==2" class="labelImg" src="../assets/img/labelThree.png" alt="" />-->
						<img class="img_div" :src="item.ImgUrl" alt="" />
						<!-- 商品名称 -->
						<p class="p1">{{ item.GoodsName }}</p>
						<p class="details">Details</p>
						<p class="p2">
							$ {{ item.ActivityPrice }}
							<el-button plain class="addButton" icon="el-icon-goods"></el-button>
						</p>
					</div>
				</div>
			</div>
			<div class="borderStyle"></div>
			<div class="page-bar">
				<!--        <ul>-->
				<!--          <li v-if="cur > 1">-->
				<!--            <a v-on:click="cur&#45;&#45;, pageClick()"-->
				<!--              ><i class="el-icon-arrow-left"></i>Previous</a-->
				<!--            >-->
				<!--          </li>-->
				<!--          <li v-if="cur == 1">-->
				<!--            <a class="banclick"><i class="el-icon-arrow-left"></i>Previous</a>-->
				<!--          </li>-->
				<!--          <li-->
				<!--            v-for="(item, index) in indexs"-->
				<!--            v-bind:class="{ active: cur == item }"-->
				<!--            :key="index"-->
				<!--          >-->
				<!--            <a v-on:click="btnClick(item)">{{ item }}</a>-->
				<!--          </li>-->
				<!--          <li v-if="cur != all">-->
				<!--            <a v-on:click="cur++, pageClick()"-->
				<!--              >Next<i class="el-icon-arrow-right"></i-->
				<!--            ></a>-->
				<!--          </li>-->
				<!--          <li v-if="cur == all">-->
				<!--            <a class="banclick">Next<i class="el-icon-arrow-right"></i></a>-->
				<!--          </li>-->
				<!--        </ul>-->

				<!-- 分页器 -->
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
					:current-page.sync="currentPage1" layout="prev, pager, next" :total="commodityData.total">
				</el-pagination>

				<!--        <el-pagination-->
				<!--            background-->
				<!--            style="width: 800px !important;"-->
				<!--            layout="prev, pager, next"-->
				<!--            :total="commodityData.total">-->
				<!--        </el-pagination>-->
			</div>
		</div>
	</div>
</template>

<script>
	import {
		goods,
		cate,
		brand,
		slide,
		info
	} from "@/api/api";
	export default {
		name: "shop-main",
		data() {
			return {
				currentPage1: 1, // 当前选中的页数,默认从第一页开始
				options: [{
						value: "price",
						label: "price",
					},
					{
						value: "sales_volume",
						label: "sales volume",
					},
					{
						value: "time",
						label: "time",
					},
					{
						value: "collection",
						label: "collection",
					}
				],
				// 商品列表数据
				commodityData: [{
						ImgUrl: require("../assets/img/shopping.png"),
						text: "Diamond studio 1/6 Nami resin statue",
						money: "$65.00",
						labelUrl: require("../assets/img/labelOne.png"),
					},
					{
						ImgUrl: require("../assets/img/shopping.png"),
						text: "Diamond studio 1/6 Nami resin statue",
						money: "$65.00",
						labelUrl: require("../assets/img/labelTwo.png"),
					},
					{
						ImgUrl: require("../assets/img/shopping.png"),
						text: "Diamond studio 1/6 Nami resin statue",
						money: "$65.00",
						labelUrl: require("../assets/img/labelThree.png"),
					},
				],
				all: 10, //总页数
				cur: 1, //当前页码
				totalPage: 0, //当前条数
				value: "",
				numOne: 0,
				numTwo: 0,
				cate_id: '',
				brand_id: '',
				cateList: [],
				brandList: [],
				cateChildList: [],
				firstCateName: '', // 面包屑导航一级标题
				lastCateName: '', // 面包屑导航二级标题
				slide: [] ,// 轮播图列表
				newKey:'' //搜索关键字
			}
		},
		created() {
			this.loadSlide() 
		},
		mounted() {
			this.productList();
			this.personalInfo();
			if (this.newKey != ''){
				this.searchGood()
			}
		},
		methods: {
			// 首页轮播图
			loadSlide() {
				slide().then(res => {
					if (res.data.code === 200) {
						this.slide = res.data.data.slide
					}
				})
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				let obj = {
					page: val,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: this.numOne,
					end_price: this.numTwo,
					key: '',
					sort_key: this.value,
					sort: ''
				}
				this.goodList(obj)
			},
			productList() {
				this.goodList()
				// goods({}).then((res) => {
				//   console.log(res);
				//   if (res.status == 200) {
				//     this.commodityData = res.data.data.items;
				//     // console.log(res.data.data.items)
				//     this.commodityData.forEach((item) => {
				//       item.ImgUrl = "http://106.52.173.123:86/" + item.ImgUrl;
				//     });
				//   }
				// });

				brand().then(res => {
					this.brandList = res.data.data
					// console.log('brandList',this.brandList)
					this.brandList.forEach((item, indexs) => {
						if (item.brand_name === this.brandList[0].brand_name) {
							this.$set(this.brandList[indexs], 'flag', '1')
						} else {
							this.$set(this.brandList[indexs], 'flag', '2')
						}
					})
				})

				// 商品分类
				cate().then(res => {
					this.cateList = res.data.data
					console.log('商品的分类', this.cateList)
					this.cateList.forEach((item, indexs) => {
						if (item.cate_name === this.cateList[0].cate_name) {
							this.$set(this.cateList[indexs], 'flag', '1')
							this.handleCate(item)
							setTimeout(() => {
								this.handleCateChild(item.child[0])
							}, 100)

						} else {
							this.$set(this.cateList[indexs], 'flag', '2')
						}
					})
				})
			},
			// 商品列表
			goodList(obj) {
				goods(obj).then((res) => {
					console.log('商品列表', res);
					if (res.status == 200) {
						this.$nextTick(() => {
							this.commodityData = res.data.data;
							// console.log(this.commodityData)
							this.commodityData.items.forEach((item) => {
								// item.ImgUrl = "http://106.52.173.123:86/" + item.ImgUrl;
							});
						})

						// console.log(res.data.data.items)

					}
				});
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
			handlevalue() {
				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: this.numOne,
					end_price: this.numTwo,
					key: '',
					sort_key: this.value,
					sort: ''
				}
				this.goodList(obj)
			},
			searchGood(newKey) {
				console.log('测试'+newKey)
				this.newKey = newKey
				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: '',
					end_price: '',
					key: this.newKey,
					sort_key: '',
					sort: ''
				}
				this.goodList(obj)
			},
			firstPrice() {
				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: this.numOne,
					end_price: this.numTwo,
					key: '',
					sort_key: this.value,
					sort: ''
				}
				this.goodList(obj)
			},
			secondPrice() {
				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: this.numOne,
					end_price: this.numTwo,
					key: '',
					sort_key: this.value,
					sort: ''
				}
				this.goodList(obj)
			},
			handleBrand(event) {
				console.log(event.brand_name)
				this.firstCateName = event.brand_name
				this.brand_id = event.brand_id
				this.brandList.forEach((item, indexs) => {
					if (item.brand_name === event.brand_name) {
						this.$set(this.brandList[indexs], 'flag', '1')
					} else {
						this.$set(this.brandList[indexs], 'flag', '2')
					}
				})
				console.log(this.brandList)
				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: '',
					end_price: '',
					key: '',
					sort_key: '',
					sort: ''
				}
				this.goodList(obj)
			},
			handleCate(event) {
				console.log('进来了')
				this.lastCateName = event.cate_name
				this.cateList.forEach((item, indexs) => {
					if (item.cate_name === event.cate_name) {
						this.$set(this.cateList[indexs], 'flag', '1')
					} else {
						this.$set(this.cateList[indexs], 'flag', '2')
					}
				})
				this.cateChildList = []
				event.child.forEach(item => {
					this.cateChildList.push(item)
				})
				this.cate_id = event.cate_id

				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: '',
					end_price: '',
					key: '',
					sort_key: '',
					sort: ''
				}
				this.goodList(obj)
			},
			handleCateChild(event) {
				// this.cate_id = event.cate_id
				this.cateChildList.forEach((item, indexs) => {
					if (item.cate_name === event.cate_name) {
						this.$set(this.cateChildList[indexs], 'flag', '1')
					} else {
						this.$set(this.cateChildList[indexs], 'flag', '2')
					}
				})
				let obj = {
					page: 1,
					limit: 9,
					cate_id: this.cate_id,
					brand_id: this.brand_id,
					start_price: '',
					end_price: '',
					key: '',
					sort_key: '',
					sort: ''
				}
				this.goodList(obj)
			},
			handleChange(value) {
				// console.log(value);
			},
			//分页
			btnClick(data) {
				//页码点击事件
				if (data != this.cur) {
					this.cur = data;
				}
			},
			pageClick() {
				//根据点击页数请求数据
				//   this.dataListFn(this.cur.toString());
			},
			// 点击图片查看详情
			details(id) {
				console.log("图片详情");
				this.$router.push({
					path: "/FullPayment",
					query: {
						id: id
					}
				});
			},
		},
		computed: {
			indexs() {
				var left = 1;
				var right = 10;
				var ar = [];
				if (this.all >= 5) {
					if (this.cur > 3 && this.cur < this.all - 2) {
						left = this.cur - 2;
						right = this.cur + 2;
					} else {
						if (this.cur <= 3) {
							left = 1;
							right = 5;
						} else {
							right = this.all;
							left = this.all - 4;
						}
					}
				}
				while (left <= right) {
					ar.push(left);
					left++;
				}
				return ar;
			},
		},
	};
</script>
<style scoped lang="less">
	/deep/ .page-bar {
		.number {
			/*width: 800px !important;*/
			font-size: 20px !important;

			&.active {
				background-color: #ffcc31 !important;
				color: #fff;
			}
		}
	}

	/deep/ .btn-prev {
		background-color: transparent !important;
		color: darkgoldenrod !important;
		font-size: 25px !important;
	}

	/deep/ .btn-next {
		background-color: transparent !important;
		color: darkgoldenrod !important;
		font-size: 25px !important;
	}

	.min {
		background: url(../assets/img/diwen.png) fixed;
		background-color: #232321;
		height: 100%;
		display: flow-root;
	}

	.minSon {
		width: 1200px;
		margin: 0 auto;
		padding-top: 30px;
	}

	.min /deep/.el-carousel__container {
		height: 400px;
	}

	.imgStyle {
		width: 100%;
		height: 100%;
	}

	.conentClass {
		width: 1120px;
		margin: 0 auto;
	}

	.firstClass span {
		cursor: pointer;
		color: white;
		display: inline-block;
		margin: 40px 20px 22px 0;
	}

	.firstClass .title {
		color: #ffe242;
	}

	.senClass span {
		cursor: pointer;
		color: white;
		display: inline-block;
		margin: 0 20px 22px 0;
	}

	.senClass .title {
		color: #ffe242;
	}

	.commodityStyle {
		margin-top: 40px;
		line-height: 40px;
		display: flex;

		.first,
		.last,
		.line {
			margin-left: 15px;
			font-size: 20px;
			font-family: Montserrat;
			font-weight: 300;
			color: #ffffff;
		}
	}

	.Shui {
		margin: 24px 0;
		float: left;
	}

	.Shui /deep/ .el-input {
		width: 101px;
		height: 31px;
		background: #727272;
	}

	.Shui /deep/ .el-input__inner {
		width: 101px;
		height: 31px;
		background: #727272;
		color: #ffe242;
		font-size: 20px;
		font-weight: 300;
		padding-left: 40px;
	}

	.leftStyle {
		color: #fff;
	}

	.leftStyle /deep/ .el-input__icon {
		line-height: 30px;
	}

	.shuai {
		margin: 24px 0;
		float: right;
	}

	.shuai /deep/ .el-input {
		width: 205px;
		height: 31px;
		background: #727272;
		border-radius: 4px;
	}

	.shuai /deep/ .el-input__inner {
		background: #727272;
		color: #ffe242;
	}

	.shuai /deep/.el-select-dropdown {
		background: #727272;
		color: black;
	}

	.el-select-dropdown__item:hover {
		background: #616161;
		color: #ffe242;
	}

	.commodityArea {
		/* clear: both; */
		width: 1120px;
		overflow: hidden;
		margin-left: 35px;
	}

	/deep/ .styleFloat {
		float: left;
		margin: 25px 6px;
		width: 360px;
		height: 500px;
		background-color: #000000;
		position: relative;
		cursor: pointer;

		.p1 {
			font-size: 20px;
			height: 50px;
			overflow: hidden;
			font-family: Montserrat;
			font-weight: 400;
			margin: 16px 0 0 13px;
			color: #ffcc31;
			overflow: hidden;
			text-overflow: ellipsis;

			span {
				color: #ffcc31 !important;
			}

		}
	}

	.labelImg {
		width: 100px;
		height: 40px;
		position: absolute;
		top: 0;
		left: 0;
	}

	/* .styleFloat img:hover {
  opacity: 0.5;
  cursor: pointer;
} */
	.details {
		position: absolute;
		background: rgba(101, 101, 101, 0.6);
		color: #ffffff;
		opacity: 0;
		top: 0;
		right: 0;
		width: 360px;
		height: 360px;
		pointer-events: none;
		text-align: center;
		line-height: 360px;
		font-size: 20px;
		font-family: Montserrat;
		font-weight: 300;
	}

	.styleFloat:hover .details {
		opacity: 1;
	}

	.commodityArea .img_div {
		width: 360px;
		height: 360px;
	}

	.p2 {
		margin: 13px 13px 0 13px;
		font-size: 34px;
		font-family: Montserrat;
		font-weight: 300;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/deep/ .addButton {
		float: right;
		width: 90px;
		height: 35px;
		background-color: unset;

		.el-icon-goods {
			color: #59ccfb;
		}
	}

	.borderStyle {
		border-top: 2px solid #ffffff;
		opacity: 0.2;
		margin: 80px 0 25px 0;
	}

	/*分页*/
	.page-bar {
		width: 860px;
		margin: 0 auto;
		height: 60px;
		text-align: center;
	}

	ul,
	li {
		margin: 0px;
		padding: 0px;
	}

	li {
		list-style: none;
	}

	.page-bar i {
		font-style: normal;
		margin: 0px 6px;
		/* font-size: 12px; */
	}

	.el-select-dropdown__item {
		padding-left: 1em;
	}
</style>
