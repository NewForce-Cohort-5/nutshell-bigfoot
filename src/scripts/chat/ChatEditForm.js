import { updateChat } from "./ChatDataProvider.js";
import { ChatList } from "./ChatList.js";
import { useChat } from "./ChatDataProvider.js";

const contentTarget = document.querySelector("#chat-container")

export const ChatEditForm = (messageId) => {

    const allChats = useChat();

    const chatToEdit = allChats.find(singleChat => singleChat.id === messageId)

    contentTarget.innerHTML = `
    <input type="text" id="chatbox" value="${chatToEdit.message}" />
    <button id="saveEditChanges--${messageId}">Save Changes</button>
    <button id="cancelChanges--${messageId}">Cancel</button>
    `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveEditChanges")) {

        const editedMessage = {
            id: parseInt(event.target.id.split("--")[1]),
            message: document.querySelector("#chatbox").value,
            date: new Date().toLocaleString()
            // time: document.querySelector("#chat-time").value,
            // date: document.querySelector("#chat-date").value
        }
        
        updateChat(editedMessage)
        .then(ChatList)
        }
})

//cancel button
const cancelTarget = document.querySelector("body")

cancelTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith ("cancelChanges")) {
        ChatList()
    }
})

