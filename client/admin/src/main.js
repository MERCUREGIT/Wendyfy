import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import InputTag from 'vue-input-tag'
import store from './store'
import Routes from './Routes'
import '../public/css/bootstrap.min.css'
import VueCookies from 'vue-cookies'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(VueRouter);
Vue.use(VueSession);
Vue.component('input-tag', InputTag)
Vue.use(SuiVue);
Vue.use(VueToast);

const router = new VueRouter({
  routes : Routes,
  mode : 'history'
})

new Vue({
  render: h => h(App),
  router : router,
  store: store,
  beforeCreate(){this.$store.commit('initialiseStore');}
}).$mount('#app')
