import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"

export const postEvent = () => {
    const eventTarget = document.querySelector(".dashboard")

// This code populates the events array for the page:
    getEvents()
    .then(() => {
        const eventArray = useEvents()

// This portion of the code sorts by date:
        const sortedEvent = eventArray.sort((a, b) => {
            return new Date (b.date) - new Date (a.date)
            })
        eventTarget.innerHTML = sortedEvent.map(singleEvent => {
            return Event(singleEvent)
        }).join("")
    })
}