import { createStore } from "vuex";
import toyStore from "./modules/toyStore.js";
import userStore from "./modules/userStore.js";

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    toyStore,
    userStore,
  },
});

export default store;
