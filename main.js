const data = [{
    id: 1,
    title: "Renault 12",
    detail:
      "Es un auto que no te deja, en las buenas y en las malas siempre esta con vos, el motor pierde aceite, pero cada tanto le pones cinta y ya esta. La puerta se sale, haci que maneja con cuidado; te aviso que en verano vas a tener que andar sin puerta para que entre viento, porque no tiene aire acondicionado.",
    img: "https://lasemanaentredosrios.com/wp-content/uploads/2023/02/R12-900x480.jpg",
    price: 750_000,
    stock: 8,
    category: "Renault",
  },
  {
    id: 2,
    title: "Fiat Fitito",
    detail:
      "Este es uno de los mejores autos que tenemos, es para uso diario en sitios urbanos, ya que es chiquito y lo encontras lugar para estacionar facilmente. Con su color rojizo, deslumbra en la calle, y cuando lo miras, te dan ganas de manejarlo.",
    img: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/12161556/fitito1-1024x709.jpg",
    price: 2_250_000,
    stock: 8,
    category: "Fiat",
  },
  {
    id: 3,
    title: "Renault 9",
    detail:
      "Auto para andar en familia, con una capacidad de 6 personas, anda joya para ir de viaje, muy comodo su interior. Tiene aire acondicionado y radio.",
    img: "https://complejoferialcordoba.com.ar/wp-content/uploads/RENAULT-9-FRENTE.jpg",
    price: 250_000,
    stock: 8,
    category: "Renault",
  },
  {
    id: 4,
    title: "Ford Falcon (Historico)",
    detail:
      "Ford Falcon verde, se uso en la dictadura de Argentina en 1976. Representa la tragedia sucedida, hay solo 2 stock del producto, ya que no hay muchos de estos. Es un auto historico, asi que su precio es elevado.",
    img: "https://media.minutouno.com/p/0c54a1c4826dbef4569e77cfa9270ba2/adjuntos/150/imagenes/039/740/0039740027/falcon-verde.jpg",
    price: 30_550_000,
    stock: 2,
    category: "Ford",
  },
  {
    id: 5,
    title: "Chevrolet Chevy SS",
    detail:
      "Es una joya de chevrolet, su iconico auto. Sus siglas de Super Sport. s un auto de coleccion y tiene una gran velocidad, con un motor de «250 7B» (4.097cc) con 155 HP",
    img: "https://warnesrepuestos.com.ar/assets/chevy_1-.jpg",
    price: 9_250_000,
    stock: 18,
    category: "Chevrolet",
  },
  {
    id: 6,
    title: "Ford Falcon",
    detail:
      "Ford, en la década del 50 no lograba encontrar un auto distintivo. Pero en 1957 comenzaron a diseñar lo que conoceríamos, recién en 1959 como el Falcon. Se dice que la gente de Ford cruzó los dedos cuando el 3 de octubre de 1959 lo presentaron al mercado. Y desde ese momento fue la joya del mercado, hasta hoy en dia se siguen viendo",
    img: "https://fierrosclasicos.com/wp-content/uploads/2013/01/portsitio.jpg",
    price: 7_000_000,
    stock: 21,
    category: "Ford",
  },
  {
    id: 7,
    title: "Fiat 1600 Sport Coupé",
    detail:
      "Auto de coleccion. Se fabricaron 10 a 12 coupés por día. La producción oficial desde 1969 a 1971 de la coupé 1600 llegó a 3.605 unidades. Periz (el creador) nos cuenta: Creo que fue un éxito, pero en aquella época todo era un éxito.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJS1jj7MOKOgBSB5ZoelQdI39VMo0AoMWxPQ&s",
    price: 10_000_000,
    stock: 12,
    category: "Fiat",
  },
  {
    id: 8,
    title: "Renault Torino",
    detail:
      "Las especificaciones técnicas para el Torino 380-W:  se fabricaron 1000 unidades, la velocidad máxima era de 200km/h, la potencia CV 173, de 0 a 100km/h en 10,3 segundos, el motor es el tornado superpower 6 cilindros de 4 bancadas, 233 pulgadas, la capacidad del tanque es de 65 litros, y está alimentado por 3 carburadores weber de doble boca cada uno de 45mm conocido como “Weber 45 DCOE 17”, en cuanto al consumo el mismo ronda en los 6,3 km/L, y la caja es la ZF de 4 marchas.",
    img: "https://resizer.iproimg.com/unsafe/1280x720/filters:format(webp)/assets.iprofesional.com/assets/jpg/2020/08/501802_landscape.jpg",
    price: 12_500_000,
    stock: 4,
    category: "Renault",
  },
  {
    id: 9,
    title: "Chevrolet C10",
    detail:
      "La mejor camioneta del mercado en esos tiempos; es indestructible, todos los caminos los pasa, nada lo puede parar. Muy recomendada para albañiles, ya que en la caja trasera hay mucho espacio para llevar cosas.",
    img: "https://fotos.perfil.com/2023/03/26/chevrolet-c10-1960-1534567.jpg",
    price: 5_000_000,
    stock: 38,
    category: "Chevrolet",
  },];
  

  function renderCards(cards) {
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";
  
   const container = document.querySelector("section");
  
    const cardHTML = cards.map((producto) => `<div class="card text-bg-dark d-flex align-items-center flex-column m-2" style="width: 18rem">
               <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                        <h5>${producto.title}</h5>
                        <p class="text-center">${producto.detail}</p>
                       <p>${producto.price}</p>
                       <p>${producto.stock}</p>
                      <a href="producto.html?prod=${producto.id}" class="btn btn-secondary">Ver más</a>
               </div>
          `).join("");
    container.innerHTML = cardHTML;
  };
  function sprint() {
    renderCards(data);
  };
  
  sprint();
  
  const buttonSearch = document.getElementById("search");
  const buttonReset = document.getElementById("reset");
  const input = document.getElementById("search-input");
  const ul = document.getElementById("result-list");
  const searchList = () => {
    const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
    if (filterData.length > 0) {
      renderCards(filterData);
    } else {
      document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
    }
  };
  
  const resetInput = () => {
    input.value = "";
    renderCards(data);
  };
  
  
  const filterByCategory = (category) => {
    const filteredData = category === "todos"?data: data.filter(producto => producto.category === category);
    renderCards(filteredData);
  };
  
  buttonSearch.addEventListener("click", searchList);
  buttonReset.addEventListener("click", resetInput);
  
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () =>
    filterByCategory(button.dataset.category));
  });



  /*

  function renderCards(cards) {
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";
  
    const container = document.querySelector("section");
  
    const cardHTML = cards.map((producto) => `<div class="card text-bg-dark d-flex align-items-center flex-column m-2" style="width: 18rem">
               <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                        <h5>${producto.title}</h5>
                        <p class="text-center">${producto.detail}</p>
                       <p>${producto.price}</p>
                       <p>${producto.stock}</p>
                      <a href="producto.html?prod=${producto.id}" class="btn btn-danger hovnav boton">Ver más</a>
               </div>
          `).join("");
    container.innerHTML = cardHTML;
  };
  function sprint() {
    renderCards(data);
  };
  
  sprint();
  
  const buttonSearch = document.getElementById("search");
  const buttonReset = document.getElementById("reset");
  const input = document.getElementById("search-input");
  const ul = document.getElementById("result-list");
  const searchList = () => {
    const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
    if (filterData.length > 0) {
      renderCards(filterData);
    } else {
      document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
    }
  };
  
  const resetInput = () => {
    input.value = "";
    renderCards(data);
  };
  
  
  const filterByCategory = (category) => {
    const filteredData = category === "todos"?data: data.filter(producto => producto.category === category);
    renderCards(filteredData);
  };
  
  buttonSearch.addEventListener("click", searchList);
  buttonReset.addEventListener("click", resetInput);
  
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () =>
    filterByCategory(button.dataset.category));
  });
  /*function renderCards(cards) {
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";
  
    const container = document.querySelector("section");
  
    const cardHTML = cards.map((producto) => `<div class="card d-flex align-items-center flex-column m-2" style="width: 18rem">
               <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                        <h5>${producto.title}</h5>
                        <p class="text-center">${producto.detail}</p>
                       <p>${producto.price}</p>
                       <p>${producto.stock}</p>
                      <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
               </div>
          `).join("");
    container.innerHTML = cardHTML;
  };
  function sprint() {
    renderCards(data);
  };
  
  sprint();
  
  const buttonSearch = document.getElementById("search");
  const buttonReset = document.getElementById("reset");
  const input = document.getElementById("search-input");
  const ul = document.getElementById("result-list");
  const searchList = () => {
    const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
    if (filterData.length > 0) {
      renderCards(filterData);
    } else {
      document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
    }
  };
  
  const resetInput = () => {
    input.value = "";
    renderCards(data);
  };
  
  const filterByCategory = (category) => {
    const filteredData = category === "todos"?data: data.filter(producto => producto.category === category);
    renderCards(filteredData);
  };
  
  buttonSearch.addEventListener("click", searchList);
  buttonReset.addEventListener("click", resetInput);
  
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () =>
    filterByCategory(button.dataset.category));
  });


/*const data = [
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
  let titulo = document.querySelector("h1")
titulo.innerText = "PRODUCTOS";
const seccionProductos = document.querySelector("section")

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