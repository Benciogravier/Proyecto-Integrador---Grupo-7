

fetch(`https://fakestoreapi.com/products/1`)
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);

                let detProductos = document.querySelector(".section-home")
                let arraydetProductos = data;
                let detProductosHTML = ""

                
                    detProductosHTML += 
                    `<article class="art-home">
                        <ul class="lista-prod">
                            <li><img class="img-prod" src="${arraydetProductos.image}"></li>
                            <li><h2>${arraydetProductos.title}</h2></li>
                            <li><p>${arraydetProductos.description}</p></li>
                            <li><p>${arraydetProductos.price}</p></li>
                            <li><a href="./category.html"</a> Categoria</li>
                            <li><a href="./cart.html">Agregar al carrito</li></a>
                        </ul>
                    </article>`
                
                detProductos.innerHTML = detProductosHTML;
            })
            .catch(function(error){
                console.log(error);
            })
