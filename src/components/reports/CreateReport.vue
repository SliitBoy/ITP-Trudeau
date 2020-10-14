<template>
<div style="background-color: #2C2F33;" class="height">
    <h3>Create Report</h3>
    <br>
    <label> ID Number : </label> 
    <input type='text' placeholder="Enter ID Number" v-model="stID">
    <br>
    <br>
    <label> Student Name  :  </label>
    <input type ='text' placeholder="Enter Student's Name" v-model="stName">
    <br>
    <br><div class="centre">
    <div><span style="padding-right: 18em">Course - Result</span></div>
    <br> <div class="but">

        <button @click="onAddCourse" type="button">Add Course</button>
          <div class="course-list">
            <div
                    class="input"
                    v-for="(courseInput, index) in courseInputs"
                    v-bind:key="courseInput.id">
              <label :for="courseInput.id">Course {{ index +1 }}</label>
              <input
                      type="text"
                      :id="courseInput.id"
                      v-model="courseInput.value">
            </div>
          </div>
  </div></div>
  <br><div class="bottom">
    <b-button class="right" variant="primary" type="submit" @click="onSubmit">Create Report</b-button>
  </div>
</div>
</template>

<script>

import axios from 'axios';

export default {

    data(){
        return {
            stID:'',
            stName:'',
            courseInputs:[]
        }
    },

    methods: {

        onAddCourse(){
             const newCourse = {
                 id : Math.random() * Math.random() * 1000,
                 value:''
             }

             this.courseInputs.push(newCourse)
        },

        onSubmit(){

            const formData = {

                stID:this.stID,
                stName:this.stName,
                courses:this.courseInputs.map(course=>course.value)
            }
            if(
                formData.stID == " " ||
                formData.stName == " "
            ){
                alert("All Fields must be filled");
                return false;
            }else{
                console.log(formData)
                axios.post('https://fir-2tharu.firebaseio.com/report.json',formData)
                .then(res=>console.log(res))
                .catch(error=>console.log(error));
            }
        }

    }
}

</script>

<style>

h3{
    text-align:center;
    padding-top:1em;
    color: white;
} 

.centre{
    margin:auto;
    width:50%;
    color: white;
   
}

label{
      text-align:center;
      padding-top:1em;
      color: white;
}
.right{
    position:absolute;
    right:0px;
    width:250px;
    padding:5px;
}
.bg{      
    background-color:#2C2F33;
    margin-right:0%;
    margin-left:0%;
    margin-top:0%;
    margin-bottom: 0%;
    height:100%;
    width:100%;
    position:relative;
}
.text{
    color:chocolate;
}

template{
  background-color:#2C2F33;
  height: 100%;
  width:100%;
     margin-right:0%;
    margin-left:0%;
    margin-top:0%;
    margin-bottom: 0%;
}
.bottom{
    background-color:#2C2F33;
    margin-right:0%;
    margin-left:0%;
    margin-top:0%;
    margin-bottom: 0%;
    height:100%;
    width:100%;
    position:relative;   
}

.height{

    height: 100vh;
}

</style>
