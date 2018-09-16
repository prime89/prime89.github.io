import axios from '../config/http';
import urls from '@/config/urls';

let loginUser = localStorage.getItem('loginUser');
try {
    loginUser = JSON.parse(loginUser) || {};
} catch(e) {
    loginUser = {};
}


const state = {
    user: loginUser,
    role: loginUser.role || '',
    passwdResetted: !!loginUser.passwdResetted,
    elevators: [],
    isFullScreen: false,//是否全屏
};

const getters = {

};

const mutations = {
    setUser (state, user) {
        state.user = user;
        state.passwdResetted = user.passwdResetted;
        state.role = user.role;
    },
    resetPasswd (state, flag) {
        (state.user || []).passwdResetted = flag;
        state.passwdResetted = flag;
        localStorage.setItem('loginUser', JSON.stringify(state.user));
    },
    setScreenSize (state, flag) {
        state.isFullScreen = flag;
    },
    fullScreen (state) {
        state.isFullScreen = true;        
    },
    shrink (state) {
        state.isFullScreen = false;
    }
};

const actions = {
    resetPasswd ({commit, state}, {}) {
        return axios.post(urls.RESET_PASSWORD, {}).then((response) => {
            commit('resetPasswd', true);
            return response.data;
        });
    },
    initWebsocket ({commit, state}, {}) {
        const wsuri = '';
        let websock = state.websock = new WebSocket(wsuri);
        ws.onopen = function () {
        // 使用 send() 方法发送数据
        ws.send("发送数据");
            alert("数据发送中...");
        };
        
        // 接收服务端数据时触发事件
        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            alert("数据已接收...");
        };
        
        // 断开 web socket 连接成功触发事件
        ws.onclose = function () {
            alert("连接已关闭...");
        };
    },
};


export default {
    state,
    getters,
    mutations,
    actions,
};