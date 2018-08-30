import client from "@/libs/client";

const pageService = client.service("services/pages");

/*
type: { type: String },
title: { type: String, required: true },
content: { type: String },
author: { type: Schema.Types.ObjectId, ref: "users", required: true },
editors: [{ type: Schema.Types.ObjectId, ref: "users" }]
*/

export default {
	namespaced: true,

	state: {

	},

	getters: {

	},

	actions: {
		findPages (context, criteria = {}) {
			return pageService.find({query: criteria});
		},

		getPage (context, id) {
			return pageService.get(id);
		},

		createPage (context) {
			return pageService.create({
				type: "page",
				title: "test page 1",
				content: "<h1>some</h1><b>formatted</b><br />content!",
				author: "5b6a27be36196f473b226814"
			});
		},

		updatePage (context, {id, page}) {
			return pageService.update(id, page);
		}
	},

	mutations: {

	}
};
