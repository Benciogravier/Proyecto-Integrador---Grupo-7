let email = document.querySelector("#Email")

let checkbox = document.querySelector(".checked")

let irLogin = document.querySelector(".irLogin")

let form = document.querySelector(".form-recover")

form-addEventListener("submit", function(e){
    e.preventDefault()
    if(email == ""){
        let mailInc = document.querySelector(".mailInc")
        mailInc.style.display = "flex"
    } else if(checkbox == ""){
        let checkboxInc = document.querySelector(".checkBox")
        checkboxInc.style.checkboxInc = "flex"
    }else{
        form.submit()
    }      
})