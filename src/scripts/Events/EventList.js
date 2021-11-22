import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"

export const postEvent = () => {
    const eventTarget = document.querySelector(".eventContainer")

// This code populates the events array for the page:
    getEvents()
    .then(() => {
        const eventArray = useEvents()

// This portion of the code sorts by date:
        const sortedEvent = eventArray.sort((a, b) => {
            return new Date (a.date) - new Date (b.date)
            })
        eventTarget.innerHTML = sortedEvent.map(singleEvent => {
            return Event(singleEvent)
        }).join("")
    })
}

// Write if else for bold first card
