<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">  
<div id="show-notifications">
  <h1>All Notifications</h1>
  
  <div v-for="notification in notifications"  v-bind:key="notification " class= "single-notification">
    <h2>{{notification.title}}</h2>
    <article>{{notification.body| snippet}}</article>

  </div>
</div>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {

  data() {


    return{

      notifications:[]
    }
    
  },
  methods: {



  },


  created(){
    this.$http.get('https://trudeau-sidebar.firebaseio.com/Posts.json')
    .then(function(data){
      return data.json();
    }).then(function(data){
      var notificationsArray = [];
      for (let key in data){
        data[key].id = key
        notificationsArray.push(data[key]);
      }
    
     console.log(notificationsArray);
    })

  }

}
</script>

<style >
#show-notifications{

  max-width: 800px;
  margin: 0 auto;

}
.single-notification{

padding:20px ;
margin:20px 0;
box-sizing: border-box;
background: #eee;

}

</style>