import { deleteEvent } from "./EventDataProvider.js"
import { eventEditor } from "./EventEditForm.js"
import { postEvent } from "./EventList.js"

// This builds how the Event information will display on the page:
export const Event = (event) => {
    return `
    <div class="eventCard" id="eventCard">
        ${event.event}<br>
        ${event.date}<br>
        ${event.location}<br>
        <button class="eventEdit" id="eventEdit--${event.id}">Edit</button>
        <button class="eventDel" id="deleteEvent--${event.id}">Delete</button>
        </div>
    `
}

// This card is for the first listed Event, which should be bold, with larger text:
export const EventBold = (event) => {
    return `
    <div class="eventCardBold" id="eventCardBold">
        ${event.event}<br>
        ${event.date}<br>
        ${event.location}<br>
        <button class="eventEdit" id="eventEditBold--${event.id}">Edit</button>
        <button class="eventDel" id="deleteEventBold--${event.id}">Delete</button>
    `
}

// This is the QS for the Edit and Delete buttons:
const editDelete = document.querySelector("body")

// This causes the above function to target the Delete button for deleting chunks from the array:
editDelete.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteEvent")) {
        const eventToDelete = eventObject.target.id.split("--")[1]
        deleteEvent(eventToDelete)
        .then(postEvent)
    }
})

// This causes the QS to target the Edit button for editing chunks in the array:
editDelete.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("eventEdit")) {
        const eventId = +eventObject.target.id.split("--")[1]
        eventEditor(eventId)
    }
})