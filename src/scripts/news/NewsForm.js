//Author: Heaven Burdette and newForm to allow you to save new articles 

import { newsList } from "./NewsList.js"
import { saveNews } from "./NewsDataProvider.js"



document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNews"){
 
        let userId = sessionStorage.getItem('activeUser')

    console.log(userId)

        const newArticle = {

            title: document.querySelector("#title").value,
            synopsis: document.querySelector("#synopsis").value,
            url: document.querySelector("#newsUrl").value,
            // newDate: new Date().toLocaleString(),
            dateNow: Date.now(),
            userId: parseInt(userId)
          
        }
        console.log(newArticle)
       
        document.querySelector("#title").value ="",
        document.querySelector("#synopsis").value ="",
        document.querySelector("#newsUrl").value =""
            // ^^ resets form to empty string
        saveNews(newArticle)
        .then(newsList)
    }


    
})




export const newsForm = () => {
 const contentTarget = document.querySelector("#newsFormContainer")
    document.querySelector("#newsFormContainer").innerHTML = `<article class="newsForm">

    <fieldset>Article Title: <input type="text" id="title" placeholder="Input Article Title Here"></fieldset>
    <fieldset>Article Synopsis: <input type="text" id="synopsis" placeholder="Input Synopsis Here"></fieldset> 
    <fieldset>URL for Site: <input type="url" id="newsUrl" placeholder="Article URL here"></fieldset> 
    
    
</article>
        <button id="saveNews">Add Article</button>`
}



// function getTime(clickEvent) {
//     var time = document.getElementById("time");
//     time.firstChild.nodeValue = clickEvent.timeStamp;
//   }
//   document.body.addEventListener("keypress", getTime);