<template>
     <div class = "settingsWrapper">
            <div class = "topLeft">
                <h2 class ="labels">Profile Settings</h2>
                <div class = "username">
                    <h3 class = "labels">[Username]</h3>
                    <br>
                    <br>
                </div>
                <div class = "profileIcon">
                    <img src = "@/images/Trudeau logo.png" height = 250 width = 250>
                    <div class = "profileIconButtons">

                        <div class = "signout">
                            <router-link to = "/login">
                                <button class = "profileBtns" href = "#">Sign Out</button>
                            </router-link>
                        </div>

                        <button class = "profileBtns" id = "changeBtn">Change Icon</button>
                        <button class = "profileBtns" id ="removeBtn">Remove Icon</button>
                    </div>
                </div>

            </div>
            <div class = "topRight">
                <div class = "innerTopRight" :class="{invalid:$v.currentPassword.$error}">
                    <label for="password" class ="labels">Current Password</label>
                    <input 
                        type="password" 
                        id="currentPassword"
                        @blur ="$v.currentPassword.$touch()"
                        v-model = "currentPassword"
                    >
                </div>

                <div class = "innerTopRight" :class="{invalild:$v.newPassword.$error}">
                    <label for="password" class ="labels">New Password</label>
                    <input 
                        type="password" 
                        id="newPassword"
                        @blur="$v.newPassword.$touch()"
                        v-model = "newPassword">
                </div>
 
                <div class = "innerTopRight" :class="{invalid:$v.confirmPassword.$error}">
                    <label for="password" class = "labels">Confirm New Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        @blur="$v.confirmPassword.$touch()"
                        v-model = "confirmPassword">
                </div>

                <div class = "innerTopRight" id = "changePassword">
                    <button type="submit" class="profileBtns" href = "#">Change Password</button>
                </div>

            </div>
            <div class = "bottomLeft">
                <div class = "displayName">
                    <h3 class = "labels">Display Name</h3>
                </div>

                <div class = "innerBottomLeft">
                    <label for="username" class = "labels">First Name</label> 
                    <input type="text" id="displayfname" placeholder="Justin" v-model = "firstname">
                </div>

                <div class = "innerBottomLeft">
                    <label for="email" class = "labels">E-mail</label> <br>
                    <input type="email" id="email" placeholder="justin@trippinonquack.com" v-model="email">
                </div>

                <br>

                <div class = "innerBottomLeft">
                    <input type = "checkbox" id = "showName" value = "false">
                    <label for = "showName" class = "labels" id = "options">Show my name to others</label>
                </div>

                <div class = "innerBottomLeft">
                    <input type = "checkbox" id = "showContact" value = "false">
                    <span class = "check"></span>
                    <label for = "showContact" class = "labels" id = "options">Show my contact information to others</label>
                </div>

            </div>
            <div class = "bottomRight">
                <div class = "align">
                    <h3 class ="blend">blendthistext</h3> <!--for alignment-->
                </div>
                <div class = "innerBottomRight">
                    <label for="username" class = "labels">Last Name</label> 
                    <input type="text" id="displaylname" placeholder="Trudeau" v-model="lastname">
                </div>
                <div class = "innerBottomRight">
                    <label for="username" class = "labels">Contact Number</label> 
                    <input type="tel" id="contactno" placeholder="012 345 6789" v-model="contactnumber">
                </div>

                <div class = "innerBottomRight">
                    <router-link to = "/profile">
                        <button class = "profileBtns" id = "saveChangesBtn" @click = "saveAccountChanges()">Save Changes</button>
                    </router-link>
                </div>

                <br><br>

            </div>
            </div>
</template>

<script>
// import axios from 'axios'
import {required, minLength} from 'vuelidate/lib/validators'
export default {
    data(){
        return{
            newPassword: '',
            currentPassword: '',
            confirmPassword:''

        }
    },
    validations:{
        newPassword:{
            required,
            minLength: minLength(1)
        },
        confirmPassword:{
            required,
            minLength: minLength(1)
        },
        currentPassword:{
            required,
            minLength: minLength(1)
        }
    },
    methods:{
        // saveAccountChanges(){
        //     const updateAccount = {
        //         firstname: this.firstname,
        //         lastname: this.lastname,
        //         email: this.email,
        //         contactnumber: this.contactnumber
        //     };
        //     if (
        //         updateAccount.firstname != ""
        //     ){
        //         axios.patch('https://trudeau-accounts.firebaseio.com/students/MJGXjIMBBqmrILsXFUt.json', {
        //             firstname: updateAccount.firstname
        //         })
        //     }
        //     if(
        //         updateAccount.lastname != ""
        //     ){
        //         axios.patch('https://trudeau-accounts.firebaseio.com/students/MJGXjIMBBqmrILsXFUt.json', {
        //             lastname: updateAccount.lastname
        //         })
        //     }
        //     if(
        //         updateAccount.email != ""
        //     ){
        //         axios.patch('https://trudeau-accounts.firebaseio.com/students/MJGXjIMBBqmrILsXFUt.json', {
        //             email: updateAccount.email
        //         })
        //     }
        //     if(
        //         updateAccount.contactnumber != ""
        //     ){
        //         axios.patch('https://trudeau-accounts.firebaseio.com/students/MJGXjIMBBqmrILsXFUt.json', {
        //             contactnumber: updateAccount.contactnumber
        //         })
        //     }
        //}
    }
}
</script>

<style scoped>
.settingsWrapper{
    min-height: 50vh;
    margin-left: -20px;
    padding-left: 100px;
    margin-right: 0px;
    display:grid;
    grid-template-areas: 
        'topLeft topRight'
        'bottomLeft bottomRight';
    background-color:#2c2f33;
    color: white;
    font-family: 'Poppins', sans-serif;   
}

.topLeft{
    padding-top: 50px;
    padding-right:25px;
    margin-right: -560px;
    /*background-color: rgb(128, 27, 9);*/
    grid-template-columns:  repeat(auto-fit, minmax(200px, 1fr));
    background-color:#2c2f33;
    color: white;
    font-family: 'Poppins', sans-serif; 
}

.topRight{
    padding-left:25;
    padding-right:9px;
    padding-top: 150px;
    margin-left:560px;
    margin-right:85px;
    /*background-color: rgb(105, 83, 55);*/
    grid-template-areas: 'innerTopRight';
    background-color:#2c2f33;
    color: white;
    font-family: 'Poppins', sans-serif; 
}

.innerTopRight{
    padding-left:100px;
    padding-bottom:2px;
}

.bottomLeft{
    padding-right:5px;
    padding-left: 50px;
    margin-right:-600px;
    /*background-color: rgb(11, 60, 94);*/
}

.bottomRight{
    padding-right:5px;
    margin-right:60px;
    padding-left:95px;
    margin-left:560px;
    /*background-color: rgb(87, 7, 60);*/
}

input[type=password] {
    width: 90%;
    margin-bottom: 20px;
    padding: 12px;
    background-color: #2c2f33;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    color:white;
    border-top:none;
    border-left: none;
    border-right: none;
}

.profileBtns {
    background-color: #de4242;
    color: white;
    padding: 0px;
    margin: 14px 0;
    border: none;
    width: 80%;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
}

#changePassword{
    width:82%;
    transform: translate(70px, 10px);
}

input[type=text] {
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #2c2f33;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  border-top:none;
  border-right:none;
  border-left:none;
  color:white;
}

.innerBottomLeft{
    padding-left:100px;
    padding-right:30px;
    margin-left: -60px;
}

.innerBottomRight{
    padding-right: 30px;
}

.align{
    cursor: default;
    color:#2c2f33;
}


input[type=email] {
    width: 90%;
    margin-bottom: 20px;
    padding: 12px;
    background-color: #2c2f33;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    border-top: none;
    border-right:none;
    border-left:none;
    color:white;
}

input[type=tel] {
    width: 90%;
    margin-bottom: 20px;
    padding: 12px;
    background-color: #2c2f33;
    color:white;
    border-radius: 5px;
    border-top: none;
    border-left:none;
    border-right:none;
    font-family: 'Poppins', sans-serif;
}

.profileIconButtons{
    width: 50%;
    transform: translate(100%, -90%);
    margin-bottom: -75px;
}

.signout{
    width:100%;
    transform: translate(0px, -90px);
}

.username{
    margin-top:-15px;
    margin-bottom: -30px;
    margin-left: -390px;
}

.displayName{
    margin-left: -450px;
}

#currentPassword:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

#newPassword:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

#confirmPassword:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

#displayfname:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

#displaylname:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

#email:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}


#contactno:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

.profileIcon{
    transform:translate(40px, 0px);
}


#saveChangesBtn{
    transform:translate(70px, 30px);
    width:65%;
}

.profileBtns:focus{
    outline:none;
    box-shadow: none;
}

.profileBtns:hover{
    background-color:#e05757;
}

#removeBtn{
    transform:translate(0px, -5px)
}

.innerTopRight.invalid input{
    border-bottom-color: #de4242;
}
.blend{
    color:#2c2f33;
}

.labels{
    color: white;
}

#options{
    margin-left: 10px;
}



</style>