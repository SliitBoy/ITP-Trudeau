<template>
  <div class="mainContainer">
    <div class="container">
      <br /><br />
      <div class="title">
        <h1>Reset Password</h1>
      </div>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />

      <div class="field" :class="{ invalid: $v.email.$error }">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="emailForgot"
          @blur="$v.email.$touch()"
          v-model="email"
          placeholder="justin@trippingonquack.com"
        />
        <router-link to="/emailSubmitted">
          <p v-if="errorMessage !== ''" class="error">{{ errorMessage }}</p>
          <button class="submitEmail" @click="forgotPassword()">Submit</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
//import { auth } from '@/firebase'
export default {
  data() {
    return {
      email: ""
    };
  },
  validations: {
    email: {
      required,
      email
    }
  }
  /*methods: {
        async forgotPassword(){
            this.errorMessage = ''
            try{
                await auth.sendEmail(this.email)
                this.showSuccess = true
            }catch(err){
                this.errorMsg = err.message
            }
        }
    }*/
};
</script>

<style scoped>
.mainContainer {
  color: white;
  background-color: #2c2f33;
  margin-right: 0px;
  padding-left: 160px;
}
.container {
  color: white;
  background: #2c2f33;
  margin-left: -25px;
  padding-left: 50px;
  padding-top: 25px;
  padding-bottom: 250px;
}
.field {
  margin-right: 250px;
  margin-left: 120px;
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
#emailForgot:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
}
.field.invalid input {
  border-bottom-color: #de4242;
}
.submitEmail {
  background-color: #de4242;
  color: white;
  padding: 5px;
  margin: 14px 0;
  border: none;
  width: 30%;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  transform: translate(350%, -200%);
}
.submitEmail:hover {
  background-color: #e05757;
}
.submitEmail:focus {
  outline: none;
  box-shadow: none;
}
.title {
  transform: translate(11%, 290%);
}
</style>