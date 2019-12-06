import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import ContactList from './components/admin/ContactList';
import AdminLogin from './components/admin/Login';
import PageNotFound from './components/PageNotFound';
import PaymentSuccess from './components/PaymentSuccess';

export const routes = [
	{path: '/', component: Home, name: 'Home'},
	{path: '/book/:id', component: Products, name: 'Products'},
	{path: '/contact', component: Contact, name: 'Contact'},
	{path: '/admin/login', component: AdminLogin, name: 'AdminLogin'},
	{path: '/admin', component: ContactList, name: 'ContactList', meta: { requiresAuth: true }},
	{path: '/404', component: PageNotFound, name: 'PageNotFound'},
	{path: '/paymentsuccess', component: PaymentSuccess, name: 'PaymentSuccess'},
	{path: "*", redirect: '/404'}
];