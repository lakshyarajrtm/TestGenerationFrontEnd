<template>
    <div class = "create-test">
        <div class="testinfo">
        </div>
        <div class="tabs">
            <router-link class="tab tab-bordered tab-active" to="/create/settings">Settings</router-link>
            <router-link class="tab tab-bordered" to="/create/addquestions">Add Questions</router-link>
        </div>
        <div class="active-save-buttons">
            <button id="active" class="btn btn-wide">Activate Test</button>
            <button id="save" class="btn btn-active">Save Test</button>
        </div>        
    </div>
    <router-view></router-view>
</template>
<script setup>

//import axios from 'axios'
//import { ref } from 'vue'


    
    

</script>

<style>

.testinfo{
    position:relative;
    justify-content: center;
}
.tabs{
    position: relative;
    top: -200px;
    left: 0px;
    right: -420px;
    bottom: -191px;
    text-align: top;
    padding-left: 700px;
    padding-bottom: -100px;
}

</style>