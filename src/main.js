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
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from 'vue-textarea-autosize';

Vue.use(VueTextareaAutosize)

import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBtLwpWICP97nrfMAdKPxZ2aP7xLd-yd4I",
  authDomain: "trudeau-sidebar.firebaseapp.com",
  databaseURL: "https://trudeau-sidebar.firebaseio.com",
  projectId: "trudeau-sidebar",
  storageBucket: "trudeau-sidebar.appspot.com",
  messagingSenderId: "203941630351",
  appId: "1:203941630351:web:d0eaf2485ad7360b2e3bfa"
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
