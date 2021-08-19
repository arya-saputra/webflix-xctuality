const state = {
    loading_screen: false,
    error_screen: false,
    error_message: '',
};

const mutations = {
    showLoadingState() {
        state.loading_screen = true;
    },
    hideLoadingState() {
        state.loading_screen = false;
    },
    showErrorState(state, message) {
        state.error_screen = true;
        if (message) {
            state.error_message = message;
        }
    },
};

const actions = {
    showLoading({ commit }) {
        commit('showLoadingState');
    },
    hideLoading({ commit }) {
        commit('hideLoadingState');
    },
    showError({ commit }, message) {
        commit('showErrorState', message);
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}