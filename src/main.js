import Vue from 'vue';
import './plugins/vuetify';
import GlobalSocial from './GlobalSocial';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(GlobalSocial),
}).$mount('#app');
