<template>
<div id = "app" class="bg">
<br>
<br>
    <label class="text">{{course}}</label>
    <div class="search">
        <b-container class="bv-example-row">
    
        <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Search Courses"></b-form-input>
        </b-input-group>
</b-container>
    </div>
<br>
<br>
<br>
<br>
<table class="table2">
    <tr>
    <td>
        <b-button size="sm" variant="outline-info"> View Marks Distribution</b-button>
    </td>
        <td><br></td>
        <td><br></td>
    <td>
        <b-button size="sm" variant="outline-info">Unenroll Me</b-button>
    </td>
    </tr>
</table>
<br>
<table class ="table3">
    <tr>
        <td><label class="sepHead">Week 1</label></td>
    </tr>
    <tr>
        <td class="sepHead">---Content---</td>
    </tr>
     <tr>
        <td><label class="sepHead">Week 2</label></td>
    </tr>
    <tr>
        <td class="sepHead">---Content---</td>
    </tr>
     <tr>
        <td><label class="sepHead">Week 3</label></td>
    </tr>
    <tr>
        <td class="sepHead">---Content---</td>
    </tr>
        <tr>
        <td><label class="sepHead">Week 4</label></td>
    </tr>
    <tr>
        <td><label class="sepHead">----Content----</label></td>
    </tr>
     <tr>
        <td><label class="sepHead">Week 5</label></td>
    </tr>
    <tr>
        <td><label class="sepHead">----Content----</label></td>
    </tr>
</table>

<br>


</div>   
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
    data: function() {
    return{
        course: 'Data Structures and Algorithms - IT1234'
    }
}
}
</script>

<style>
.table1{
  width: 100%;
}

.search{
      position: absolute;
  right: 0px;
  width: 400px;
  padding: 5px;

}
.table2{
     margin-left: auto;
     margin-right: auto;
     width: 100%;

}

.table3 {
  
 width: 75%;
  border: solid aliceblue;
  border-radius: 8px;
  border-width: 2px;
  margin-left: auto;
    margin-right: auto;
}

.text{
   font-size: 25px;
    position: absolute;
  left: 0px;
  width: 1010px;
    text-align: left;
  color:aliceblue;
  margin-top: 10px;
  padding-left: 20px;
}

.bg{
    background-color: #2C2F33;
    width: 1050px;
    height: 100%;
    float: left;
    
}

template{
    height:100%;
    width:100%;
}

.sepHead{
   color:aliceblue; 
}

</style>
