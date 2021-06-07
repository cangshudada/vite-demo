import { Module } from "vuex";

export const ADD_COUNT = "ADD_COUNT";

interface IChildState {
  count: number;
}

const childStore: Module<IChildState, {}> = {
  namespaced: true,
  state: {
    count: 1,
  },
  mutations: {
    [ADD_COUNT](state) {
      state.count++;
    },
  },
  actions: {
    [ADD_COUNT]({ commit }) {
      commit(ADD_COUNT);
    },
  },
};

export default childStore;
