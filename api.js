// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}



function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispalyUsers(data));
}


function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
}


function dispalyUsers(data) {
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = `id:${user.id}, name:${user.name}`
        ul.appendChild(li);
    } 
}