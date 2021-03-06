import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import VideoPlayer from "../components/video/videoPlayer";
import ViewPlaylist from "../components/video/viewPlaylist.vue";
import SearchVideos from "../components/video/searchVideos.vue";
import VideoReport from "../components/video/videoReport.vue";
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
import createStudent from "../components/accounts/createStudents.vue";
import createStaff from "../components/accounts/createStaff.vue";
import listStudents from "../components/accounts/listingStudents.vue";
import listStaff from "../components/accounts/listingStaff.vue";
import forgotPassword from "../components/accounts/forgotPassword.vue";
import emailSubmitted from "../components/accounts/emailSubmitted.vue";

import ForumDisplay from "../components/forum/ForumDisplay.vue";

import NewCourse from "../components/course/NewCourse.vue";
import EditCourse from "../components/course/EditCourse.vue";
import CourseList from "../components/course/CourseList.vue";
import StudentList from "../components/course/StudentList.vue";

import CreateReport from "../components/reports/CreateReport.vue";
import UpdateReport from "../components/reports/UpdateReport.vue";
import ExamAnalysis from "../components/Analysis/ExamAnalysis.vue";
import SemesterReportAdmin from "../components/reports/SemesterReportAdmin.vue";
import SemesterReport from "../components/reports/SemesterReport.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/video",
    name: "Video",
    component: Video
  },
  //remove this link
  {
    path: "/videoplayer/:id",
    name: "VideoPlayer",
    component: VideoPlayer
  },
  {
    path: "/SearchVideos",
    name: "SearchVideos",
    component: SearchVideos
  },
  {
    path: "/videoReport",
    name: "VideoReport",
    component: VideoReport
  },
  {
    path: "/viewPlaylist/:id",
    name: "ViewPlaylist",
    component: ViewPlaylist
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
    path: "/forumDisplay",
    name: "ForumDisplay",
    component: ForumDisplay
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
  },
  {
    path: "/listStaff",
    name: "listStaff",
    component: listStaff
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: forgotPassword
  },
  {
    path: "/emailSubmitted",
    name: "emailSubmitted",
    component: emailSubmitted
  },
  {
    path: "/createReport",
    name: "CreateReport",
    component: CreateReport
  },

  {
    path: "/UpdateReport",
    name: "UpdateReport",
    component: UpdateReport
  },
  {
    path: "/ExamAnalysis",
    name: "ExamAnalysis",
    component: ExamAnalysis
  },
  {
    path: "/SemesterReportAdmin",
    name: "SemesterReportAdmin",
    component: SemesterReportAdmin
  },
  {
    path: "/SemesterReport",
    name: "SemesterReport",
    component: SemesterReport
  },
  {
    path: "/NewCourse",
    name: "NewCourse",
    component: NewCourse
  },

  {
    path: "/EditCourse",
    name: "EditCourse",
    component: EditCourse
  },
  {
    path: "/CourseList",
    name: "CourseList",
    component: CourseList
  },
  {
    path: "/StudentList",
    name: "StudentList",
    component: StudentList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
