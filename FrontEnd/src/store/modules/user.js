// import request from "@/utils/request";
// import Vue from 'vue';

const state = {
  user: null,
  postTypes: [],
  newTypes: [],
  mediaTypes: [],
  channelTypes: [],
  streams: [],
  isMobile: false,
  keyword: ''
};

const getters = {
  GET_USER() {
    return state.user;
  },
  getUser: state => state.user,
  getKeyword: state => state.keyword
};

const mutations = {
  SET_USER(state, data) {
    state.user = data;
  },
  SET_ISMOBILE(state, data) {
    state.isMobile = data;
  },
  SET_POST_TYPES(state, data) {
    state.postTypes = data;
  },
  SET_NEW_TYPES(state, data) {
    state.newTypes = data;
  },
  SET_STREAMS(state, data) {
    state.streams = data;
  },
  SET_MEIDA_TYPES(state, data) {
    state.mediaTypes = data;
  },
  SET_CHANNEL_TYPES(state, data) {
    state.channelTypes = data;
  },
  SET_KEYWORD(state, data) {
    state.keyword = data;
  },
  RESET_USER(state) {
    state.user = null;
  }
};

const actions = {
  setUser({ commit }, data) {
    commit('SET_USER', data);
  },
  setIsmobile({ commit }, data) {
    commit('SET_ISMOBILE', data);
  },
  setPostTypes({ commit }, data) {
    commit('SET_POST_TYPES', data);
  },
  setNewTypes({ commit }, data) {
    commit('SET_NEW_TYPES', data);
  },
  setMediaTypes({ commit }, data) {
    commit('SET_MEIDA_TYPES', data);
  },
  setChannelTypes({ commit }, data) {
    commit('SET_CHANNEL_TYPES', data);
  },
  setStreams({ commit }, data) {
    commit('SET_STREAMS', data);
  },
  setKeyword({ commit }, data) {
    commit('SET_KEYWORD', data);
  },
  resetUser({commit}) {
    commit('RESET_USER');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
