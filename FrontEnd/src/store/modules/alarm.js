// import request from "@/utils/request";
// import Vue from 'vue';

const state = {
  toastAlarm: null,
  columns: []
};

const getters = {
  GET_TOAST_ALAM() {
    return state.toastAlarm;
  },
  GET_ALARM_HISTORY_HEADER() {
    return state.columns;
  }
};

const mutations = {
  SET_TOAST_ALARM(state, data) {
    state.toastAlarm = data;
  },
  RESET_TOAST_ALARM(state) {
    state.toastAlarm = null;
  },
  SET_ALARM_HISTORY_HEADER(state, data) {
    state.columns = [];
    state.columns = data;
  }
};

const actions = {
  setToastAlarm({ commit }, data) {
    commit('SET_TOAST_ALARM', data);
  },
  resetToastAlarm({commit}) {
    commit('RESET_TOAST_ALARM');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
