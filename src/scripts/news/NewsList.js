import { News } from "./NewsCard.js"
import { getNews, useNews } from "./NewsDataProvider.js"


const contentTarget = document.querySelector("#newsContainer")

export const newsList = () => {
    getNews()

    .then(() => {
        let allTheNews = useNews()
        let newsHTML = "";

        allTheNews.forEach((singleArticle)=>{
          newsHTML += News(singleArticle)
        });
        contentTarget.innerHTML = `${newsHTML}`
    })
}