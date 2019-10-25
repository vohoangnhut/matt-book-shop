import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';
import store from './stores/store';
import { firebaseListener } from './config/firebaseConfig';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(ElementUI);

Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

firebaseListener(authStatusChange);


const router = new VueRouter({
	mode: 'history',
	routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		}
	}

}
