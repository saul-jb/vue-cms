import Vue from "vue";
import Router from "vue-router";

import Main from "@/pages/page-main";
import Admin from "@/pages/page-admin";
import Search from "@/pages/page-search";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Main
		},
		{
			path: "/:page",
			name: "Page",
			component: Main,
			props: true
		},
		{
			path: "/search/:query",
			name: "Search",
			component: Search,
			props: true
		},
		{
			path: "/admin",
			name: "Admin",
			component: Admin
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});

export default router;
