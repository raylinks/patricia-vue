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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
