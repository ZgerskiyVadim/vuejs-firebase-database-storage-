import Vue from 'vue'
import Vuex from 'vuex'
import actions from './vuex/action'
import mutations from './vuex/mutation'
import getters from './vuex/getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    storageRef: '',
    clubs: []
  },
  actions,
  mutations,
  getters
})