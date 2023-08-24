import {createApp} from './app';

/**
 * SPA entry point
 */
const {app, router} = createApp();

router
	.isReady()
	.then(() => app.mount('#app'));
