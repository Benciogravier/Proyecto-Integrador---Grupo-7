fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);

                let productos = document.querySelector(".section-home-joya")
                let arrayProductos = data;
                let productosHTML = ""

                for(let i = 0; i < arrayProductos.length; i++){
                    productosHTML += 
                    `<article class="art-home-joya">
                        <ul clas="lista-home-joya">
                            <li><img class="img-home-joya" src="${arrayProductos[i].image}"></li>
                            <li><h2>${arrayProductos[i].title}</h2></li>
                            <li><p>${arrayProductos[i].description}</p></li>
                            <li><p>${arrayProductos[i].price}</p></li>
                            <a href="./producto.html?id=${arrayProductos[i].id}"> Ver mas </a>
                        </ul>
                    </article>
                    `
                }
                productos.innerHTML = productosHTML;
            })
            .catch(function(error){
                console.log(error);
            })
fetch("https://fakestoreapi.com/products")
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data);
            let ropaHombre = document.querySelector(".section-home-men")
            let RopaHRecorrida = ''
            let ropaMujeres = document.querySelector(".section-home-women")
            let mujeresRecorrido = ''
            for (let i = 0; i < data.length; i++) {
                if (data[i].category == "men's clothing") { //parte hecha por benicio
                    RopaHRecorrida = RopaHRecorrida + `<article class="art-home-men">
                        <ul class="lista-home-men">
                            <img class="img-home-men" src="${data[i].image}">
                            <h2>${data[i].title}</h2>
                            <p>${data[i].description}</p>
                            <p>${data[i].price} USD</p>
                            <a href="./producto.html?id=${data[i].id}">
                                <p>Ver mas</p>
                            </a>
                        </ul>
                    </article>`
                } else if (data[i].category == "women's clothing") { //parte hecha por beltran
                    mujeresRecorrido = mujeresRecorrido + `<article class="art-home-women">
                        <ul class="lista-home-women">
                            <img class="img-home-women" src="${data[i].image}">
                            <h2>${data[i].title}</h2>
                            <p>${data[i].description}</p>
                            <p>${data[i].price} USD</p>
                            <a href="./producto.html?id=${data[i].id}">
                                <p>Ver mas</p>
                            </a>
                        </ul>
                    </article>`
                }
            }
            ropaHombre.innerHTML = RopaHRecorrida
            ropaMujeres.innerHTML = mujeresRecorrido
        })
        .catch(function(error){
            console.log(error);
        })