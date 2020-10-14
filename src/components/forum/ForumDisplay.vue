<template
  ><div>
    <div>
      <!-- access forum object stuff here -->
      <h1 style="color: #fff; margin-top: 10px; margin-left: 20px;">
        {{ forum.title }}
      </h1>
      <p style="color: #fff; margin-top: 10px; margin-left: 30px;">
        {{ forum.courseCode }}
      </p>
      <p
        style="color: #fff; margin-top: 10px; margin-left: 30px; margin-right: 40px;"
      >
        {{ forum.message }}
      </p>
    </div>
    <router-link
      :to="{
        name: 'Forum'
      }"
      ><b-button
        style="margin-top: 10px; margin-left: 20px;"
        variant="primary"
        size="sm"
        >Go back</b-button
      >
    </router-link>
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
  data() {
    return {
      data: {},
      forum: this.$route.params.forum
    };
  }
};
</script>
