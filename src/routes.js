import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import ContactList from './components/admin/ContactList';
import OrderList from './components/admin/OrderList';
import AdminLogin from './components/admin/Login';

export const routes = [
	{path: '/', component: Home, name: 'Home'},
	{path: '/book/:id', component: Products, name: 'Products'},
	{path: '/contact', component: Contact, name: 'Contact'},
	{path: '/admin/login', component: AdminLogin, name: 'AdminLogin'},
	{path: '/admin', component: ContactList, name: 'ContactList', meta: { requiresAuth: true }},
];