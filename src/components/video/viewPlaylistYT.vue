<template>
  <b-container fluid class="min-vh-100" style="background-color: #2C2F33;">
    <H1 style="color:#ffff;">{{ playlistSnippet.title }} </H1>
    <b-row>
      <b-col cols="8">
        <videoplayer :playerdata="playerdata"></videoplayer>
      </b-col>
      <b-col cols="3">
        <router-link
          :to="{
            name: 'EditPlaylist',
            params: { id: playlistId, playlistSnippet: playlistSnippet }
          }"
          ><b-button>Edit Playlist</b-button></router-link
        >
        <div class="vjs-playlist vjs-playlist-vertical"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import Videoplayer from "./videoPlayer";

export default {
  components: {
    videoplayer: Videoplayer
  },
  data() {
    return {
      videoId: "",
      playlistSnippet: this.$route.params.playlistSnippet,
      api: {
        baseUrl:
          "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems",
        part: "snippet",
        channelId: "UCXJJS2OukdIP52gH3lj6B7Q",
        key: "AIzaSyBmm_e4cuGA4FOzbfCid-J8z79othtVq20",
        playlistId: this.$route.params.id
      }
    };
  },
  methods: {
    //method to get all playlist items
    getPlaylistItems() {
      //make api call
      //get playlistitems reponse
      //save video ids
    },
    getPlaylists() {
      const { baseUrl, part, channelId, key } = this.api;
      const apiUrl = `${baseUrl}part=${part}&channelId=${channelId}&key=${key}`;
      //get data from api
      axios
        .get(apiUrl)
        .then(res => {
          this.items = res.data.items;
          this.title = res.data.items[0].snippet.title;
          console.log(res);
          console.log("Playlist Items", this.items);
          console.log("Playlist Items title", this.title);
        })
        .catch(error => console.log(error));
    }
  },
  created() {}
};
</script>
