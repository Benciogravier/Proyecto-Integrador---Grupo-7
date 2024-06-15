let emailRecuperado = localStorage.getItem("email")
let email = JSON.parse(emailRecuperado)
console.log(email);

let bienvenida = document.querySelector("#saludo")

let registro = document.querySelector(".registro")

let login = document.querySelector(".login")

let logout = document.querySelector(".logout")

if (email != null) {
    //muestro el saludo y oculto login y registro
    bienvenida.innerHTML = `Bienvenido: ${email}`
    bienvenida.style.color = "white"
    registro.style.display = "none"
    login.style.display = "none"
    logout.style.display = "flex"

}