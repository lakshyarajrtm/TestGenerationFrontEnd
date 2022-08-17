

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const QuestionBank = ref([])
const TestPaperList = ref([])

axios
    .get("https://localhost:7278/Questions/GetAllQuestions")
    .then(res => {
        QuestionBank.value = res.data.value
    })

const StartDrag = (event, item) => {
    event.dataTransfer.dropEffect = "move"
    event.dataTransfer.effectAllowed = "move"
    event.dataTransfer.setData('ItemID', item.questionId)
    TestPape = item

}

const OnDrop = (event, list) => {
    const ItemID = event.dataTransfer.getData('ItemID')
    const item = QuestionBank.value.find((item) => item.questionId == ItemID)
    
}

</script>

<template>

<div
    class="QuestionBank"

    >

</div>


</template>