<template>
	<div>
		<div v-if="hasPages">
			Insert content here.
			<div v-for="page in pages">
				<span v-html="page.content">{{ page.content }}</span>
			</div>
		</div>

		<div v-else>
			<NotFound />
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";
	import NotFound from "@/components/not-found";

	export default {
		data () {
			return {
				pages: []
			};
		},

		props: {
			page: {
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
			this.findPages({title: this.page}).then(pages => {
				this.pages = pages.data;
			}).catch(err => {
				console.error(err);
			});

			this.signIn({email: "admin", password: "admin"}).then(res => {
				/* this.createPage().then(page => {
					console.log(page);
				}).catch(err => {
					console.error(err);
				}); */
			}).catch(err => {
				console.log(err);
			});
		},

		methods: {
			...mapActions("pages", ["findPages", "createPage"]),
			...mapActions("users", ["signIn"])
			/* ...mapMutations({
				addUnreadMessage: "channels/addUnreadMessage",
				setMessages: "messages/setMessages"
			}) */
		},

		components: {
			NotFound
		}
	};
</script>

<style scoped>

</style>
