<template>
  <div class="container-fluid vh-100" style="background-color: #2C2F33;">
    <div class="row">
      <div class="col-10" style="margin-top: 20px;">
        <!-- Search Input field-->
        <input
          type="text"
          class="form-control"
          v-model="videoSearch"
          placeholder="Search"
        />
        <b-card-group deck style="margin-top: 10px;">
          <!-- Create cards for playlists in array-->
          <b-card
            v-for="video in videoFilter"
            :key="video.etag"
            :title="video.snippet.title"
            style="max-width: 15rem; max-height: 24rem;"
            :img-src="video.snippet.thumbnails.high.url"
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
                  params: { id: video.id, videoSnippet: video.snippet }
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
                <b-dropdown-item
                  v-b-modal.add-video
                  @click="insertData(video.snippet.title, video.id.videoId)"
                  ><b-icon icon="pencil" aria-hidden="true"></b-icon> Add to
                  playlist</b-dropdown-item
                >
                <b-dropdown-item
                  v-b-modal.edit-playlist
                  @click="modalData(video.snippet, video.id.videoId)"
                  ><b-icon icon="pencil" aria-hidden="true"></b-icon
                  >Edit</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item
                  variant="danger"
                  @click="deletePlaylist(video.id)"
                  ><b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                  Delete</b-dropdown-item
                >
              </b-dropdown>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-2" style="margin-top: 20px;">
        <b-button v-b-modal.new-video class="shadow" variant="warning"
          ><b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
          New Playlist
        </b-button>

        <b-modal
          id="new-video"
          centered
          title="New Playlist"
          header-bg-variant="info"
          header-text-variant="light"
          @show="resetModal"
          @ok="insertVideo"
          dark
        >
          <b-form-group id="formName" label="Playlist Name">
            <b-form-input
              id="name-input"
              type="text"
              placeholder="Enter name"
              v-model="videoTitle"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formDescription" label="Playlist Description">
            <b-form-input
              id="description-input"
              type="text"
              placeholder="Enter description"
              v-model="videoDescription"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formFile" label="Video file">
            <v-file-input
              v-model="videoFile"
              truncate-length="15"
              label="Choose a file or drop it here"
              accept="video/*"
              prepend-icon="mdi-file-video"
              dense
            ></v-file-input>
            <b-form-file
              ref="video-input"
              v-model="videoFile"
              :state="Boolean(videoFile)"
              size="sm"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              accept="video/*"
            ></b-form-file>
            <div class="mt-3">
              <b-button
                variant="danger"
                size="sm"
                @click="clearFiles"
                class="mr-2"
                >Remove video</b-button
              >
              Selected file: {{ videoFile ? videoFile.name : "" }}
            </div>
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
              placeholder="item.title change bind"
              v-model="getName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formEditDescription" label="Playlist Description">
            <b-form-input
              id="editDescription-input"
              label="Description"
              type="text"
              placeholder="item.description change bind"
              v-model="getDescription"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>

        <b-modal
          id="add-video"
          centered
          title="Add to Playlist"
          header-bg-variant="info"
          header-text-variant="light"
          scrollable
          @show="resetModal"
          @ok="insertVideo()"
        >
          <v-radio-group dense v-model="selectedPlaylistId">
            <v-radio
              v-for="playlist in getPlaylistItems"
              :key="playlist.id"
              :value="playlist.id"
              :label="playlist.snippet.title"
            ></v-radio>
          </v-radio-group>

          <div class="mt-3">
            Selected: <strong>{{ selectedPlaylistId }}</strong>
          </div>
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
      isInit: false,
      isSignIn: false,
      videoTitle: "",
      videoDescription: "",
      selectedPlaylistId: "",
      selectedVideoId: null,
      selectedVideoTitle: null,
      videoFile: "",
      //yt api object
      api: {
        baseUrl:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlists",
        part: "snippet,status",
        channelId: "UCXJJS2OukdIP52gH3lj6B7Q",
        //key: "AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20"
        key: "AIzaSyDxfGuzrKQD8ytk9Zk77Umg6h6d-mH7GI4"
      },
      apiVideoSearch: {
        baseUrl:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search",
        part: "snippet,id",
        channelId: "UCXJJS2OukdIP52gH3lj6B7Q",
        //key: "AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20",
        key: "AIzaSyDxfGuzrKQD8ytk9Zk77Umg6h6d-mH7GI4",
        order: "date"
      },
      apiVideoInsert: {
        baseUrl:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems",
        part: "snippet,status",
        channelId: "UCXJJS2OukdIP52gH3lj6B7Q",
        playlistId: "",
        //key: "AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20"
        key: "AIzaSyDxfGuzrKQD8ytk9Zk77Umg6h6d-mH7GI4"
      },
      videos: [],
      getPlaylistItems: null,
      videoSearch: "",
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
    this.getYTVideo();
    this.getYTPlaylists();
  },

  computed: {
    // filter items array
    videoFilter: function() {
      return this.videos.filter(video => {
        //return matching entries
        return video.snippet.title
          .toLowerCase()
          .match(this.videoSearch.toLowerCase());
      });
    }
  },
  methods: {
    async insertVideo() {
      if (this.access_token == null) {
        await this.handleClickSignIn();
      }
      //api insert request
      const { baseUrl, part, key } = this.apiVideoInsert;
      console.log("access_token", this.access_token);
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
            playlistId: this.selectedPlaylistId,
            position: 0,
            resourceId: {
              kind: "youtube#video",
              videoId: this.selectedVideoId
            }
          },
          status: { privacyStatus: "public" }
        }
      })
        .then(res => {
          this.$bvToast.toast(`Added to playlist ${this.selectedPlaylistId}`, {
            title: `Added to playlist`,
            variant: "info",
            autoHideDelay: 2000
          });
          console.log("Insert successful");
          console.log("Response", res);
        })
        .catch(error => console.log("error", error));
    },
    createNewPlaylistFB() {
      const playlistFormData = {
        playlistTitle: this.videoTitle,
        videoDescription: this.videoDescription
      };
      if (
        playlistFormData.playlistTitle == "" ||
        playlistFormData.videoDescription == ""
      ) {
        alert("Field must not be empty.");
        return false;
      } else {
        axios
          .put(
            "https://trudeau-cda16.firebaseio.com/playlists/" +
              this.videoTitle +
              ".json",
            playlistFormData
          )
          .then(resp => {
            console.log(resp);
          })
          .catch(error => console.error(error));
      }
    },
    async deletePlaylist(playlistId) {
      if (this.access_token == null) {
        await this.handleClickSignIn();
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
    deletePlaylistFB(title) {
      axios
        .delete(
          "https://trudeau-cda16.firebaseio.com/playlists/" + title + ".json"
        )
        .then(resp => {
          console.log(resp);
        });
    },
    async patchPlaylist(id) {
      //api insert request
      const { baseUrl, part, key } = this.api;
      const playlistId = id;
      if (this.getName == "" || this.getDescription == "") {
        alert("Input fields must not be empty.");
        return false;
      } else {
        if (this.access_token == null) {
          await this.handleClickSignIn();
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
        }).then(resp => {
          this.$bvToast.toast(`updated playlist`, {
            title: "update playlist",
            autoHideDelay: 2000
          });
          console.log("Update successful");
          console.log(resp);
        });
      }
    },
    modalData(video, id) {
      this.item = video;
      this.modalId = id;
      this.selectedVideoId = id;
    },
    insertData(title, id) {
      this.selectedVideoTitle = title;
      this.selectedVideoId = id;
    },
    //clear file input
    clearFiles() {
      this.$refs["video-input"].reset();
    },
    resetModal() {
      this.getName = "";
      this.getDescription = "";
    },
    handleClickSignIn() {
      return this.$gAuth
        .signIn({
          scope: "https://www.googleapis.com/auth/youtube.force-ssl"
        })
        .then(
          res => {
            this.access_token = res.wc.access_token;
            console.log("Sign-in successful", res, this.access_token);
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
      const { /**baseUrl,*/ part, channelId, key } = this.api;
      //const apiUrl = `${baseUrl}part=${part}&channelId=${channelId}&key=${key}`;
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
          this.getPlaylistItems = res.data.items;
          this.item = res.data.items;
          this.title = res.data.items[0].snippet.title;
          console.log(res);
          console.log("Playlist Items", this.getPlaylistItems);
          console.log("Playlist Items title", this.title);
        })
        .catch(error => console.log(error));
    },
    getYTVideo() {
      const { baseUrl, part, key, channelId } = this.apiVideoSearch;
      //get data from api
      axios({
        method: "GET",
        url: baseUrl,
        params: {
          part: part,
          key: key,
          channelId: channelId,
          type: "video"
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          this.videos = res.data.items;
          console.log("Search succesful", res);
          console.log("videos", this.videos);
        })
        .catch(error => console.log("search failed", error));
    }
  }
};
</script>
