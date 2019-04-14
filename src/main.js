import Vue from 'vue';
import './plugins/vuetify';
import Vuelidate from 'vuelidate';
import V2LazyList from 'v2-lazy-list';
import NProgress from 'nprogress';
import NoteMePro from './NoteMePro';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'beautify-scrollbar/dist/index.css';
import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(V2LazyList);

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(NoteMePro),
}).$mount('#app');
