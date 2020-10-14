<template>
  <div class="container">
    <div class="innerContainer1">
      <h2 class="sectionTitle">Submissions Management</h2>
      <br />
      <!--upcoming submissions section-->
      <h3>Upcoming Submissions</h3>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Add Submission</button>
      </div>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Add Submission</button>
      </div>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Add Submission</button>
      </div>

      <hr />
      <!--separator-->

      <!--overdue submissions section-->
      <h3>Overdue Submissions</h3>

      <div class="wrapListing">
        <p class="listing">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Add Submission</button>
      </div>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Add Submission</button>
      </div>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Add Submission</button>
      </div>

      <hr />
      <!--separator-->

      <!--completed assignment listing-->
      <h3>Completed Assignments</h3>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Make Changes to Submission</button>
      </div>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Make Changes to Submission</button>
      </div>

      <div class="wrapListing">
        <p class="listing">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="submissionMgmtBtn">Make Changes to Submission</button>
      </div>

      <br /><br />
    </div>

    <div class="wrapper">
      <h2 class="sectionTitle">Enrolled Courses</h2>
      <section class="courseContainers">
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="149.9px" height="57.5px" />
            <h6>Course 1</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.2.9px" height="59.5px" />
            <h6>Course 2</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4px" height="59.8px" />
            <h6>Course 3</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.2.9px" height="59.5px" />
            <h6>Course 4</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="149.9px" height="57.5px" />
            <h6>Course 5</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.2.9px" height="59.5px" />
            <h6>Course 6</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4px" height="59.8px" />
            <h6>Course 7</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="149.9px" height="57.5px" />
            <h6>Course 8</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4px" height="59.8px" />
            <h6>Course 9</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.2.9px" height="59.5px" />
            <h6>Course 10</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4px" height="59.8px" />
            <h6>Course 11</h6>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="147.2.9px" height="59.5px" />
            <h6>Course 12</h6>
          </div>
        </button>
      </section>
    </div>
  </div>
</template>

<style>
.container {
  color: white;
  background-color: #2c2f33;
}

.innerContainer1 {
  margin-left: -205px;
  padding-left: 150px;
  background-color: #2c2f33;
  margin-right: -204px;
  padding-right: 131px;
  margin-top: -80px;
  padding-top: 80px;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  background-color: #2c2f33;
  color: white;
  margin-left: -210px;
  padding-left: 80px;
  margin-right: -204px;
  padding-right: 100px;
}

.courseContainers {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #2c2f33;
  color: white;
  padding-left: 20px;
}

.sectionTitle {
  text-align: center;
  background-color: #2c2f33;
  color: white;
  margin-top: 70px;
}

.course {
  padding-top: 25px;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 0px;
  color: white;
  text-align: center;
}

.wrapListing {
  margin-left: -100px;
  display: grid;
  grid-gap: 5px;
  padding-left: 160px;
  /*grid-template-areas: 'listing submissionMgmtBtn' -->  breaks when minimized*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #2c2f33;
  color: white;
}

.submissionMgmtBtn {
  background-color: #fca311;
  color: white;
  padding: 0px;
  margin: 14px 0;
  border: none;
  width: 60%;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}

.submissionMgmtBtn:hover {
  background-color: #fb4f;
}

.courseBtn {
  background-color: #2c2f33;
  padding: 15px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 4px;
  line-height: 1.4;
  color: white;
}

.courseBtn:hover {
  background-color: #525252;
}

hr {
  background-color: white;
}
</style>
