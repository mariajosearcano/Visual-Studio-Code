/*const user = {
    "name": "Ryan",
    "lastname": "Ray",
    "age": 20,
    "nickname": "Ryan123",
    "hobbies": ["run", "code", "eat"],
    "address": {
        "street": "123 Main 5t",
        "city": "New York",
    },
    "married": false
}*/
//no hay que ponerle "" a las keys, por que ya el metodo stringify convierte bien dicho string al formato json
const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 20,
    nickname: "Ryan123",
    hobbies: ["run", "code", "eat"],
    address: {
        street: "123 Main 5t",
        city: "New York",
    },
    married: false,
    greet() {
        return 'Hello'
    },
    something() {}
}

/*const friends = [
    {"name": "joe", "nickname": "joe123"},
    {"name": "marcos", "nickname": "marcos123"},
    {"name": "juan", "nickname": "juan123"},
    {"name": "jose", "nickname": "jose123"},
    {"name": "joe", "nickname": "jose123"},
]*/
const friends = [
    { name: "joe", nickname: "joe123" },
    { name: "marcos", nickname: "marcos123" },
    { name: "juan", nickname: "juan123" },
    { name: "jose", nickname: "jose123" },
    { name: "joe", nickname: "jose123" },
    { name: "jose", nickname: "jose123" }
]

user.friends = friends

let output = ''

for (let i = 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`
}

fetch('/user.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        document.getElementById('people').innerHTML = `<h1>${data.name} ${data.lastname}</h1>`
    })

//console.log(JSON.stringify(user))

/*console.log(user) //objeto javascript
console.log(user.name)
console.log(user.lastname)
console.log(user.hobbies)*/
/*console.log(user.greet())

console.log(JSON.stringify(user)) //objeto a string(validandolo) y de string a json*/
//no se trae funciones

//JSON.stringify permite de js a json
//JSON.parse permite pasar de json a js

let postsElements = ''

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(data => {

        for (let i=0; i < data.length; i++) {
            postsElements += `<li>${data[i].userId} - ${data[i].title}</li>`
        }
        document.getElementById('posts').innerHTML = postsElements

    })
