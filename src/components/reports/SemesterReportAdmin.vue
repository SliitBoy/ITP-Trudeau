<template>
  <div class="bg">
    <div>
      <h3>Semester Report</h3>
      <br />
      <label> ID Number : </label>
      <label> {{ ITNumber }} </label>
      <br />
      <label> Name of Student : </label>
      <label> {{ StudentName }} </label><br /><br />
      <div class="outline">
        <label> Year {{ Year }} Semester {{ Semester }} </label>
        <br />
        <table table border="1">
          <tr>
            <th>Course</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>*********************</td>
            <td>*</td>
          </tr>
          <tr>
            <td>*********************</td>
            <td>*</td>
          </tr>
          <tr>
            <td>*********************</td>
            <td>*</td>
          </tr>
          <tr>
            <td>*********************</td>
            <td>*</td>
          </tr>
          <tr>
            <td>*********************</td>
            <td>*</td>
          </tr>
        </table>

        <br />
        <div class="bottom">
          <div class="right">
            <router-link
              to="/updateReport"
              tag="ui-bitton"
              class="nav-item"
              activeClass="active"
            >
              <b-button variant="warning">Edit Details</b-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      ITNumber: "IT19203386",
      StudentName: "Thanuri Piyaratne",
      Year: "02",
      Semester: "02"
    };
  }
};
</script>
<style>
label {
  font-size: 20px;
}

.outline {
  border: 3px solid black;
}
h3 {
  text-align: center;
}
.right {
  position: absolute;
  right: 0px;
  width: 300px;
  padding: 10px;
}
.bg {
  background-color: #2c2f33;
}
.bottom {
  background-color: #2c2f33;
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  margin-bottom: 0%;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
