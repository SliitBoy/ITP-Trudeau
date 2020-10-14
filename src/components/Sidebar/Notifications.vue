<template>
    
<div id="Notifications">
  <h1>All Notifications</h1>
  <div v-for="notification in notifications"  v-bind:key="notification " class= "single-notification">
    <h2>{{notification.title}}</h2>

  </div>
</div>

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
    this.$http.get('https://trudeau-sidebar.firebaseio.com/Posts').then(function(data){
     this.notifications = data.body.slice(0,10);
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