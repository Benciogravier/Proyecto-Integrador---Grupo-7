let idLocalStorage = localStorage.getItem('id')
let idParseado = JSON.parse(idLocalStorage) //array_de_los_id's_agregados_al_carrito

if (idLocalStorage == null) {
    let texto = document.querySelector("h2")
    texto.innerHTML = "No hay productos seleccionados"
} else {
    let carrito = document.querySelector(".section-cart")
    console.log(carrito);
    let carritoRecorrido = ''
    for (let i = 0; i < idParseado.length; i++) {
        fetch(`https://fakestoreapi.com/products/${idParseado[i]}`)
            .then(function(res){
                return res.json()
            })
            .then (function(data){
                console.log(data);
                carritoRecorrido = carritoRecorrido + `<article class="art-cart">
                    <ul class="lista-cart">
                        <img class="img-home-men" src="${data.image}">
                        <h2>${data.title}</h2>
                        <p>${data.description}</p>
                        <p>${data.price} USD</p>
                    </ul>
                </article>`
 
                carrito.innerHTML = carritoRecorrido
            })
            .catch(function(error){
                console.log(error);
            })
           
    }
    console.log(carritoRecorrido);
}
let compraFinalizar = document.querySelector("button")
compraFinalizar.addEventListener('click', function(){
    localStorage.clear()
    alert("Compra finalizada! Muchas gracias por confiar en nosotros")
})