//Author: Heaven Burdette and EditForm that allows you to edit the database for news
import { Nutshell } from "../Nutshell.js";
import { LoginForm } from "../auth/LoginForm.js";
import { useNews, updateNews } from "./NewsDataProvider.js";
// import { newsForm } from "./NewsForm.js";
import { newsList } from "./NewsList.js";
import { newsForm } from "./NewsForm.js";


export const NewsEditForm = (articleId) => {
    // Give this component access to our application's notes state
    //2nd paramater to only allow user ID to edit form???
    const allNews = useNews();
    

    // Find the note that we clicked on by its unique id
    const newsWeWantToEdit = allNews.find(singleNews => singleNews.id === articleId) //create the note that needs edits
   console.log(newsWeWantToEdit)
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    document.querySelector("#newsEditContainer").innerHTML = `
        <h2>Edit Article</h2>
        <input type="text" id="newsEditArticle" value="${newsWeWantToEdit.title}" />
        <input type="text" value="${newsWeWantToEdit.synopsis}" id="newsEditSynopsis" />
        <input type="url" value="${newsWeWantToEdit.url}" id="newsEditUrl"/>
        <input style="visibility:hidden"  id="newsDate" value="${newsWeWantToEdit.dateNow}"/>
        <input style="visibility:hidden"  id="newsUserId" value="${newsWeWantToEdit.userId}"/>
        <button id="saveArticleChanges--${articleId}">Save Changes</button>
    `
}


 const contentTarget = document.querySelector("body")

contentTarget.addEventListener("click", (event) => {
    
 if(event.target.id.startsWith("saveArticleChanges")){ 
 
     

        // Make a new object representation of a note
        const editedArticle = {
            id: +event.target.id.split("--")[1], // how can you get the note's id?
            title: document.querySelector("#newsEditArticle").value, 
            synopsis: document.querySelector("#newsEditSynopsis").value,  
            url: document.querySelector("#newsEditUrl").value,
            dateNow:  +document.querySelector("#newsDate").value,
            userId: +document.querySelector("#newsUserId").value,
            
           
            // dateNow: Date.now()  - use hidden div above - look for example code.
        
        } // these ids come from the form for where we edit the note so it can save it
            console.log(editedArticle)
        // Send to json-server and refresh the list
        document.querySelector("#newsEditContainer").innerHTML=""
          //
        
        updateNews(editedArticle)//this updates the edited note
        .then(newsList)//This redisplays the updated list 
        .then(newsForm)//this redisplays the form

    }
})