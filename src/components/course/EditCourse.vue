<template>
<div class="bg">
    <div>
    <h3>Edit Course</h3>
    <br>
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
                    :placeholder="this.$route.params.name"
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
                    :placeholder="this.$route.params.code"
                 ></b-form-input>
                </b-form-group>
            </td>
          </tr>
          <tr>
            <td>
              <b-form-group
                id="input-group-2"
                label="Year"
                label-for="input-2"
                color="aliceblue"
              >
                <b-form-input
                     id="input-2"
                     v-model="Year"
                    required
                    :placeholder="this.$route.params.year"
                 ></b-form-input>
                </b-form-group>
        </td>
        <td>
            <b-form-group id="input-group-2" label="Semester" label-for="input-2">
                <b-form-input
                     id="input-2"
                     v-model="Sem"
                    required
                    :placeholder="this.$route.params.sem"
                 ></b-form-input>
                </b-form-group>
        </td>
        </tr>
         <tr>
           <td colspan="2">
                <b-form-group id="input-group-2" class="right" label="Lecturer in Charge" label-for="input-2">
                <b-form-input
                     id="input-2"
                     v-model="LecInCharge"
                    required
                    :placeholder="this.$route.params.lecInChr"
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
                    :placeholder="this.$route.params.lec"
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
                    :placeholder="this.$route.params.key"
                 ></b-form-input>
                </b-form-group>
        </td>
        </tr>  
    </table>
    <table  class="tabBtn">
        <tr>
             <td>
                <br>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
            <td>
              <br />
            </td>
              <td>
                  <router-link to="/CourseList" tag="ui-button" activeClass="active">
                <b-button variant="outline-success" size="sm" type="submit" @click="updateCourse">Save Changes</b-button>
                  </router-link>
            </td>
            <td>
                <router-link to="/CourseList" tag="ui-button" activeClass="active">
                <b-button variant="outline-danger" size="sm" type="submit" @click="deleteCourse">Delete</b-button>
                </router-link>
            </td>

            
        </tr>
        <br>  
        
    </table>
</div>
</div>

</template>

<script>
import axios from 'axios'
export default {

    data(){
        return {
            id: this.$route.params.id,
            name: this.$route.params.name,
            code: this.$route.params.code,
            year: this.$route.params.year,
            sem: this.$route.params.sem,
            lecInChr: this.$route.params.lecInChr,
            lec: this.$route.params.lec,
            key: this.$route.params.key
            
        };
    },

    methods : {

        updateCourse(){

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
                axios.patch('https://trudeau-9198e.firebaseio.com/courses/'+this.$route.params.id+'.json',formData)

                .then(res=>console.log(res))

                .catch(error=>console.log(error));


            }

        },

        deleteCourse(){

            axios
            .delete('https://trudeau-9198e.firebaseio.com/courses/'+this.$route.params.id+'.json')

            .then(res=>console.log(res))

        }

    }

    
}
</script>

<style>
.right {
  align-items: right;
}

.tab {
  margin-left: auto;
  margin-right: auto;
  color: aliceblue;
}

h3 {
  padding-left: 1em;
  padding-top: 1em;
  color: aliceblue;
}

.bg {
  background-color: #2c2f33;
  margin-top: 0px;
  margin-left: 0px;
  left: 0px;
  top: 0px;
}
.tabBtn{
    width: 100%;
}
</style>
