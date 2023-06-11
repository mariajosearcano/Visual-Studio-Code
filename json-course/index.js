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

//fetch: es una función en JavaScript que se utiliza para realizar solicitudes de red y obtener recursos de un servidor
fetch('/user.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        document.getElementById('people').innerHTML = `<h1>${data.name} ${data.lastname}</h1>`
    })
/*
El código que has compartido utiliza la función fetch para realizar una solicitud a un archivo JSON llamado "user.json" en el servidor.

A continuación, se encadena una serie de promesas (then) para manejar la respuesta de la solicitud.

En el primer then, response.json() se utiliza para convertir la respuesta de la solicitud en formato JSON en un objeto JavaScript. Esto se realiza llamando al método json() en el objeto response devuelto por la función fetch.

En el segundo then, data representa los datos obtenidos de la respuesta convertida en JSON. En este caso, el código asume que el archivo JSON contiene propiedades name y lastname. Luego, se utiliza document.getElementById('people') para obtener el elemento HTML con el id "people" y se establece su contenido utilizando innerHTML. El contenido del elemento HTML se establece como un encabezado (<h1>) que muestra el nombre y el apellido obtenidos de data.

En resumen, este código realiza una solicitud a un archivo JSON, obtiene los datos de la respuesta y los muestra en un elemento HTML en la página.
*/

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
/*
El código que has compartido utiliza la función fetch para realizar una solicitud GET a la URL "https://jsonplaceholder.typicode.com/posts" y obtener una lista de publicaciones (posts) en formato JSON.

Luego, se encadenan promesas (then) para manejar la respuesta de la solicitud.

En el primer then, response.json() se utiliza para convertir la respuesta en formato JSON en un objeto JavaScript. Esto se realiza llamando al método json() en el objeto response devuelto por la función fetch. El resultado se pasa al siguiente then como el parámetro data.

En el segundo then, se itera sobre los elementos en data usando un bucle for. Para cada elemento, se crea una cadena HTML <li> que muestra el userId y el título de la publicación. Estos elementos se concatenan a la variable postsElements.

Finalmente, se utiliza document.getElementById('posts') para obtener el elemento HTML con el id "posts" y se establece su contenido utilizando innerHTML. El contenido del elemento se establece como la cadena HTML generada en el bucle for, que muestra la lista de publicaciones.

En resumen, este código realiza una solicitud GET a una API de prueba, obtiene una lista de publicaciones en formato JSON y muestra los userId y títulos de las publicaciones en una lista en la página HTML.
*/