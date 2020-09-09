<template>
  <b-jumbotron>
    <b-button>Create Quiz</b-button>
    <b-form-input placeholder="Quiz Description "></b-form-input>
    <b-form-input placeholder="Course "></b-form-input>
    <b-checkbox
    value="1"
      unchecked-value="0"
      v-model="isTimed"
      > is timed</b-checkbox>
      <b-form-input  type="number" :disabled="isTimed == 0" placeholder="Time in minutes "></b-form-input>
      <b-form-input type="date" placeholder="Course "></b-form-input>
      <br>
    <b-form-input
      v-model="Questions[currentQ].question"
      placeholder="Enter question here"
    ></b-form-input>
    <!--<div :key="answer" v-for="answer in Questions[currentQ].Answers">-->
    <b-radio-group>
    <span :key="answer" v-for="answer in Questions[currentQ].Answers">
      <b-radio /><b-form-input
        v-model="answer.answer"
        placeholder="Enter answer here "
      ></b-form-input>
      <b-button @click="removeAns(answer)">Remove</b-button>
    </span>
    </b-radio-group>
    <!--</div>-->
    <b-button @click="addAns">Add Answer</b-button>

    <b-button @click="addQuestion">Add Question</b-button>
    <br /><br />
    <div :key="question.id" v-for="question in Questions">
      <b-button @click="removeBtn(question)">Remove</b-button>
      <b>Question:</b>{{ question.question }}
      <div :key="answer" v-for="answer in question.Answers">
       <b>Acnswer:</b> {{ answer.answer }}
      </div>
      
    </div>
  </b-jumbotron>
</template>
<script>
export default {
  data: function() {
    return {
      question: "",
      currentQ: 0,
      isTimed:0,
      currentAns: 1,

      Questions: [
        {
          id: null,
          question: null,
          Answers: [] //{ id: '', answer: '', isSelected: '' }
        }
      ]
    };
  },
  computed: {
    newAnswerId() {
      return this.Questions[this.currentQ].Answers.length == 0
        ? 1
        : Math.max(...this.Questions[this.currentQ].Answers.map(r => r.id)) + 1;
    },
    newQuestionId() {
      return this.Questions.length == 0
        ? 1
        : Math.max(...this.Questions.map(r => r.id)) + 1;
    }
  },
  methods: {
    addAns: function() {
      console.log(this.newId);
      this.Questions[this.currentQ].Answers.push({
        id: this.newAnswerId,
        answer: "",
        isSelected: ""
      });
      console.log(this.Questions);
    },
    removeAns: function(ans) {
      this.Questions[this.currentQ].Answers.splice(
        this.Questions[this.currentQ].Answers.indexOf(ans),
        1
      );
      console.log(this.Questions);
    },
    addQuestion: function() {
      this.currentQ = this.newQuestionId;
      this.Questions.push({ id: this.currentQ, question: "", Answers: [] });
      console.log(this.Questions);
    },
    removeBtn: function(que) {

      console.log(que.id)
      if(this.Questions.indexOf(que)>=1){
        this.Questions.splice(this.Questions.indexOf(que), 1);
      }else if (this.Questions.indexOf(que)==0){
        this.Questions[
        {
          id: null,
          question: null,
          Answers: [] //{ id: '', answer: '', isSelected: '' }
        }
      ]
      }
      console.log(this.Questions.indexOf(que));
      
      
    }
  }
};
</script>
<style scoped></style>
