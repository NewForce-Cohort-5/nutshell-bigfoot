let tasks = []

export const useTask = () => {
    return tasks.slice()
}

export const getTasks = () => {
    return fetch ("http://localhost:8088/Tasks")
    .then(dirtyTasks => dirtyTasks.json())
    .then(cleanTasks => {
        tasks = cleanTasks
    })   
    
}
export const saveTask = (task) => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
}

export const updateTask = task => {

    return fetch(`http://localhost:8088/Tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}
