import { toyService } from "../../services/toyService.js";

export default {
  state: {
    toys: [],
    filterBy: {
      inStock: null,
      name: "",
    },
  },
  getters: {
    toysForDisplay(state) {
      var filteredToys = state.toys;
      if (state.filterBy.inStock !== null) {
        const status = state.filterBy.inStock === "true";
        filteredToys = state.toys.filter((toy) => toy.inStock === status);
      }

      if (state.filterBy.name) {
        const regex = new RegExp(state.filterBy.name, "i");
        filteredToys = filteredToys.filter((toy) => regex.test(toy.name));
      }

      return filteredToys;
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
    removeToy(state, { id }) {
      const idx = state.toys.findIndex((toy) => toy._id === id);
      state.toys.splice(idx, 1);
    },
    addToy(state, { savedToy }) {
      state.toys.unshift(savedToy);
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    removeToy({ commit }, { id }) {
      return toyService.remove(id).then(() => {
        commit({ type: "removeToy", id });
      });
    },

    loadToys({ commit }) {
      return toyService.query().then((toys) => {
        commit({ type: "setToys", toys });
      });
    },
    save({ commit }, { toy }) {
      return toyService.save(toy);
    },
    addToy({ commit }, { toy }) {
      return toyService.save(toy).then((savedToy) => {
        commit({ type: "addToy", savedToy: savedToy.data });
      });
    },
    filter({ commit }, { filterBy }) {
      commit({ type: "setFilter", filterBy });
    },
  },
};
