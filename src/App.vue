<template>
	<div class="nav">
		<a :href="csr">CSR</a>
		<a :href="ssr">SSR</a>
		<a :href="ssg">SSG</a>
	</div>
	<div class="nav">
		<router-link to="/">Root</router-link>
		<router-link to="/test">Test</router-link>
	</div>
	<router-view v-slot="{Component}">
		<component :is="Component" />
	</router-view>
</template>

<style>
html {
	font-size: 10px;
}

body {
	text-align: center;
	font-size: 0;
	line-height: 1;
}

#app {
	text-align: center;
	margin-top: 65px;
}

h1 {
	color: green;
	font-size: 30px;
}

.nav {
	position: relative;
	font-size: 16px;
	z-index: 1;
}

.nav a:not(:last-child) {
	margin-right: 10px;
}
</style>

<script lang="ts" setup>
const {protocol, port, hostname} = location;
const isLocalhost = import.meta.env.DEV;
const host = isLocalhost ? 'localhost' : hostname.split('.').slice(-2).join('.');
const domain = isLocalhost ? `${host}:${port}` : host;

const csr = `${protocol}//${domain}`;
const ssr = `${protocol}//auth.${domain}`;
const ssg = `${protocol}//welcome.${domain}`;
</script>
