import Vue from "vue";
import Vuelidate from "vuelidate";
import VueResource from "vue-resource";
import GAuth from "vue-google-oauth2";
import VueYoutube from "vue-youtube";

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
//import vuetify from "./plugins/vuetify";

const gauthOption = {
  clientId:
    "532743712672-h50pnv6ldhkcljb6hgirvn44drapcj1f.apps.googleusercontent.com",
    //"919384298243-vnge560vevq2nt6jbtcru8quovdp2gkr.apps.googleusercontent.com",
  prompt: "select_account"
};

Vue.use(GAuth, gauthOption);
Vue.use(VueYoutube);
Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  //vuetify,
  render: h => h(App)
}).$mount("#app");
