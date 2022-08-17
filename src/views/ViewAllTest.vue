<template>
    <div class = "view-all-test">
        <h1>Assessments</h1>
        <div class = "overflow-x-auto" >
            <table class="table w-full table-zebra">
                <thead>
                <tr>
                    <th>Author</th> 
                    <th>TestName</th> 
                    <th>role type</th>
                    <th>id</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="test in tests" v-bind:key="test.testName">
                    <td>{{ test.author }}</td>
                    <td>{{ test.testName }}</td>
                    <td>{{ test.roleType }}</td>
                    <td>{{ test.paperId }}</td>
                    <td><button class="btn btn-primary" :value="test.paperId" @click="router.push('/create')">Open</button></td>
                </tr>
                </tbody>
            </table>
        </div>        
    </div>
</template>


<script>
import axios from 'axios'
import { ref } from 'vue'

export default{
    setup(){

        const tests = ref([])

        axios
            .get("https://localhost:7278/TestPaper/GetAllTest")
            .then(res => {
                tests.value = res.data
            })
            console.log(tests)
            return {
                tests
            }      
    },
}

</script>

