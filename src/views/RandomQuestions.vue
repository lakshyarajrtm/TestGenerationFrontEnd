
<script setup>

import axios from 'axios'
import { reactive, onMounted } from 'vue'

const state = reactive({
    questions : null
})


onMounted(async ()=>{
    let res =await axios.get("https://localhost:7278/Questions/GetQuestions?numOfQuestions=2")
    state.questions = await res.data
    console.log(state.questions.data)
})
   
</script>



<template>

<div class="random-questions">
    <div v-for="question in state.questions" v-bind:key="question.questionID">
        <p>{{ question.problemStatement }}</p>
        <p>A. {{ question.options[0] }}</p> <p>B. {{ question.options[1]}}</p>
        <p>C. {{ question.options[2] }}</p> <p>D. {{ question.options[3]}}</p>

    </div>
    
</div>


</template>