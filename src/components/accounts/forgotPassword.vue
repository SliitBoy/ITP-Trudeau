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

      <div class="field">
        <label for="email">E-mail</label>
        <input
          type="text"
          id="emailForgot"
          placeholder="justin@trippingonquack.com"
        />
        <button type="submit" class="submitEmail">Submit</button>
      </div>
    </div>
  </div>
</template>

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

#emailForgot:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: whitesmoke;
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
.title {
  transform: translate(11%, 290%);
}
</style>
