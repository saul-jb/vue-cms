<template>
	<div class="page-query">
		<Error v-if="error" :error="error" />

		<Loading v-else-if="loading" />

		<template v-else>
			<template v-if="page">
				<main class="main">
					<PageContent :page="page" />
				</main>

				<CommentsList :entityId="page._id" />
			</template>

			<NotFound v-else />
		</template>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	import PageContent from "@/components/page-content";
	import CommentsList from "@/components/comments-list";
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

		created () {
			this.findPages({
				// Add option to change title to permalink settings
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
			PageContent,
			CommentsList,
			NotFound,
			Loading,
			Error
		}
	};
</script>

<style scoped>
	.comments-list {
		grid-area: comments;
	}
</style>
