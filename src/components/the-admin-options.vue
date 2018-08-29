<template>
	<div class="admin-options">
		<nav>
			<ul>
				<li>
					<router-link :to="{ name: 'AdminOverview', params: {} }">Overview</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'AdminPages', params: {} }">Pages</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'AdminUsers', params: {} }">Users</router-link>
				</li>
			</ul>
		</nav>


		<TheLogoutButton />
	</div>
</template>

<script>
	import TheLogoutButton from "./the-logout-button";

	export default {
		components: {
			TheLogoutButton
		}
	};
</script>

<style scope>

</style>
