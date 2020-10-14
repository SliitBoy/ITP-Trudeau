<template>
  <div class="container-fluid min-vh-100">
    <b-row>
      <b-col>
        <h1 style="color:#ffff;">{{ playlistSnippet.title }}</h1>
        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
      </b-col>
      <b-col>
        <h1 style="color:#ffff;">Playlist</h1>
        <b-button v-b-modal.new-playlist>Add Videos</b-button>
        <b-modal
          id="new-playlist"
          centered
          title="Add video to playlist"
          header-bg-variant="warning"
          header-text-variant="light"
          @show="resetModal"
          @ok="addToPlaylist()"
        >
          <b-form-group id="formTitle" label="Video title">
            <b-form-input
              id="name-input"
              type="text"
              placeholder="Enter title"
              v-model="getVideoTitle"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formDescription" label="Video Description">
            <b-form-input
              id="description-input"
              label="Description"
              type="text"
              placeholder="Enter description"
              v-model="getVideoDescription"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formVideo" label="Video">
            <b-form-file
              id="video-input"
              state="Boolean(file)"
              label="Video"
              size="sm"
              type="file"
              placeholder="Choose a video or drop it here..."
              drop-placeholder="Drop video here..."
              v-model="getVideoFile"
              required
            ></b-form-file>
            <div class="mt-3">
              Selected file :{{ getVideoFile ? getVideoFile.name : "" }}
            </div>
          </b-form-group>
        </b-modal>
        <b-card style="width: 30rem;">
          <div class="card-header">
            Featured
          </div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item d-flex justify-content align-items-center"
            >
              <div style="max-width: 40px;" class="mr-2">
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg"
                  class="img-fluid"
                  alt="quixote"
                />
              </div>
              Cras justo odio
            </li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      videoId: "",
      playlistSnippet: this.$route.params.playlistSnippet,
      api: {
        baseUrl:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/videos",
        part: "snippet",
        channelId: "UCXJJS2OukdIP52gH3lj6B7Q",
        key: "AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20",
        playlistId: this.$route.params.id
      },
      access_token: null,
      getVideoTitle: "",
      getVideoDescription: "",
      getVideoFile: null
    };
  },
  mounted() {
    this.player.playVideo();
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("\\o/ we are watching!!!");
    },
    async addToPlaylist() {
      await this.handleClickSignIn();
      //api insert request
      const { baseUrl, part, key } = this.api;
      console.log("access_token", this.access_token);
      if (this.getVideoTitle == "" || this.getVideoDescription == "") {
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
            console.log("Insert successful");
            console.log("Response", res);
          })
          .catch(error => console.log("error", error));
      }
    }
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
  computed: {
    player() {
      return this.$refs.youtube.player
        .cuePlaylist({
          listType: "playlist",
          list: this.$route.params.id,
          index: 1
        })
        .playVideo();
    }
  }
};
</script>

<style></style>
