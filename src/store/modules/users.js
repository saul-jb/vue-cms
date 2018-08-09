import client from "@/libs/client";

const userService = client.service("services/users");

export default {
	namespaced: true,

	state: {
		id: null,
		username: null,
		email: null
	},

	getters: {

	},

	actions: {
		createUser ({dispatch}, {username, password, email}) {
			return new Promise((resolve, reject) => {
				userService.create({
					email,
					username,
					password
				}).then(res => {
					return dispatch("signIn", {email, password});
				}).then(res => {
					resolve(res);
				}).catch(err => {
					reject(err);
				});
			});
		},

		signIn ({commit}, {email = null, password = null}) {
			return new Promise((resolve, reject) => {
				const payload = (email && password)
					? {strategy: "local", email, password} : {};

				// Sign in with email and password
				client.authenticate(payload).then(res => {
					commit("setUserDetails", res.user);

					resolve(res);
				}).catch(err => {
					reject(err);
				});
			});
		},

		signOut ({commit}) {
			commit("setUserDetails", {username: null, email: null, id: null});

			client.logout();
		},

		findUsers (context, criteria = {}) {
			return userService.find({query: criteria});
		},

		getUser (context, id) {
			return userService.get(id);
		}
	},

	mutations: {
		setUserDetails (state, user) {
			state.id = user._id;
			state.username = user.username;
			state.email = user.email;
		}
	}
};
