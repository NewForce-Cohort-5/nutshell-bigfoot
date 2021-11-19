import { useEvents, modifyEvent } from "./EventDataProvider.js"
import { postEvent } from "./EventList.js"

export const eventEditor = (eventId) => {
    const contentTarget = document.querySelector(`#eventEdit--${eventId}`)
    const allEvents = useEvents()
    
    const eventToEdit = allEvents.find(singleEvent => singleEvent.id === eventId)
    contentTarget.innerHTML = `
        <section id="editingEvent"
            <h2>Edit Note</h2>
                <input type="text" id="editingEventName" value="${eventToEdit.event}" /><br>
                <input type="date" id="editingEventDate" value="${eventToEdit.date}" /><br>
                <input type="text" id="editingEventLocation"value="${eventToEdit.location}" /><br>
                <button id="saveEditEvent--${eventId}">Save Changes</button>
        </section>
    `

}
const editTarget = document.querySelector("body")

editTarget.addEventListener("click", (event) => {
    if (event.target.id.startsWith("saveEditEvent")) {
        const editedEvent = {
            id: +event.target.id.split("--")[1],
            event: document.querySelector("#editingEventName").value,
            date: document.querySelector("#editingEventDate").value,           
            location: document.querySelector("#editingEventLocation").value
        }
        console.log(document.querySelector("#editingEventLocation").value)
        console.log(document.querySelector("#editingEventDate").value)
        console.log(document.querySelector("#editingEventName").value)
        modifyEvent(editedEvent)
        .then(postEvent)
    }
})