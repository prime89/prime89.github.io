let loginUser = localStorage.getItem('loginUser');
try {
    loginUser = JSON.parse(loginUser) || {};
} catch(e) {
    loginUser = {};
}

//

const state = {
    user: loginUser,
    passwdResetted: !!loginUser.passwdResetted,
    elevators: [],
};

const getters = {

};

const mutations = {
    setUser (state, user) {
        state.user = user;
        state.passwdResetted = user.passwdResetted;
    },
    resetPasswd (state, flag) {
        (state.user || []).passwdResetted = flag;
        state.passwdResetted = flag;
        localStorage.setItem('loginUser', JSON.stringify(state.user));
    }
};

const actions = {
    resetPasswd ({commit}, {}) {
        return new Promise((resolve, reject) => {
            commit('resetPasswd', true);
            resolve({error: 0, message: 'ok'});
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