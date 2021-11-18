import { getEvents, useEvents } from "./EventDataProvider.js"
import { eventForm } from "./EventForm.js"
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

// const eventTarget = document.querySelector(".dashboard")
// export const postEvent = () => {
//     getEvents()
//     .then(() => {
//         let eventArray = useEvents()
//         let eventHTML = ""
//         eventArray.forEach((singleEvent) => {
//             eventHTML += eventForm(singleEvent)
//         })
//         eventTarget.innerHTML = eventHTML
//     })
// }