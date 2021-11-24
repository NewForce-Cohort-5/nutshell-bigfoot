import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { eventForm } from "./Events/EventForm.js"
import { postEvent } from "./Events/EventList.js"
import { Nutshell } from "./Nutshell.js"
import { NewsEditForm } from "./news/NewsEditForm.js"
import { getNews } from "./news/NewsDataProvider.js"
import { taskForm } from "./task/TaskForm.js"

// This makes a Darkmode button, it's just for fun:
const darkModeButton = document.querySelector("#darkMode")

// This makes the Darkmode button work when the button is clicked:
darkModeButton.addEventListener("click", function() {
    const bodyElement = document.querySelector("body")
    bodyElement.classList.toggle("dark-background")
})

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


// taskForm()

const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    Nutshell()

}

