// import request from "@/utils/request";
// import Vue from 'vue';

const state = {
  menuActive: null
};

const getters = {
  GET_ACTIVE() {
    return state.menuActive;
  }
};

const mutations = {
  SET_ACTIVE(state, data) {
    state.menuActive = data;
  },
  RESET_ACTIVE(state) {
    state.menuActive = null;
  }
};

const actions = {
  setActive({ commit }, data) {
    commit('SET_ACTIVE', data);
  },
  resetActive({commit}) {
    commit('RESET_ACTIVE');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
