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
    },
    isH5: false
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
    },
    getH5: state => {
        return state.isH5
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
    },
    setH5(state, value) {
        state.isH5 = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
