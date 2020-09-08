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
import { videojs, videoPlayer } from "vue-video-player";
import "videojs-playlist";
import playlistMaker from "videojs-playlist/src/playlist-maker";
import playlistUI from "videojs-playlist-ui/dist/videojs-playlist-ui";

const plugin = function(list, item) {
  playlistMaker(this, list, item);
};

const plugin2 = playlistUI;

videojs.registerPlugin("playlist", plugin);
videojs.registerPlugin("playlistUI", plugin2);

// var samplePlaylist3 = [
//   {
//     sources: [
//       {
//         src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
//         type: "video/mp4"
//       }
//     ],
//     poster: "http://media.w3.org/2010/05/sintel/poster.png"
//   },
//   {
//     sources: [
//       {
//         src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
//         type: "video/mp4"
//       }
//     ],
//     poster: "http://media.w3.org/2010/05/bunny/poster.png"
//   },
//   {
//     sources: [
//       {
//         src: "http://vjs.zencdn.net/v/oceans.mp4",
//         type: "video/mp4"
//       }
//     ],
//     poster: "http://www.videojs.com/img/poster.jpg"
//   }
// ];
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
        //poster: this.playerdata.poster,
        aspectRatio: "16:9"
        // sources: [
        //   {
        //     src: this.playerdata.sources,
        //     type: "video/mp4"
        //     // type: "video/mp4",
        //     // src:
        //     //   "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        //   }
        // ]
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
