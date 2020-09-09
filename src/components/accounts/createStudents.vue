<template>
    <div class = "mainContainer">
        <div class = "container">
            <h1>Create Student Accounts</h1>
            
            <div class ="table">
                <tr>
                <th>NIC</th>
                <th>Username</th>
                <th>Name</th>
                <th>Registration Number</th>
                <th>E-mail</th>
                <th>Contact Number</th>
                <th></th>
                <!--<th>Password</th>--> <!--make nic default password, password can be changed later-->
            </tr>

            <tr>
                <td><input id = "nic" type = "text" v-model = "nic"></td>
                <td><input id = "username" type = "text" v-model = "username"></td>
                <td><input id = "name" type = "text" v-model = "name"></td>
                <td><input id = "regID" type = "text" v-model = "regID"></td>
                <td><input id = "email" type = "text" v-model = "email"></td>
                <td><input id = "contactNumber" type = "tel" v-model = "contactNumber"></td>
                <!--<td><input type = "text" v-model = "password"></td>-->
                <td><button  class = "createBtn" type = "submit" @click = "onCreate">Create</button></td>
            </tr>

            <tr>
                <td>{{ regID }}</td>
            </tr>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
        nic: '',
        username: '',
        name: '',
        regID: '',
        email: '',
        contactNumber: null
        }
    },
    methods:{
        onCreate(){
            const formData = {
                nic: this.nic,
                username: this.username,
                name: this.name,
                regID: this.regID,
                email: this.email,
                contactNumber: this.contactNumber
            }
            console.log(formData)
            axios.post('https://trudeau-accounts.firebaseio.com/students.json', formData)
            .then(res =>console.log(res))
            .catch(error => console.log(error))
        }
    }
    
}
</script>

<style scoped>
.mainContainer{
    color: white;
    background-color:#2c2f33;
    margin-right:0px;
    padding-left: 25px;
}
.container{
    color:white;
    padding-top: 25px;
    background-color: #2c2f33;
    margin-left:-50px;
    margin-right:-50px;
    padding-left: 50px;
    font-family: 'Poppins', sans-serif;
    margin-bottom:-800px;
    padding-bottom:655px;
}

.table{
    padding-top:10px;
    padding-left: 25px;
    color:white;
    font-family: 'Poppins', sans-serif;
}

.createBtn{
     background-color: #de4242;
     color: white;
     margin: 14px 0;
     border: none;
     width: 170%;
     border-radius: 3px;
     cursor: pointer;
     font-family: 'Poppins', sans-serif;
     font-size: 14px;
     transform: translate(0%, -5%);
}

.createBtn:hover{
     background-color: #e05757;
}

.createBtn:focus{
     outline:none;
     box-shadow: none;
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


input[type=tel] {
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

input[type=email] {
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

#field:focus{
     outline:none;  
     box-shadow: none;
     border-bottom-color: whitesmoke;
}

</style>