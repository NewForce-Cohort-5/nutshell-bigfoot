// "id": 1, 
//         "userId": 3, 
//         "task": "Take out garbage", 
//         "complete": false 

export const task = (taskObj) => {
    return  `<input type="checkbox" id="check--${taskObj.id}" name="task${taskObj.id}" value="${taskObj.task}">
        <label for="task${taskObj.id}">${taskObj.task}</label>
        <div class="date-${taskObj.id}">${taskObj.completionDate}</div>
        
        <button id="editTask--${taskObj.id}">Edit</button>
    `
}