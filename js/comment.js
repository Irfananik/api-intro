function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => displayComments(comments))
}
loadComments()

function displayComments(comments) {
    const commentsID = document.getElementById('comment-container')
    for (const comment of comments) {
        console.log(comment)
        const div = document.createElement('div')
        div.classList.add('comment-style')
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `
        commentsID.appendChild(div)
    }
}