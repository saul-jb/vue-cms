import client from "@/libs/client";

const userService = client.service("users");

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
		createAccount ({commit, dispatch}, {username, password, email}) {
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

		getAccounts ({commit}, criteria) {
			return userService.find({query: criteria});
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
