<template>
  <div>
    <!-- access forum object stuff here -->
    <h1>{{ forum.title }}</h1>
    <p>{{ forum.message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("https://trudeau-cda16.firebaseio.com/forum.json")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },
  //get the forum object as prop from parent
  props: ["forum"],
  data() {
    return {
      data: {}
    };
  }
};
</script>
