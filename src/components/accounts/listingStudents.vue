<template>
  <div class="container">
    <div class="name">
      <!--positions page title-->
      <h1>Maintain Student Accounts</h1>
    </div>

    <div class="entries">
      <!--button to display created student accounts-->
      <div class="displayList">
        <button class="updateList" type="submit" @click="fetchData()">
          Update List
        </button>
      </div>

      <div class="table">
        <tr class="headerRow">
          <th id="nicCell">NIC</th>
          <th id="usernameCell">Username</th>
          <th id="lastNameCell">Last Name</th>
          <th id="otherNamesCell">Other Names</th>
          <th id="registrationNumberCell">Registration No.</th>
          <th id="emailCell">Email</th>
          <th id="contactNumberCell">Contact No.</th>
          <th></th>
        </tr>

        <tr v-for="s in students" v-bind:key="s" class="table">
          <td class="tableCell" id="nicCell">{{ s.nic }}</td>
          <td class="tableCell" id="usernameCell">{{ s.username }}</td>
          <td class="tableCell" id="lastNameCell">{{ s.lastName }}</td>
          <td class="tableCell" id="otherNamesCell">{{ s.otherNames }}</td>
          <td class="tableCell" id="registrationNumberCell">
            {{ s.registrationNumber }}
          </td>
          <td class="tableCell" id="emailCell">{{ s.email }}</td>
          <td class="tableCell" id="contactNumberCell">
            {{ s.contactNumber }}
          </td>
          <td class="tableCell" id="deleteCell" @click="deleteAccount(s.nic)">
            <button class="deleteStyle">Delete</button>
          </td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
      nic: "",
      username: "",
      lastName: "",
      otherNames: "",
      registrationNumber: "",
      email: "",
      contactNumber: null,
      password: "",
      students: []
    };
  },
  validations: {
    nic: {
      required
      //unique: value =>{
      //if (value === '') return true
      //return axios.get('https://trudeau-accounts.firebaseio.com/students.json?orderBy="nic"&equalTo="' + value +'"')
      //.then(res => {
      //return Object.keys(res.data).length ===0
      //})
      //}
    },
    username: {
      required,
      email
    },
    lastName: {
      required
    },
    otherNames: {
      required
    },
    registrationNumber: {
      required
    },
    email: {
      email
      //field is not required
    },
    password: {
      required
    }
  },
  mutations: {},
  methods: {
    fetchData() {
      this.$http
        .get("https://trudeau-accounts.firebaseio.com/students.json")
        .then(response => {
          return response.json();
        })
        .then(students => {
          const resultArray = [];
          for (let key in students) {
            resultArray.push(students[key]);
          }
          this.students = resultArray.reverse();
        })
        .catch(error => console.log(error));
    },

    //remove(){
    //     axios.get('https://trudeau-accounts.firebaseio.com/students')

    // },
    deleteAccount(deleteThis) {
      axios
        .delete(
          "https://trudeau-accounts.firebaseio.com/students/" +
            deleteThis +
            ".json"
        )
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.container {
  min-width: 1539.5px;
  margin-left: -20px;
  padding-left: 100px;
  padding-top: 25px;
  margin-right: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #2c2f33;
  color: white;
  font-family: "Poppins", sans-serif;
}

.name {
  margin-right: -500px;
  margin-bottom: 658px;
  margin-left: -30px;
  /*background-color:#e05757;*/
}

input[type="text"] {
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  border-top: none;
  border-right: none;
  border-left: none;
  color: white;
}

input[type="email"] {
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  border-top: none;
  border-right: none;
  border-left: none;
  color: white;
}

input[type="number"] {
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  color: white;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: "Poppins", sans-serif;
}

input[type="password"] {
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  color: white;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: "Poppins", sans-serif;
}

.field:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
}

.validateFields.validate input {
  border-bottom-color: #de4242;
}

.entries {
  /*background-color:#e05757;*/
  margin-top: 25px;
  margin-right: 10px;
  margin-left: -770px;
}

.displayList {
  margin-top: 30px;
  margin-right: 300px;
  margin-left: 230px;
  margin-bottom: 180px;
  /*background-color:aqua;*/
}

.list-group {
  color: #525252;
  margin-top: -170px;
}

.list-group-item {
  background-color: rgba(207, 204, 204, 0.904);
  white-space: pre-wrap;
}

#reverseOrder {
  display: flex;
  flex-direction: column-reverse;
}

/*hide number spinner on number fields*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/*for firefox*/
input[type="number"] {
  -moz-appearance: textfield;
}

.tableCell {
  margin-bottom: 20px;
  padding: 12px;
  background-color: rgba(207, 204, 204, 0.904);
  font-family: "Poppins", sans-serif;
  border-top: none;
  border-right: none;
  border-left: none;
  color: white;
}

#nicCell {
  width: 10%;
  color: #525252;
  /*background-color: maroon;*/
}

#usernameCell {
  width: 14%;
  color: #525252;
  /*background-color: orangered;*/
}

#lastNameCell {
  width: 12%;
  color: #525252;
  /*background-color: olive;*/
}

#otherNamesCell {
  width: 13%;
  color: #525252;
  /*background-color: purple;*/
}

#registrationNumberCell {
  width: 12%;
  color: #525252;
  /*background-color: turquoise;*/
}

#emailCell {
  width: 14%;
  color: #525252;
  /*background-color: teal;*/
}

#contactNumberCell {
  width: 11%;
  color: #525252;
  /*background-color: green*/
}

#deleteCell {
  width: 7%;
  color: #525252;
  /*background-color: goldenrod;*/
}

.headerRow {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  background-color: rgba(207, 204, 204, 0.904);
  font-family: "Poppins", sans-serif;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #525252;
}

.table th {
  border-style: hidden;
}

.table {
  margin-top: -150px;
}

.updateList {
  background-color: #de4242;
  color: white;
  margin: 14px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}

.updateList:hover {
  background-color: #e05757;
}

.updateList:focus {
  outline: none;
  box-shadow: none;
}

.deleteStyle {
  background-color: #de4242;
  color: white;
  margin: 14px 0;
  border: none;
  width: 90%;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}

.deleteStyle:hover {
  background-color: #e05757;
}

.deleteStyle:focus {
  outline: none;
  box-shadow: none;
}
</style>
