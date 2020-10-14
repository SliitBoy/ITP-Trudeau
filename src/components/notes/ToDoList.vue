<template
  ><div>
    <div>
      <!-- access todo object -->
      <h1 style="color: #fff; margin-top: 10px; margin-left: 20px;">
        {{ todo.task }}
      </h1>
      <p style="color: #fff; margin-top: 10px; margin-left: 30px;">
        {{ todo.tasknum }}
      </p>
      <p
        style="color: #fff; margin-top: 10px; margin-left: 30px; margin-right: 40px;"
      >
        {{ todo.priority }}
      </p>
    </div>
    <!-- Navigation-->
    <router-link
      :to="{
        name: 'Notes'
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
      .get("https://trudeau-cda16.firebaseio.com/Notes.json")
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },
  //get the todo object as prop from parent
  data() {
    return {
      data: {},
      todo: this.$route.params.todo
    };
  }
};
</script>
