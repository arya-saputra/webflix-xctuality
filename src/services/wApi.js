import axios from 'axios';

export default {
  generateApi() {
    const api = axios.create({
      baseURL: 'https://streaming-availability.p.rapidapi.com',
      headers: {
        'x-rapidapi-key': '59812eadd1mshd57b527719597b6p12ebb1jsnb1ed74d6bb07',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      },
      proxyHeaders: false,
      credentials: false,
    });

    return api;
  },
};
