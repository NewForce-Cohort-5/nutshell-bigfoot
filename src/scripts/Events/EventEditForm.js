import { useEvents, modifyEvent } from "./EventDataProvider.js"
import { postEvent } from "./EventList.js"


export const eventEditor = eventId => {
    const contentTarget = document.querySelector(`#editEvent--${eventId}`)
    const allEvents = useEvents()
    
    const eventToEdit = allEvents.find(singleEvent => singleEvent.id === eventId)
    contentTarget.innerHTML = `
        <section id="eventEditor"
            <h2>Edit Note</h2>
                <input type="text" id="editEventName" value="${eventToEdit.name}" /><br>
                <input type="date" id="editEventDate" value="${eventToEdit.date}" /><br>
                <input type="text" id="editEventLocation"value="${eventToEdit.location}" /><br>
                <button id="saveEditEvent--${eventId}">Save Changes</button>
        </section>
    `

}

// contentTarget.addEventListener("click", (event) => {
//     if (event.target.id.startsWith("saveEditEvent")) {
//         const editedEvent = {
//             id: +event.target.id.split("--")[1],
//             name: document.querySelector("#editEventName").value,
//             date: document.querySelector("#editEventDate").value,
//             location: document.querySelector("#editEventLocation").value
//         }
//         modifyEvent(editedEvent)
//         .then(postEvent)
//     }
// })