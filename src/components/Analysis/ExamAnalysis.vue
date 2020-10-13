<template
  ><div class="bg">
    <label> {{ CourseName }} - {{ SubCode }} </label>
    <div class="bar">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="search"
          width="200%%"
          placeholder="Search Course"
        ></b-form-input>
      </b-input-group>
    </div>
    <br /><br />
    <label> Exam Analysis </label><br />
    <br />
    <table table border="1">
      <tr>
        <th>Quiz</th>
        <th>Total Marks</th>
        <th>Status</th>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <tr>
        <td><br /></td>
        <td><br /></td>
        <td><br /></td>
      </tr>
      <br />
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
export default {
  data: function() {
    return {
      CourseName: "Data Structures and Algorithms",
      SubCode: "IT2010"
    };
  }
};
</script>
<style>
label {
  font-size: 25px;
  color: white;
}
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  color: white;
  border: white;
}
.bg {
  background-color: #2c2f33;
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  margin-bottom: 0%;
  height: 100%;
  width: 100%;
  position: relative;
}

.bar {
  position: absolute;
  right: 0px;
  width: 400px;
}
</style>
