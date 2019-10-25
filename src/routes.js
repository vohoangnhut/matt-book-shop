import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import ContactList from './components/admin/ContactList';
import AdminLogin from './components/admin/Login';

export const routes = [
	{path: '/', component: Home, name: 'Home'},
	{path: '/book/:id', component: Products, name: 'Products'},
	{path: '/contact', component: Contact, name: 'Contact'},
	{path: '/admin/contactlist', component: ContactList, name: 'ContactList'},
	{path: '/admin/login', component: AdminLogin, name: 'AdminLogin'}
];