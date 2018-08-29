<template>
	<div class="admin-page-edit">
		<template v-if="loading">
			Loading.
		</template>
		<template v-else>
			{{ page }}
		</template>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		data () {
			return {
				page: null,
				loading: true,
				error: false
			};
		},

		props: {
			pageId: {
				required: true,
				type: String
			}
		},

		created () {
			this.getPage(this.pageId).then(page => {
				this.loading = false;
				this.page = page;
			}).catch(err => {
				console.error(err);

				this.error = {
					name: err.name,
					message: err.message
				};
			});
		},

		methods: {
			...mapActions("pages", ["getPage"]),
			...mapActions("users", ["getUser"])
		}
	};
</script>

<style scoped>

</style>
