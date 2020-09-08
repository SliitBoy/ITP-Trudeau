<template>
  
  <div>

    <QuestionBox/><!--</QuestionBox>-->

  <b-jumbotron>
    <b-form-input v-model="search" placeholder="Search"></b-form-input>
  </b-jumbotron>
  <CreateQuiz/>
  </div>
  
</template>
<script>
import QuestionBox from "./../components/quiz/quiz-questions";
import CreateQuiz from "./../components/quiz/create-quiz";
export default {
  
  data() {
      return {
        selected: ''
      }

    },
    components: {
      QuestionBox,
      CreateQuiz
  }
}
</script>
<style scoped>
  .padding{}
</style>