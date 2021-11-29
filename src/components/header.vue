<template>
	<div class="header">
		<div class="mainHeader">
			<img @click="goBack" class="img1" style="margin-right: 30px" src="@/assets/img/login.jpg" alt="" />
			<el-input prefix-icon="el-icon-search" v-model="searchText" placeholder="请输入内容"
				@keyup.enter.native="findGood"></el-input>
			<!-- FaceBook -->
			<p class="book" @click="linkFaceBook">FaceBook</p>
			<div class="signBox" v-if="!token">
				<a class="register" href="/register" style="text-decoration: none">register</a>
				<el-button class="signIn" type="primary" @click="signIn">Sign in</el-button>
			</div>
			<div class="signBox" v-else>
				<el-button plain icon="el-icon-goods" @click="shoppingCart">{{num}}</el-button>
				<!-- 用户头像 -->
				<img style="cursor: pointer" @click="personal" class="img2" src="@/assets/img/touxiang.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	import "../assets/style.css"
	import {
		num,
		facebookLogin,
		info
	} from "../api/api"
	import {
		debounce
	} from 'lodash' // 导入 lodash 处理防抖

	export default {
		name: "app-header",
		data() {
			return {
				searchText: "",
				token: localStorage.getItem("token"),
				num: ''
			}
		},
		// watch: {
		//   $route(to,from){
		//     this.token = localStorage.getItem("token")
		//     num().then(res => {
		//       this.num = res.data.data.num
		//     })
		//   }

		// },
		watch: {
			// 用户搜索
			searchText: {
				handler: debounce(function() {
					// 此处,调用搜索接口
					if (this.$route.path == '/Shopping'){
						this.$emit('func',this.searchText)
					} else {
						this.$router.push({
							path: "/Shopping",
						})
						this.$emit('func',this.searchText)
					}
				}, 1500)
				// immediate: true
			}
		},
		created() {
			num().then(res => {
				this.num = res.data.data.num
			})
		},
		methods: {
			//商品搜索
			findGood() {
				if (this.$route.path == '/Shopping'){
					this.$emit('func',this.searchText)
				} else {
					this.$router.push({
						path: "/Shopping",
					})
					this.$emit('func',this.searchText)
				}
			},
			// 跳转至FaceBook官网
			linkFaceBook() {
				facebookLogin({
					name: this.$store.state.userName,
					email: this.$store.state.email
				}).then(res => {
					if (res.data.code === 200) {
						window.localStorage.setItem('token', res.data.data.token)
						window.location.href = 'https://www.facebook.com/algae.deserts'
					} else {
						this.$message('请先登录');
					}
				})
			},

			register() {
				this.$router.push("/register");
			},
			signIn() {
				this.$router.push("/choiceLogin");
			},
			shoppingCart() {
				console.log("购物车");
				this.$router.push({
					path: "/shoppingCart",
					query: {
						status: true
					}
				});
			},
			personal() {
				this.$router.push({
					path: "/personalCenter",
					query: {
						status: true
					}
				});
			},
			goBack() {
				this.$router.push({
					path: "/",
					query: {
						status: true
					}
				});
			},
		}

	};
</script>
<style scoped lang="less">
	.book {
		color: #fff;
		margin: 0 15px;
		font-weight: bolder;

		&:hover {
			text-decoration: underline;
		}
	}

	.signBox {
		display: flex;
		flex: 1;
		position: relative;
	}

	.el-input {
		width: 800px;
	}

	.el-button {
		margin-left: 10px;
		width: 130px;
		height: 44px;
	}
</style>
