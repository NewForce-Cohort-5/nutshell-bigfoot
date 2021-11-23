import {LogOutButton} from "./auth/LogoutButton.js"
import { ChatList} from "./chat/ChatList.js"
import { ChatForm } from "./chat/ChatForm.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      ChatForm()
      ChatList()
}