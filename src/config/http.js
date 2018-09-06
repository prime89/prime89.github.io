import axios from 'axios';
import Vue from 'vue';
import mockData from '@/config/mock';
import urls from '@/config/urls';

const MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);
if (true) {console.log(mockData);
    mockData.forEach((data) => {
        mock[`on${data.method}`](data.url, data.param || {}).reply(200, data.response);
    });
}

axios.defaults.baseURL = 'https://api.example.com';
Vue.axios = axios

Object.defineProperties(Vue.prototype, {

    axios: {
        get() {
            return axios
        }
    },

    $http: {
        get() {
            return axios
        }
    },
    $url: {
        get() {
            return urls;
        }
    }

});
export default {};