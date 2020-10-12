<template>
  <div>
    <video-player
      ref="videoPlayer"
      class="video-js vjs-fluid vjs-big-play-centered"
      :playsinline="true"
      :options="playerOptions"
      @ready="playerReadied"
    ></video-player>
  </div>
</template>

<script>
import playlistMaker from "videojs-playlist/src/playlist-maker";
import playlistUI from "videojs-playlist-ui/dist/videojs-playlist-ui";
import { videojs, videoPlayer } from "vue-video-player";

const plugin = function(list, item) {
  playlistMaker(this, list, item);
};

const plugin2 = playlistUI;
//const plugin3 = vjsYoutube;

//function examplePlugin() {
//  console.log("test yt plugin");
//}

videojs.registerPlugin("playlist", plugin);
videojs.registerPlugin("playlistUI", plugin2);
//videojs.registerPlugin("vjsYoutube", examplePlugin);

var samplePlaylist2 = [
  {
    name: "Disney's Oceans",
    //duration: 45,
    sources: [
      { src: "http://vjs.zencdn.net/v/oceans.mp4", type: "video/mp4" },
      { src: "http://vjs.zencdn.net/v/oceans.webm", type: "video/webm" }
    ],
    poster: "http://www.videojs.com/img/poster.jpg",
    thumbnail: [
      {
        srcset: "http://www.videojs.com/img/poster.jpg",
        type: "image/jpg",
        media: "(min-width: 400px;)"
      },
      {
        src: "http://www.videojs.com/img/poster.jpg"
      }
    ]
  },
  {
    name: "Sintel",
    description:
      "The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.",
    sources: [
      {
        src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
        type: "video/mp4"
      },
      {
        src: "http://media.w3.org/2010/05/sintel/trailer.webm",
        type: "video/webm"
      },
      {
        src: "http://media.w3.org/2010/05/sintel/trailer.ogv",
        type: "video/ogg"
      }
    ],
    poster: "http://media.w3.org/2010/05/sintel/poster.png",
    thumbnail: [
      {
        srcset: "http://media.w3.org/2010/05/sintel/poster.png",
        type: "image/png",
        media: "(min-width: 400px;)"
      },
      {
        src: "test/example/oceans-low.jpg"
      }
    ]
  },
  {
    name: "bunny trailer",
    sources: [
      {
        src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
        type: "video/mp4"
      }
    ],
    poster: "http://media.w3.org/2010/05/bunny/poster.png"
  },
  {
    name: "youtube trailer",
    sources: [
      {
        src: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
        type: "video/youtube"
      }
    ]
  }
];

export default {
  components: {
    videoPlayer
  },
  props: ["playerdata"],
  //name: "VideoPlayer",
  data() {
    return {
      id: this.$route.params.id,
      playlistObj: this.$route.params.playlistObj,
      samplePlaylist: [],
      playerOptions: {
        controls: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        aspectRatio: "16:9"
      }
    };
  },
  // mounted() {
  //   console.log("this is current player instance object", this.player);
  // },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  // beforeDestroy() {
  //   if (this.player) {
  //     this.player.dispose;
  //   }
  // },
  methods: {
    playerReadied(player) {
      console.log("videoPlayer.vue is ready", player);
      //player.playlist(this.playerdata.playlist);
      player.playlist(samplePlaylist2);
      console.log("playlistobj", this.samplePlaylist);
      console.log("playlistobj2", samplePlaylist2);
      player.playlist.autoadvance(5);
      player.playlistUI();
    }
  }
};
</script>
