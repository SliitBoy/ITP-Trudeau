<template>
  <div style="background-color: #2C2F33;">
    <b-container fluid class="min-vh-100" style="background-color: #2C2F33;">
      <H1 style="color:#ffff;">Edit Playlist {{ playlistSnippet.title }} </H1>
      <H1 style="color:#ffff;">Upload Video </H1>
      <b-row>
        <b-col>
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
      playlistSnippet: this.$route.params.playlistSnippet,
      title: "",
      description: "",
      //uploaded file
      file: null
    };
  }
};
</script>
