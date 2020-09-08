<template>
  <div>
    <H1>This is viewplaylist {{ id }} </H1>
    <b-container fluid="sm">
      <b-row class="justify-content-md-center">
        <b-col></b-col>
        <b-col><videoplayer></videoplayer></b-col>
        <b-col><div class="vjs-playlist"></div></b-col>
      </b-row>
    </b-container>
    <!-- <videoplayer :playerOptions="playerdata"></videoplayer> -->
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
