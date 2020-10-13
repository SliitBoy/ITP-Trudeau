accounts
<template>
  <!-- <div class = "mainContainer">
         <div class = "container">
            <div class = "left"> -->

  <div class="container loginGrid">
    <div class="row justify-content-around loginRow">
      <div class="col-5 loginColLeft">
        <div class="justin">
          <img
            src="@/images/Trudeau logo (1).png"
            width="600px"
            height="600px"
          />
        </div>
      </div>

      <!-- <div class = "right"> -->
      <div class="col loginColRight">
        <div class="loginBox">
          <div class="container2">
            <div class="innerLoginBox">
              <div class="title">
                <h1>Login</h1>
                <br />
                <br />
              </div>

              <div
                class="validateInput"
                :class="{ invalid: $v.username.$error }"
              >
                <!--highlighted if email is invalid or field is empty-->
                <label for="username" class="labels">Username</label>
                <input
                  type="email"
                  id="username"
                  @blur="$v.username.$touch()"
                  v-model="username"
                  placeholder="justin@trippingonquack.com"
                />
              </div>

              <div
                class="validateInput"
                :class="{ invalid: $v.password.$error }"
              >
                <!--highlighted if field is empty-->
                <label for="password" class="labels">Password</label>
                <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password"
                />
              </div>

              <!--forgot password link-->
              <router-link to="/forgotPassword">
                <a href="#" class="forgot">Forgot Password?</a>
              </router-link>
            </div>
            <br />
            <br />
            <div class="login">
              <button @click="login()" class="loginBtn">Log In</button>
            </div>
          </div>
        </div>
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
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required,
      email
    },
    password: {
      required
      //add code connecting to firebase for validation
    }
  },
  methods: {
    login() {
      const formData = {
        email: this.username,
        password: this.password
      };
      console.log(formData);
      // this.$store.dispatch('login', {email: formData.username, password: formData.password})
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20",
          {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
          }
        )
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.mainContainer {
  margin-right: 0px;
  background-color: #2c2f33;
}
.container {
  padding-left: 100px;
  margin-left: -5px;
  min-height: 100%;
  min-width: 100%;
  display: grid;
  padding-top: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /*grid-template-areas: 'left right';*/
  background-color: #2c2f33;
  color: white;
  font-family: "Poppins", sans-serif;
  padding-bottom: 85px;
  margin-bottom: -85px;
}

.left {
  width: 100%;
  padding-right: 60px;
  background-color: #2c2f33;
  background-color: #2c2f33;
  color: white;
  font-family: "Poppins", sans-serif;
}

.right {
  width: 100%;
  padding-top: 90px;
  padding-left: 30px;
  margin-left: -200px;
  margin-right: -50px;
  background-color: #2c2f33;
}

.justin {
  padding-top: 10px;
  margin-right: -40px;
  padding-left: -25px;
  margin-left: -25px;
  padding-right: 0px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  color: white;
}

input[type="email"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  color: white;
}

.validateInput.invalid input {
  border-bottom-color: #de4242;
}

#username:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
}

#password:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
}

input[type="password"] {
  width: 100%;
  color: white;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  border-top: none;
  border-left: none;
  border-right: none;
}

/*log-in button*/
.loginBtn {
  background-color: #de4242;
  color: white;
  padding: 5px;
  margin: 14px 0;
  border: none;
  width: 80%;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  transform: translate(18%, -20%);
}

.forgot {
  background-color: #2c2f33;
  padding: 0px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: white;
  text-decoration: none;
}

.forgot:hover {
  color: rgb(219, 215, 215);
}

/*vertical line in centre*/

.loginBtn:hover {
  background-color: #e05757;
}

.loginBtn:focus {
  outline: none;
  box-shadow: none;
}

.loginColRight {
  padding-top: 90px;
  padding-left: 150px;
  width: 50%;
}

.loginColLeft {
  padding-left: 75px;
}

.loginGrid {
  margin-right: -50px;
}

.loginBox {
  padding-right: 150px;
  padding-left: 10px;
}

.labels {
  color: white;
}
</style>
=======
<template>
  <div class="mainContainer">
    <div class="container">
      <div class="left">
        <div class="justin">
          <img
            src="@/images/Trudeau logo (1).png"
            width="600px"
            height="600px"
          />
        </div>
      </div>

      <hr class="border" />

      <div class="right">
        <div class="loginBox">
          <div class="container2">
            <div class="innerLoginBox">
              <div class="title">
                <h1>Login</h1>
                <br />
                <br />
              </div>

              <div
                class="validateInput"
                :class="{ invalid: $v.username.$error }"
              >
                <!--highlighted if email is invalid or field is empty-->
                <label for="username">Username</label>
                <input
                  type="email"
                  id="username"
                  @blur="$v.username.$touch()"
                  v-model="username"
                  placeholder="justin@trippingonquack.com"
                />
              </div>

              <div
                class="validateInput"
                :class="{ invalid: $v.password.$error }"
              >
                <!--highlighted if field is empty-->
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password"
                />
              </div>

              <!--forgot password link-->
              <router-link to="/forgotPassword">
                <a href="#" class="forgot">Forgot Password?</a>
              </router-link>
            </div>
            <br />
            <br />
            <div class="login">
              <button @click="login()" class="loginBtn">Log In</button>
            </div>
          </div>
        </div>
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
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required,
      email
    },
    password: {
      required
      //add code connecting to firebase for validation
    }
  },
  methods: {
    //login(){
    //this.$store.dispatch('login',{
    //username: this.username,
    //password:this.password
    //})
    //}
    login({ commit }, authData) {
      axios
        .post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBppMONz0sx74W3SV8IQqD6eCEjfdbZLE4",
          {
            username: authData.username,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("email", res.data.email);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          //router.push('/studentProfile')
        })
        .catch(error => console.log(error.message));
    }
  }
};
</script>

<style scoped>
.mainContainer {
  margin-right: 0px;
  background-color: #2c2f33;
}
.container {
  padding-left: 100px;
  margin-left: -5px;
  min-height: 100%;
  min-width: 100%;
  display: grid;
  padding-top: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /*grid-template-areas: 'left right';*/
  background-color: #2c2f33;
  color: white;
  font-family: "Poppins", sans-serif;
  padding-bottom: 85px;
  margin-bottom: -85px;
}

.left {
  width: 50%;
  padding-right: 60px;
  background-color: #2c2f33;
  background-color: #2c2f33;
  color: white;
  font-family: "Poppins", sans-serif;
}

.right {
  width: 100%;
  padding-top: 90px;
  padding-left: 30px;
  margin-left: -200px;
  margin-right: -50px;
  background-color: #2c2f33;
}

.justin {
  padding-top: 10px;
  margin-right: -450px;
  padding-left: 25px;
  margin-left: -25px;
  padding-right: 0px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  color: white;
}

input[type="email"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  color: white;
}

.validateInput.invalid input {
  border-bottom-color: #de4242;
}

#username:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
}

#password:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
}

input[type="password"] {
  width: 100%;
  color: white;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  border-top: none;
  border-left: none;
  border-right: none;
}

/*log-in button*/
.loginBtn {
  background-color: #de4242;
  color: white;
  padding: 5px;
  margin: 14px 0;
  border: none;
  width: 80%;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  transform: translate(18%, -20%);
}

.forgot {
  background-color: #2c2f33;
  padding: 0px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: white;
  text-decoration: none;
}

.forgot:hover {
  color: rgb(219, 215, 215);
}

/*vertical line in centre*/
.border {
  border-right: 2px solid white;
  height: 75%;
  margin-top: 80px;
  margin-right: 300px;
}

.loginBtn:hover {
  background-color: #e05757;
}

.loginBtn:focus {
  outline: none;
  box-shadow: none;
}
</style>
master
