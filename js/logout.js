//Logout

//las otras variables ya estan en saludo.js y como estan linkeados a los 
//mismos html no hace falta renombrar las variables (seria un sintax error)

logout.addEventListener('click',function(){
    bienvenida.style.display = 'none'
    registro.style.display = 'flex'
    login.style.display = 'flex'
    logout.style.display = 'none'
    localStorage.clear()
})
