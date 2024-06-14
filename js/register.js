let email = document.querySelector("#E")

let contraseña = document.querySelector("#C")

let Rcontraseña = document.querySelector("#RC")

let formulario = document.querySelector("form")

formulario.addEventListener("submit",function(event){
    event.preventDefault()
    if (email.value == '') {
        let mail = document.querySelector(".validandoE")
        mail.style.display = "flex"
    } else if (contraseña.value == '') {
        let pasword = document.querySelector(".validandoC")
        pasword.style.display = "flex"
    } else if (contraseña.value.length < 6) {
        let repC = document.querySelector(".validando6")
        repC.style.display = "flex"
    } else if (contraseña.value != Rcontraseña.value) {
        let desigual = document.querySelector(".validandoR")
        desigual.style.display = 'flex'
    } else {
        formulario.submit()
    }

})