export default {
  state: {
    loggedInUser: null,
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user;
    },
  },
  actions: {
    updateLoggedInUser({ commit }, { user }) {
      commit({ type: "setLoggedInUser", user });
    },
  },
};
