<template>
  <div class="container">
    <div class="containerCreate">
      <div class="name">
        <!--positions page title-->
        <h1>Create Student Accounts</h1>
      </div>

      <form @submit.prevent>
        <div class="left">
          <!-- allows split positioning-->
          <!--NIC number input field-->
          <label for="nic" class="labels">NIC</label><br />
          <div class="validateFields" :class="{ validate: $v.nic.$error }">
            <!--<h6 v-if = "!$v.nic.unique">An account already exists</h6>-->
            <input
              class="field"
              type="text"
              id="nic"
              @blur="$v.nic.$touch()"
              v-model="nic"
              required
            />
          </div>

          <!--username-->
          <label for="username" class="labels">Username</label>
          <div class="validateFields" :class="{ validate: $v.username.$error }">
            <input
              class="field"
              type="email"
              id="username"
              @blur="$v.username.$touch()"
              v-model="username"
              required
            />
          </div>

          <!--last name-->
          <label for="lastName" class="labels">Last Name</label>
          <div class="validateFields" :class="{ validate: $v.lastName.$error }">
            <input
              class="field"
              type="text"
              id="lastName"
              @blur="$v.lastName.$touch()"
              v-model="lastName"
              required
            />
          </div>

          <!--other names-->
          <label for="otherNames" class="labels">Other Names</label>
          <div
            class="validateFields"
            :class="{ validate: $v.otherNames.$error }"
          >
            <input
              class="field"
              type="text"
              id="otherNames"
              @blur="$v.otherNames.$touch()"
              v-model="otherNames"
              required
            />
          </div>
        </div>
        <!-- left container ended-->

        <div class="right">
          <!--split view right container-->
          <!--registration number-->
          <label for="registrationNumber" class="labels"
            >Registration Number</label
          >
          <div
            class="validateFields"
            :class="{ validate: $v.registrationNumber.$error }"
          >
            <input
              class="field"
              type="text"
              id="registrationNumber"
              @blur="$v.registrationNumber.$touch()"
              v-model="registrationNumber"
              required
            />
          </div>

          <!--email-->
          <label for="email" class="labels">E-mail</label><br />
          <div class="validateFields" :class="{ validate: $v.email.$error }">
            <input
              class="field"
              type="email"
              id="email"
              @blur="$v.email.$touch()"
              v-model="email"
            /><!--non compulsory field, validation not required-->
          </div>

          <!--contact number-->
          <label for="contactNumber" class="labels">Contact Number</label>
          <input
            class="field"
            type="number"
            id="contactNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            v-model="contactNumber"
          />
          <!--validation not required, non compulsory field-->

          <!--password-->
          <label for="password" class="labels">Password</label>
          <div class="validateFields" :class="{ validate: $v.password.$error }">
            <input
              class="field"
              type="text"
              id="password"
              @blur="$v.password.$touch()"
              v-model="password"
              required
            />
          </div>
        </div>
        <!--end of right container-->

        <!--submit data-->
        <div class="createStudent">
          <button
            class="createBtn"
            type="submit"
            :disabled="$v.$invalid"
            @click="onCreate()"
          >
            Create
          </button>
        </div>
      </form>
      <!--end of form-->
    </div>

    <div class="entries">
      <hr />
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
          <th id="passwordCell">Password</th>
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
          <td class="tableCell" id="passwordCell">{{ s.password }}</td>
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
      //return axios.get('https://trudeau-cda16.firebaseio.com/student.json?orderBy="nic"&equalTo="' + value +'"')
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
  methods: {
    onCreate() {
      const formData = {
        nic: this.nic,
        username: this.username,
        lastName: this.lastName,
        otherNames: this.otherNames,
        registrationNumber: this.registrationNumber,
        email: this.email,
        contactNumber: this.contactNumber,
        password: this.password
      };
      if (
        formData.nic == "" ||
        formData.username == "" ||
        formData.lastName == "" ||
        formData.otherNames == "" ||
        formData.registrationNumber == "" ||
        formData.email == "" ||
        formData.contactNumber == "" ||
        formData.password == ""
      ) {
        alert("Empty fields identified.");
        return false;
      } else {
        console.log(formData);
        //   this.$store.dispatch('createdAccount', {email: formData.username, password: formData.password})
        axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20",
          {
            email: formData.username,
            password: formData.password,
            returnSecureToken: true
          }
        );
        axios.post(
          "https://trudeau-cda16.firebaseio.com/students.json",
          formData
        );
        (this.nic = ""),
          (this.username = ""),
          (this.lastName = ""),
          (this.otherNames = ""),
          (this.registrationNumber = ""),
          (this.email = ""),
          (this.contactNumber = ""),
          (this.password = ""

            .then(res => console.log(res))
            .catch(error => console.log(error)));
      }
    },

    fetchData() {
      this.$http
        .get("https://trudeau-cda16.firebaseio.com/students.json")
        .then(response => {
          return response.json();
        })
        .then(students => {
          const resultArray = [];
          for (let key in students) {
            resultArray.push(students[key]);
          }
          this.students = resultArray.reverse();
        });
      //.catch(error => console.log(error))
    },
    beforeMount() {
      this.fetchData();
    }
    /*createAccount({commit, dispatch}, authData){
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBppMONz0sx74W3SV8IQqD6eCEjfdbZLE4',{
                username: authData.username,
                password: authData.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('userId', res.data.localId)
                localStorage.setItem('email', res.data.email)
                dispatch('storeUser', authData)
            })
            .catch(error => console.log(error))
        },*/
    //adds a query to the database using a token
    //storeUser({state}, userData){
    //  if (!state.idToken){
    //      return
    //  }
    //  axios.post('https://trudeau-accounts.firebaseio.com/students.json' + '?auth=' + state,idToken, userData)
    //  .then(res => console.log(res))
    //  .catch(error => console.log(error))
    //}
  }
};
</script>

<style scoped>
.container {
  background-color: #2c2f33;
  padding-bottom: 50px;
}
.containerCreate {
  padding-left: 100px;
  padding-top: 25px;
  margin-right: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #2c2f33;
  color: white;
  font-family: "Poppins", sans-serif;
}

.left {
  margin-top: 60px;
  margin-left: -650px;
  margin-right: -10px;
  /* background-color: peru; */
  padding-left: 25px;
}

.right {
  margin-top: -522px;
  /* background-color:blueviolet; */
  margin-right: 420px;
  /* margin-left: -20px; */
}

form {
  width: 0%;
}

.name {
  margin-right: -50px;
  margin-left: -200px;
  margin-bottom: 660px;
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

.createBtn {
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

.createBtn:hover {
  background-color: #e05757;
}

.createBtn:focus {
  outline: none;
  box-shadow: none;
}
.createStudent {
  /*margin-top:10px;*/
  margin-right: -280px;
  margin-left: -100px;
  /*margin-bottom: 180px;*/
  background-color: #2c2f33;
  transform: translate(-30%, 70%);
}

.entries {
  /* background-color:orange; */
  margin-top: 0px;
  margin-right: -120px;
  margin-left: -60px;
  margin-bottom: 60px;
  /* transform:translate(4%); */
}

.displayList {
  margin-top: 30px;
  margin-right: 300px;
  margin-left: 230px;
  margin-bottom: 180px;
  /*background-color:aqua;*/
  transform: translate(4%);
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
  width: 12%;
  color: #525252;
  /*background-color: maroon;*/
}

#usernameCell {
  width: 15%;
  color: #525252;
  /*background-color: orangered;*/
}

#lastNameCell {
  width: 12%;
  color: #525252;
  /*background-color: olive;*/
}

#otherNamesCell {
  width: 17%;
  color: #525252;
  /*background-color: purple;*/
}

#registrationNumberCell {
  width: 15%;
  color: #525252;
  /*background-color: turquoise;*/
}

#emailCell {
  width: 14%;
  color: #525252;
  /*background-color: teal;*/
}

#contactNumberCell {
  width: 12%;
  color: #525252;
  /*background-color: green*/
}

#passwordCell {
  width: 9.5%;
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

#registrationNumber {
  width: 190%;
}

#email {
  width: 190%;
}

#password {
  width: 190%;
}

#contactNumber {
  width: 190%;
}

.labels {
  color: white;
}
</style>
