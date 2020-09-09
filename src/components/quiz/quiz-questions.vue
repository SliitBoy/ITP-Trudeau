<template>
  <div>
    <b-jumbotron
      header="BootstrapVue"
      v-bind:lead="Questions[current].question"
      header-level="16"
    >
      <b-radio-group
        id="answer-radiogroup"
        v-model="selected"
        :key="answer"
        v-for="answer in Questions[current].Answers"
      >
        <b-radio v-bind="answer.id">{{ answer.answer }}</b-radio>
      </b-radio-group>
    </b-jumbotron>
    <b-jumbotron>
      <b-button-group :key="val" v-for="val in Questions.length">
        <b-button @click="setQ(val)">{{ val }}</b-button>
      </b-button-group>
      <br />
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      current: 0,
      selected: "",
      Questions: [
        {
          question: "Q1",
          picked: "",
          Answers: [
            { id: 1, answer: "ans1", isSelected: false },
            { id: 2, answer: "ans2", isSelected: false },
            { id: 3, answer: "ans3", isSelected: false }
          ]
        },
        {
          question: "Q2",
          Answers: [
            { id: 1, answer: "ans1", isSelected: false },
            { id: 2, answer: "ans2", isSelected: false },
            { id: 3, answer: "ans3", isSelected: false },
            { id: 4, answer: "ans4", isSelected: false }
          ]
        },
        {
          question: "Q3",
          Answers: [
            { id: 1, answer: "ans1", isSelected: false },
            { id: 2, answer: "ans2", isSelected: false },
            { id: 3, answer: "ans3", isSelected: false }
          ]
        },
        {
          question: "Q4",
          Answers: [
            { id: 1, answer: "ans1", isSelected: false },
            { id: 2, answer: "ans2", isSelected: false },
            { id: 3, answer: "ans3", isSelected: false }
          ]
        },
        {
          question: "Q5",
          Answers: [
            { id: 1, answer: "ans1", isSelected: false },
            { id: 2, answer: "ans2", isSelected: false },
            { id: 3, answer: "ans3", isSelected: false }
          ]
        }
      ]
    };
  },
  props: ["val"],

  methods: {
    setQ: function(val) {
      this.current = val - 1;
    },
    back: function() {
      if (!this.Questions == null && this.current > 0) {
        this.current -= 1;
      }
    },
    next: function() {
      if (!this.Questions == null && this.current >= this.Question.length) {
        this.current += 1;
      }
    }
  }
};
</script>
<style scoped></style>
