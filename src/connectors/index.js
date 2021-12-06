import WalletConnectProvider from '@walletconnect/web3-provider'

export const connectors = [
  {
    id: 0,
    name: 'MetaMask',
    logo: './img/fox.png',
    connect: async () => {
      if (window.ethereum) {
        await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        return window.ethereum
      }
      return null
    },
    isInstalled: () => window.ethereum && window.ethereum.isMetaMask
  },
  {
    id: 1,
    name: 'WalletConnect',
    logo: './img/wallconnect.png',
    isInstalled: () => true,
    connect: async () => {
      try {
        const provider = await new WalletConnectProvider({
          rpc: {
            80001: 'https://rpc-mumbai.maticvigil.com'
          },
          chainId: 80001
        })
        provider.networkId = 80001
        await provider.enable()
        return provider
      } catch (error) {
        console.error(error)
        return null
      }
    }
  }
]
