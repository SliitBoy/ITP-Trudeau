<template>
  <div class="container-fluid vh-100" style="background-color: #2C2F33;">
    <div class="row">
      <div class="col-10" style="margin-top: 20px;">
        <!-- Search Input field-->
        <input
          type="text"
          class="form-control"
          v-model="playlistSearch"
          placeholder="Search"
        />
        <!-- router-link to player component w/ playlist obj-->
        <router-link
          :to="{
            name: 'PlayerYT',
            params: { id: playlistId, playlistSnippet: playlistSnippet }
          }"
          ><b-button>Edit Playlist</b-button></router-link
        >
        <!-- router-link to VideosYT component w/ playlist obj-->
        <router-link
          :to="{
            name: 'VideosYT',
            params: { id: playlistId, playlistSnippet: playlistSnippet }
          }"
          ><b-button>All Videos</b-button></router-link
        >
        <!-- Card group to display playlists-->
        <b-card-group deck style="margin-top: 10px;">
          <!-- Create cards for playlists in array-->
          <b-card
            v-for="playlist in playlistFilter"
            :key="playlist.id"
            :title="playlist.snippet.title"
            :sub-title="playlist.snippet.description"
            style="max-width: 15rem; max-height: 24rem;"
            :img-src="playlist.snippet.thumbnails.high.url"
            img-alt="Card image"
            img-top
            bg-variant="dark"
            text-variant="white"
            sub-title-text-variant="white"
            class="shadow"
          >
            <template v-slot:footer>
              <!-- Send Course code to player componenet  -->
              <router-link
                :to="{
                  name: 'VideoPlayerYT',
                  params: { id: playlist.id, playlistSnippet: playlist.snippet }
                }"
                ><b-button variant="primary" size="sm"
                  >View playlist</b-button
                ></router-link
              >
              <b-dropdown
                size="sm"
                style="float: right;"
                variant="link"
                no-caret
              >
                <template v-slot:button-content>
                  <b-icon icon="three-dots"></b-icon>
                </template>
                <!-- Card dropdowns-->
                <b-dropdown-item
                  v-b-modal.edit-playlist
                  @click="modalData(playlist.snippet, playlist.id)"
                  ><b-icon icon="pencil" aria-hidden="true"></b-icon
                  >Edit</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item
                  variant="danger"
                  @click="deletePlaylist(playlist.id)"
                  ><b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                  Delete</b-dropdown-item
                >
              </b-dropdown>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-2" style="margin-top: 20px;">
        <b-button v-b-modal.new-playlist class="shadow" variant="warning"
          ><b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
          New Playlist
        </b-button>
        <!-- Create Modals-->
        <b-modal
          id="new-playlist"
          centered
          title="New Playlist"
          header-bg-variant="warning"
          header-text-variant="light"
          @show="resetModal"
          @ok="createNewPlaylist()"
        >
          <b-form-group id="formName" label="Playlist Name">
            <b-form-input
              id="name-input"
              type="text"
              placeholder="Enter name"
              v-model="playlistName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formDescription" label="Playlist Description">
            <b-form-input
              id="description-input"
              label="Description"
              type="text"
              placeholder="Enter description"
              v-model="playlistDescription"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>

        <b-modal
          id="edit-playlist"
          centered
          title="Edit Playlist"
          header-bg-variant="warning"
          header-text-variant="light"
          @show="resetModal"
          @ok="patchPlaylist(modalId)"
        >
          <b-form-group id="formEditName" label="Playlist Name">
            <b-form-input
              id="editName-input"
              type="text"
              :placeholder="item.title"
              v-model="getName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formEditDescription" label="Playlist Description">
            <b-form-input
              id="editDescription-input"
              label="Description"
              type="text"
              :placeholder="item.description"
              v-model="getDescription"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isSignIn: false,
      playlistName: "",
      playlistCode: "",
      playlistDescription: "",
      ytItems: null,
      //yt api object
      api: {
        baseUrl:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlists",
        part: "snippet,status",
        channelId: "UCXJJS2OukdIP52gH3lj6B7Q",
        //key: "AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20"
        key: "AIzaSyDxfGuzrKQD8ytk9Zk77Umg6h6d-mH7GI4"
      },
      getItems: [],
      playlistSearch: "",
      getName: "",
      getDescription: "",
      item: null,
      modalId: null,
      access_token: null
    };
  },

  created() {},

  mounted() {
    //call manually
    this.getYTPlaylists();
  },

  computed: {
    // filter items from api call
    playlistFilter: function() {
      return this.getItems.filter(playlist => {
        //return matching entries
        return playlist.snippet.title
          .toLowerCase()
          .match(this.playlistSearch.toLowerCase());
      });
    }
  },
  methods: {
    /**method to create a new playlist...
     * makes a post with YT API
     */
    async createNewPlaylist() {
      if (this.access_token == null) {
        await this.gAuthSignIn();
      }
      //api paramters for playlist insert request
      const { baseUrl, part, key } = this.api;
      console.log("access_token", this.access_token);
      console.log(this.playlistName);
      console.log(this.playlistDescription);
      if (this.playlistName == "" || this.playListDescription == "") {
        alert("Field must not be empty.");
        return false;
      } else {
        axios({
          method: "POST",
          url: baseUrl,
          params: {
            part: part,
            key: key
          },
          headers: {
            Authorization: `Bearer ${this.access_token}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          data: {
            snippet: {
              title: this.playlistName,
              description: this.playListDescription
            },
            status: { privacyStatus: "public" }
          }
        })
          .then(res => {
            this.createNewPlaylistFB();
            console.log("Insert successful");
            console.log("Response", res);
          })
          .catch(error => console.log("error", error));
      }
    },
    //Method to insert new entry into Firebase
    createNewPlaylistFB() {
      const playlistFormData = {
        playlistTitle: this.playlistName,
        playlistDescription: this.playListDescription
      };
      if (
        playlistFormData.playlistTitle == "" ||
        playlistFormData.playlistDescription == ""
      ) {
        alert("Field must not be empty.");
        return false;
      } else {
        axios
          .put(
            "https://trudeau-cda16.firebaseio.com/playlists/" +
              this.playlistName +
              ".json",
            playlistFormData
          )
          .then(resp => {
            console.log(resp);
          })
          .catch(error => console.error(error));
      }
    },
    /**method to delete a playlist...
     * makes a DELETE req. with YT API
     */
    async deletePlaylist(playlistId) {
      if (this.access_token == null) {
        await this.gAuthSignIn();
      }
      const { baseUrl, key } = this.api;
      axios({
        method: "DELETE",
        url: baseUrl,
        params: {
          id: playlistId,
          key: key
        },
        headers: {
          Authorization: `Bearer ${this.access_token}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(resp => {
          this.$bvToast.toast(`Deleted playlist`, {
            title: "delete playlist",
            autoHideDelay: 2000
          });
          console.log("Delete successful");
          console.log(resp);
        })
        .catch(error => console.log("error", error));
    },
    //Method to delete entry from Firebase
    deletePlaylistFB(title) {
      axios
        .delete(
          "https://trudeau-cda16.firebaseio.com/playlists/" + title + ".json"
        )
        .then(resp => {
          console.log(resp);
        });
    },
    /**method to updates a new playlist...
     * makes a POST req with YT API
     */
    async patchPlaylist(id) {
      //api insert request
      const { baseUrl, part, key } = this.api;
      const playlistId = id;
      if (this.getName == "" || this.getDescription == "") {
        alert("Input fields must not be empty.");
        return false;
      } else {
        if (this.access_token == null) {
          await this.gAuthSignIn();
        }
        axios({
          method: "POST",
          url: baseUrl,
          params: {
            part: part,
            key: key
          },
          headers: {
            Authorization: `Bearer ${this.access_token}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          data: {
            snippet: {
              title: this.getName,
              description: this.getDescription
            },
            status: { privacyStatus: "public" }
          },
          id: playlistId
        })
          .then(resp => {
            this.$bvToast.toast(`updated playlist`, {
              title: "update playlist",
              autoHideDelay: 2000
            });
            console.log("Update successful");
            console.log(resp);
          })
          .catch(error => console.log(error));
      }
    },
    modalData(playlist, id) {
      this.item = playlist;
      this.modalId = id;
    },
    resetModal() {
      this.getName = "";
      this.getDescription = "";
    },
    gAuthSignIn() {
      return this.$gAuth
        .signIn({
          //scope: "https://www.googleapis.com/auth/youtube.force-ssl"
          scope: "https://www.googleapis.com/auth/youtube"
        })
        .then(
          res => {
            this.access_token = res.wc.access_token;
            console.log("Sign-in successful", res, this.access_token);
            this.isSignIn = this.$gAuth.isAuthorized;
          },
          function(err) {
            console.error("Error signing in", err);
          }
        );
    },
    loadClient() {
      this.$gAuth.client.setApiKey("AIzaSyDxfGuzrKQD8ytk9Zk77Umg6h6d-mH7GI4");
      return this.$gAuth.client
        .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          function() {
            console.log("GAPI client loaded for API");
          },
          function(err) {
            console.error("Error loading GAPI client for API", err);
          }
        );
    },
    //method to make api call and retrieve playlists from YT
    getYTPlaylists() {
      const { part, channelId, key } = this.api;
      //get data from api
      axios({
        method: "GET",
        url:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlists",
        params: {
          part: part,
          channelId: channelId,
          key: key
        }
      })
        .then(res => {
          this.getItems = res.data.items;
          this.item = res.data.items;
          this.title = res.data.items[0].snippet.title;
          console.log(res);
          console.log("Playlist Items", this.getItems);
          console.log("Playlist Items title", this.title);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
