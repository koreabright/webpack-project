<template>
	<div class="a">
		<Header></Header>
		<Sidebar></Sidebar>
		<router-view></router-view>
	</div>
</template>
<script>
	import Header from '../components/header.vue';
	import Sidebar from '../components/sidebar.vue';
	export default {
		components: { Header, Sidebar },
		data () {
			return {

			}
		},
		created () {},
		monted () {},
		methods: {

		},
		computed: {

		},
		watch: {

		},
		filter: {
			
		}
	}
</script>
<style lang="less" scoped>
</style>