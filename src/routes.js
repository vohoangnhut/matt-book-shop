import Home from './components/Home';
import Contact from './components/Contact'
import Products from './components/Products'

export const routes = [
	{path: '/', component: Home, name: 'Home'},
	{path: '/book/:id', component: Products, name: 'Products'},
	{path: '/contact', component: Contact, name: 'Contact'},
];