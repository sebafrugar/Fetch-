'use strict'


// fetch y peticiones a servicios api
let div_usuarios = document.querySelector("#usuarios");
let div_janet = document.querySelector("#janet")

fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data)

        return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        mostrarJanet(janet.data);
        
        return getInfo();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {  // ve si existe un error en las peticiones  
        console.log(error);  
    });

function getUsuario(){
    return fetch('https://reqres.in/api/users')
}

let getJanet = () =>{
    return fetch("https://reqres.in/api/users/2");
}

let listadoUsuarios = (usuarios) =>{
    usuarios.map((user, i) =>{
        let nombre = document.createElement("h3")
        nombre.innerHTML = `${i+1} nombre: ${user.first_name} <br> apellido : ${user.last_name}`;
        div_usuarios.append(nombre);
    });
}

let mostrarJanet = (user) =>{
    let nombre = document.createElement("h3");
    let avatar = document.createElement("img");
    nombre.innerHTML = `nombre: ${user.first_name} <br> apellido : ${user.last_name}`;
    avatar.src = user.avatar;
    div_janet.append(nombre);
    div_janet.append(avatar);
}

let getInfo = () => {
    var alumno = {
        nombre : "sebastian",
        apellido : 'frugar',
        url: "https://www.linkedin.com/in/sebastianfrugarnunez/"
    };
    return new Promise((resolve , reject) => {
        let alumno_string = JSON.stringify(alumno);
        if(typeof alumno_string != "string" ) return reject("error");
            return resolve(alumno_string);
    })
}

// capturar errores

try {
    let year = 2022;
    alert(yea);
} catch (error) {
    console.log(error);
}


