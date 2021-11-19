import { useTask, updateTask, getTasks } from "./TaskDataProvider.js";
import { taskList } from "./TaskList.js";


    const contentTarget = document.querySelector("#taskContainer")

    export const taskEditForm = (taskId) => {
    
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


    contentTarget.addEventListener("click", (event) => {
        // debugger
        if(event.target.id.startsWith("saveTaskChanges-")) {
            // debugger
            const editedTask = {
                id: +parseInt(event.target.id.split("-")[1]),
                task: document.querySelector("#task-text-edit").value,
                completionDate: document.querySelector("#edit-date").value,
                // complete: document.querySelector("#completeTask")
            }

            console.log(editedTask)
            updateTask(editedTask)
            .then(taskList)
        }
    })

    // function deleteCheckBox(){
    //     if (document.getElementById('checkboxid').checked){
    //           var answer = confirm('Are you sure you want to delete this checkbox?');
    //            if (answer)
    //              {
    //              $("#checkboxid").remove();
    //              }
    //            }else{
    //              alert("Pls check the checkbox.");
    //             }
    //   }