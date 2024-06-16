let email = document.querySelector("#email")

let checkBox = document.querySelector("#checkbox")

let irLogin = document.querySelector(".irLogin")
let linkLogin = document.querySelector(".linkLogin")

let form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    if (email.value == ''){
        let mailInc = document.querySelector(".mailInc")
        mailInc.style.display = "flex"
    } else if (checkBox.value == 'no') {
        let checkboxInc = document.querySelector(".checkBox")
        checkboxInc.style.display = "flex"
    } else {
        irLogin.style.display = 'flex'
        linkLogin.style.display = 'flex'
    }      
})
checkBox.addEventListener('click',function(){
    checkBox.value = 'si'
}) 
//cuando el usuario complete el campo, su valor cambio, por lo que permetiria mandarse el form
