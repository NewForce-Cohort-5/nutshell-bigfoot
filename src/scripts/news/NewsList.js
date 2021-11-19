import { News } from "./NewsCard.js"
import { getNews, useNews } from "./NewsDataProvider.js"


const contentTarget = document.querySelector("#newsContainer")

export const newsList = () => {
    getNews()

    .then(() => {
        let allTheNews = useNews()
        
        let newsHTML = "";
       
 //sort the array before you print 
  const sortedNews = allTheNews.sort((a, b) => b.dateNow - a.dateNow)
//   console.log(sortedNews)

        allTheNews.forEach((singleArticle)=>{
          newsHTML += News(singleArticle)
        });
        contentTarget.innerHTML = `${newsHTML}`
    })
}

