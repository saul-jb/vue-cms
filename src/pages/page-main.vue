<template>
	<div class="page-container">
		<template v-if="error">
			<Error :error="error" />
		</template>
		<template v-else-if="loading">
			<Loading />
		</template>
		<template v-else>
			<template v-if="page">
				<h1 class="page-title">{{ page.title }}</h1>

				<div class="page-content" v-html="page.content">{{ page.content }}</div>

				<span class="page-author">{{ page.author }}</span>
			</template>

			<template v-else>
				<NotFound />
			</template>
		</template>
	</div>
</template>

<script>
	import {mapActions} from "vuex";
	import NotFound from "@/components/not-found";
	import Error from "@/components/error";
	import Loading from "@/components/loading";

	export default {
		data () {
			return {
				page: {},
				loading: true,
				error: false
			};
		},

		props: {
			pageQuery: {
				type: String
			}
		},

		computed: {
		},

		created () {
			this.findPages({
				title: this.pageQuery,
				$limit: 1
			}).then(pages => {
				this.loading = false;
				this.page = pages.data[0];
			}).catch(err => {
				console.log(err.message);

				this.error = {
					name: err.name,
					message: err.message
				};
			});
		},

		methods: {
			...mapActions("pages", ["findPages"])
		},

		components: {
			NotFound,
			Loading,
			Error
		}
	};
</script>

<style scoped>

</style>
