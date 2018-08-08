import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import pages from "./modules/pages";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		users,
		pages
	},

	state: {

	},

	getters: {

	},

	actions: {

	},

	mutations: {

	}
});
