import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"

const eventHub = document.querySelector(".dashboard")
const contentTarget = document.querySelector(".dashboard")

export const LogOutButton = () => {
    contentTarget.innerHTML += `<button id="logout-button">Log Out</button>`
}

eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id === "logout-button"){
        // clear session storage
        sessionStorage.clear()

        // clear the DOM
        document.querySelector(".dashboard").innerHTML = ""
        // document.querySelector("#chat-bar").innerHTML = ""
        // clear each container individually

        // Reprint the login and register form
        location.reload()
        LoginForm()
        RegisterForm()
    }
})