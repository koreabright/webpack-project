<template>
	<div>test</div>
</template>
<script>
	import util from '../common/util.js';
	export default {
		components: {  },
		data () {
			return {

			}
		},
		created () {
			this.getData();
		},
		monted () {},
		methods: {
			getData () {
				util.ajax({
					url: '/api/first/test',
					type: 'get',
					data: {
						a: 123,
						b: 456
					},
					dataType: 'json',
					success: (res) => {
						// console.log('*',res);
					},
					fail: (err) => {
						// console.log('**',err);
					}
				});
			}
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