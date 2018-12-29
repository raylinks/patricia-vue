import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Auth from './Auth';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.use(Auth);

sync(store, router);


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     return Vue.auth.isAuthenticated() ? next() : next({ path: '/login' });
//   }
//   if (to.matched.some(record => record.meta.forGuest)) {
//     return Vue.auth.isAuthenticated() ? next({ path: '/companies' }) : next();
//   }
//   next();
// });

Vue.http.headers.common.Authorization = `Bearer ${Vue.auth.getToken()}`;

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/dash',
        });
      } else next();
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login',
        });
      } else next();
    } else next();
  },
);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
