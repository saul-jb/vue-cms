<template>
	<div class="login-container">
		<form submit.prevent>
			<h1>Login</h1>
			<div v-if="error" class="error">
				{{ error.message }}
			</div>
			<label for="email">
				<h2>Email</h2>
				<input type="text" id="email" v-model="email" />
			</label>
			<label for="password">
				<h2>Password</h2>
				<input type="text" id="password" v-model="password" />
			</label>
			<div @click="login">
				Login
			</div>
		</form>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		data () {
			return {
				email: "",
				password: "",
				error: null
			};
		},

		created () {
			this.signIn().then(() => {
				this.$router.push({ name: "Overview" });
			});
		},

		methods: {
			login () {
				this.error = null;

				this.signIn({
					email: this.email,
					password: this.password
				}).then(() => {
					this.$router.push({ name: "Overview" });
				}).catch(err => {
					this.error = err;
				});

				this.password = "";
			},

			...mapActions("users", ["signIn"])
		}
	};
</script>

<style scoped>

</style>
