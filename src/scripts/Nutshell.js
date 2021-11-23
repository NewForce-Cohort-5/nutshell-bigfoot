import {LogOutButton} from "./auth/LogoutButton.js"
import { ChatList} from "./chat/ChatList.js"
import { ChatForm } from "./chat/ChatForm.js"
import { taskList } from "./task/TaskList.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      taskList()

      ChatForm()
      ChatList()
}
      
