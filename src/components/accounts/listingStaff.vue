<template>
    <div class = "container">
        <div class = "name"> <!--positions page title-->
            <h1>Maintain Staff Accounts</h1>
        </div>

        <div class = "containerCreate">

        <div class ="entries">
             <!--button to display created staff accounts-->
             <div class = "displayList">
                    <button class = "updateList" type = "submit" @click="fetchData()">Update List</button>
             </div>

           <div class = "table">
               <tr class = "headerRow">
                   <th id = "nicCell">NIC</th>
                   <th id = "usernameCell">Username</th>
                   <th id = "lastNameCell">Last Name</th>
                   <th id = "otherNamesCell">Other Names</th>
                   <th id = "employeeIDCell">Employee ID</th>
                   <th id = "emailCell">Email</th>
                   <th id = "contactNumberCell">Contact No.</th>
               </tr> 

                <tr v-for= "s in staff" v-bind:key="s" class = "table">
                    <td class = "tableCell" id = "nicCell">{{s.nic}}</td>
                    <td class = "tableCell" id = "usernameCell">{{s.username}}</td>
                    <td class = "tableCell" id = "lastNameCell">{{s.lastName}}</td>
                    <td class = "tableCell" id = "otherNamesCell">{{s.otherNames}}</td>
                    <td class = "tableCell" id = "employeeIDCell">{{s.employeeID}}</td>
                    <td class = "tableCell" id = "emailCell">{{s.email}}</td>
                    <td class = "tableCell" id = "contactNumberCell">{{s.contactNumber}}</td>
                </tr>
            </div>
         </div>
    </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            nic: '',
            username: '',
            lastName: '',
            otherNames: '',
            employeeID: '',
            email: '',
            contactNumber: null,
            staff: []
        };
    },
    mutations:{
        
    },
    methods:{
        fetchData(){
            this.$http.get('https://trudeau-accounts.firebaseio.com/staff.json')
            .then(response => {
                return response.json();
            })
            .then(staff => {
                const resultArray =[];
                for(let key in staff){
                    resultArray.push(staff[key]);
                }
                this.staff = resultArray.reverse();
            })
            .catch(error => console.log(error))
        },

        //remove(){
       //     axios.get('https://trudeau-cda16.firebaseio.com/staff')
            
            
       // },
       deleteAccount(deleteThis){
            axios.delete('https://trudeau-cda16.firebaseio.com/staff/' + deleteThis + '.json')
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
        }
    }
</script>


<style scoped>
.container{
    min-width: 1539.5px;
    margin-left: -20px;
    padding-left: 100px;
    padding-top: 25px;
    margin-right: 0px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    background-color:#2c2f33;
    color: white;
    font-family: 'Poppins', sans-serif;   
}

.name{
    margin-right: -500px;
    margin-bottom: 658px;
    margin-left: -30px;
    /*background-color:#e05757;*/
}


.validateFields.validate input{
    border-bottom-color: #de4242;
}

.displayList{
    margin-top:30px;
    margin-right: 300px;
    margin-left: 230px;
    margin-bottom: 180px;
    /*background-color:aqua;*/
}

.list-group{
    color:#525252;
    margin-top: -170px;
}

.list-group-item{
    background-color:rgba(207, 204, 204, 0.904);
    white-space: pre-wrap;
}

#reverseOrder{
    display:flex;
    flex-direction: column-reverse;
}

.tableCell{
  margin-bottom: 20px;
  padding: 12px;
  background-color:rgba(207, 204, 204, 0.904);
  font-family: 'Poppins', sans-serif;
  border-top:none;
  border-right:none;
  border-left:none;
  color:white;
}

.headerRow{
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    background-color:rgba(207, 204, 204, 0.904);
    font-family: 'Poppins', sans-serif;
    border-top:none;
    border-right:none;
    border-left:none;
    color: #525252;
}

.table th{
    border-style: hidden;
}

.table{
    margin-top: -150px;
}

.updateList{
     background-color: #de4242;
     color: white;
     margin: 14px 0;
     border: none;
     width: 100%;
     border-radius: 3px;
     cursor: pointer;
     font-family: 'Poppins', sans-serif;
     font-size: 18px;
}

.updateList:hover{
     background-color: #e05757;
}

.updateList:focus{
     outline:none;
     box-shadow: none;
}

.deleteStyle{
    background-color: #de4242;
     color: white;
     margin: 14px 0;
     border: none;
     width: 90%;
     border-radius: 3px;
     cursor: pointer;
     font-family: 'Poppins', sans-serif;
     font-size: 18px;
}

.deleteStyle:hover{
     background-color: #e05757;
}

.deleteStyle:focus{
     outline:none;
     box-shadow: none;
}

.containerCreate{
    margin-left: -20px;
    padding-left: 100px;
    padding-top: 25px;
    margin-right: 0px;
    display:grid;
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    grid-template-areas: 'left right';
    background-color:#2c2f33;
    color: white;
    font-family: 'Poppins', sans-serif;   
}


.field:focus{
    outline: none;
    box-shadow: none;
    border-bottom-color: whitesmoke;
}

.validateFields.validate input{
    border-bottom-color: #de4242;
}


.createStaff{
    /*margin-top:10px;*/
    margin-right:-280px;
    margin-left: -100px;
    /*margin-bottom: 180px;*/
    background-color:#2c2f33;
    transform: translate(-160%, 70%);
}

.entries{
    /* background-color:orange; */
    margin-top: 0px;
    margin-right: -110px;
    margin-left: -830px;
    margin-bottom: 60px;
    transform:translate(4%);
}

.displayList{
    margin-top:30px;
    margin-right: 300px;
    margin-left: 230px;
    margin-bottom: 180px;
    /*background-color:aqua;*/
    transform:translate(4%);
}

.list-group{
    color:#525252;
    margin-top: -170px;
}

.list-group-item{
    background-color:rgba(207, 204, 204, 0.904);
    white-space: pre-wrap;
}

#reverseOrder{
    display:flex;
    flex-direction: column-reverse;
}

.tableCell{
  margin-bottom: 20px;
  padding: 12px;
  background-color:rgba(207, 204, 204, 0.904);
  font-family: 'Poppins', sans-serif;
  border-top:none;
  border-right:none;
  border-left:none;
  color:white;
}


#nicCell{
    width:12%;
    color: #525252;
    /*background-color: maroon;*/
}

#usernameCell{
    width: 15%;
    color: #525252;
    /*background-color: orangered;*/
}

#lastNameCell{
    width: 11%;
    color: #525252;
    /*background-color: olive;*/
}

#otherNamesCell{
    width: 17%;
    color: #525252;
    /*background-color: purple;*/
}

#employeeIDCell{
    width:11%;
    color: #525252;
    /*background-color: turquoise;*/
}

#emailCell{
    width:14%;
    color: #525252;
    /*background-color: teal;*/
}

#contactNumberCell{
    width:11%;
    color: #525252;
    /*background-color: green*/
}


.headerRow{
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    background-color:rgba(207, 204, 204, 0.904);
    font-family: 'Poppins', sans-serif;
    border-top:none;
    border-right:none;
    border-left:none;
    color: #525252;
}

.table th{
    border-style: hidden;
}

.table{
    margin-top: -150px;
}

.updateList{
     background-color: #de4242;
     color: white;
     margin: 14px 0;
     border: none;
     width: 100%;
     border-radius: 3px;
     cursor: pointer;
     font-family: 'Poppins', sans-serif;
     font-size: 18px;
}

.updateList:hover{
     background-color: #e05757;
}

.updateList:focus{
     outline:none;
     box-shadow: none;
}

#employeeIDNumber{
    width: 180%;
}

#email{
    width: 180%;
}

#contactNumber{
    width: 180%
}

.labels{
    color: white;
}
</style>  