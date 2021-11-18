export const News = (newsObject) => {
    return `
    <section id="newsCard">
    <div id="newsId">ID: ${newsObject.id} </div>
    <h2 id="newsTitle" >News Article:<a href="${newsObject.url}" target="_blank"> ${newsObject.title}</a> </h2>
    <div id="newsSynopsis"><h3>Article Synopsis:</h3> ${newsObject.synopsis} </div>
    <div id="newsTime">Posted: ${new Date(newsObject.date).toLocaleDateString('en-US')}</div>
    <button id="deleteNote--${newsObject.id}">Delete</button>
    <button id="edit--${newsObject.id}">Edit</button>
</section>
    `
}

//How do I get the Time stamp?
//How do I get it to print use name? Do I need to? <div id="newsUserId">User: ${newsObject.userId}</div>
//does hyperlink work?  <div id="newsUrl" href="${newsObject.url}">News Article URL: ${newsObject.url} </div>

// Will need to add Edit and Delete event Listener