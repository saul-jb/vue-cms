<template>
	<div>
		<template v-for="page in pages">
			<PageSummary :page="page" />
		</template>
	</div>
</template>

<script>
	import PageSummary from "./page-summary";

	export default {
		props: {
			pages: {
				type: Array,
				required: true
			}
		},

		components: {
			PageSummary
		}
	};
</script>

<style scoped>

</style>
