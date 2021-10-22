const state = {
  metaMaskAccount: ''
}

const getters = {}

const actions = {}

const mutations = {
  setIsConnectWallet(state, value) {
    state.metaMaskAccount = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
