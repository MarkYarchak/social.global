import Vue from 'vue';
import './plugins/vuetify';
import Vuelidate from 'vuelidate';
import GlobalSocial from './NoteMePro';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'beautify-scrollbar/dist/index.css';
import V2LazyList from 'v2-lazy-list';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(V2LazyList);

new Vue({
  router,
  store,
  render: h => h(GlobalSocial),
}).$mount('#app');
