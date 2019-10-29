import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';
import firebase from './config/firebaseConfig';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mdbvue/lib/css/mdb.min.css';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(ElementUI);

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0)

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	firebase.auth().onAuthStateChanged(user => {
		if (!user) {
			const currentUser = firebase.auth().currentUser;
			const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
console.log('AA');
			if (requiresAuth && !currentUser) next('/admin/login');
			else if (!requiresAuth && currentUser) next('/admin/contactlist');
			else next();
		}else{
			next();
		}
	});
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
