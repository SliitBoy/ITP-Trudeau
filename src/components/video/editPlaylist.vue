<template>
  <div style="background-color: #2C2F33;">
    <b-container fluid class="min-vh-100" style="background-color: #2C2F33;">
      <H1 style="color:#ffff;"
        >{{ playlistObj.playlistCode }} - {{ playlistObj.playlistName }}
      </H1>
      <H1 style="color:#ffff;">Upload Video </H1>
      <b-row>
        <b-col>
          <div class="drop-zone">
              <span class="drop-zone__prompt">Drop video file here or click to upload</span>
          </div>
          <b-form-file
            v-model="file"
            state="Boolean(file)"
            placeholder="Choose a video or drop it here..."
            drop-placeholder="Drop video here..."
          ></b-form-file>
          <div class="mt-3">Selected file :{{ file ? file.name : "" }}</div>
        </b-col>
        <b-col>
          <div>
            <b-card bg-variant="light" class="h-80">
              <b-form-group
                label-cols-sm="3"
                label="Title:"
                label-align-sm="right"
                label-for="nested-name"
              >
                <b-form-input
                  id="nested-name"
                  type="text"
                  v-model="title"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Description:"
                label-align-sm="right"
                label-for="nested-description"
              >
                <b-form-input
                  id="nested-description"
                  type="text"
                  v-model="description"
                ></b-form-input>
              </b-form-group>
              <b-button variant="primary" size="sm" @click="patchVideo">
                Submit</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      playlistObj: this.$route.params.playlistObj,
      title: "",
      description: "",
      //uploaded file
      file: null
    };
  },
  methods: {
    vimeoFunction() {
      //Initialize Vimeo details
      let Vimeo = require("vimeo").Vimeo;
      let client = new Vimeo(
        "587173a3374b5ff452ce0327d686e408223f388c",
        "xzifmwmeo77DBL2ukk7jZKipFAy9ds1QLAqYeUkuQvwhpOP3mNE7vGktQZQzi1pZC/AQMMLnmiMvFR0uxc5vnxNJwUBSSDfafB7PCvZGKBAmoQRq76ovxt39j7bfKmgM",
        "765a376e4f15c5619d0747e5c7fc1f03"
      );
      client.request(
        {
          method: "GET",
          path: "/tutorial"
        },
        function(error, body, status_code, headers) {
          if (error) {
            console.log(error);
          }

          console.log(body);
          console.log("status code");
          console.log(status_code);
          console.log("headers");
          console.log(headers);
        }
      );
    },
    patchVideo() {
      let Vimeo = require("vimeo").Vimeo;
      let client = new Vimeo(
        "587173a3374b5ff452ce0327d686e408223f388c",
        "xzifmwmeo77DBL2ukk7jZKipFAy9ds1QLAqYeUkuQvwhpOP3mNE7vGktQZQzi1pZC/AQMMLnmiMvFR0uxc5vnxNJwUBSSDfafB7PCvZGKBAmoQRq76ovxt39j7bfKmgM",
        "765a376e4f15c5619d0747e5c7fc1f03"
      );
      const newTitle = this.title;
      const newDescription = this.description;
      const uri = "https://vimeo.com/465686303";

      //patch video
      client.request({
        method: "PATCH",
        path: uri,
        query: {
          name: newTitle,
          description: newDescription
        },
        function(error, body, status_code, headers) {
          console.log(
            "The title and description for " + uri + " has been edited."
          );
          console.log(body);
          console.log("status code");
          console.log(status_code);
          console.log("headers");
          console.log(headers);
        }
      });
    }
  },
  mounted() {
    this.vimeoFunction();
  }
};
</script>
