<template>
	<div class="admin-template">
		<TheAdminOptions />
		<router-view class="admin-content" />
	</div>
</template>

<script>
	import TheAdminOptions from "@/components/the-admin-options";

	export default {
		components: {
			TheAdminOptions
		}
	};
</script>

<style scoped>
	.admin-template {
		display: flex;

		width: 100%;
		height: 100vh;
	}

	.admin-options {
		width: 200px;
	}

	.admin-content {
		flex: 1;

		height: 100vh;

		padding: 50px;

		background-color: grey;
	}
</style>
