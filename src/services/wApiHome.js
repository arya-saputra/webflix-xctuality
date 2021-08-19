import wApi from './wApi';

export default {
    loadByCategory(req) {
        const api = wApi.generateApi();
        return api.get(`/search/basic?${ req }`);
    },
}