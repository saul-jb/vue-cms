<template>
	<article class="page-summary">
		<h2 class="page-summary-title">{{ page.title }}</h2>
		<p class="page-summary-content">
			{{ strippedContent }}
		</p>
	</article>
</template>

<script>
	export default {
		props: {
			page: {
				type: Object,
				required: true,
				validator: page => {
					return !!page && page._id && page.title && page.content;
				}
			}
		},

		computed: {
			strippedContent () {
				const div = document.createElement("div");

				div.innerHTML = this.page.content;

				return div.innerText;
			}
		}
	};
</script>

<style scoped>
	.page-summary-content {
		max-height: 50px;
		overflow: hidden;
	}
</style>
