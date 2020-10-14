<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="sectionTitle">Courses Administrated</h2>
      <section class="courseContainers">
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 1</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 2</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 3</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 4</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 5</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 6</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 7</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 8</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 9</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner2.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 10</label>
          </div>
        </button>
        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner1.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 9</label>
          </div>
        </button>

        <button href="#" class="courseBtn">
          <div class="course">
            <img src="@/images/banner3.png" width="147.4" height="59.8px" />
            <label class="courseLabels">Course 10</label>
          </div>
        </button>
      </section>

      <h2 class="sectionTitle">Submissions Management</h2>

      <div class="innerContainer">
        <!--grading in progress section-->
        <h3 class="labels">Grading in Progress</h3>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Mark as Complete</button>
          <button class="submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Mark as Complete</button>
          <button class="submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Mark as Complete</button>
          <button class="submissionMgmtBtn">Mark as Ungraded</button>
        </div>

        <hr />

        <!--Ungraded assignments section-->
        <h3 class="labels">Ungraded Assignments</h3>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Grading in Progress</button>
          <button class="submissionMgmtBtn">Mark as Complete</button>
        </div>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Grading in Progress</button>
          <button class="submissionMgmtBtn">Mark as Complete</button>
        </div>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Grading in Progress</button>
          <button class="submissionMgmtBtn">Mark as Complete</button>
        </div>

        <hr />

        <!--Grading complete section-->
        <h3 class="labels">Grading Complete</h3>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Grading in Progress</button>
          <button class="submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Grading in Progress</button>
          <button class="submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class="wrapListing">
          <p class="listing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="submissionMgmtBtn">Grading in Progress</button>
          <button class="submissionMgmtBtn">Mark as Ungraded</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #2c2f33;
  color: white;
  padding-left: 5px;
}
.courseContainers {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
}
.sectionTitle {
  text-align: center;
  padding-left: 80px;
}
hr {
  background-color: white;
}
.submissionMgmtBtn {
  background-color: #fca311;
  color: white;
  padding: 0px;
  margin: 1px 0;
  border: none;
  height: 55%;
  width: 70%;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}
.submissionMgmtBtn:hover {
  background-color: #fb4f;
}
.wrapListing {
  display: grid;
  grid-gap: 5px;
  margin-left: -90px;
  grid-template-areas: "listing listing . submissionMgmtBtn submissionMgmtBtn"; /*-->  breaks when minimized*/
}
.course {
  padding-top: 15px;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 0px;
  text-align: center;
}
.courseBtn {
  background-color: #2c2f33;
  padding: 0px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: white;
}
.wrapper {
  margin-right: -128px;
}
.innerContainer {
  padding-left: 30px;
  margin-right: -50px;
}
.courseBtn:hover {
  background-color: #525252;
}
.courseLabels {
  color: white;
  margin-top: 5px;
  font-size: 15px;
}
.labels {
  color: white;
  margin-left: -15px;
  margin-bottom: 20px;
}
</style>
