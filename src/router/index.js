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

import settings from "../components/accounts/settings.vue";
import login from "../components/accounts/login.vue";
import profile from "../components/accounts/studentProfile.vue";
import staffProfile from "../components/accounts/staffProfile.vue";
import adminProfile from "../components/accounts/administratorProfile.vue";
import createStudent from "../components/accounts/createStudent.vue";
import createStaff from "../components/accounts/createStaff.vue";
import listStudents from "../components/accounts/listStudents.vue";


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
  },
  {
    path: "/settings",
    name: "settings",
    component: settings
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  },
  {
    path: "/staffProfile",
    name: "staffProfile",
    component: staffProfile
  },
  {
    path: "/adminProfile",
    name: "adminProfile",
    component: adminProfile
  },
  {
    path: "/createStudent",
    name: "createStudent",
    component: createStudent
  },
  {
    path: "/createStaff",
    name: "createStaff",
    component: createStaff
  },
  {
    path: "/listStudents",
    name: "listStudents",
    component: listStudents
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
