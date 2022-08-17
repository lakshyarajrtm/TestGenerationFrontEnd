<template>
    <div class="add-questions-tab">
        <div class="questions-bank">
            
            <select name="QuestionBank">
                <options v-for="Question in QuestionBank" v-bind:key="Question.questionId" :value="Question.questionId">
                    {{ Question.questionName }}
                </options>
            </select>
        </div>
        <div class="test-paper-questions">
            <select name="TestPaperQuestions">

            </select>
        </div>
    </div>
</template>

<script>


import axios from 'axios'
import { ref } from 'vue'

export default{

    setup(){
        const QuestionBank = ref([])
        //const TestPaperQuestions = ref([])

        axios
            .get("https://localhost:7278/Questions/GetAllQuestions")
            .then(res => {
                QuestionBank.value = res.data
                console.log(QuestionBank.value)
            })
            
            return{
                QuestionBank
            }
    },
    methods:{
        AddQuestion(){

        }
    }
    
    
    
}
</script>