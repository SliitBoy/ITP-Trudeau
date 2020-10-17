<template>
  <div class="container vh-100">
    <h2>Playlist Report</h2>
    <b-table hover Striped :items="getItems" responsive dark></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      getItems: []
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      axios
        .get("https://trudeau-cda16.firebaseio.com/playlists.json")
        .then(res => {
          console.log(res);
          const data = res.data;
          //const array = [];
          for (let key in data) {
            const item = data[key];
            item.id = key;
            //array.push(item);
            this.getItems.push(item);
          }
          //console.log(array);
          console.log(this.getItems);
          //this.getName = array[0].playlistName;
          //this.getCode = array[0].playlistCode;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style></style>
