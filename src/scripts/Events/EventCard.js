import { deleteEvent } from "./EventDataProvider.js"
import { eventEditor } from "./EventEditForm.js"
import { postEvent } from "./EventList.js"

export const Event = (events) => {
    return `
    <div id="eventCard">
        ${events.event}<br>
        ${events.date}<br>
        ${events.location}
        <button class="eventEdit" id-"editEvent--${events.id}">Edit</button>
        <button class="eventDel" id-"deleteEvent--${events.id}">Delete</button>
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
    if (eventObject.target.id.startsWith("editEvent")) {
        const eventId = +eventObject.target.id.split("--")[1]
        eventEditor(eventId)
    }
})