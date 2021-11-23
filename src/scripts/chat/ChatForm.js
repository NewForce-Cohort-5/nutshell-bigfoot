import { ChatList } from "./ChatList.js";
import { getChat, saveChat } from "./ChatDataProvider.js";

const contentTarget = document.querySelector("#chat-bar")

let userId = sessionStorage.getItem("activeUser")

export const ChatForm = () => {

    contentTarget.innerHTML = `

    <section id="chat-bar">

    <fieldset>

        <input class="form control" type="text" id="chatbox" placeholder="Send new message" onfocus="this.value=''">
       

    </fieldset>
    <button type="button" class="btn btn-primary" id="send-button">Send</button>

</section>
    `
}

//Send event
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "send-button") {

    const newMessage = {
        message: document.querySelector("#chatbox").value,
        date: new Date().toLocaleString(),
        userId: parseInt(userId)
    }

    saveChat(newMessage)
    .then(ChatList)
}

})

//"Enter" key event

// document.getElementById("send-button").addEventListener('keyup', function(event) {
//         if (event.code === 'Enter')
//         {
//             event.preventDefault();
//             document.querySelector('form').submit();
//         }
//     });
