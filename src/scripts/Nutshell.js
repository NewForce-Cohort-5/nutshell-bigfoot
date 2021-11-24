import {LogOutButton} from "./auth/LogoutButton.js"
import { ChatList} from "./chat/ChatList.js"
import { ChatForm } from "./chat/ChatForm.js"
import { newsForm } from "./news/NewsForm.js"
import { newsList } from "./news/NewsList.js"
import { taskList } from "./task/TaskList.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      newsList()
      newsForm()
        taskList()
}
    

      ChatForm()
      ChatList()

      
