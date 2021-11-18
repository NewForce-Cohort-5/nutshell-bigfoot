import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"

export const postEvent = () => {
    const eventTarget = document.querySelector(".dashboard")

    getEvents()
    .then(() => {
        const eventArray = useEvents()

        eventTarget.innerHTML = eventArray.map(singleEvent => {
            return Event(singleEvent)
        }).join("")
    })
}

