let emailRecuperado = localStorage.getItem("email")
let email = JSON.parse(emailRecuperado)
console.log(email);

let bienvenida = document.querySelector("#saludo")

let registro 

if (email != null) {
    //muestro el saludo y oculto login y registro
    bienvenida.innerHTML = `${"bienvenido : "+email}`
}else{
    //muestro el registro de login y oculto el saludo
    
}