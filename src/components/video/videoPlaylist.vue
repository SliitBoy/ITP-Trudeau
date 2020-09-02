<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col 8" style="margin-top: 20px;">
        <!-- Search Input field-->
        <input
          type="text"
          class="form-control"
          v-model="playlistSearch"
          placeholder="Search"
        />
        <div>
          <b-card-group columns style="margin-top: 10px;">
            <!-- Create cards for playlists in array-->
            <b-card
              v-for="playlist in playlistFilter"
              :key="playlist.name"
              :title="playlist.playlistName"
              :sub-title="playlist.playlistCode"
              class="h-100"
            >
              <b-card-text>
                Text Here
              </b-card-text>
              <router-link to="/videoplayer"
                ><b-button variant="primary" size="sm"
                  >Go somewhere</b-button
                ></router-link
              >
              <template v-slot:footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <div class="col-2" style="margin-top: 12px;">
        <b-dropdown
          id="dropdown-form"
          text="New Playlist"
          ref="dropdown"
          class="m-2"
          variant="dark"
        >
          <b-dropdown-form>
            <b-form-group label="Name" label-for="form-new-playlist-name">
              <b-form-input
                id="form-new-playlist-name"
                size="sm"
                v-model="playlistName"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Code" label-for="form-new-playlist-desc">
              <b-form-input
                id="form-new-playlist-desc"
                type="text"
                size="sm"
                v-model="playlistCode"
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
      playlistName: "",
      playlistCode: "",
      // playlistDescription: "",
      //  items: [
      //    { name: "Probability & Statistics", code: "IT2050" },
      //    { name: "Proffesional skills", code: "IT2060" },
      //    { name: "ITP", code: "IT2070" }
      // ],
      getItems: [],
      playlistSearch: "",
      getName: "",
      getCode: ""
    };
  },

  created() {
    axios
      .get("https://trudeau-cda16.firebaseio.com/playlists.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        const array = [];
        for (let key in data) {
          const item = data[key];
          item.id = key;
          array.push(item);
          this.getItems.push(item);
        }
        console.log(array);
        console.log(this.getItems);
        this.getName = array[0].playlistName;
        this.getCode = array[0].playlistCode;
      })
      .catch(error => console.log(error));
  },

  computed: {
    // filter items array
    playlistFilter: function() {
      return this.getItems.filter(playlist => {
        //return matching entries
        return playlist.playlistName
          .toLowerCase()
          .match(this.playlistSearch.toLowerCase());
      });
    }
  },

  methods: {
    createNewPlaylist() {
      const playlistFormData = {
        playlistName: this.playlistName,
        playlistCode: this.playlistCode
        //playlistDescription: this.playListDescription
      };
      axios
        .post(
          "https://trudeau-cda16.firebaseio.com/playlists.json",
          playlistFormData
        )
        .then(resp => console.log(resp))
        .catch(error => console.error(error));
    }
  }
};
</script>
