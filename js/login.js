let email = document.querySelector("#email")

let contraseña = document.querySelector("#contraseña")

let formulario = document.querySelector("form")
formulario.addEventListener("submit",function(event){
    event.preventDefault()
    if (email.value == '') {
        alert("Por favor complete el campo email")
    } else if (contraseña.value == '') {
        alert("Por favor complete el campo contraseña")
    } else if (contraseña.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres")
    } else {
        alert("Felicitaciones, usted ha ingresado correctamente")
        formulario.submit()
        let emailString = JSON.stringify(email.value)
        localStorage.setItem('email',emailString)
    }
})