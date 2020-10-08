<template>
  <div>
    <iframe
      src="https://player.vimeo.com/video/{video_id}"
      width="{video_width}"
      height="{video_height}"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
let Vimeo = require("vimeo").Vimeo;
var iframe = document.querySelector("iframe");
var player = new Vimeo.Player(iframe);

player.on("play", function() {
  console.log("Played the video");
});

player.getVideoTitle().then(function(title) {
  console.log("title:", title);
});
export default {};
</script>

<style></style>
