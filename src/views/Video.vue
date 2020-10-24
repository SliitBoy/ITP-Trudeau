<template>
  <div class="vh-100">
    <app-video-playlists></app-video-playlists>
  </div>
</template>

<script>
import VideoPlaylists from "../components/video/videoPlaylist";
export default {
  components: {
    appVideoPlaylists: VideoPlaylists
  }
};
</script>
