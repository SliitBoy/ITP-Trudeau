<template>
  <div style="background-color: #2C2F33;" class="vh-100">
    <app-header></app-header>
    <router-view></router-view>
    <app-sidebar></app-sidebar>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default {
  components: {
    appHeader: Header,
    appSidebar: Sidebar
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
