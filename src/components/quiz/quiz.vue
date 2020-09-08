<template>
    <div class="fe">
        <b-jumbotron header="BootstrapVue" v-bind:lead="Questions[current].question" header-level="5">
            <b-form-group >
                <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
                <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
            </b-form-group>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            <b-button variant="primary" href="#">Next</b-button>
            <b-button variant="primary" href="#">Back</b-button>
        </b-jumbotron>
        <b-jumbotron :key="value" v-for="value in Question.length">
            <b-button>1</b-button>
            <b-button>2</b-button>
            <b-button>3</b-button>
            <b-button>4</b-button>
            <b-button>5</b-button>
        </b-jumbotron>
  </div>
</template>
<script>
    module.exports ={
        data: function() {
        return {
            val:0,
            current: 0,
            Questions: [{
                    question: 'Q1',
                    picked: '',
                    Answers: [{ id: 1, answer: 'ans1', isSelected: false }, { id: 2, answer: 'ans2', isSelected: false }, { id: 3, answer: 'ans3', isSelected: false }]
                },
                {
                    question: 'Q2',
                    Answers: [{ answer: 'ans1', isSelected: false }, { answer: 'ans2', isSelected: false }, { answer: 'ans3', isSelected: false }, { answer: 'ans4', isSelected: false }]
                },
                {
                    question: 'Q3',
                    Answers: [{ answer: 'ans1', isSelected: false }, { answer: 'ans2', isSelected: false }, { answer: 'ans3', isSelected: false }]
                },
                {
                    question: 'Q4',
                    Answers: [{ answer: 'ans1', isSelected: false }, { answer: 'ans2', isSelected: false }, { answer: 'ans3', isSelected: false }]
                },
                {
                    question: 'Q5',
                    Answers: [{ answer: 'ans1', isSelected: false }, { answer: 'ans2', isSelected: false }, { answer: 'ans3', isSelected: false }]
                },
            ],
        }
    },
    methods: {

        back: function() {
            if (!this.Questions == null && this.current > 0) {
                this.current -= 1
            }
        },
        next: function() {
            if (!this.Questions == null && this.current >= this.Question.length) {
                this.current += 1
            }
        }
    },
}
</script>
<style scoped>

</style>