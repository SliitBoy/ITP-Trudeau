<template>
  <div class="mainContainer">
    <!-- <h2>[Administrator Name]</h2> -->
    <div class="container">
      <div class="adminWrapper">
        <div class="topLeft">
          <router-link to="/createStudent">
            <button class="adminFieldBtn">
              <div class="adminField">
                <img
                  src="@/images/CreateStudents.png"
                  width="451.8px"
                  height="265.95px"
                />
              </div>
            </button>
          </router-link>
        </div>
        <div class="topRight">
          <router-link to="/createStaff">
            <button class="adminFieldBtn">
              <div class="adminField">
                <img
                  src="@/images/createStaff.png"
                  width="451.8px"
                  height="265.95px"
                />
              </div>
            </button>
          </router-link>
        </div>
        <div class="bottomLeft">
          <router-link to="/listStudents">
            <button href="#" class="adminFieldBtn">
              <div class="adminField">
                <img
                  src="@/images/maintainStudents.png"
                  width="451.8px"
                  height="265.95px"
                />
              </div>
            </button>
          </router-link>
        </div>

        <div class="bottomRight">
          <router-link to="/listStaff">
            <button href="#" class="adminFieldBtn">
              <div class="adminField">
                <img
                  src="@/images/maintainStaff.png"
                  width="451.8px"
                  height="265.95px"
                />
              </div>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  margin-right: 0px;
  background-color: #2c2f33;
  margin-left: -50px;
  padding-left: 75px;
  color: white;
  padding-left: 120px;
  padding-top: 30px;
}
.container {
  margin-left: -50px;
  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 138px;
  background-color: #2c2f33;
}
.adminWrapper {
  margin-left: -50px;
  min-height: 50vh;
  display: grid;
  grid-template-areas:
    "topLeft topRight"
    "bottomLeft bottomRight";
}
.topLeft {
  /*background-color: rgb(128, 27, 9);*/
  margin-left: 250px;
  padding-right: 50px;
  margin-bottom: 50px;
}
.topRight {
  /*background-color: rgb(105, 83, 55);*/
  grid-template-areas: "innerTopRight";
  margin-right: 250px;
  margin-bottom: 50px;
}
.bottomLeft {
  /*background-color: rgb(11, 60, 94);*/
  margin-left: 250px;
}
.bottomRight {
  /*background-color: rgb(87, 7, 60);*/
  margin-right: 250px;
}
/*ADJUST TO FILL ENTIRE COLORED AREA*/
.adminField {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-align: center;
}
.adminFieldBtn {
  background-color: #2c2f33;
  padding: 0px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: white;
  margin-top: -5px;
}
.adminFieldBtn:hover {
  background-color: #525252;
}
</style>