<template>
  <div class="container-fluid min-vh-100" style="background-color: #2C2F33;">
    <div class="row">
      <div class="col-10" style="margin-top: 20px;">
        <!-- Search Input field-->
        <input
          type="text"
          class="form-control"
          v-model="forumSearch"
          placeholder="Search"
        />
        <b-card-group columns style="margin-top: 10px;">
          <!-- Create card for forums in array-->
          <b-card
            v-for="forum in forumFilter"
            :key="forum.name"
            :title="forum.title"
            :sub-title="forum.courseCode"
            aria-setsize="100"
          >
            <b-card-text> </b-card-text>
            <!-- Send Course code to player componenet 
            <router-link
              :to="{
                name: 'ViewPlaylist',
                params: { id: playlist.playlistCode }
              }"
              ><b-button variant="primary" size="sm"
                >View playlist</b-button
              ></router-link -->

            <template v-slot:footer>
              <b-dropdown size="sm" style="float: right;">
                <b-dropdown-item v-b-modal.edit-forum @click="modalData(forum)"
                  >edit</b-dropdown-item
                >
                <b-dropdown-item @click="deleteForum(forum.id)"
                  >delete</b-dropdown-item
                >
              </b-dropdown>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-2" style="margin-top: 20px;">
        <button
          v-b-modal.new-forum
          class="btn btn-primary"
          style="float: right;"
        >
          New Forum
        </button>

        <b-modal id="new-forum" centered title="New Forum" @ok="addForum()">
          <b-form-group id="code-input" label="Forum code">
            <b-form-input
              id="code-input"
              label="Code"
              type="text"
              placeholder="Enter code"
              v-model="courseCode"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="title-input" label="Forum title">
            <b-form-input
              id="title-input"
              label="Title"
              type="text"
              placeholder="Enter Title"
              v-model="title"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="message-input" label="Forum message">
            <b-form-input
              id="message-input"
              label="Message"
              type="text"
              placeholder="Enter message"
              v-model="message"
            ></b-form-input>
          </b-form-group>
        </b-modal>

        <b-modal
          id="edit-forum"
          centered
          title="Edit Forum"
          @ok="editForum(forum.id)"
        >
          <b-form-group id="formName" label="Forum Name">
            <b-form-input
              id="name-input"
              type="text"
              :placeholder="forum.title"
              v-model="title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="formCode" label="Course Code">
            <b-form-input
              id="code-input"
              label="Code"
              type="text"
              :placeholder="forum.courseCode"
              v-model="courseCode"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="forumMessage" label="Forum message">
            <b-form-input
              id="forumMessage"
              label="Message"
              type="text"
              :placeholder="forum.message"
              v-model="message"
            ></b-form-input>
          </b-form-group>
        </b-modal>

        <!-- call forumbody component and pass forum object as a prop -->
        <forum-body :forum="forum"></forum-body>
      </div>
    </div>
  </div>
</template>

<script>
//import child componenet
import forumBody from "../components/forum/ForumDisplay";
import axios from "axios";

export default {
  //register component
  components: {
    ForumBody: forumBody
  },
  data() {
    return {
      title: "",
      courseCode: "",
      message: "",
      //forum array
      getForums: [],
      forumSearch: "",
      getTitle: "",
      getCourseCode: "",
      getMessage: "",
      //forum object
      forum: {}
    };
  },

  created() {
    axios
      .get("https://trudeau-cda16.firebaseio.com/forum.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        const array = [];
        for (let key in data) {
          const forum = data[key];
          forum.id = key;
          array.push(forum);
          this.getForums.push(forum);
        }
        console.log(array);
        console.log("getForums", this.getForums);
      })
      .catch(error => console.log(error));
  },

  computed: {
    // filter items array
    forumFilter: function() {
      return this.getForums.filter(forum => {
        //return matching entries
        return forum.title.toLowerCase().match(this.forumSearch.toLowerCase());
      });
    }
  },

  methods: {
    addForum() {
      const newForum = {
        title: this.title,
        courseCode: this.courseCode,
        message: this.message
      };

      axios
        .post("https://trudeau-cda16.firebaseio.com/forum.json", newForum)
        .then(resp => {
          this.$bvToast.toast(`Added forum topic ${this.title}`, {
            title: "Added topic",
            autoHideDelay: 2000
          });
          console.log(resp);
        })
        .catch(error => console.log(error));
    },
    deleteForum(id) {
      axios
        .delete("https://trudeau-cda16.firebaseio.com/forum/" + id + ".json")
        .then(resp => {
          this.$bvToast.toast(`Deleted forum`, {
            title: "Delete forum",
            autoHideDelay: 2000
          });
          console.log(resp);
        });
    },
    editForum(id) {
      console.log("Forum ID", id);
      const forumFormData2 = {
        forumName: this.getTitle,
        forumCode: this.getCourseCode,
        forumMessage: this.message
      };
      axios
        .patch(
          "https://trudeau-cda16.firebaseio.com/forum/" + id + ".json",
          forumFormData2
        )
        .then(resp => {
          this.$bvToast.toast(`Updated Forum`, {
            title: "update forum",
            autoHideDelay: 2000
          });
          console.log(resp);
        });
    },

    modalData(forum) {
      this.forum = forum;
    }
  }
};
</script>
