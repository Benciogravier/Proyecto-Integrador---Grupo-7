let queryString = window.location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");



fetch(`https://fakestoreapi.com/products/category/jewelery?=${id}`)
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);

                let category = document.querySelector(".section-category")
                let arrayCategory = data;
                let categoryHTML = ""

                for(let i = 0; i < arrayCategory.length; i++){
                    categoryHTML += 
                    `<article class="art-category">
                        <a href="./producto.html?id=${arrayCategory[i].id}">
                        <ul class="lista-category">
                            <li><img class="img-category" src="${arrayCategory[i].image}"></li>
                            <li><h2>${arrayCategory[i].title}</h2></li>
                            <li><p>${arrayCategory[i].price}</p></li>
                        </ul>
                        </a>
                    </article>`
                }
                category.innerHTML = categoryHTML;
            })
            .catch(function(error){
                console.log(error);
            })