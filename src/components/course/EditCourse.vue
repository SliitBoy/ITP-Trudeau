<template>
  <div>
    <br />
    <div class="bg">
      <div>
        <h3>Edit Course</h3>
        <br />
        <table class="tab">
          <tr>
            <td colspan="2">
              <b-form-group
                id="input-group-2"
                label="Course Name"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="CourseName"
                  required
                  placeholder="Enter Course Name"
                ></b-form-input>
              </b-form-group>
            </td>
          </tr>
          <tr>
            <td>
              <b-form-group
                id="input-group-2"
                label="Course Code"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="CourseCode"
                  required
                  placeholder="Enter Code"
                ></b-form-input>
              </b-form-group>
            </td>
          </tr>
          <tr>
            <td>
              <b-form-group
                id="input-group-2"
                label="Year"
                label-for="input-2"
                color="aliceblue"
              >
                <b-form-input
                  id="input-2"
                  v-model="Year"
                  required
                  placeholder="Enter Year"
                ></b-form-input>
              </b-form-group>
            </td>
            <td>
              <b-form-group
                id="input-group-2"
                label="Semester"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="Sem"
                  required
                  placeholder="Enter Semester"
                ></b-form-input>
              </b-form-group>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <b-form-group
                id="input-group-2"
                class="right"
                label="Lecturer in Charge"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="LecInCharge"
                  required
                  placeholder="Enter Lecturer in charge "
                ></b-form-input>
              </b-form-group>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <b-form-group
                id="input-group-2"
                class="right"
                label="Lecturer"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="Lecturer"
                  required
                  placeholder="Enter Lecturer"
                ></b-form-input>
              </b-form-group>
            </td>
          </tr>
          <tr>
            <td>
              <b-form-group
                id="input-group-2"
                class="right"
                label="Enrollement Key"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="Key"
                  required
                  placeholder="Enter Enrollement Key"
                ></b-form-input>
              </b-form-group>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
            <td>
              <br />
            </td>
            <td>
              <br />
            </td>
            <td>
              <b-button variant="outline-success" size="sm"
                >Save Changes</b-button
              >
            </td>
            <td>
              <b-button variant="outline-danger" size="sm">Delete</b-button>
            </td>
          </tr>
          <br />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.right {
  align-items: right;
}

.tab {
  margin-left: auto;
  margin-right: auto;
  color: aliceblue;
}

h3 {
  padding-left: 1em;
  padding-top: 1em;
  color: aliceblue;
}

.bg {
  background-color: #2c2f33;
  margin-top: 0px;
  margin-left: 0px;
  left: 0px;
  top: 0px;
}
</style>
