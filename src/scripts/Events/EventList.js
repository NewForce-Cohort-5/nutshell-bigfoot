import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"

export const postEvent = () => {

getEvents()
.then(() => {
    let allEvents = useEvents()
    let loggedUser = +sessionStorage.getItem('activeUser')
    let eventHTML = ""
    allEvents = allEvents.filter(singleLoopedEvent => {
        return singleLoopedEvent.userId === loggedUser
    })
    const sortedEvent = allEvents.sort((a, b) => new Date (a.date) - new Date (b.date))
    allEvents.forEach((singleEvent) => {
        eventHTML += Event(singleEvent)
    })
    document.querySelector("#eventContainer").innerHTML = `${eventHTML}`
})
}