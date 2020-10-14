<template>
  <div class="bg">
    <br />
    <label class="text">{{ course }}</label>
    <div class="search">
      <b-container class="bv-example-row">
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="search"
            placeholder="Search Courses"
          ></b-form-input>
        </b-input-group>
      </b-container>
    </div>
    <br />
    <br />
    <br />
    <br />

    <div class="list">
      <br /><br />
      <table table border="1" class="tab">
        <tr>
          <th><label class="table-left">ID Number</label></th>
          <th><label class="table-left">Name</label></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>
        <tr>
          <th><br /></th>
          <th><br /></th>
        </tr>

        <tr v-for="row in allData" :key="row.name" class="table">
          <td>{{ row.student_accounts_nic }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
.text {
  font-size: 25px;
  position: absolute;
  right: 0px;
  width: 1010px;

  color: aliceblue;
  margin-top: 10px;
}
.search {
  position: absolute;
  right: 0px;
  width: 400px;
  padding: 5px;
}

.list {
  width: 75%;
  border: 5px solid white;
  margin-left: auto;
  margin-right: auto;
}

.table-left {
  color: aliceblue;
  text-align: center;
}

.tab {
  width: 75%;
  border: solid aliceblue;
  border-radius: 8px;
  border-width: 2px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      course: "Data Structures and Algorithms - IT1234",
      allData: ""
    };
  },

  methods: {
    fetchAllData: function() {
      axios
        .post("List.php", {
          action: "fetchall"
        })
        .then(function(response) {
          this.allData = response.data;
        });
    }
  },

  created: function() {
    this.fetchAllData();
  }
};
</script>
