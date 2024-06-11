fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);

                let productos = document.querySelector(".section-home")
                let arrayProductos = data
                let productosHTML = ""

                for(let i = 0; i < 5; i++){
                    productosHTML += 
                    `<article class="art-home">
                        <ul clas="lista-home">
                            <li><img class=""img-home" src=""></li>
                            <li><h2>${arrayProductos[i].title}</h2></li>
                            <li><p>${arrayProductos[i].description}</p></li>
                            <li><p>${arrayProductos[i].price}</p></li>
                            <a href="./producto.html?id=${arrayProductos[i].id}"> </a>
                        </ul>
                    </article>
                    `
                }
                productos.innerHTML = productosHTML;
            })
            .catch(function(error){
                console.log(error);
            })
