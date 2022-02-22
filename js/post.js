function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => displayPosts(posts))
}
loadPosts()

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
        // console.log(post.title)
        const div = document.createElement('div')
        div.classList.add('post-style')
        div.innerHTML = `
            <h3> Title: ${post.title} </h3>
            <p> Description: ${post.body} </p>
        `
        postsContainer.appendChild(div)
    }
}