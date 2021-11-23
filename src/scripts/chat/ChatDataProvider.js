let chat = []

export const useChat = () => {
    return chat.slice()
}

export const getChat = () => {
    return fetch ('http://localhost:8088/Chat')
    .then(response => response.json())
    .then(receipt => {
        chat = receipt
    })
}

export const saveChat = entry => {
    return fetch("http://localhost:8088/Chat", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)

        })
    .then(getChat)
}

export const deleteChat = entryID => {
    return fetch(`http://localhost:8088/Chat/${entryID}`, {
        method: "DELETE"
    
    })
    .then(getChat)
}

export const updateChat = entry => {
    return fetch(`http://localhost:8088/Chat/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getChat)
}

