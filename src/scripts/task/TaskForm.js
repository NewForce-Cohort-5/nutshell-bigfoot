// id": 1,
// "userId": 3,
// "task": "Take out garbage",
// "completionDate": "11/20/21",
// "complete": false

import { saveTask } from "./TaskDataProvider.js";
import { taskList } from "./TaskList.js";

const contentTarget = document.querySelector("#taskFormContainer")

document.querySelector("body").addEventListener("click",clickEvent =>{
    if (clickEvent.target.id === "saveTask") {

        const newTask = {
            task: document.querySelector("#task-text").value,
            completionDate: document.querySelector("#completion-date").value,
            userId: document.querySelector("#user-Id").value,
           
        }

        console.log(newTask)
        document.querySelector("#task-text").value = "",
        document.querySelector("#completion-date").value = "",
        document.querySelector("#user-Id").value = ""

        saveTask(newTask)
        .then(taskList)
    }
})

export const taskForm = () => {
   contentTarget.innerHTML = `
    <section> 
    <fieldset>Task: <input type="textarea" id="task-text" placeholder="task goes here"> </fieldset>
    <fieldset>Task completion date: <input type="date" id="completion-date"> </fieldset>
    <button id="saveTask">Save Note</button>
    </section>`
    
}
