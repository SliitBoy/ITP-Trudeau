import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Notes from "../views/Notes.vue";
import Course from "../views/Course.vue";
import FileManager from "../views/FileManager.vue";
import Forum from "../views/Forum.vue";
import Analytics from "../views/Analytics.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/video",
    name: "Video",
    component: Video
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes
  },
  {
    path: "/course",
    name: "Course",
    component: Course
  },
  {
    path: "/filemanager",
    name: "FileManager",
    component: FileManager
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
