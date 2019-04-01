import Vue from 'vue';
import './plugins/vuetify';
import Vuelidate from 'vuelidate';
import GlobalSocial from './GlobalSocial';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(GlobalSocial),
}).$mount('#app');
