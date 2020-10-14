<template>
<div >
    <br>
<div>
    <h3>Create New Course</h3>
    <br>
    <form @submit.prevent>
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
            <b-form-group id="input-group-2" label="Year" label-for="input-2">
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
                <br>
            </td>
              <td>
                <br>
            </td>
              <td>
                <br>
            </td>
              <td>
                 <b-button variant="outline-info" size="sm" type="submit" @click="onSubmit">Create Course</b-button>

            </td>
            
        </tr>
        <br>  
        
    </table>

    </form>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return {
            CourseName : '',
            CourseCode : '',
            Year : '',
            Sem : '',
            LecInCharge : '',
            Lecturer : '',
            Key : ''
        };
    },

    methods : {

        onSubmit(){

            const formData = {
                CourseName:this.CourseName,
                CourseCode:this.CourseCode,
                Year:this.Year,
                Sem:this.Sem,
                LecInCharge:this.LecInCharge,
                Lecturer:this.Lecturer,
                Key:this.Key
            };
            if(
                formData.CourseName == " " ||
                formData.CourseCode == " " ||
                formData.Year == " " ||
                formData.Sem == " " ||
                formData.LecInCharge == " " ||
                formData.Lecturer == " " ||
                formData.Key == " " 
                
                ){
                alert("Empty Fields");
                return false;
            }else {
                console.log(formData)
                axios.post('https://trudeau-9198e.firebaseio.com/courses.json',formData)
                .then(res=>console.log(res))
                .catch(error=>console.log(error));


            }

        },
    }

    
}
</script>

<style>

.right{

    align-items: right;

}

.tab {
  margin-left: auto;
  margin-right: auto;
}

h3 {
  padding-left: 1em;
  padding-top: 1em;
}
</style>
