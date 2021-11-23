import { postEvent } from "./EventList.js"
import { getEvents, saveEvent } from "./EventDataProvider.js"


// This is the form for entering in a new Event:
export const eventForm = () => {
    const contentTarget = document.querySelector("#eventFormContainer")
    contentTarget.innerHTML = `
    <section class="eventForm" id="eventSection">
    <h2>Enter an Event Here</h2>
        <div id="eventName">
            <label for="eventName">Event:</label>
            <input type="text" id="eventNameField">
        </div>
        <div id="eventDate">
            <label for="eventDate">Event Date:</label>
            <input type="date" id="eventDateField">
        </div>
        <div id="eventLocation">
            <label for="eventLocation">Event Location:</label>
            <input type="text" id="eventLocationField">
        </div>
        <button id="saveEvent">Save</button>
    `
}

let userId = sessionStorage.getItem('activeUser')

// This is the Save button for New Events:
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        let userId = sessionStorage.getItem('activeUser')
        const eventName = document.querySelector("#eventNameField")
        const eventDate = document.querySelector("#eventDateField")
        const eventLocation = document.querySelector("#eventLocationField")

// This saves new events to the JSON:
    const newEvent = {
        event: eventName.value,
        date: eventDate.value,
        location: eventLocation.value,
        userId: parseInt(userId)
    }
    document.querySelector("#eventNameField").value = ""
    document.querySelector("#eventDateField").value = ""
    document.querySelector("#eventLocationField").value = ""

    saveEvent(newEvent)
    .then(postEvent)
    }
})