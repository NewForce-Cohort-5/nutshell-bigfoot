import { deleteNews } from "./NewsDataProvider.js"
import { NewsEditForm } from "./NewsEditForm.js"
import { newsList } from "./NewsList.js"

let unixTimestamp = +new Date().getTime()
export let timestamp = new Date(unixTimestamp * 1000)

console.log(timestamp)


export const News = (newsObject) => {
    return `
    <section id="newsCard">
    
    <div id="newsTitle"><strong>Article Title: </strong><a href="${newsObject.url}" target="_blank">${newsObject.title}</a></div>

    <div id="newsSynopsis"><strong>Synopsis: </strong> ${newsObject.synopsis} </div>

    <div id="newsId"><strong>Article Id:</strong> ${newsObject.id}</div>
       
    <button id="deleteNote--${newsObject.id}">Delete</button>
    <button id="edit--${newsObject.id}">Edit</button>
</section>


    `

}


const eventDeleteHub = document.querySelector("body")

eventDeleteHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    console.log(idToDelete)
    deleteNews(idToDelete)
    .then(newsList)
    
} 
 
});
//How do I get the Time stamp? Need a sepeatate prarameter for time?
//How do I get it to print use name? Do I need to? <div id="newsUserId">User: ${newsObject.userId}</div>
//does hyperlink work?  <div id="newsUrl" href="${newsObject.url}">News Article URL: ${newsObject.url} </div>

// Will need to add Edit and Delete event Listener

/* <div id="newsTime"><strong>Posted:</strong> ${new Date(newsObject.dateTime).toLocaleDateString('en-US')}</div> */

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit--")){
    const newsId = +eventObject.target.id.split("--")[1]
    NewsEditForm(newsId);
    }
})