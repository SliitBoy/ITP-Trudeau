<template>
  <div style="background-color: #2C2F33;">
    <b-container fluid class="min-vh-100" style="background-color: #2C2F33;">
      <H1 style="color:#ffff;"
        >{{ playlistObj.playlistCode }} - {{ playlistObj.playlistName }}
      </H1>
      <b-row>
        <b-col cols="8">
          <videoplayer :playerdata="playerdata"></videoplayer>
        </b-col>
        <b-col cols="3">
          <div class="vjs-playlist vjs-playlist-vertical"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Videoplayer from "./videoPlayer";

export default {
  components: {
    videoplayer: Videoplayer
  },
  data() {
    return {
      id: this.$route.params.id,
      playlistObj: this.$route.params.playlistObj,
      playerdata: [
        {
          sources: [
            {
              src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
              type: "video/mp4"
            }
          ],
          poster: "http://media.w3.org/2010/05/sintel/poster.png"
        }
      ]

      // videoOptions: {
      //   autoplay: true,
      //   controls: true,
      //   sources: [
      //     {
      //       //src: "https://www.w3schools.com/tags/movie.mp4",
      //       src: "this.playerdata.source",
      //       type: "video/mp4"
      //     }
      //   ]
      // }
    };
  }
};
</script>
