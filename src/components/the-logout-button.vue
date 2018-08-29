<template>
	<div @click="logout">
		Logout
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		methods: {
			logout () {
				this.signOut();
				this.$router.push({ name: "Login" });
			},

			...mapActions("users", ["signOut"])
		}
	};
</script>

<style scoped>

</style>
