<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10">
          <router-view></router-view>
        </div>
        <div class="col-md-2" style="padding:0">
          <app-sidebar></app-sidebar>
        </div>
      </div>
    </div>
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
