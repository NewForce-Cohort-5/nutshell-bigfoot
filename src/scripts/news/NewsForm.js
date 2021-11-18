import { newsList } from "./NewsList.js"
import { saveNews } from "./NewsDataProvider.js"

const contentTarget = document.querySelector("#newsFormContainer")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNews"){

        const newArticle = {

            title: document.querySelector("#title").value,
            synopsis: document.querySelector("#synopsis").value,
            url: document.querySelector("#newsUrl").value
            
        }
        console.log(newArticle)
       
        document.querySelector("#newsTitle").value ="",
        document.querySelector("#newsSynopsis").value ="",
        document.querySelector("#newsUrl").value =""
            // ^^ resets form to empty string
        saveNews(newArticle)
        .then(newsList)
    }
})




export const newsForm = () => {
 
    contentTarget.innerHTML = `<article class="newsForm">

    <fieldset>Article Title: <input type="text" id="title" placeholder="Input Article Title Here"></fieldset>
    <fieldset>Article Synopsis: <input type="text" id="synopsis" placeholder="Input Synopsis Here"></fieldset> 
    <fieldset>URL for Site: <input type="url" id="newsUrl" placeholder="Article URL here"></fieldset> 

</article>
        <button id="saveNews">Add Article</button>`
}

