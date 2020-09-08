<template>
    <div class = "container">
        <div class = "wrapper">
            <h2 class = "sectionTitle">Courses Administrated</h2>
            <section class = "courseContainers">
                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner3.png" width = 147.4 height = 59.8px>
                        <h6>Course 1</h6>
                    </div>
                </button>
                
                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner2.png" width = 147.4 height = 59.8px>
                        <h6>Course 2</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner1.png" width = 147.4 height = 59.8px>
                        <h6>Course 3</h6>
                    </div>
                </button>
                
                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner2.png" width = 147.4 height = 59.8px>
                        <h6>Course 4</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner3.png" width = 147.4 height = 59.8px>
                        <h6>Course 5</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner1.png" width = 147.4 height = 59.8px>
                        <h6>Course 6</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner2.png" width = 147.4 height = 59.8px>
                        <h6>Course 7</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner1.png" width = 147.4 height = 59.8px>
                        <h6>Course 8</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner3.png" width = 147.4 height = 59.8px>
                        <h6>Course 9</h6>
                    </div>
                </button>

                <button href = "#" class = "courseBtn">
                    <div class = "course">
                        <img src = "@/images/banner2.png" width = 147.4 height = 59.8px>
                        <h6>Course 10</h6>
                    </div>
                </button>
            </section>
            <br><br>


            <h2 class = "sectionTitle">Submissions Management</h2>

        <div class = "innerContainer">
        <!--grading in progress section-->
        <h3>Grading in Progress</h3>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Mark as Complete</button>
            <button class = "submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Mark as Complete</button>
            <button class = "submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Mark as Complete</button>
            <button class = "submissionMgmtBtn">Mark as Ungraded</button>
        </div>

        <hr>

        <!--Ungraded assignments section-->
        <h3>Ungraded Assignments</h3>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Grading in Progress</button>
            <button class = "submissionMgmtBtn">Mark as Complete</button>
        </div>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Grading in Progress</button>
            <button class = "submissionMgmtBtn">Mark as Complete</button>
        </div>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Grading in Progress</button>
            <button class = "submissionMgmtBtn">Mark as Complete</button>
        </div>

        <hr>

        <!--Grading complete section-->
        <h3>Grading Complete</h3>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Grading in Progress</button>
            <button class = "submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Grading in Progress</button>
            <button class = "submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        <div class = "wrapListing">
            <p class = "listing">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class = "submissionMgmtBtn">Grading in Progress</button>
            <button class = "submissionMgmtBtn">Mark as Ungraded</button>
        </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        background-color: #2c2f33;
        color: white;
        padding-right:5px;
        padding-left:5px;
    }
    .courseContainers{
    display:grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .sectionTitle{
    text-align: center;
    }

    hr{
    background-color: white;
    }

.submissionMgmtBtn{
    background-color: #fca311;
    color: white;
    padding: 0px;
    margin: 1px 0;
    border: none;
    height: 40%;
    width: 70%;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
}

.submissionMgmtBtn:hover{
    background-color:#fb4f;
}

.wrapListing{
    display: grid;
    grid-gap: 5px;
    margin-left:-90px;
   grid-template-areas: 'listing listing . submissionMgmtBtn submissionMgmtBtn'; /*-->  breaks when minimized*/ 
}

.course {
    padding-top: 15px;
    padding-left: 3px;
    padding-right:3px;
    padding-bottom: 0px;
    text-align: center;
}

.courseBtn{
    background-color: #2c2f33;
    padding: 0px;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: white;
}

.innerContainer{
    padding-left: 30px;
    margin-right: -80px;
}

.courseBtn:hover{
    background-color: #525252;
}
</style>