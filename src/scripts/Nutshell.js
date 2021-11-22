import {LogOutButton} from "./auth/LogoutButton.js"
import { newsForm } from "./news/NewsForm.js"
import { newsList } from "./news/NewsList.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      newsList()
      newsForm()
}