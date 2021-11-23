import { useChat, getChat } from "./ChatDataProvider.js"
import { Messages } from "./ChatCard.js"


export const ChatList = () => {

    getChat()
    .then(() => {

        let chatArray = useChat()
        let chatHTML = "";

        chatArray.forEach(singleChatObj => {
            chatHTML += Messages(singleChatObj)
        })

        document.querySelector("#chat-container").innerHTML = `
        
        ${chatHTML}
        `
    })
}

