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

              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="justin@trippingonquack.com"
              />

              <label for="password">Password</label>
              <input type="password" id="password" />

              <!--forgot password link-->
              <router-link to="/forgotPassword">
                <a href="#" class="forgot">Forgot Password?</a>
              </router-link>
            </div>
            <br />
            <br />
            <div class="login">
              <button type="submit" class="loginBtn">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.mainContainer{
     margin-right: 0px;
     background-color:#2c2f33;
}
.container{
     padding-left: 100px;
     margin-left: -5px;
     min-height: 100%;
     min-width:100%;
     display:grid;
     padding-top: 40px;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /*grid-template-areas: 'left right';*/
     background-color:#2c2f33;
     color: white;
     font-family: 'Poppins', sans-serif; 
     padding-bottom: 85px;
     margin-bottom: -85px;
}

.left{
     width: 50%;
     padding-right:60px;
     background-color: #2c2f33;
     background-color:#2c2f33;
     color: white;
     font-family: 'Poppins', sans-serif; 
}
  
.right{
     width:100%;
     padding-top:90px;
     padding-left:30px;
     margin-left: -200px;
     margin-right: -50px;
     background-color:#2c2f33;
}
  
.justin{
     padding-top: 10px;
     padding-right: 0px;
}

input[type=text] {
     width: 100%;
     margin-bottom: 20px;
     padding: 12px;
     border-top: none;
     border-left: none;
     border-right:none;
     background-color: #2c2f33;
     border-radius: 5px;
     font-family: 'Poppins', sans-serif;
     color: white;
} 

#username:focus{
     outline:none;
     box-shadow: none;
     border-bottom-color: whitesmoke;
}
 
#password:focus{
     outline:none;
     box-shadow: none;
     border-bottom-color: whitesmoke;
}

input[type=password] {
     width: 100%;
     color:white;
     margin-bottom: 20px;
     padding: 12px;
     background-color: #2c2f33;
     border-radius: 5px;
     font-family: 'Poppins', sans-serif;
     border-top: none;
     border-left: none;
     border-right:none;
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
     font-family: 'Poppins', sans-serif;
     font-size: 17px;
     transform: translate(18%, -20%);
}
  
.forgot{
     background-color: #2c2f33;
     padding: 0px;
     border: none;
     cursor: pointer;
     font-family: 'Poppins', sans-serif;
     font-size: 14px;
     color: white;
     text-decoration: none;
}

.forgot:hover{
     color:rgb(219, 215, 215);
}
  
/*vertical line in centre*/
.border{
     border-right: 2px solid white;
     height: 75%;
     margin-top:80px;
     margin-right: 300px;

}

.loginBtn:hover{
     background-color: #e05757;
}

.loginBtn:focus{
     outline:none;
     box-shadow: none;
}
</style>