import {LogOutButton} from "./auth/LogoutButton.js"
import { eventForm } from "./Events/EventForm.js"
import { postEvent } from "./Events/EventList.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
      eventForm()
      postEvent()
}