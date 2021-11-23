import { useTask, updateTask, getTasks } from "./TaskDataProvider.js";
import { taskList } from "./TaskList.js";


    

    export const taskEditForm = (taskId) => {
        const contentTarget = document.querySelector("#taskContainer")
    const allTask = useTask();

    const taskWeWantToEdit = allTask.find(singleTask => singleTask.id === taskId)

    console.log(taskWeWantToEdit)

    contentTarget.innerHTML = `
     <h3>Edit Task</h3>

     <section> 
     <fieldset>Task: <input type="textarea" id="task-text-edit" value="${taskWeWantToEdit.task}"placeholder="task goes here"> </fieldset>
     <fieldset>Task completion date: <input type="date" id="edit-date" value="${taskWeWantToEdit.date}"> </fieldset>
    
     </section>
     <button id="saveTaskChanges-${taskId}">Save Note</button>
    `
}


  document.querySelector("body").addEventListener("click", (event) => {
        // debugger
        if(event.target.id.startsWith("saveTaskChanges-")) {
            // debugger
            const editedTask = {
                UserId:  +parseInt(event.target.id.split("-")[1]),
                id: +parseInt(event.target.id.split("-")[1]),
                task: document.querySelector("#task-text-edit").value,
                completionDate: document.querySelector("#edit-date").value,
                isCompleted: false
            }

            console.log(editedTask)
            updateTask(editedTask)
            .then(taskList)
        }
    })

  