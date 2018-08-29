<template>
	<div class="page-admin-pages">
		<template v-if="loading">
			Loading
		</template>
		<template v-else>
			<h1>Pages</h1>

			<div class="page-list">
				<span>Title</span> <span>Author</span> <span>Date</span>
				<template v-for="page in pages">
					<span><router-link class="page-title" :to="{ name: 'AdminPageEdit', params: { pageId: page._id } }">{{ page.title }}</router-link></span> <span>{{ page.authorName }}</span> <span>{{ page.createdAt | formatPageDate }}</span>
				</template>
			</div>
			<div class="load-pages" @click="loadMorePages">
				Load More Pages
			</div>
		</template>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		data () {
			return {
				pages: [],
				loading: true,
				error: false
			};
		},

		created () {
			this.findPages({}).then(pages => {
				this.loading = false;
				this.pages = pages.data;

				this.updateAuthors();
			}).catch(err => {
				console.error(err);

				this.error = {
					name: err.name,
					message: err.message
				};
			});
		},

		methods: {
			loadMorePages () {
				this.findPages({$skip: this.pages.length}).then(pages => {
					this.pages = [...this.pages, ...pages.data];

					this.updateAuthors();
				});
			},

			updateAuthors () {
				this.pages.forEach(page => {
					this.getUser(page.author).then(author => {
						this.$set(page, "authorName", author);
					}).catch(() => {
						this.$set(page, "authorName", "(Deleted Account)");
					});
				});
			},

			...mapActions("pages", ["findPages"]),
			...mapActions("users", ["getUser"])
		}
	};
</script>

<style scoped>
	.page-list {
		height: 80%;
		overflow-y: auto;

		display: grid;
		grid-template-columns: 33% 33% 34%;
		grid-template-rows: 30px auto;
	}

	.page-title {
		cursor: pointer;
		color: #0066cc;
		text-decoration: none;
	}
</style>
