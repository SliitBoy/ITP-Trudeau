<template>
<div style="background-color: #2C2F33;" class="height">

<h1 style="color: aliceblue;font-family:sans-serif">Student Report</h1>

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

    <input type="text" id="stName" placeholder="Student Name" v-model="stName" class="input">
    <b-button variant="outline-primary" type = "submit" @click="DisplayReport()" size="sm" style="margin-left:5%">View Report</b-button>

    <table class="tabSt">
        <tr style="font-weight:bold;color: aliceblue;font-family:sans-serif;font-size:20px;border-bottom: 3px solid black;">
            <th>
                Course Name
            </th>
            <th>
                Grade
            </th>
            <th>
                Status
            </th>
        </tr>
        <tr v-for="s in filterStudent" v-bind:key="s.id" style="color: aliceblue;font-family:sans-serif">
            <td>
                {{s.name}}
            </td>
            <td>
                {{s.grade}}
            </td>
            <td>
                {{s.status}}
            </td>
        </tr>
    </table>
</div>
    
</template>

<script>

import axios from 'axios'

export default {

    data() {
        return {
            studentArray:[],
            result:[]
        };
    },

    computed: {
    
    filterStudent: function() {

        return this.studentArray.filter(s=> {
            return s.StName.match(this.stName) && s.name.match(this.search);
        });
    }
    
    },

    methods: {

        DisplayReport()
            {
            axios.get('https://fir-2tharu.firebaseio.com/Analysis.json')
            .then(res => {
                console.log(res);
                const data = res.data;
               
                for(let key in data){

                    const result = data[key];
                    result.id = key;
                    this.studentArray.push(result);
    
                }

                console.log(this.studentArray);
                //return this.student

      })
            .catch(error => console.log(error))
        
        },
    }
    
}
</script>

<style>

.search{

  position: absolute;
  right: 0px;
  width: 400px;
  padding: 5px;

}

.input{

    margin-top:5%;
    margin-left: 2%;
}

.tabSt{

    width: 90%;
    margin-top: 7%;

}

.height{

    height: 100vh;
}

</style>
