const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('posts')
        div.innerHTML = `
        <h3>${post.title}</h3>
        `;
        postContainer.appendChild(div);
       
    }
}