import Vue from 'vue';
import Vuex from 'vuex';

import wStoreCore from './wStoreCore';
import wStoreHome from './wStoreHome';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    wStoreCore,
    wStoreHome,
  },
  strict: debug,
})
