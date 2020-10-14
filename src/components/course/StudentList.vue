<template>
<div>

     <br>
     <h1>{{this.$route.params.name}}</h1>
    
    <table class="tabBtn">
    <tr>
        <td>
        <b-button variant="outline-warning" class="disButton" type = "submit" @click="DisplayStudent()">Display Student List</b-button>
        </td>
        <td>
        </td>
        <td></td>
        <td>
        <b-button pill variant="outline-info" class="btnGrp" size="sm"  v-b-modal.modal-prevent-closing >Add New Student</b-button>
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
    <form ref="form" @submit.stop.prevent="createStudent">
        <b-form-group
          :state="StnameState"
          label="Student Name"
          label-for="stname-input"
          invalid-feedback="Name is required"
        >
        <b-form-input
            id="name-input"
            v-model="Stname"
            :state="StnameState"
            required
          ></b-form-input>
        </b-form-group>
    </form>
     </b-modal>
    

    <table class="tableList">
        <tr>
            <th class="zebra">
                Student Name
            </th>
        </tr>
        <tr v-for="st in studentFilter" v-bind:key="st.id">
           <td class="zebra">
                {{st.Stname}}
           </td>
        </tr>
    </table>


</div>
    
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{

            name: this.$route.params.name,
            code: this.$route.params.code,
            Stname: "",
            StnameState: null,
            getStName:"",
            student:[],
            studentArray:[],
            //studentFilter:[]
        
        };
    },

    computed: {
    
    studentFilter: function() {

        return this.studentArray.filter(st=> {
            return st.CourseName.match(this.$route.params.name);
        });
    }
    },

     methods: {


      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.StnameState = valid
        return valid
      },


      resetModal() {
        this.Stname = ''
        this.StnameState = null
      },


      handleOk(bvModalEvt) {
    
        bvModalEvt.preventDefault()
        
        this.createStudent()
      },


      createStudent() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }

        const formData = {

            Stname:this.Stname,
            CourseName:this.$route.params.name
        };

        console.log(formData)
        axios.post('https://trudeau-9198e.firebaseio.com/AdminStudent.json',formData)
         .then(res=>console.log(res))
         .catch(error=>console.log(error));
        
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },

      DisplayStudent()
            {
            axios.get('https://trudeau-9198e.firebaseio.com/AdminStudent.json')
            .then(res => {
                console.log(res);
                const data = res.data;
               
                for(let key in data){

                    const student = data[key];
                    student.id = key;
                    this.studentArray.push(student);
    
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

.btnGroup{

    right:0%;
    align-items: right;

  

}

.disButton{
    right: 0px;
    
  
}

.tabBtn{

    width:100%;

}

td{
    width:25%;
    height: 50px;
}

.tableList{

    width: 100%;
    margin-left: auto;
    margin-right: auto;

}

.zebra:nth-child(even) {
  background-color: #f2f2f2;
}


</style>
