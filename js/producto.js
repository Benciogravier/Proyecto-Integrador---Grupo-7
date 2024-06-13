let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

fetch(`https://fakestoreapi.com/products/?=${id}`)
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);

                let detProductos = document.querySelector(".section-home")
                let arraydetProductos = data.data;
                let detProductosHTML = ""

                
                    detProductosHTML += 
                    `<article class="art-home">
                        <ul class="lista-prod">
                            <li><img class="img-prod" src="${arraydetProductos.image}"></li>
                            <li><h2>${arraydetProductos.title}</h2></li>
                            <li><p>${arraydetProductos.description}</p></li>
                            <li><p>${arraydetProductos.price}</p></li>
                            <li><a href="./category.html"</a> Categoria</li>
                            <li><a href="./cart.html">Agregar al carrito</a></li>
                        </ul>
                    </article>`
                
                detProductos.innerHTML = detProductosHTML;

                //let listaProd = document.querySelector("lista-prod")

                //for(i=0;i <arraydetProductos.length; i++){
                    //console.log(arraydetProductos[i]);
                    //listaProd.innerHTML += `<a href="./cart.html?id=${listaProd[i].id}">Agregar al carrito</a>`
                //}
            })
            .catch(function(error){
                console.log(error);
            })
