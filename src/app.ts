// @see https://vitejs.dev/config/build-options.html#build-modulepreload
import 'vite/modulepreload-polyfill';
import {createApp as _createApp} from 'vue';
import {createRouter} from './router';
import App from './App.vue';

export function createApp() {
	const app = _createApp(App);
  const router = createRouter();

  app.use(router);

  return {app, router};
}
