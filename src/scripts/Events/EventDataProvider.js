let events = []

export const useEvents = () => {
    return events.slice()
}

// This retrieves the data array and makes it usable:
export const  getEvents = () => {
    return fetch(`http://localhost:8088/Events`)
    .then(response => response.json())
    .then(parsedEvents => {
        events = parsedEvents
    })
}

// This allows saving new input to the data array:
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

// This creates a delete function for each chunk of data in the array:
export const deleteEvent = eventToDelete => {
    return fetch(`http://localhost:8088/Events/${eventToDelete}`, {
        method: "DELETE"
    })
}

// This creates an Edit function for each chunk of data in the array:
export const modifyEvent = (eventObject) => {

    return fetch(`http://localhost:8088/Events/${eventObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObject)
    })
}