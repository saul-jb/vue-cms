<template>
	<div id="app">
		<TheHeader />
		<TheNavBar />
		<router-view></router-view>
		<TheFooter />
	</div>
</template>

<script>
	import TheHeader from "@/components/the-header";
	import TheNavBar from "@/components/the-nav-bar";
	import TheFooter from "@/components/the-footer";

	export default {
		components: {
			TheHeader,
			TheNavBar,
			TheFooter
		}
	};
</script>

<style>
	/* Colors */

	/* General */
	* {
		box-sizing: border-box;
	}

	html, body, #app {
		border: none;
		padding: 0;
		margin: 0;

		width:100%;
		min-height: 100vh
	}

	a {
		outline: 0;
	}
</style>

<style scoped>
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.header {
		height: 150px;
	}

	.nav-bar {
		height: 30px;
	}

	.main-container {
		flex: 1;
	}

	.footer {
		height: 30px;
	}
</style>
