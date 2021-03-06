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

// let chatWindow = document.getElementById('chat-container'); 
// var xH = chatWindow.scrollHeight; 
// chatWindow.scrollTo(0, xH);


//Auto Leap to bottom of chat
const messagesContent = document.getElementById('chat-container');

// function appendMessage() {
// 	const messagesContent = document.getElementsByClassName('chat-container')[0];
//     // messagesContent.appendChild(message)
// }

function getMessages() {
	// Prior to getting your messages.
  let shouldScroll = messagesContent.scrollTop + messagesContent.clientHeight === messagesContent.scrollHeight;
  /*
   * Get your messages, we'll just simulate it by appending a new one syncronously.
   */
//   appendMessage();
  // After getting your messages.
  if (!shouldScroll) {
    scrollToBottom();
//   } else {
//         messagesContent.scrollTop = messagesContent.scrollHeight
  }
}

function scrollToBottom() {
    messagesContent.scrollTop = messagesContent.scrollHeight;
}

// scrollToBottom();

setInterval(getMessages, 100);
// newsList("userID")

// NewsEditForm()
}

