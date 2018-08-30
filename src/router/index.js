import Vue from "vue";
import Router from "vue-router";

import store from "@/store";

import Login from "@/pages/page-login";

import AdminTemplate from "@/pages/page-admin-template/index";
import AdminOverview from "@/pages/page-admin-template/page-admin-overview";
import AdminPages from "@/pages/page-admin-template/page-admin-pages";
import AdminUsers from "@/pages/page-admin-template/page-admin-users";
import AdminPageEdit from "@/pages/page-admin-template/page-admin-page-edit";

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
					name: "AdminOverview",
					meta: { requiresAuth: true },
					component: AdminOverview
				},
				{
					path: "pages",
					name: "AdminPages",
					meta: { requiresAuth: true },
					component: AdminPages
				},
				{
					path: "page/edit/:pageId",
					name: "AdminPageEdit",
					meta: { requiresAuth: true },
					component: AdminPageEdit,
					props: true
				},
				{
					path: "users",
					name: "AdminUsers",
					meta: { requiresAuth: true },
					component: AdminUsers
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
	if (to.meta.requiresAuth && !store.state.users.id) {
		// Needs auth and not authenticated
		next({ name: "Login" });
	} else {
		next();
	}
});

export default router;
