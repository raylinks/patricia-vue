import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import { sync} from 'vuex-router-sync'
import store from  './store/store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;

Vue.use(Vuetify)
Vue.use(VueResource);

sync(store, router)


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      return Vue.auth.isAuthenticated() ? next() : next({ path: '/login' });
  }
  if (to.matched.some(record => record.meta.forGuest)) {
      return Vue.auth.isAuthenticated() ? next({ path: '/companies' }) : next();
  }
  next();
  
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
