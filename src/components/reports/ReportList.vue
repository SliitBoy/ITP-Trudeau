<template>
<div style="background-color: #2C2F33;" class="height">
<h2 style="color: aliceblue;font-family:sans-serif">Student List</h2>

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
    <br>
    <br>
    <table>
        <tr>
            <td>
                <b-button variant="outline-primary" type = "submit" @click="ViewReports()">View All Students</b-button>    
            </td>
            <td>
                 <router-link to="/CreateReport" tag="ui-button" activeClass="active">
                <b-button variant="outline-primary" class="btnGrp" size="sm" type = "submit" >Add New Report</b-button>
                </router-link>
            </td>
        </tr>
    </table>

 <br>
 <br>

 <table class="tab">
     <tr v-for="r in searchStudents" v-bind:key="r.id">
         <td>
                <router-link  :to="{
                        name:'UpdateReport',
                        params:{ id:r.id,stId: r.stID, stName : r.stName, }
                        }">
                <b-button variant="outline-primary" class="cardButton" >
                 <h5> Student Name :  {{r.stName}} </h5>
                </b-button>
                </router-link>
         </td>
     </tr>
 </table>
</div>
</template>

<script>
import axios from 'axios';

export default {

    data(){

        return{

        stName:"",
        report:[],
        reportArray:[],
        search:"",
        cors:[]
    
        };

    },

    computed:{

            searchStudents:function(){

                return this.reportArray.filter(r =>{

                    return r.stName.match(this.search);
                });
            }

        },

    methods:{
            ViewReports()
            {
            axios.get('https://fir-2tharu.firebaseio.com/report.json')
            .then(res => {
                console.log(res);
                const data = res.data;
               
                for(let key in data){

                    const report = data[key];
                    report.id = key;
                    this.reportArray.push(report);
    
                }

                console.log(this.reportArray);
                

      })
            .catch(error => console.log(error))
        
        },
    }
    
}
</script>



<style>

.cardButton{
    padding: 10px;
    margin-left: 50px;
    margin-top: 30px;
    width: 50%
}

.search{

  position: absolute;
  right: 0px;
  width: 400px;
  padding: 5px;

}
 .tab{

     margin-left: auto;
    margin-right: auto;
    
 }

 .height{

    height: 100vh;
}


</style>
