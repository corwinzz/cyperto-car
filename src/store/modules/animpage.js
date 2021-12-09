const state = {
    pageInf: {
        from: '',
        to: ''
    },
    isTitle: false,
    titleInf: {
        title: 'Title',
        content: 'Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track. Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track.'
    },
    pageNo: 0,
    WndSize: {
        hei: 640,
        wid: 1100
    }
}

const getters = {
    getPageInf: state => {
        return state.pageInf
    },
    getIsTitle: state => {
        return state.isTitle
    },
    getTitleInf: state => {
        return state.titleInf
    },
    getPageNo: state => {
        return state.pageNo
    },
    getWndSize: state => {
        return state.WndSize
    }
}

const actions = {}

const mutations = {
    setPageInf(state, value) {
        state.pageInf = value
    },
    setIsTitle(state, value) {
        state.isTitle = value
    },
    setTitleInf(state, value) {
        state.titleInf = value
        state.isTitle = true
    },
    setPageNo(state, value) {
        state.pageNo = value
    },
    setWndSize(state, value) {
        state.WndSize = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
