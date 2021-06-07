import { Module } from "vuex";

export const SET_VALUE = "SET_VALUE";

export type IHomeValue = "mini" | "small" | "medium" | "large";

interface IHomeState {
  value: IHomeValue;
}

const childStore: Module<IHomeState, {}> = {
  namespaced: true,
  state: {
    value: "medium",
  },
  mutations: {
    [SET_VALUE](state, data: IHomeValue) {
      state.value = data;
    },
  },
  actions: {
    [SET_VALUE]({ commit }, payload: IHomeValue) {
      commit(SET_VALUE, payload);
    },
  },
};

export default childStore;
