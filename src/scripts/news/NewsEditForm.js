
const contentTarget = document.querySelector(".guestFormContainer")

// export const NewsEditForm = (guestId) => {
//     // Give this component access to our application's notes state
//     const allGuest = useGuests();

//     // Find the note that we clicked on by its unique id
//     const guestWeWantToEdit = allGuest.find(singleGuest => singleGuest.id === guestId) //create the note that needs edits
   
//     // Print the form
//     // We'll use the HTML value attribute to pre-populate our form fields with the note's info
//     contentTarget.innerHTML = `
//         <h2>Edit Guest</h2>
//         <input type="text" id="guestName" value="${guestWeWantToEdit.name}" />
//         <input type="text" value="${guestWeWantToEdit.age}" id="age" />
//         <input type="text" value="${guestWeWantToEdit.favoriteDish}" id="dish"/>
//         <input type="text" value="${guestWeWantToEdit.rightHanded}" id="handed"/>
//         <input type="url" value="${guestWeWantToEdit.imageUrl}" id="image"/>
//         <button id="saveGuestChanges--${guestId}">Save Changes</button>
//     `
// }


// contentTarget.addEventListener("click", (event) => {
//     if(event.target.id.startsWith("saveGuestChanges")){ 

//         // Make a new object representation of a note
//         const editedGuest = {
//             id: +event.target.id.split("--")[1], // how can you get the note's id?
//             name: document.querySelector("#guestName").value, 
//             age: document.querySelector("#age").value, 
//             favoriteDish: document.querySelector("#dish").value,
//             rightHanded: document.querySelector("#handed").value, 
//             imageUrl: document.querySelector("#image").value
//         } // these ids come from the form for where we edit the note so it can save it
        
//         // Send to json-server and refresh the list
//         updateGuest(editedGuest)//this updates the edited note
//         .then(GuestList)//This redisplays the updated list 
//         .then(guestForm)//this redisplays the form

//     }
// })