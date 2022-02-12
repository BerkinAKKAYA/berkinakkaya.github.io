import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Pricing from './pages/Pricing.vue';
import References from './pages/References.vue';
import Contact from './pages/Contact.vue';
import Layout from './Layout.vue';
import "./css/index.scss";

const store = createStore({
	state: {},
});

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/pricing', component: Pricing },
		{ path: '/references', component: References },
		{ path: '/contact', component: Contact },
	],
});

createApp(Layout).use(store).use(router).mount('#app');