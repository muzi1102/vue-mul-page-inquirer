/*
 * @Author: hucheng
 * @Date: 2020-05-10 17:05:56
 * @Description: here is des
 */
/* eslint-disable no-new */
import Vue from 'vue';
import App from './index.vue';
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
