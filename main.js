import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './src/routerConfig.js';
import util from './src/common/util.js'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: routerConfig, // （缩写）相当于 routes: routes
	mode: 'history'
});

util.ajax({
	url: '/api/sidebar',
	type: 'get',
	async: true,
	success: (res) => {

	},
	fail: (res) => {
		
	}
});

new Vue({
	el: '#content',
	router: router
}).$mount('#content');
