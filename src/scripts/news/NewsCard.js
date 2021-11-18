
// let unixTimestamp = +new Date().getTime()
// let timestamp = new Date(unixTimestamp * 1000)

// console.log(timestamp)


export const News = (newsObject) => {
    return `
    <section id="newsCard">
    
    <div id="newsTitle"><strong>Article Title: </strong><a href="${newsObject.url}" target="_blank">${newsObject.title}</a></div>

    <div id="newsSynopsis"><strong>Synopsis: </strong> ${newsObject.synopsis} </div>

    <div id="newsId"><strong>Article Id:</strong> ${newsObject.id}</div>
    <div id="newsTime"><strong>Posted:</strong> ${new Date(newsObject.date).toLocaleDateString('en-US')}</div>
    
    <button id="deleteNote--${newsObject.id}">Delete</button>
    <button id="edit--${newsObject.id}">Edit</button>
</section>


    `

}


//How do I get the Time stamp? Need a sepeatate prarameter for time?
//How do I get it to print use name? Do I need to? <div id="newsUserId">User: ${newsObject.userId}</div>
//does hyperlink work?  <div id="newsUrl" href="${newsObject.url}">News Article URL: ${newsObject.url} </div>

// Will need to add Edit and Delete event Listener