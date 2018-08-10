<template>
	<div class="page-container">
		<h1 class="page-title">{{ page.title }}</h1>

		<div class="page-content" v-html="page.content">{{ page.content }}</div>

		<span class="page-author">By {{ page.author }}</span> on <time class="page-timestamp">{{ page.createdAt | formatPageDate }}</time>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

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

		created () {
			this.getUser(this.page.author).then(user => {
				console.log(user);
			}).catch(() => {
				this.page.author = "(Deleted Account)";
			});
		},

		methods: {
			...mapActions("users", ["getUser"])
		}
	};
</script>

<style>
</style>
