import { deleteEvent } from "./EventDataProvider.js"
import { eventEditor } from "./EventEditForm.js"
import { postEvent } from "./EventList.js"

export const Event = (event) => {
    return `
    <div id="eventCard">
        ${event.event}<br>
        ${event.date}<br>
        ${event.location}<br>
        <button class="eventEdit" id="eventEdit--${event.id}">Edit</button>
        <button class="eventDel" id="deleteEvent--${event.id}">Delete</button>
    `
}

const editDelete = document.querySelector("body")

editDelete.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteEvent")) {
        const eventToDelete = eventObject.target.id.split("--")[1]
        deleteEvent(eventToDelete)
        .then(postEvent)
    }
})

editDelete.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("eventEdit")) {
        const eventId = +eventObject.target.id.split("--")[1]
        eventEditor(eventId)
    }
})