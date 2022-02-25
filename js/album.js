const loadAlbum = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => displayAlbum(data));
}

loadAlbum();

const displayAlbum = (albums) => {
    const albumContainer = document.getElementById('album-container');
    for (const album of albums) {
        const div = document.createElement('div');
        div.classList.add('album');
        div.innerHTML = `
        <h2>UserID : ${album.userId}</h2>
        <p>Title: ${album.title}</p>
        `
        albumContainer.appendChild(div);
        console.log(album);
    }
}