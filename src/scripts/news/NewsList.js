//Author: Heaven Burdette and News list generates the list

import { News } from "./NewsCard.js"
import { getNews, useNews } from "./NewsDataProvider.js"


// export const newsList = () => {



//     getNews()
//     .then(() => {
//         let allTheNews = useNews()
//         let userIdLogin = sessionStorage.getItem('activeUser')
//         let newsHTML = "";
       
//  //sort the array before you print 
//   const sortedNews = allTheNews.sort((a, b) => b.dateNow - a.dateNow)
// //   console.log(sortedNews)

//         allTheNews.forEach((singleArticle)=>{
          
//           newsHTML += News(singleArticle)
//         });
//         contentTarget.innerHTML = `${newsHTML}`
//     })
// }
//Login form(userID) {newshtml?}

export const newsList = () => {
  const contentTarget = document.querySelector("#newsContainer")
  // const contentTarget = document.querySelector("#newsContainer")
  getNews()
  .then(() => {
      let allTheNews = useNews()
      let userIdLogin = sessionStorage.getItem('activeUser')
      let newsHTML = "";
     {
       allTheNews = allTheNews.filter(singleUserinloop => {
         return singleUserinloop.userId === userIdLogin
       })
     }
//sort the array before you print 
const sortedNews = allTheNews.sort((a, b) => b.dateNow - a.dateNow)
//   console.log(sortedNews)

      allTheNews.forEach((singleArticle)=>{
 
        newsHTML += News(singleArticle)
      });
      document.querySelector("#newsContainer").innerHTML = `${newsHTML}`
  })
  
}
