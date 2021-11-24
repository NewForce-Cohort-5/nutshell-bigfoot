import {LogOutButton} from "./auth/LogoutButton.js"
import { eventForm } from "./Events/EventForm.js"
import { postEvent } from "./Events/EventList.js"
import { newsForm } from "./news/NewsForm.js"
import { newsList } from "./news/NewsList.js"
import { taskList } from "./task/TaskList.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      taskList()
      eventForm()
      postEvent()
      newsList()
      newsForm()
      taskList()
}
    

