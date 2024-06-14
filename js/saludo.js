let emailRecuperado =localStorage.getItem("email")
let email = JSON.parse(emailRecuperado)
console.log(email);

let bienvenida = document.querySelector("nav")

if (email != null) {
    //muestro el saludo y oculto login y registro
    alert("Bienvenido:" += email)

    
}else{
    //muestro el registro de login y oculto el saludo
    
}