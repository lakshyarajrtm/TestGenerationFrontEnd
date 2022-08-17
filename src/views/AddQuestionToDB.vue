
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const questionName = ref('')
const skill = ref('')
const difficultyLevel = ref(0)
const roleType = ref(0)
const problemStatement = ref('')
const optionA = ref('')
const optionB = ref('')
const optionC = ref('')
const optionD = ref('')
const isActive = ref(true)
const author = ref('')
//const copyOff = ref('')

const url = "https://localhost:7278/Questions/CreateQuestion"

const postQuestion = () =>
{
    axios
        .post(url, {
            QuestionName : questionName.value,
            Skill : skill.value,
            DifficultyLevel : difficultyLevel.value,
            RoleType : roleType.value,
            ProblemStatement : problemStatement.value,
            Options : [
                optionA.value, optionB.value, optionC.value, optionD.value
            ],
            IsActive : isActive.value,
            Author : author.value,
            CopyOff : 'itself'
        },
        {
            headers:
            {
                
                'Content-Type': 'application/json',
                'authorization' : 'Bearer '+localStorage.getItem('jwt'),
            }
        })

}

</script>


<template>
<div class="AddQuestion">
    <p>Question Name<input type="text" v-model="questionName"/></p><br/>
    <p>Skill<input type="text" v-model="skill"/></p><br/>
    <p>Difficulty Level
    <select v-model="difficultyLevel">
        <option value=0>Easy</option>
        <option value=1>Medium</option>
        <option value=2>Hard</option>
    </select></p><br/>
    <p>Role type
    <select v-model="roleType">
        <option value=0>Junior</option>
        <option value=1>Mid</option>
        <option value=2>Senior</option>
    </select>
    </p><br/>
    <p>Problem statement<input type="text" v-model="problemStatement" /></p><br/>
    <p>Options :</p><br/>
    <input type="text" v-model="optionA" /> <input type="text" v-model="optionB" /><br/>
    <input type="text" v-model="optionC" /> <input type="text" v-model="optionD" /><br/>
    <p>Is Active
    <select v-model="isActive">
        <option value="false">false</option>
        <option value="true">True</option>
    </select>
    </p>
    <p>Author<input type="text" v-model="author" /></p>
    <button class="btn" @click="postQuestion" >Save Question</button>
</div>


</template>

<style>
input{
    border:1px solid black;
}
select{
    border:1px solid black;
}

</style>