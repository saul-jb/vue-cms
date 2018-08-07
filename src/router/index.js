import Vue from "vue";
import Router from "vue-router";

import Main from "@/pages/page-main";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Main
		}
	]
});

export default router;
