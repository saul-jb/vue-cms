<template>
	<div class="page-search">
		<Error v-if="error" :error="error" />

		<Loading v-else-if="loading" />

		<template v-else>
			<template v-if="hasPages">
				<main class="main">
					<!-- <PageContent :page="page" /> -->
					<section v-for="page in pages">
						{{ page.title }}
					</section>
				</main>
			</template>

			<NotFound v-else />
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
				pages: [],
				loading: true
			};
		},

		props: {
			query: {
				required: true,
				type: String
			}
		},

		computed: {
			hasPages () {
				return this.pages && this.pages.length !== 0;
			}
		},

		created () {
			this.findPages({title: this.query}).then(pages => {
				this.loading = false;
				this.pages = pages.data;
			}).catch(err => {
				console.error(err);
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
