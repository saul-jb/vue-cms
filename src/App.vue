<template>
	<div id="app">
		<TheNavBar />
		<main class="main">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import TheNavBar from "@/components/the-nav-bar";

	export default {
		components: {
			TheNavBar
		}
	};
</script>

<style>
	/* General */
	* {
		box-sizing: border-box;
	}

	html, body, #app {
		border: none;
		padding: 0;
		margin: 0;

		width:100%;
		height: 100%;
	}

	a {
		outline: 0;
	}
</style>

<style scoped>
	.main {
		height: calc(100% - 30px);
	}
</style>
