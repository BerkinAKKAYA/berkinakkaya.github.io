import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Layout from './Layout.vue';
import "./css/index.scss";
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';

const store = createStore({
	state: {},
});

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/about', component: About },
		{ path: '/projects', component: Projects },
		{ path: '/contact', component: Contact },
	],
});

createApp(Layout).use(store).use(router).mount('#app');