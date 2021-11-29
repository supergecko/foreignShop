// import Vue from 'vue'
import request from '@/utils/request'
//注册账号
export function registerAccount(data) {
	return request({
		url: '/api/user/register',
		method: 'post',
		data,
	})
}
//用户登录
export function login(data) {
	return request({
		url: '/api/user/login',
		method: 'post',
		data
	})
}
//facebook
export function facebook(data) {
	return request({
		url: '/api/facebook/login',
		method: 'post',
		data
	})
}

//修改密码
export function passwordReset(data) {
	return request({
		url: '/api/user/passwordReset',
		method: 'post',
		data
	})
}
//用户信息修改
export function up(data) {
	return request({
		url: '/api/user/up',
		method: 'POST',
		data
	})
}
//用户详情
export function info(data) {
	return request({
		url: '/api/user/info',
		method: 'GET',
		data
	})
}
//我的优惠券
export function coupons(data) {
	return request({
		url: '/api/user/coupons',
		method: 'GET',
		data
	})
}
//消息
export function news(data) {
	return request({
		url: '/api/news',
		method: 'GET',
		data
	})
}
//消息已读
export function read(data) {
	return request({
		url: '/api/news/read',
		method: 'POST',
		data
	})
}
//收货地址添加
export function addressAdd(data) {
	return request({
		url: '/api/shippingAddress/add',
		method: 'POST',
		data
	})
}
//收货地址修改
export function addressUp(data) {
	return request({
		url: '/api/shippingAddress/up',
		method: 'POST',
		data
	})
}
//收货地址删除
export function addressDel(data) {
	return request({
		url: '/api/shippingAddress/del',
		method: 'POST',
		data
	})
}
//收货地址列表
export function shippingAddress(data) {
	return request({
		url: '/api/shippingAddress',
		method: 'GET',
		data
	})
}
//收货地址列表
export function addressDetails(data) {
	return request({
		url: '/api/shippingAddress/details',
		method: 'GET',
		data
	})
}
//商品收藏添加
export function collectJoin(data) {
	return request({
		url: '/api/collect/join',
		method: 'POST',
		data
	})
}
//商品收藏删除
export function collectDel(data) {
	return request({
		url: '/api/collect/del',
		method: 'POST',
		data
	})
}
//商品收藏列表
export function collect(data) {
	return request({
		url: '/api/collect',
		method: 'GET',
		data
	})
}
//积分兑换商品列表
export function convertibleGoods(data) {
	return request({
		url: '/api/points/convertibleGoods',
		method: 'GET',
		data
	})
}
//积分兑换商品详情
export function goodsDetails(data) {
	return request({
		url: '/api/points/goodsDetails',
		method: 'GET',
		data
	})
}
//积分兑换
export function exchange(data) {
	return request({
		url: '/api/points/exchange',
		method: 'POST',
		data
	})
}
//积分获取记录
export function record(data) {
	return request({
		url: '/api/points/record',
		method: 'GET',
		data
	})
}
// 商品列表
export function goods(params) {
	return request({
		url: '/api/goods',
		method: 'GET',
		params
	})
}
// 商品详情
export function shangpindetails(params) {
	return request({
		url: '/api/goods/details',
		method: 'GET',
		params
	})
}
// 用户订阅
export function subscribe(data) {
	return request({
		url: `/api/subscribe`,
		method: 'post',
		data
	})
}
// 条款和条件
export function termsConditions() {
	return request({
		url: '/api/termsConditions',
		method: 'get'
	})
}
// 联系我们
export function contactUs() {
	return request({
		url: '/api/contactUs',
		method: 'get'
	})
}
// 反馈
export function problem(data) {
	return request({
		url: '/api/problem',
		method: 'post',
		data
	})
}
// 图片上传
export function uploadImg(file) {
	return request({
		url: '/api/uploadImg',
		method: 'post',
		data: {
			image: file
		}
	})
}
// 收获地址国家
export function country() {
	return request({
		url: '/api/country',
		method: 'get'
	})
}
// facebook登陆
export function facebookLogin(data) {
	return request({
		url: '/api/facebook/login',
		method: 'post',
		data
	})	
}
// 订单列表
export function order(params) {
	return request({
		url: '/api/order',
		method: 'get',
		params
	})
}
// 下单
export function placeOrder(data) {
	return request({
		url: '/api/order/placeOrder',
		method: 'post',
		data
	})
}
// 首页轮播图
export function slide() {
	return request({
		url: '/api/slide',
		method: 'get'
	})
}
export function cate(params) {
	return request({
		url: '/api/goods/cate',
		method: 'GET',
		params
	})
}
export function brand(params) {
	return request({
		url: '/api/goods/brand',
		method: 'GET',
		params
	})
}
// 添加至购物车
export function join(data) {
	return request({
		url: '/api/cart/join',
		method: 'post',
		data
	})
}
// 购物车里的列表
export function cart() {
	return request({
		url: '/api/cart',
		method: 'get',
	})
}
// 支付平台列表
export function paymentPlatform() {
	return request({
		url: '/api/paymentPlatform',
		method: 'get'
	})
}
// 购买礼券
export function giftPurchase(data) {
	return request({
		url: '/api/order/giftPurchase',
		method: 'post',
		data
	})
}
export function del(data) {
	return request({
		url: '/api/cart/del',
		method: 'post',
		data
	})
}
export function clear(data) {
	return request({
		url: '/api/cart/clear',
		method: 'post',
		data
	})
}
export function cartup(data) {
	return request({
		url: '/api/cart/up',
		method: 'post',
		data
	})
}
// 评论列表
export function comments(data) {
	return request({
		url: '/api/goods/comments',
		method: 'get',
		data
	})
}
export function num(data) {
	return request({
		url: '/api/cart/num',
		method: 'get',
		data
	})
}
// 喜欢列表
export function like(data) {
	return request({
		url: '/api/like',
		method: 'get',
		data
	})
}