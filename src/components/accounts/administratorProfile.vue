<template>
    <div class = "mainContainer">
        <h2>[Administrator Name]</h2>
        <div class = "container">
        <div class = "settingsWrapper">
            <div class = "topLeft">
                <router-link to = "/createStudent">
                    <button class = "adminFieldBtn">
                        <div class = "adminField">
                            <img src="@/images/banner1.png" width = 374.75px height = 143.75px>
                            <h5>Create Student Account</h5>
                        </div>
                  </button>
                </router-link>

            </div>
            <div class = "topRight">
                <router-link to = "/createStaff">
                    <button class = "adminFieldBtn">
                        <div class = "adminField">
                            <img src="@/images/banner3.png" width = 374.75px height = 143.75px>
                            <h5>Create Staff Account</h5>
                        </div>
                </button>
                </router-link>
                
            </div>
            <div class = "bottomLeft">
               <router-link to = "/listStudents">
                    <button href = "#" class = "adminFieldBtn">
                        <div class = "adminField">
                            <img src="@/images/banner2.png" width = 374.75px height = 143.75px>
                            <h5>Manage Existing Student Account</h5>
                        </div>
                    </button> 
                </router-link>  
            </div>

            <div class = "bottomRight">
                <button href = "#" class = "adminFieldBtn">
                    <div class = "adminField">
                        <img src="@/images/banner1.png" width = 374.75px height = 143.75px>
                         <h5>Manage Existing Staff Account</h5>
                    </div>
                </button>
               
            </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.mainContainer{
    margin-right: -72px;
    background-color: #2c2f33;
    margin-left: -50px;
    padding-left:75px;
    color: white;
    padding-top:25px;
}
.container{
    margin-left: -50px;
    padding-left: 50px;
    padding-top: 70px;
    padding-bottom: 142px;
    background-color:#2c2f33;
}

.settingsWrapper{
    min-height: 50vh;
    display:grid;
    grid-template-areas: 
        'topLeft topRight'
        'bottomLeft bottomRight';
}

.topLeft{
    /*background-color: rgb(128, 27, 9);*/
    margin-left:250px;
    padding-right: 50px;
    margin-bottom:50px;
    
}

.topRight{
    /*background-color: rgb(105, 83, 55);*/
    grid-template-areas: 'innerTopRight';
    margin-right:250px;
    margin-bottom: 50px;
}

.bottomLeft{ 
    /*background-color: rgb(11, 60, 94);*/
    margin-left:250px;
}

.bottomRight{
    /*background-color: rgb(87, 7, 60);*/
    margin-right:250px;
}







/*ADJUST TO FILL ENTIRE COLORED AREA*/
.adminField {
    padding-top: 25px;
    padding-left: 3px;
    padding-right:3px;
    padding-bottom: 0px;
    text-align: center;
}

.adminFieldBtn{
    background-color: #2c2f33;
    padding: 0px;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: white;
}

.adminFieldBtn:hover{
    background-color: #525252;
}


</style>