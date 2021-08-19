import wApiHome from "@/services/wApiHome";

const state = {
    data_set: [],
};

const mutations = {
    appendDataState(state, data) {
        state.data_set.push(data);
    },
    setDataState(state, data) {
        state.data_set = data;
    },
};

const actions = {
    async getPopular({commit}, req) {
        const res = await wApiHome.loadByCategory(req);
        // const data = {
        //     'genre': 'popular',
        //     data: res.data.results,
        // };
        commit('setDataState', res.data.results);
    },
    async getHero({commit}, req) {
        const res = await wApiHome.loadByCategory(req);
        const data = {
            'genre': 'hero',
            data: res.data.results,
        };
        commit('appendDataState', data);
    },
    async getAction({commit}, req) {
        const res = await wApiHome.loadByCategory(req);
        const data = {
            'genre': 'action',
            data: res.data.results,
        };
        commit('appendDataState', data);
    },
    async getDrama({commit}, req) {
        const res = await wApiHome.loadByCategory(req);
        const data = {
            'genre': 'drama',
            data: res.data.results,
        };
        commit('appendDataState', data);
    },
    async getSeries({commit}, req) {
        const res = await wApiHome.loadByCategory(req);
        const data = {
            'genre': 'series',
            data: res.data.results,
        };
        commit('appendDataState', data);
    },
    getHome({dispatch}) {
        dispatch('wStoreCore/showLoading', '', { root: true });
        try {

            dispatch('wStoreCore/hideLoading', '', { root: true });
            const conf_popular = 'country=us&service=netflix&page=1&type=series';
            dispatch('getPopular', conf_popular);

            // const conf_hero = 'newdata=2021-08-17&limit=10';
            // dispatch('getHero', conf_hero)

            // const conf_action = 'genrelist=8985&limit=10';
            // dispatch('getAction', conf_action);

            // const conf_drama = 'genrelist=5763&limit=10';
            // dispatch('getDrama', conf_drama);

            // const conf_series = 'newdata=2021-08-01&limit=10';
            // dispatch('getDrama', conf_series);
        } catch (err) {
            dispatch('wStoreCore/hideLoading', '', { root: true });
            dispatch('wStoreCore/showError', '', { root: true });
        }
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}