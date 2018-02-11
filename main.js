import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './src/routerConfig.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routerConfig // （缩写）相当于 routes: routes
})

const app = new Vue({
	el: '#content',
	router: router
});
app.$mount('#content');
