import { taskEditForm } from "./TaskEditForm.js"
// "id": 1, 
//         "userId": 3, 
//         "task": "Take out garbage", 
//         "complete": false 

export const task = (taskObj) => {
    return  `
      <p> Task: <label for="task${taskObj.id}">${taskObj.task}</label> </p>
      <p> Complete by: ${taskObj.completionDate} </p>
      <p> Complete: <input type="checkbox">
        <button id="editTask--${taskObj.id}">Edit</button>
        
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("editTask--")){
    const taskId = +eventObject.target.id.split("--")[1]
    taskEditForm(taskId);
    }
})
