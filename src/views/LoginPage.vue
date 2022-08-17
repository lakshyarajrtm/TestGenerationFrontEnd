<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')

const r = "https://localhost:7278/Login/Login"

async function fetch(){
  let a = await axios.post(r, { UserName : username.value, Password:password.value}, {
    'Content-Type': 'application/json'
  })
  localStorage.setItem("jwt", a.data.value)
  console.log(a.data.value)
}

// lifecycle hooks
onMounted(() => {
})
</script>

<template>
  <p style = "display:inline;">Username  <input type = 'text' v-model='username' class = 'input input-bordered w-full max-w-xs' /></p><br/>
  <p style = "display:inline;">Password  <input type = 'text' v-model='password' class = 'input input-bordered w-full max-w-xs' /></p><br/>
  <button class='btn btn-primary' @click='fetch'>Login</button>
</template>

<style>



</style>