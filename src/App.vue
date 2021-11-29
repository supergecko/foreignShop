<template>
	<div id="app">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<div v-if="$route.meta.keepAlive">
			<app-header @func="getMsgFormSon"></app-header>
			<router-view ref="child"></router-view>
			<app-footer></app-footer>
		</div>
		<div v-if="!$route.meta.keepAlive">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Header from "./components/header";
	import Footer from "./components/footer";

	export default {
		name: "App",
		components: {
			"app-header": Header,
			"app-footer": Footer,
		},
		methods: {
			getMsgFormSon(data) {
				this.msgFormSon = data
				console.log(this.msgFormSon)
				this.$refs.child.searchGood(this.msgFormSon);
			}
		}
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		width: 100%;
		/* color: white; */
		/* margin-top: 60px; */
	}

	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
