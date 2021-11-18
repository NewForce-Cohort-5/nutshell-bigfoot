let events = []

export const useEvents = () => {
    return events.slice()
}

export const  getEvents = () => {
    return fetch(`http://localhost:8088/Events`)
    .then(response => response.json())
    .then(parsedEvents => {
        events = parsedEvents
    })
}

export const saveEvent = (event) => {
    return fetch(`http://localhost:8088/Events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
}

export const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/Events/${eventId}`, {
        method: "DELETE"
    })
}

export const modifyEvent = event => {
    return fetch(`http://localhost:8088/Events/${event.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}