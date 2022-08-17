import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import CreateTest from "./views/CreateTest"
import ViewAllTest from "./views/ViewAllTest"
import LoginPage from "./views/LoginPage"
import AddQuestions from "./views/CreateTest/AddQuestions"
import TestPaperSettings from "./views/CreateTest/TestPaperSettings"
import AddQuestionToDB from "./views/AddQuestionToDB"
import RandomQuestions from './views/RandomQuestions'

const routes = [
    {
        path : "/",
        Name : "ViewAllTest",
        component : ViewAllTest
    },
    {
        path : "/create",
        Name : "Create",
        component : CreateTest
    },
    {
        path : '/loginpage',
        Name : 'LoginPage',
        component : LoginPage
    },
    {
        path : '/create/settings',
        Name : 'TestSettings',
        component : TestPaperSettings
    },
    {
        path : '/create/addquestions',
        Name : 'AddQuestions',
        component : AddQuestions
    },
    {
        path : "/addquestion",
        Name : 'AddQuestionsToDB',
        component : AddQuestionToDB
    },
    {
        path : "/randomQuestions",
        Name : 'RandomQuestions',
        component : RandomQuestions
    }
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
