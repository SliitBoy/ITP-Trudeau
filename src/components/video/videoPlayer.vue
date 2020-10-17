<template>
  <div class="container-fluid min-vh-100">
    <b-row>
      <b-col cols="10">
        <h1 style="color:#ffff;" class="font-weight-bold">
          {{ playlistSnippet.title }}
        </h1>
      </b-col>
      <b-col cols="2">
        <router-link
          :to="{
            name: 'SearchVideos'
          }"
          ><b-button>All Videos</b-button></router-link
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
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
    //method to get all playlist items
    getPlaylistItems() {
      //make api call
      //get playlistitems reponse
      //save video ids
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
          index: 0
        })
        .playVideo();
    }
  }
};
</script>

<style></style>
