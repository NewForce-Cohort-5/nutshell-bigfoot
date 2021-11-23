import { ChatList } from "./ChatList.js";
import { getChat, saveChat } from "./ChatDataProvider.js";

const contentTarget = document.querySelector("#chat-bar")



export const ChatForm = () => {

    contentTarget.innerHTML = `

  

    <fieldset>

        <input class="form control" type="text" id="chatbox" placeholder="Send new message" onfocus="this.value=''">
       

    </fieldset>
    <button type="button" class="btn btn-primary" id="send-button">Send</button>


    `
}

//Send event
document.querySelector("body").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "send-button") {
    let userId = sessionStorage.getItem("activeUser")
   
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
