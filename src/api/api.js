import axios from 'axios';

const endpoint = 'http://httpbin.org';

export default {
  get(url, options) {
    return axios.get(endpoint + url, options)
      .catch(console.warn);
  },
  post(url, body, options) {
    return axios.post(endpoint + url, body, options)
      .catch(console.warn);
  },
};
