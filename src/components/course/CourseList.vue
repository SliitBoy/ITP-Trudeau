<template>
<div>
    <br>
    <label class="text">Courses</label>
    <div class="search">
        <b-container class="bv-example-row">
        <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Search Courses" v-model="search"></b-form-input>
        </b-input-group>
        </b-container>
    </div>
    <br>
    <table class="tabBtn">
        <tr>
            <br>
            <td>
             <b-button variant="outline-warning" class="disButton" type = "submit" @click="DisplayData()">Display Course List</b-button>
            </td>
            <td>
                <br>
            </td>
            <td>
                <router-link to="/NewCourse" tag="ui-button" activeClass="active">
                <b-button pill variant="outline-info" class="btnGrp" size="sm" type = "submit" >Add New Course</b-button>
                </router-link>
            </td>

        </tr>
    </table>
    <br>
    <br>
    <br>
    <br>

    <div class="list">
        <br><br>
        <table class="tab">
            <tr v-for="cor in filteredCourses" v-bind:key="cor.id">
                <td>
                <b-card bg-variant="warning"
                        align="center"
                        class = "card"
                        :title="cor.CourseName">
                    <b-card-text>
                            Year {{cor.Year}}            Sem {{cor.Sem}}
                            <br>
                <router-link  :to="{
                        name:'EditCourse',
                        params:{ id: cor.id, name : cor.CourseName, code : cor.CourseCode, year : cor.Year, sem : cor.Sem, lecInChr : cor.LecInCharge, lec : cor.Lecturer, key : cor.Key}
                        }">
               <b-button  class="cardButton" size="sm" > 
                   Edit
                </b-button>

                </router-link>
                <router-link  :to="{
                        name:'StudentList',
                        params:{ name : cor.CourseName,code:cor.CourseCode}
                        }">
               <b-button  class="cardButton" size="sm" > 
                   View Student List
                </b-button>

                </router-link>
                </b-card-text>
                </b-card>
                </td>
            </tr>
            
        </table>
        <br>
    </div>

</div>
    
</template>

<script>
   import axios from 'axios'
    export default{
        data(){
    
        return{
            CourseName:"",
            Year:"",
            Sem:"",
            course:[],
            courseArray:[],
            search:""

        };
        },

    

        computed:{

            filteredCourses:function(){

                return this.courseArray.filter(cor =>{

                    return cor.CourseName.match(this.search);
                });
            }

        },



        methods:{
            DisplayData()
            {
            axios.get('https://trudeau-9198e.firebaseio.com/courses.json')
            .then(res => {
                console.log(res);
                const data = res.data;
               
                for(let key in data){

                    const course = data[key];
                    course.id = key;
                    this.courseArray.push(course);
    
                }

                console.log(this.courseArray);
                //return this.course

      })
            .catch(error => console.log(error))
        
        },
    }
    }
    

    
</script>

<style>
.text{
    font-size: 25px;
    position: absolute;
  right: 0px;
  width: 1010px;

  color:black;
  margin-top: 10px;
}
.search{

  position: absolute;
  right: 0px;
  width: 400px;
  padding: 5px;

}

.list{
    width: 75%;
    border: 5px solid black;
    margin-left: auto;
     margin-right: auto;

}

.table-left{
   color:black;  
   text-align: center;
}

.tab{
width: 75%;
  border-radius: 8px;
  border-width: 2px;
  margin-left: auto;
    margin-right: auto;

}

.disButton{
    right: 0px;
    margin-top: 90px;
  
}

.cardButton{
    right: 0px;
    border-radius: 12px;
    width: 25%;
    margin-top: 10px;
    margin-right: 5px;
    margin-left: 5px;
  
}

h6{
    display: inline-block;
    text-align: right;
}

.tabBtn{

    width:100%;

}

.card{
     height: 160px;
     margin-top: 30px;
}


</style>
