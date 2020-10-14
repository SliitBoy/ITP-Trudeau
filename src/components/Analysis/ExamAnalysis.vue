<template>
<div style="background-color: #2C2F33;" class="height">
    <h1 style="color: aliceblue;font-family:sans-serif">{{this.$route.params.name}}</h1>

    <br>
    <br>

    <h5 style="color: aliceblue;font-family:sans-serif">Student Marks Analysis</h5>

    <br>
    <br>

    <table class="tab">
        <tr>
            <td class="tdBtn">
                <b-button variant="outline-success" class="btnGrp" size="sm" type = "submit" @click="ViewResults()">View Results</b-button>
            </td>
            <td class="tdBtn">
            </td>
            <td class="tdBtn">
            </td>
            <td class="tdBtn">

                <b-button variant="outline-success" class="btnGrp" size="sm"  v-b-modal.modal-prevent-closing >Add New Student</b-button>

            </td>
        </tr>
    </table>
    <br>
    <table class="tabSt" border="3">
        <tr style="font-weight:bold;color: aliceblue;font-family:sans-serif;font-size:20px">
            <td>
                Student Name
            </td>
            <td>
                Grade
            </td>
            <td>
                Status
            </td>

        </tr>
        <tr v-for="c in courseFilter" v-bind:key="c.id" style="color: aliceblue;font-family:sans-serif">
            <td>
                {{c.StName}}
            </td>
            <td>
                {{c.grade}}
            </td>
            <td>
                {{c.status}}
            </td>
        </tr>
    </table>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add New Student"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
    <form ref="form" @submit.stop.prevent="newStudent">
       
        <b-form-group
          :state="StNameState"
          label="Student Name"
          label-for="stname-input"
          invalid-feedback="Name is required"
        >
        <b-form-input
            id="name-input"
            v-model="StName"
            style="color:black"
            :state="StNameState"
            required
          ></b-form-input>
        </b-form-group>
        
        <b-form-group
          :state="gradeState"
          label="Grade"
          label-for="grade-input"
          invalid-feedback="Grade is required"
        >
        <b-form-input
            id="name-input"
            v-model="grade"
            :state="gradeState"
            required
          ></b-form-input>
        </b-form-group>

         <b-form-group
          :state="statusState"
          label="Status "
          label-for="stname-input"
          invalid-feedback="Status is required"
        >
        <b-form-input
            id="name-input"
            v-model="status"
            :state="statusState"
            required
          ></b-form-input>
        </b-form-group>

    </form>
     </b-modal>

</div>
   
</template>
<script>

import axios from 'axios'

export default {
    data:function() {
        return{
            name: this.$route.params.name,
            StName:"",
            StNameState:null,
            grade:"",
            gradeState:null,
            status:"",
            statusState:null,
            studentArray:[],
            result:[]
        }
    },

    computed: {
    
    courseFilter: function() {

        return this.studentArray.filter(c=> {
            return c.name.match(this.$route.params.name);
        });
    }
    },

    methods: {


      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.StNameState = valid
        this.gradeState = valid
        this.statusState = valid
        return valid
      },


      resetModal() {
        this.StName = ''
        this.StNameState = null
        this.grade = ''
        this.gradeState= null
        this.status = ''
        this.statusState = null
      },


      handleOk(bvModalEvt) {
    
        bvModalEvt.preventDefault()
        
        this.newStudent()
      },

      newStudent() {
        
        
        if (!this.checkFormValidity()) {
          return
        }

        const formData = {

            StName:this.StName,
            name:this.$route.params.name,
            grade:this.grade,
            status:this.status
        };

        console.log(formData)
        axios.post('https://fir-2tharu.firebaseio.com/Analysis.json',formData)
         .then(res=>console.log(res))
         .catch(error=>console.log(error));
        
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },


      ViewResults()
            {
            axios.get('https://fir-2tharu.firebaseio.com/Analysis.json')
            .then(res => {
                console.log(res);
                const data = res.data;
               
                for(let key in data){

                    const result = data[key];
                    result.id = key;
                    this.studentArray.push(result);
    
                }

                console.log(this.studentArray);
                //return this.student

      })
            .catch(error => console.log(error))
        
        },

    
}
}
</script>
<style>
    
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

.tab{
    width: 100%;
    margin-top: 2%;
    margin-bottom: 5%;

}

.tabSt{

    width: 100%;
}

.tdBtn{
    width: 25% 
}

.height{

    height: 100vh;
}

</style>
