<template>

    <div style="background-color: #2C2F33;" class="height">

    <h3>Update Report</h3>
    <br>
      <label> ID Number : </label> 
    <input type='text' :placeholder="this.$route.params.stId" v-model="stID">
    <br>
    <br>
    <label> Student Name  :  </label>
    <input type ='text' :placeholder="this.$route.params.stName" v-model="stName">
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

  
  <b-button style="margin-left:80%;" variant="success" type="submit" @click="editReport">Update</b-button>
  <b-button style="margin-left:4%;" variant="danger" type="submit" @click="deleteReport">Delete</b-button>



</div>
</template>


<script>
import axios from 'axios'


    export default {

        data(){

            return{

            id: this.$route.params.id,
            stId: this.$route.params.stId,
            stName: this.$route.params.stName,
            courseInputs:[]

            };

        },

        methods :{

            
        onAddCourse(){
             const newCourse = {
                 id : Math.random() * Math.random() * 1000,
                 value:''
             }

             this.courseInputs.push(newCourse)
        },

            editReport(){

                const formData = {

                    stID:this.stID,
                    stName:this.stName,
                    courses:this.courseInputs.map(course=>course.value)

                }

                console.log(formData)
                axios.patch('https://fir-2tharu.firebaseio.com/report/'+this.$route.params.id+'.json',formData)

                .then(res=>console.log(res))

                .catch(error=>console.log(error));
            },
        

        deleteReport(){

            axios
            .delete('https://fir-2tharu.firebaseio.com/report/'+this.$route.params.id+'.json')

            .then(res=>console.log(res))

        }
        }

    }


</script>



<style>
h3{
    text-align:center;
    padding-top:1em;
    color:white;
}
.centre{
    margin:auto;
    width:50%;
   
}

.bg{
    background-color:#2C2F33;
    margin-right:0%;
    margin-left:0%;
    margin-top:0%;
    margin-bottom: 50%;
    height:100%;
    width:100%;
    position:relative;
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
      position:absolute;
    right:0px;
    width:250px;
    padding:5px;
} 

.height{

    height: 100vh;
}



</style>
