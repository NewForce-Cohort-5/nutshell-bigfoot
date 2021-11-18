import { postEvent } from "./EventList.js"
import { saveEvent } from "./EventDataProvider.js"


const contentTarget = document.querySelector(".dashboard")

export const eventForm = () => {
    contentTarget.innerHTML = `
    <section class="eventForm" id="eventSection">
    <h2>Enter an Event Here</h2>
        <div id="eventName">
            <label for="eventName">Event Name:</label>
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

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        const eventName = document.querySelector("#eventNameField")
        const eventDate = document.querySelector("#eventDateField")
        const eventLocation = document.querySelector("#eventLocationField")

    const newEvent = {
        event: eventName.value,
        date: eventDate.value,
        location: eventLocation.value
    }
    document.querySelector("#eventNameField").value = ""
    document.querySelector("#eventDateField").value = ""
    document.querySelector("#eventLocationField").value = 0

    saveEvent(newEvent)
    .then(postEvent)
    }
})