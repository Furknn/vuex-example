import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: { count: 0 },
  getters: {
    countInK(state) {
      return state.count * 1000;
    }
  },
  mutations: {
    addToCount(state, payload) {
      state.count += payload;
    }
  },
  actions: {
    userDecreased(context, payload) {
      context.commit("addToCount", -1);
    },
    userIncreased(context, payload) {
      context.commit("addToCount", 1);
    }
  }
});
export default store;
