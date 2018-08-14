import Vue from "vue";
import Router from "vue-router";

import store from "@/store";

import Login from "@/pages/page-login";

import AdminTemplate from "@/pages/page-admin-template/index";
import Overview from "@/pages/page-admin-template/page-overview";

import Template from "@/pages/page-template/index";
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
			component: AdminTemplate,
			meta: { requiresAuth: true },
			children: [
				{
					path: "/",
					name: "Overview",
					component: Overview
				}
			]
		},
		{
			path: "/login",
			name: "Login",
			component: Login
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

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.state.user.id) {
		// Needs auth and not authenticated
		next({ name: "Login" });
	} else {
		next();
	}
});

export default router;
