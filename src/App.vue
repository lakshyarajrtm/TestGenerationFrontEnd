
<template>
  <div>
    <ul class="menu w-56 bg-secondary text-secondary-content p-2 rounded-box">
      <li><router-link to='/' >Assessments</router-link></li>
      <li><router-link to='/create' >New Assessment</router-link></li>
      <li><router-link to='/loginpage'>Login</router-link></li>
      <li><router-link to='/addquestion'>Add Question</router-link></li>
      <li><router-link to='/randomQuestions'>Random Questions</router-link></li>
    </ul>    
  </div>
  <router-view></router-view>
</template>


<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
