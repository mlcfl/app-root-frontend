import {
	createRouter as _createRouter,
	createWebHistory,
} from 'vue-router';

export function createRouter() {
	// https://vitejs.dev/guide/features.html#glob-import
	const pages = import.meta.glob('./pages/*.vue');
	const routes = Object.entries(pages).map(([path, component]) => {
		const route = path.replace(/\.\/pages(.*)\.vue$/, (m, page) => page.toLowerCase());

		return {
			path: route === '/root' ? '/' : route,
			component,
		}
	});

	const history = createWebHistory();

	return _createRouter({
		routes,
		history,
	});
}
