<template>
	<div class="admin-page-edit">
		<template v-if="loading">
			Loading.
		</template>
		<template v-else>
			{{ page }}
			<h1>Edit Page</h1>
			<input class="input-title" type="text" v-model="page.title" />
			<textarea class="input-content" v-model="page.content"></textarea>
			<div class="button-update" @click="update">
				Update
			</div>
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
			update () {
				this.updatePage({id: this.page._id, page: this.page}).then(something => {
					console.log(something);
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("pages", ["getPage", "updatePage"]),
			...mapActions("users", ["getUser"])
		}
	};
</script>

<style scoped>
	.input-title {
		display: block;
		width: 80%;
	}

	.input-content {
		width: 80%;
		height: 60%;
	}
</style>
