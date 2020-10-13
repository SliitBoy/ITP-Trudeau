<template>
  <div style="background-color: #2C2F33;">
    <h3>Create Report</h3>
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
      <div><span style="padding-right: 18em">Course</span>Result</div>
      <br />
      <div class="but">
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
    </div>
    <br />
    <div class="bottom">
      <b-button class="right" variant="primary">Create Report</b-button>
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
  color: white;
}

label {
  text-align: center;
  padding-top: 1em;
  color: white;
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
  margin-bottom: 0%;
  height: 100%;
  width: 100%;
  position: relative;
}
.text {
  color: chocolate;
}

template {
  background-color: #2c2f33;
  height: 100%;
  width: 100%;
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  margin-bottom: 0%;
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
