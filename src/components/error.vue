<template>
	<div class="error-container">
		<h1 class="error-title">{{ error.name }}</h1>
		<div class="error-message">{{ error.message }}</div>
	</div>
</template>

<script>
	export default {
		props: {
			error: {
				type: Object,
				required: true,
				validator: error => {
					return error && error.name && error.message;
				}
			}
		}
	};
</script>

<style scoped>

</style>
