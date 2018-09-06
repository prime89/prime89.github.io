window.useMock = true;

import 'babel-polyfill'
import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import store from './config/store'
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './styles/common.css';
import './config/http';

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    //TODO 判断是否第一次登陆
    if (!store.state.user.username && to.path !== '/') {
        return next({path: '/'});
    }
    else if (!store.state.passwdResetted && to.path !== '/resetPasswd' && to.path !== '/') {
        return next({path: '/resetPasswd'});
    }
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});