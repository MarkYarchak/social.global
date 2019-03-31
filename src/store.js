import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import state from './store/state';
import getters from './store/getters';
import mutations from './store/mutations';
import actions from './store/actions';
import mutationstypes from './store/mutations-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  mutationstypes,
  plugins: [createPersistedState()],
});
