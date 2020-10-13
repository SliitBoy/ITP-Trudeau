<template>
  <div class="bg">
    <h3>Update Report</h3>
    <br />
    <label> ID Number : </label>
    <input type="text" placeholder="Enter your ID Number" />
    <br />
    <br />
    <label> Student Name : </label>
    <input type="text" placeholder="Enter Student's Name" />
    <br />
    <br />
    <div class="centre">
      <span style="padding-right: 18em">Course</span>Result
      <br />
      <br />
      <input
        type="text"
        text
        style="margin-right:50px;"
        placeholder="Course Name"
      /><input type="text" placeholder="Result" /><br /><br />
      <input
        type="text"
        text
        style="margin-right:50px;"
        placeholder="Course Name"
      /><input type="text" placeholder="Result" /><br /><br />
      <input
        type="text"
        text
        style="margin-right:50px;"
        placeholder="Course Name"
      /><input type="text" placeholder="Result" /><br /><br />
      <input
        type="text"
        text
        style="margin-right:50px;"
        placeholder="Course Name"
      /><input type="text" placeholder="Result" /><br /><br />
      <input
        type="text"
        text
        style="margin-right:50px;"
        placeholder="Course Name"
      /><input type="text" placeholder="Result" /><br /><br />
    </div>
    <br />
    <div class="bottom">
      <div class="right">
        <b-button style="margin-right:50px;" variant="success">Update</b-button>
        <b-button style="margin-right:50px;" variant="danger">Delete</b-button>
      </div>
    </div>
  </div>
</template>
<script></script>

<style>
h3 {
  text-align: center;
  padding-top: 1em;
  color: white;
}
.centre {
  margin: auto;
  width: 50%;
}
.right {
  position: absolute;
  right: 0px;
  width: 250px;
  padding: 5px;
}

.bg {
  background-color: #2c2f33;
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  margin-bottom: 50%;
  height: 100%;
  width: 100%;
  position: relative;
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
