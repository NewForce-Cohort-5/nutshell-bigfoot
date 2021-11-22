import { useEvents, modifyEvent } from "./EventDataProvider.js"
import { postEvent } from "./EventList.js"

// This function permits editing Events:
export const eventEditor = (eventId) => {
    const contentTarget = document.querySelector(`#eventEdit--${eventId}`)
    const allEvents = useEvents()

// This function produces edit fields for the selected chunk of array data to edit:
    const eventToEdit = allEvents.find(singleEvent => singleEvent.id === eventId)
    contentTarget.innerHTML = `
        <section id="editingEvent"
            <h2>Edit Note</h2>
                <input type="text" id="editingEventName" value="${eventToEdit.event}" /><br>
                <input type="date" id="editingEventDate" value="${eventToEdit.date}" /><br>
                <input type="text" id="editingEventLocation"value="${eventToEdit.location}" /><br>
                <button class="saveEditEvent" id="saveEditEvent--${eventId}">Save Changes</button>
        </section>
    `
}

const editTarget = document.querySelector("body")

//This button saves edits to the selected Event:
editTarget.addEventListener("click", (event) => {
    if (event.target.id.startsWith("saveEditEvent")) {
        const editedEvent = {
            id: +event.target.id.split("--")[1],
            event: document.querySelector("#editingEventName").value,
            date: document.querySelector("#editingEventDate").value,           
            location: document.querySelector("#editingEventLocation").value
        }
        modifyEvent(editedEvent)
        .then(postEvent)
    }
})