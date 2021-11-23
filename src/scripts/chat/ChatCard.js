import { ChatForm } from "./ChatForm.js";
import { ChatList } from "./ChatList.js";
import { ChatEditForm } from "./ChatEditForm.js";
import { deleteChat} from "./ChatDataProvider.js"

let unixTimestamp = +new Date().getTime()
let timestamp = new Date(unixTimestamp * 1000)

console.log(timestamp)//displays time in console


export const Messages = (chat) => {

    return `
    
    <div class="chatbox">${chat.message}</div>
    
    <div class="chat-date">${chat.date}</div>

    <button type="button" class="btn btn-default" id="edit--${chat.id}">Edit</button>
    <button type="button" class="btn btn-danger" id="deleteEntry--${chat.id}">Delete</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("edit--")) {
        const messageId = +eventObject.target.id.split("--")[1]
        console.log(messageId)
        ChatEditForm(messageId);
    } 
})




const deleteHub = document.querySelector("body")

deleteHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteEntry")) {
      const idToDelete = eventObject.target.id.split("--")[1]
      console.log("Delete button pressed")
      // ---------- Write your code here -------------//
      // Call the deleteNote function and pass in the appropriate id
      // Then call NoteList to refresh the list of notes
      deleteChat(idToDelete)
      .then(ChatList)
    }
  });

  