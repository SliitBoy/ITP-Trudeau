import Vue from "vue";
import Vuelidate from "vuelidate";
import VueResource from "vue-resource";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "./assets/app.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "video.js";
import "video.js/dist/video-js.css";
import "videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css";
import "videojs-playlist-ui/dist/videojs-playlist-ui.css";
import { BootstrapVueIcons } from "bootstrap-vue";

Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
