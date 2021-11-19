import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'
import CyberCarABI from '../plugins/CyberCarABI'
import { cyberCarContractAddr } from '../plugins/config'

Vue.use(Vuex)

const state = {
  web3: null,
  account: null,
  provider: null,
  signer: null,
  chainId: null,
  carList: []
}
const actions = {
  async connectWallet({ state }, connector) {
    if (connector && connector.isInstalled()) {
      state.provider = await connector.connect()
      if (state.provider) {
        state.web3 = new Web3(state.provider)
        state.cyberCar = new state.web3.eth.Contract(CyberCarABI, cyberCarContractAddr)
        if (connector.name === 'MetaMask') {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          state.account = accounts[0]
        } else {
          state.account = state.web3.currentProvider.accounts[0]
        }
      }
      localStorage.setItem('connector', connector.id)
      state.provider.on('disconnect', () => this.dispatch('handleDisconnect'))
    }
  },
  async disconnectWallet ({ state }) {
    if (
      state.provider &&
      state.provider?.disconnect &&
      typeof state.provider?.disconnect === 'function'
    ) {
      state.provider.disconnect()
    }
    this.dispatch('handleDisconnect')
  },
  async handleDisconnect ({ state }) {
    state.web3 = null
    state.provider = null
    state.account = null
    state.signer = null
    state.chainId = null
    state.cyberCar = null
  },
  async startMint({ state }) {
    return await state.cyberCar.methods.startMint().send({
      from: state.account
    })
  },
  /**
   * Returns if token is mintable.
   */
  async isMintable({ state }) {
    return await state.cyberCar.methods.isMintable().call()
  },
  /**
   * Get information about each car model
   * supply, minted, price.
   */
  async getMintSupply({ state }, carList) {
    // mode in class 0 must be from 0 to 3.
    const _class0 = 4
    // mode in class 1 must be from 0 to 7.
    const _class1 = 8
    let arr = []
    for (let i = 0; i < _class0; i++) {
      arr.push(await state.cyberCar.methods.getMintSupply(0, i).call())
    }
    for (let i = 0; i < _class1; i++) {
      arr.push(await state.cyberCar.methods.getMintSupply(1, i).call())
    }
    state.carList = arr
    for (let i = 0; i < 12; i++) {
      carList[i].total = arr[i].supply
      carList[i].rest = arr[i].minted
      carList[i].fee = state.web3.utils.fromWei(arr[i].price, 'ether') + ' ETH'
    }
    return carList
  },
  /**
   * Creates a new token of class and mode. Its token ID will be automatically
   * assigned (and available on the emitted {IERC721-Transfer} event), and the token
   * URI autogenerated based on the base URI passed at construction.
   *
   * Requirements:
   *
   * - the caller must pay for mint.
   */
  async mint({ state }, value, _class, _mode) {
    // eslint-disable-next-line new-cap
    const _value = state.web3.utils.toWei(String(value), 'ether')
    const gasPrice = await state.web3.eth.getGasPrice()
    const estimateGas = await state.cyberCar.methods.mint(_class, _mode).estimateGas({
      from: state.account,
      value: _value
    })
    return await state.cyberCar.methods.mint(_class, _mode).send({
      from: state.account,
      gas: estimateGas,
      gasPrice,
      value: _value
    })
  },
  /**
   * Returns cars of owner.
   */
  async getCarsByOwner({ state }) {
    return await state.cyberCar.methods.getCarsByOwner(state.account).call()
  },
  /**
   * Returns car of tokenId.
   */
  async getCar({ state }, tokenId) {
    return await state.cyberCar.methods.getCar(tokenId).call()
  }
}
const mutations = {}
const store = new Vuex.Store({
  modules: {
  },
  actions,
  state,
  mutations
})

export default store
