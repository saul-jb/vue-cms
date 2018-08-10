import Vue from "vue";
import Router from "vue-router";

import Template from "@/pages/page-template/index";
import Admin from "@/pages/page-admin";
import Search from "@/pages/page-template/page-search";
import Query from "@/pages/page-template/page-query";

Vue.use(Router);

/*
	Restricted Routes:
		/authentication
		/services/*
*/

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/admin",
			name: "Admin",
			component: Admin
		},
		{
			path: "/",
			name: "Home",
			component: Template,
			children: [
				{
					path: "search/:query",
					name: "Search",
					component: Search,
					props: true
				},

				{
					path: ":pageQuery",
					name: "Page",
					component: Query,
					props: true
				}
			]
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});

export default router;
