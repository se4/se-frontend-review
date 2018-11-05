import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import 'bulma';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN.js';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

VeeValidate.Validator.localize('zh_CN', zh_CN);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
