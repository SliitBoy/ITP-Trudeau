<template>
  <div class="container-fluid min-vh-100" style="background-color: #2C2F33;">
    <div class="row">
      <div class="col-10" style="margin-top: 20px;">
        <!-- Search Input field-->
        <input
          type="text"
          class="form-control"
          v-model="playlistSearch"
          placeholder="Search"
        />
        <b-card-group deck style="margin-top: 10px;">
          <!-- Create cards for playlists in array-->
          <b-card
            v-for="playlist in playlistFilter"
            :key="playlist.name"
            :title="playlist.playlistName"
            :sub-title="playlist.playlistCode"
            style="max-width: 250px;"
          >
            <b-card-text> </b-card-text>
            <!-- Send Course code to player componenet  -->
            <router-link
              :to="{
                name: 'ViewPlaylist',
                params: { id: playlist.playlistCode, playlistObj: playlist }
              }"
              ><b-button variant="primary" size="sm"
                >View playlist</b-button
              ></router-link
            >
            <template v-slot:footer>
              <b-dropdown
                size="sm"
                style="float: right;"
                variant="link"
                no-caret
              >
                <template v-slot:button-content >
                  <b-icon icon="three-dots"></b-icon>
                </template>
                <b-dropdown-item
                  v-b-modal.edit-playlist
                  @click="modalData(playlist)"
                  ><b-icon icon="pencil" aria-hidden="true"></b-icon>Edit</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item variant="danger" @click="deletePlaylist(playlist.id)"
                  ><b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        Delete</b-dropdown-item
                >
              </b-dropdown>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-2" style="margin-top: 20px;">
        <b-button v-b-modal.new-playlist variant="warning"
        ><b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
          New Playlist
        </b-button>

        <b-modal
          id="new-playlist"
          centered
          title="New Playlist"
          header-bg-variant="warning"
          header-text-variant="light"
          @show="resetModal"
          @ok="createNewPlaylist()"
        >
          <b-form-group id="formName" label="Playlist Name">
            <b-form-input
              id="name-input"
              type="text"
              placeholder="Enter name"
              v-model="playlistName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formCode" label="Playlist Code">
            <b-form-input
              id="code-input"
              label="Code"
              type="text"
              placeholder="Enter code"
              v-model="playlistCode"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>

        <b-modal
          id="edit-playlist"
          centered
          title="Edit Playlist"
          header-bg-variant="warning"
          header-text-variant="light"
          @show="resetModal"
          @ok="patchPlaylist(item.id)"
        >
          <b-form-group id="formEditName" label="Playlist Name">
            <b-form-input
              id="editName-input"
              type="text"
              :placeholder="item.playlistName"
              v-model="getName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formEditCode" label="Playlist Code">
            <b-form-input
              id="editCode-input"
              label="Code"
              type="text"
              :placeholder="item.playlistCode"
              v-model="getCode"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>
        <!-- <b-dropdown
          id="dropdown-form"
          text="New Playlist"
          ref="dropdown"
          class="m-2"
          variant="dark"
        >
          <b-dropdown-form>
            <b-form-group label="Name" label-for="form-new-playlist-name">
              <b-form-input
                id="form-new-playlist-name"
                size="sm"
                v-model="playlistName"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Code" label-for="form-new-playlist-desc">
              <b-form-input
                id="form-new-playlist-desc"
                type="text"
                size="sm"
                v-model="playlistCode"
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" size="sm" @click="createNewPlaylist"
              >Add</b-button
            >
          </b-dropdown-form>
        </b-dropdown> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      playlistName: "",
      playlistCode: "",
      // playlistDescription: "",
      //  items: [
      //    { name: "Probability & Statistics", code: "IT2050" },
      //    { name: "Proffesional skills", code: "IT2060" },
      //    { name: "ITP", code: "IT2070" }
      // ],
      getItems: [],
      playlistSearch: "",
      getName: "",
      getCode: "",
      item: {}
    };
  },

  created() {
    axios
      .get("https://trudeau-cda16.firebaseio.com/playlists.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        //const array = [];
        for (let key in data) {
          const item = data[key];
          item.id = key;
          //array.push(item);
          this.getItems.push(item);
        }
        //console.log(array);
        console.log(this.getItems);
        //this.getName = array[0].playlistName;
        //this.getCode = array[0].playlistCode;
      })
      .catch(error => console.log(error));
  },

  computed: {
    // filter items array
    playlistFilter: function() {
      return this.getItems.filter(playlist => {
        //return matching entries
        return playlist.playlistName
          .toLowerCase()
          .match(this.playlistSearch.toLowerCase());
      });
    }
  },

  methods: {
    createNewPlaylist() {
      const playlistFormData = {
        playlistName: this.playlistName,
        playlistCode: this.playlistCode
        //playlistDescription: this.playListDescription
      };
      if (
        playlistFormData.playlistName == "" ||
        playlistFormData.playlistCode == ""
      ) {
        alert("Field must not be empty.");
        return false;
      } else {
        axios
          .post(
            "https://trudeau-cda16.firebaseio.com/playlists.json",
            playlistFormData
          )
          .then(resp => {
            this.$bvToast.toast(`Added playlist ${this.playlistName}`, {
              title: "Added playlist",
              autoHideDelay: 2000
            });
            console.log(resp);
          })
          .catch(error => console.error(error));
      }
    },
    deletePlaylist(id) {
      axios
        .delete(
          "https://trudeau-cda16.firebaseio.com/playlists/" + id + ".json"
        )
        .then(resp => {
          this.$bvToast.toast(`Deleted playlist`, {
            title: "delete playlist",
            autoHideDelay: 2000
          });
          console.log(resp);
        });
    },
    patchPlaylist(id) {
      const playlistFormData2 = {
        playlistName: this.getName,
        playlistCode: this.getCode
      };
      axios
        .patch(
          "https://trudeau-cda16.firebaseio.com/playlists/" + id + ".json",
          playlistFormData2
        )
        .then(resp => {
          this.$bvToast.toast(`updated playlist`, {
            title: "update playlist",
            autoHideDelay: 2000
          });
          console.log(resp);
        });
    },
    modalData(playlist) {
      this.item = playlist;
    },
    resetModal() {
      this.getName = "";
      this.getCode = "";
    }
  }
};
</script>
