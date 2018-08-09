import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./globals/filters";

export default new Vue({
	el: "#app",
	render: h => h(App),
	store,
	router
});
