const state = {
    pageInf: {
        from: '',
        to: ''
    }
}

const getters = {
    getPageInf: state => {
        return state.pageInf
    }
}

const actions = {}

const mutations = {
    setPageInf(state, value) {
        state.pageInf = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
