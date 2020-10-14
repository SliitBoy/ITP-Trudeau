<template>
<div style="background-color: #2C2F33" class="height">
<h1 style="color: aliceblue;font-family: cursive">This is Courses</h1>

  <br>
  <br>
  <router-link to="/CourseList" tag="ui-button" class="nav-item" activeClass="active">
  <b-button variant="outline-info">Course List </b-button>
  </router-link>

  <br>
</div>
</template>

<style>

h1{
  padding-left: 1em;
    padding-top: 1em;
    color:black; 
}

.height{

    height: 100vh;
    
}
</style>
