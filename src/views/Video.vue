<template>
  <div>
    <app-video-playlists></app-video-playlists>
  </div>
  <!-- <video
      id="my_video_1"
      class="video-js"
      controls
      preload="none"
      poster="http://video-js.zencoder.com/oceans-clip.jpg"
      data-setup="{}"
    >
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
    </video> -->
</template>

<script>
import VideoPlaylists from "../components/video/videoPlaylist";
export default {
  components: {
    appVideoPlaylists: VideoPlaylists
  }
};
</script>
