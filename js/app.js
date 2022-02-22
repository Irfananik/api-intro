/* const myCompany = {
    name: 'Qk Solution',
    address: 'Basundhara',
    mobile: '0182856463763',
    work: {
        web: 'Web Development',
        app: 'Android app',
    },
    employees: 39,
    salary: 50000000
}
const myCompanyStringified = JSON.stringify(myCompany)
console.log(myCompanyStringified)
const myCompanyConvert = JSON.parse(myCompanyStringified)
console.log(myCompanyConvert) */



function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(users => displayOnUi(users))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then(post => console.log(post))
}

function displayOnUi(users) {
    const ul = document.getElementById('users')
    for (const user of users) {
        // console.log(user.name, user.phone, user.email)
        const li = document.createElement('li')
        li.innerText = `name: ${user.name} username: ${user.username} email: ${user.email}`
        ul.appendChild(li)
    }
}