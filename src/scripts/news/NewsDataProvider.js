let news = []
// empty array for news articles 

export const useNews = () => {
    return news.slice()
} // slicing through the array to get the news

export const getNews = () => {
     return fetch('http://localhost:8088/news')
 
    .then(dirtyNews => dirtyNews.json())
    .then(cleanNews => {
        news = cleanNews
    })
     // getting the news and sending it back to the array to slice
}

export const saveNews = (savedNews) => {
    return fetch('http://localhost:8088/news' , {
    method: "POST" ,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(savedNews)
})
.then(getNews)
}


export const deleteNews = newsId => {
    return fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE"
    })
   
}


export const updateNews = news => {

    return fetch(`http://localhost:8088/news/${news.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })

}