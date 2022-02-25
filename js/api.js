const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    const ul = document.getElementById('users')
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name} 
        id: ${user.id}`;
        ul.appendChild(li)
    }
    
}