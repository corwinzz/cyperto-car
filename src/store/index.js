import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'

Vue.use(Vuex)

const state = {}
const actions = {}
const mutations = {}
const store = new Vuex.Store({
  modules: {
    home
  },
  actions,
  state,
  mutations
})

export default store
