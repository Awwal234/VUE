import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/index.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
	],
});

export default router;
