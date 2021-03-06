import Vue from "vue";
import App from "./App.vue";
import appPie from "./appPie.vue"
import router from "./router";

import BootstrapVue  from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  router,
  render: (h) => h(appPie),
}).$mount("#pie");

