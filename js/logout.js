let logout = document.querySelector("#link")
let saludo = document.querySelector(".saludo")
let login = document.querySelector(".login")
let registro = document.querySelector(".registro")

logout.addEventListener("click", function(){
    localStorage.clear()
    saludo.style.display = 'none'
    logout.style.display = 'none'
    login.style.display = 'flex'
    registro.style.display = 'flex'
})

