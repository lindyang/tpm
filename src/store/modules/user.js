import api from '@/api';


const state = {
  user: {},
};


const getters = {
  user: state => state.user,
  isLogin: state => Object.keys(state.user).length > 0
};


const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};


const actions = {
  async login({ commit }, user) {
    console.log("================ login =========");
    console.log(api)
    const res = await api.user.login(user);
    console.log("===== logi goon =========");
    commit('SET_USER', res.data);
  },
  async logout({ commit }) {
    await api.user.logout();
    commit('SET_USER', {});
  },
  async currentUser({ commit }) {
    const res = await api.user.currentUser();
    commit('SET_USER', res.data || {});
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
