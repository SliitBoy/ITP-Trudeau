<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col 8">
        <div>
          <b-card v-bind:title="items.name" v-bind:sub-title="item.code">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and
              make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </div>
      </div>
      <div class="col-2">
        <b-dropdown
          id="dropdown-form"
          text="New Playlist"
          ref="dropdown"
          class="m-2"
          variant="dark"
        >
          <b-dropdown-form>
            <b-form-group
              label="Name"
              label-for="form-new-playlist-name"
              @submit.stop.prevent
            >
              <b-form-input
                id="form-new-playlist-name"
                size="sm"
                v-model="playListName"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Description"
              label-for="form-new-playlist-desc"
            >
              <b-form-input
                id="form-new-playlist-desc"
                type="text"
                size="sm"
                v-model="playListDescription"
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" size="sm" @click="createNewPlaylist"
              >Add</b-button
            >
          </b-dropdown-form>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      playListName: "",
      playListDescription: "",
      items: [{ name: "Probability & Statistics", code: "IT2050" }]
    };
  },

  methods: {
    createNewPlaylist() {
      const playListFormData = {
        playListName: this.playListName,
        playListDescription: this.playListDescription
      };
      axios.post("https://trudeau-video.firebaseio.com/playlists.json",playListFormData)
        .then(resp => console.log(resp))
        .catch(error => console.error(error));
    }
  }
};
</script>
