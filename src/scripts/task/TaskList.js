import { getTasks, useTask } from "./TaskDataProvider.js";
import { task } from "./TaskCard.js";
import { taskForm } from "./TaskForm.js";

const contentTarget = document.querySelector("#taskContainer")

export const taskList = () => {
    getTasks()
    .then(() => {

    
    let allTheTask = useTask();

    let taskHTML = "";

    allTheTask.forEach((singleTask) => {
        taskHTML += task(singleTask)
    });

    

      contentTarget.innerHTML = `
      
    <h3>Task List</h3>
      ${taskHTML}
      `
        
     }) 
}
    
 
