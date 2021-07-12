import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';
import firebase from './config/firebaseConfig';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import jquery from 'jquery';
import axios from "axios";
window.$ = window.jQuery = jquery;

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(ElementUI);
Vue.use(BootstrapVue);

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);

var scrollBehavior = function (to, from, savedPosition) {
	if (to.hash) {
		return {
			selector: to.hash
		}
	} else {
		return {
			x: 0,
			y: 0
		}
	}
};

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior: scrollBehavior
});

router.beforeEach((to, from, next) => {
	firebase.auth().onAuthStateChanged(user => {
		if (!user) {
			const currentUser = firebase.auth().currentUser;
			const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
			if (requiresAuth && !currentUser) next('/admin/login');
			else if (!requiresAuth && currentUser) next('/admin/contactlist');
			else next();
		} else {
			next();
		}
	});
});

Vue.mixin({
	methods: {
		formatDate(date) {
			var d = new Date(date),
				month = "" + (d.getMonth() + 1),
				day = "" + d.getDate(),
				year = d.getFullYear(),
				hours = d.getHours(),
				minutes = d.getMinutes(),
				seconds = d.getSeconds();

			if (month.length < 2) month = "0" + month;
			if (day.length < 2) day = "0" + day;

			return [day, month, year].join("-") + ' ' + [hours, minutes, seconds].join(':');
		},
		formatDateSort(date) {
			var d = new Date(date),
				month = "" + (d.getMonth() + 1),
				day = "" + d.getDate(),
				year = d.getFullYear(),
				hours = d.getHours(),
				minutes = d.getMinutes(),
				seconds = d.getSeconds();

			if (month.length < 2) month = "0" + month;
			if (day.length < 2) day = "0" + day;

			return [year, month, day].join("/") + ' ' + [hours, minutes, seconds].join(':');
		},
		getAllCountries() {
			return new Promise((resolve, reject) => {
				var arr = [];
				axios
					.get('https://restcountries.eu/rest/v2/all')
					.then(function (response) {
						response.data.forEach(function (item) {
							arr.push({
								value: item.alpha2Code,
								label: item.name
							});
						});
						resolve(arr);
					})
					.catch(function (error) {
						reject(error);
					});
			});
		},
		getQuantity() {
			return new Promise((resolve, reject) => {
				var arr = [];
				try {
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (item) {
						arr.push({
							value: item,
							label: item
						});
					});
					resolve(arr);
				} catch (e) {
					reject(e);
				}
			});
		}
	}
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
