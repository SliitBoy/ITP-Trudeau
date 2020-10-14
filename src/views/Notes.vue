<template>
  <div class="container-fluid min-vh-100" style="background-color: #2C2F33;">
    <div class="row">
      <div class="col-10" style="margin-top: 20px;">
        
                
        <b-card-group columns style="margin-top: 0px; min-width: 1000px">
          <!-- Create card for todos in array-->
          <b-card

            v-for="todo in getToDos" 
            :key="todo.task"
            :title="todo.task"
            :sub-title="todo.tasknum"
            aria-setsize="100"
            
            
          >
            <b-card-text> </b-card-text>

            <router-link
              :to="{
                name: 'ToDoList',
                params: { todo: todo }
              }"
              ><b-button variant="primary" size="sm"
                >View todo</b-button
              ></router-link
            >
            <!-- dropdown for edit and delete button options -->
            <template v-slot:footer>
              <b-dropdown size="sm" style="float: right;">
                <b-dropdown-item v-b-modal.edit-todo @click="modalData(todo)"
                  >edit</b-dropdown-item
                >
                <b-dropdown-item @click="deleteToDo(todo.id)"
                  >delete</b-dropdown-item
                >
              </b-dropdown>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="col-2" style="margin-top: 20px;">
        <button
          v-b-modal.new-todo
          class="btn btn-primary"
          style="float: right;"
        >
          New ToDo
        </button>
        
        <b-modal id="new-todo" centered title="New ToDo" @ok="addToDo()">
          <b-form-group id="tasknum-input" label="ToDo tasknum">
            <b-form-input
              id="tasknum-input"
              label="tasknum"
              type="text"
              placeholder="Enter tasknum"
              v-model="tasknum"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="task-input" label="ToDo task">
            <b-form-input
              id="task-input"
              label="Task"
              type="text"
              placeholder="Enter Task"
              v-model="task"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="priority-input" label="ToDo priority">
            <b-form-input
              id="priority-input"
              label="Priority"
              type="text"
              placeholder="Enter priority"
              v-model="priority"
            ></b-form-input>
          </b-form-group>
        </b-modal>

        <b-modal
          id="edit-todo"
          centered
          title="Edit ToDo"
          @ok="editToDo(todo.id)"
        >
          <b-form-group id="tasknum-edit" label="tasknum">
            <b-form-input
              id="tasknum-edit"
              label="tasknum"
              type="text"
              v-model="todo.tasknum"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="task-edit" label="ToDo task">
            <b-form-input
              id="task-edit"
              type="text"
              :value="todo.task"
              v-model="task"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="priority-edit" label="ToDo priority">
            <b-form-input
              id="priority-edit"
              label="Priority"
              type="text"
              :value="todo.priority"
              v-model="priority"
            ></b-form-input>
          </b-form-group>
        </b-modal>

       
      </div>
    </div>
  </div>
</template>

<script>
//import child componenet
import axios from "axios";


export default {
  //register component
  components: {
    
  },
  data() {
    return {
      task: "",
      tasknum: "",
      priority: "",
      //todo array
      getToDos: [],
      //todo object
      todo: {}
    };
  },
  
  /** creating function */ 
  created() {
    axios
      .get("https://trudeau-cda16.firebaseio.com/Notes.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        const array = [];
        for (let key in data) {
          const todo = data[key];
          todo.id = key;
          array.push(todo);
          this.getToDos.push(todo);
        }
        console.log(array);
        console.log("getToDos", this.getToDos);
      })
      .catch(error => console.log(error));
  },

 
  methods: {
    /** adding a new todo */
    addToDo() {
      const newToDo = {
        task: this.task,
        tasknum: this.tasknum,
        priority: this.priority
      };

      axios
        .post("https://trudeau-cda16.firebaseio.com/Notes.json", newToDo)
        .then(resp => {
          this.$bvToast.toast(`Added Task succesfully ${this.task}`, {
            task: "Added task",
            autoHideDelay: 2000
          });
          console.log(resp);
        })
        .catch(error => console.log(error));
    },
    
    /** The Delete function */
    deleteToDo(id) {
      axios
        .delete("https://trudeau-cda16.firebaseio.com/Notes/" + id + ".json")
        .then(resp => {
          this.$bvToast.toast(`Deleted task successfully`, {
            title: "Delete todo",
            autoHideDelay: 2000
          });
          console.log(resp);
        });
    },

    /** Update Function */
    editToDo(id) {
      console.log("ToDo ID", id);
      const todoToDoData2 = {
        task: this.task,
        tasknum: this.tasknum,
        priority: this.priority
      };
      axios
        .patch(
          "https://trudeau-cda16.firebaseio.com/Notes/" + id + ".json",
          todoToDoData2
        )
        .then(resp => {
          this.$bvToast.toast(`Updated ToDo`, {
            title: "To Do List Updated",
            autoHideDelay: 2000
          });
          console.log(resp);
        });
    },

    modalData(todo) {
      this.todo = todo;
    }
  }
};
</script>