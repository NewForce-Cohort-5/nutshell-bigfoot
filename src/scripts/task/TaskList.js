import { getTasks, useTask } from "./TaskDataProvider.js";
import { task } from "./TaskCard.js";
import { taskForm } from "./TaskForm.js";



export const taskList = () => {
    const contentTarget = document.querySelector("#taskContainer")

    getTasks()
    
    .then(() => {

     
    let allTheTask = useTask();

    let taskHTML = "";

    allTheTask.filter( singleTask => singleTask.isCompleted === false).forEach((singleTask) => {
     
        taskHTML += task(singleTask)

    });
    
   

      contentTarget.innerHTML = `
     <br>
    <button id="addTaskButton"> Add Task </button>
    <h3>Task List</h3>
    
      ${taskHTML}
      `
        
     }) 
}





document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addTaskButton")

    taskForm()
    
})


