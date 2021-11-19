import { useNews, updateNews } from "./NewsDataProvider.js";
// import { newsForm } from "./NewsForm.js";
import { newsList } from "./NewsList.js";
import { newsForm } from "./NewsForm.js";

const contentTarget = document.querySelector("body")

export const NewsEditForm = (articleId) => {
    // Give this component access to our application's notes state
    const allNews = useNews();

    // Find the note that we clicked on by its unique id
    const newsWeWantToEdit = allNews.find(singleNews => singleNews.id === articleId) //create the note that needs edits
   console.log(newsWeWantToEdit)
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Article</h2>
        <input type="text" id="newsEditArticle" value="${newsWeWantToEdit.title}" />
        <input type="text" value="${newsWeWantToEdit.synopsis}" id="newsEditSynopsis" />
        <input type="url" value="${newsWeWantToEdit.url}" id="newsEditUrl"/>
        <button id="saveArticleChanges--${articleId}">Save Changes</button>
    `
}



contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveArticleChanges")){ 

        // Make a new object representation of a note
        const editedArticle = {
            id: +event.target.id.split("--")[1], // how can you get the note's id?
            title: document.querySelector("#newsEditArticle").value, 
            synopsis: document.querySelector("#newsEditSynopsis").value,  
            url: document.querySelector("#newsEditUrl").value
        
        } // these ids come from the form for where we edit the note so it can save it
            console.log(editedArticle)
        // Send to json-server and refresh the list
        updateNews(editedArticle)//this updates the edited note
        .then(newsList)//This redisplays the updated list 
        // .then(newsForm)//this redisplays the form

    }
})