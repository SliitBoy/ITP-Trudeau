import Vue from 'vue'
Vue.component('question', {
    data: function() {
        return {
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
    template: ` <div style="background-color: red;" class="question">
                {{Questions[current].question}}
                <ol><li v-for="answer in Questions[current].Answers">
                <input type="radio"  v-model="picked">
                {{answer.answer}}
                </li></ol>
                <button v-on:click="back"> back</button>
                <button v-on:click="current += 1"> next</button>
              </div> `
})
new Vue({
    el: '#app'
})