<template>

<div style="background-color: #2C2F33;" class="height">

<h1 style="color: aliceblue;font-family:sans-serif">Courses</h1>

<table class="tab">
    <tr v-for="module in modules" :key="module.name">
        <td>
    <router-link tag="ui-button" activeClass="active"
     :to="{ name:'ExamAnalysis',
             params:{ name : module.name}
            }" >
        <b-button variant="outline-primary" class="button" >
            {{module.name}}</b-button>
    </router-link>
        </td>
    </tr>
</table>

</div>
    
</template>

<script>
export default {

    data(){
        return{

        modules : [
            {name : "Introduction to Programming"},
            {name : "Object Oriented Concepts"},
            {name : "Object Oriented Programming"},
            {name : "Mobile Application Development"}
        ]
    }
    }
    
}
</script>

<style>

.button{

    width:50%;
    margin-top: 5%;
    margin-left: 25%;
    
}

.tab{

    width:100%;
    margin-left: auto;
    margin-right: auto;

}

.height{

    height: 100vh;
}


</style>
