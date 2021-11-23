// id": 1,
// "userId": 3,
// "task": "Take out garbage",
// "completionDate": "11/20/21",
// "complete": false

import { saveTask, patchTask } from "./TaskDataProvider.js";
import { taskList } from "./TaskList.js";





document.querySelector("body").addEventListener("click",clickEvent =>{
    if (clickEvent.target.id === "saveTask") {

    let userId = sessionStorage.getItem('activeUser')

        console.log(userId)
        const newTask = {
            task: document.querySelector("#task-text").value,
            completionDate: document.querySelector("#completion-date").value,
            userId: parseInt(userId),
            isCompleted: false
           
        }

        console.log(newTask)
        document.querySelector("#task-text").value = "",
        document.querySelector("#completion-date").value = "",
        

        saveTask(newTask)
        .then(taskList)
    }
})

export const taskForm = () => {
    const contentTarget = document.querySelector("#taskFormContainer")
   contentTarget.innerHTML = `
    <section id="addTaskForm"> 
    <fieldset>Task: <input type="textarea" id="task-text" placeholder="task goes here"> <br>
    Task completion date: <input type="date" id="completion-date"> 
    <button id="saveTask">Save Note</button> </fieldset>`
}


const checkbox = document.querySelector("body");

checkbox.addEventListener('change',(event) => {
    if(event.target.id.startsWith("completeTask-")) {
//   console.log(event.target.id.split("--")[1])  
        patchTask(event.target.id.split("--")[1])
        .then(taskList)
        // Checkbox is checked..
    } 
});

 