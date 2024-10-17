const data = [
    {
        id: 1,
        titulo: "Producto 1",
        detalle: "Descripción del producto 1.",
        precio: 199.99,
        stock: 10,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
    },
    {
        id: 2,
        titulo: "Producto 2",
        detalle: "Descripción del producto 2.",
        precio: 299.99,
        stock: 5,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
    },
    {
        id: 3,
        titulo: "Producto 3",
        detalle: "Descripción del producto 3.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
    },
    {
        id: 4,
        titulo: "Producto 4",
        detalle: "Descripción del producto 4.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"
    },
    {
        id: 5,
        titulo: "Producto 5",
        detalle: "Descripción del producto 5.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"
    },
    {
        id: 6,
        titulo: "Producto 6",
        detalle: "Descripción del producto 6.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"
    },
    {
        id: 7,
        titulo: "Producto 7",
        detalle: "Descripción del producto 7.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
    },
    {
        id: 8,
        titulo: "Producto 8",
        detalle: "Descripción del producto 8.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
    },
    {
        id: 9,
        titulo: "Producto 9",
        detalle: "Descripción del producto 9.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg"
    }
  ];
  
  
  // Función para mostrar los productos en la sección
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-4">
                <div class="card">
                    <img src="${product.imagen}" class="card-img-top" alt="${product.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${product.titulo}</h5>
                        <p class="card-text">${product.detalle}</p>
                        <p>Precio: $${product.precio.toFixed(2)}</p>
                        <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        `;
    });
  }
  
  // Cargar todos los productos al inicio
  displayProducts(data);
  
  // Capturar el input y el botón de búsqueda
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const clearButton = document.getElementById('clear-button');
  
  // Evento para buscar productos
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(product => product.titulo.toLowerCase() === searchTerm);
    
    // Comprobar si hay productos filtrados, de lo contrario, mostrar todos los productos
    if (filteredData.length > 0) {
        displayProducts(filteredData);
    } else {
        alert("No se encontraron productos.");
        displayProducts(data); // Mostrar todos los productos si no se encuentra coincidencia
    }
  });
  
  // Evento para limpiar el buscador
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    displayProducts(data); // Volver a mostrar todos los productos
  });




/*const titulo = document.querySelector("h1");
titulo.innerText = "Productos";

function card() {
    const data = 
        [{
            "id": 1,
            "title": "Nothing to Lose",
            "detail": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
            "price": 54,
            "stock": 87
        }, {
            "id": 2,
            "title": "Ditchdigger's Daughters, The",
            "detail": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
            "price": 52,
            "stock": 57
        }, {
            "id": 3,
            "title": "Atlantic City",
            "detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
            "price": 8,
            "stock": 18
        }, {
            "id": 4,
            "title": "HOUBA! On the Trail of the Marsupilami (Sur la piste du Marsupilami)",
            "detail": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
            "price": 21,
            "stock": 38
        }, {
            "id": 5,
            "title": "Possession",
            "detail": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
            "price": 67,
            "stock": 3
        }, {
            "id": 6,
            "title": "Fragile",
            "detail": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
            "price": 78,
            "stock": 23
        }, {
            "id": 7,
            "title": "Killjoy Goes to Hell",
            "detail": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
            "price": 1,
            "stock": 74
        }, {
            "id": 8,
            "title": "Ronja Robbersdaughter (Ronja Rövardotter)",
            "detail": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
            "price": 79,
            "stock": 12
        }, {
            "id": 9,
            "title": "MacGyver: Trail to Doomsday",
            "detail": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "img": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
            "price": 3,
            "stock": 57
        }];
          
    
    
    let card = data.map((producto) =>

    `<div class="card mb-3" style="width: 18rem;">
            <a href="#"><img src="${producto.img}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.id}"></a>
            <div class="card-body">
                    <h5 class="card-title">${producto.title} ${producto.id}</h5>
                    <p class="card-text">${producto.detail}</p>
                    <p class="card-text">$${producto.price}</p>
                    <p class="card-text">${producto.stock}</p>
                    <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
            </div>
        </div>`
    );

    document.querySelector('section').innerHTML = card.join("");
}
card();
/*const h1 = document.querySelector("h1")
h1.innerText = "Productos"

const img = document.querySelector("img")
img.src = 'https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg';

const p = document.querySelector('p');
p.textContent = 'Auto clasico de verano';
function cards() {
    let h1 = document.querySelector("h1");
  h1.innerHTML = "Productos";
  let contenedor = document.querySelector(".container");
  
  let arr = [];
  
  for (let i = 1; i <= 9; i++) {
      arr.push(`
          <div class="card">
    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto">
    <div class="card-body">
      <h5 class="card-title">Card ${i}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="producto.html" class="btn btn-primary">Ver más</a>
    </div>
  </div>
  `);
  }
  
  contenedor.innerHTML = arr.join(``);
  
  }
  
  cards();
  
  // let user = {
  //   username:"Gabriel",
  //   edad:4,
  // };
  
  // let propiedad="username";
  
  // alert(user[propiedad]);//dinamico
  // alert(user.username);//no dinamico
//<button>Ver Mas</button>
//}

/*cardsArray.push(card);
document.querySelector(".container").innerHTML = cardsArray.join(''); 
/*let cardsArray = [];
for (let i = 1; i < 10; i++) {
    cardsArray.push(
        <div class = "card" style = "width: 18rem;">
            <img src= "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg" class = "card-img"></img>
        <div class="card-body"></div>
        <p class="card-text">Tarjeta numero ${i}.</p>
        </div>
    )
}

/*for (let i = 1; i <= 1; i++) {
    const card = document.createElement('div');
    card.textContent = `card 1`;
    card.style.border = '1px solid black';
    card.style.padding = '35px';
    card.style.margin = '10px';
    card.style.backgroundColor = '#f9f9f9';
    
    container.appendChild(card);
}

/*let arr = ["<div />","<div />","<div />"]
section.innerHTML = arr.join().replaceAll(",", "");*/