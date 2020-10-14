<template>
<div style="background-color: #2C2F33;" class="height">

     <br>
     <h1 style="color: aliceblue;font-family: cursive">{{this.$route.params.name}}</h1>

     <div class="search">
        <b-container class="bv-example-row">
        <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Search Students" v-model="search"></b-form-input>
        </b-input-group>
        </b-container>
    </div>
    
        <b-button variant="outline-warning" class="disButton" style="margin-left:1%;margin-top:3% " type = "submit" @click="DisplayStudent()">Display Student List</b-button>
        
        <b-button pill variant="outline-info" class="btnGrp" size="sm" style="margin-left:85%;margin-top:3% " v-b-modal.modal-prevent-closing>Add New Student</b-button>
      


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
          :state="StIdState"
          label="Student ID"
          label-for="sStId-input"
          invalid-feedback="ID is required"
        >
        <b-form-input
            id="name-input"
            v-model="StId"
            :state="StIdState"
            required
          ></b-form-input>
        </b-form-group>

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
            <th style="width:45%;border-bottom: 3px solid black; color: aliceblue;font-family: cursive;font-size:20px">
                Student ID
            </th>
            <th style="width:45%;border-bottom: 3px solid black;color: aliceblue;font-family: cursive;font-size:20px">
                Student Name
            </th>
            <th>
            </th>
        </tr>
        <tr v-for="st in studentFilter" v-bind:key="st.id" style="color: aliceblue;font-family: cursive">
           <td>
                {{st.StId}}
           </td>
           <td>
               {{st.Stname}}
           </td>
           <td>
               <b-button size="sm" class="mb-2" variant="danger"><b-icon icon="trash" type="submit" @click="delStudent(st.id)" ></b-icon></b-button>
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
            StId:"",
            StIdState:null,
            student:[],
            studentArray:[],
            search:""
            //studentFilter:[]
        
        };
    },

    computed: {
    
    studentFilter: function() {

        return this.studentArray.filter(st=> {
            return st.CourseName.match(this.$route.params.name) && st.Stname.match(this.search);
        });
    }
    
    },

     methods: {


      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.StIdState = valid
        this.StnameState=valid
        return valid
      },


      resetModal() {
        this.StId = ''
        this.StIdState = null
        this.Stname =  ''
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

            StId:this.StId,
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

         delStudent(id){

            axios
            .delete('https://trudeau-9198e.firebaseio.com/AdminStudent/'+id+'.json')

            .then(res=>console.log(res))

        }
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
    margin-left: 2%;
    margin-right: auto;
    margin-top: 5%;

}

.search{

  position: absolute;
  right: 0px;
  width: 400px;
  padding: 5px;

}

.height{

    height: 100vh;
  
}



</style>
