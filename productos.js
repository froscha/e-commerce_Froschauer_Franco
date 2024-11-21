const data = [{
  id: 1,
  title: "Renault 12",
  detail:
    "Es un auto que no te deja, en las buenas y en las malas siempre esta con vos, el motor pierde aceite, pero cada tanto le pones cinta y ya esta. La puerta se sale, haci que maneja con cuidado; te aviso que en verano vas a tener que andar sin puerta para que entre viento, porque no tiene aire acondicionado.",
  img: "https://lasemanaentredosrios.com/wp-content/uploads/2023/02/R12-900x480.jpg",
  price: 750_000,
  stock: "Stock: 5",
  category: "Renault",
},
{
  id: 2,
  title: "Fiat Fitito",
  detail:
    "Este es uno de los mejores autos que tenemos, es para uso diario en sitios urbanos, ya que es chiquito y lo encontras lugar para estacionar facilmente. Con su color rojizo, deslumbra en la calle, y cuando lo miras, te dan ganas de manejarlo.",
  img: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/12161556/fitito1-1024x709.jpg",
  price: 2_250_000,
  stock: "Stock: 47",
  category: "Fiat",
},
{
  id: 3,
  title: "Renault 9",
  detail:
    "Auto para andar en familia, con una capacidad de 6 personas, anda joya para ir de viaje, muy comodo su interior. Tiene aire acondicionado y radio.",
  img: "https://complejoferialcordoba.com.ar/wp-content/uploads/RENAULT-9-FRENTE.jpg",
  price: 250_000,
  stock: "Stock: 8",
  category: "Renault",
},
{
  id: 4,
  title: "Ford Falcon (Historico)",
  detail:
    "Ford Falcon verde, se uso en la dictadura de Argentina en 1976. Representa la tragedia sucedida, hay solo 2 stock del producto, ya que no hay muchos de estos. Es un auto historico, asi que su precio es elevado.",
  img: "https://media.minutouno.com/p/0c54a1c4826dbef4569e77cfa9270ba2/adjuntos/150/imagenes/039/740/0039740027/falcon-verde.jpg",
  price: 30_550_000,
  stock: "Stock: 3",
  category: "Ford",
},
{
  id: 5,
  title: "Chevrolet Chevy SS",
  detail:
    "Es una joya de chevrolet, su iconico auto. Sus siglas de Super Sport. s un auto de coleccion y tiene una gran velocidad, con un motor de «250 7B» (4.097cc) con 155 HP",
  img: "https://warnesrepuestos.com.ar/assets/chevy_1-.jpg",
  price: 9_250_000,
  stock: "Stock: 17",
  category: "Chevrolet",
},
{
  id: 6,
  title: "Ford Falcon",
  detail:
    "Ford, en la década del 50 no lograba encontrar un auto distintivo. Pero en 1957 comenzaron a diseñar lo que conoceríamos, recién en 1959 como el Falcon. Se dice que la gente de Ford cruzó los dedos cuando el 3 de octubre de 1959 lo presentaron al mercado. Y desde ese momento fue la joya del mercado, hasta hoy en dia se siguen viendo",
  img: "https://fierrosclasicos.com/wp-content/uploads/2013/01/portsitio.jpg",
  price: 7_000_000,
  stock: "Stock: 23",
  category: "Ford",
},
{
  id: 7,
  title: "Fiat 1600 Sport Coupé",
  detail:
    "Auto de coleccion. Se fabricaron 10 a 12 coupés por día. La producción oficial desde 1969 a 1971 de la coupé 1600 llegó a 3.605 unidades. Periz (el creador) nos cuenta: Creo que fue un éxito, pero en aquella época todo era un éxito.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJS1jj7MOKOgBSB5ZoelQdI39VMo0AoMWxPQ&s",
  price: 10_000_000,
  stock: "Stock: 12",
  category: "Fiat",
},
{
  id: 8,
  title: "Renault Torino",
  detail:
    "Las especificaciones técnicas para el Torino 380-W:  se fabricaron 1000 unidades, la velocidad máxima era de 200km/h, la potencia CV 173, de 0 a 100km/h en 10,3 segundos, el motor es el tornado superpower 6 cilindros de 4 bancadas, 233 pulgadas, la capacidad del tanque es de 65 litros, y está alimentado por 3 carburadores weber de doble boca cada uno de 45mm conocido como “Weber 45 DCOE 17”, en cuanto al consumo el mismo ronda en los 6,3 km/L, y la caja es la ZF de 4 marchas.",
  img: "https://resizer.iproimg.com/unsafe/1280x720/filters:format(webp)/assets.iprofesional.com/assets/jpg/2020/08/501802_landscape.jpg",
  price: 12_500_000,
  stock: "Stock: 4",
  category: "Renault",
},
{
  id: 9,
  title: "Chevrolet C10",
  detail:
    "La mejor camioneta del mercado en esos tiempos; es indestructible, todos los caminos los pasa, nada lo puede parar. Muy recomendada para albañiles, ya que en la caja trasera hay mucho espacio para llevar cosas.",
  img: "https://fotos.perfil.com/2023/03/26/chevrolet-c10-1960-1534567.jpg",
  price: 5_000_000,
  stock: "Stock: 38",
  category: "Chevrolet",
},];

const cart = JSON.parse(localStorage.getItem("cart")) || [];

// FUNCIÓN que muestra el DETALLE del producto pedido

function getParamFromURL(param) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

function mostrarDetalleProducto(id) {
  const producto = data.find(p => p.id === id);
  const productDetail = document.getElementById('product-detail');
  if (producto) {
    productDetail.innerHTML = `
      <div class="card mb-3 text-bg-dark d-flex justify-content-center">
      <div class="row g-0">
        <div class="col-md-6">
          <img class="imagen" src= "${producto.img}" alt="Imagen ${producto.id}" width=100% >
        </div>
        <div class="col-md-6 text-center align-items-center">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.detail}</p>
            <p class="card-text">Precio: ${producto.price}</p>
            <p class="card-text">${producto.stock}</p>
          </div>
        </div>
    ${localStorage.getItem("email") ?
        `<div class="input-group">
          <button class="btn btn-outline-secondary mr-3" type="button" onclick="increaseItem(${producto.id})">+</button>
          <input type="number" id="cantidad-${producto.id}" class="form-control" value="1" min="1" max="${parseInt(producto.stock.split(': ')[1])}" onchange="updateQuantity(${producto.id})"></input>
          <button class="btn btn-outline-secondary ml-3" type="button" onclick="decreaseItem(${producto.id})">-</button>
          <a href="#" class="enlace"><button type="button" class="btn btn-danger hovnav boton mx-2" onclick="addItems(${producto.id})">Agregar al Carrito</button></a>
        </div>`
        :
        `<a href="login.html" class="enlace mx-4"><button type="button" class="btn btn-danger hovnav boton mx-4">Iniciar Sesión</a>`
      } 
    </div>
    </div>}`

      ;
  } else {
    productDetail.innerHTML = "<p>Producto no encontrado</p>"
  }
}


const productId = getParamFromURL('prod')

if (productId) {
  mostrarDetalleProducto(parseInt(productId))
}
else {
  filtroCards(data)
} 

function filtroCards(cards) {
const autos = document.querySelector("main");
  const productos = cards.map((producto) =>
    `<div class="card mb-3 text-bg-dark d-flex justify-content-center">
      <div class="row g-0">
        <div class="col-md-6">
          <img class="imagen" src= "${producto.img}" alt="Imagen ${producto.id}" width=100% >
        </div>
        <div class="col-md-6 text-center align-items-center">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.detail}</p>
            <p class="card-text">Precio: ${producto.price}</p>
            <p class="card-text">${producto.stock}</p>
          </div>
        </div>
    ${localStorage.getItem("email") ?
      `<div class="input-group">
          <button class="btn btn-outline-secondary mr-3" type="button" onclick="increaseItem(${producto.id})">+</button>
          <input type="number" id="cantidad-${producto.id}" class="form-control" value="1" min="1" max="${parseInt(producto.stock.split(': ')[1])}" onchange="updateQuantity(${producto.id})"></input>
          <button class="btn btn-outline-secondary ml-3" type="button" onclick="decreaseItem(${producto.id})">-</button>
          <a href="#" class="enlace"><button type="button" class="btn btn-danger hovnav boton mx-2" onclick="addItems(${producto.id})">Agregar al Carrito</button></a>
        </div>`
      :
      `<a href="login.html" class="enlace mx-4"><button type="button" class="btn btn-danger hovnav boton mx-4">Iniciar Sesión</a>`
    } 
    </div>
    </div>`
  );
  autos.innerHTML = productos.join("");
}

//Funcion para incrementar
function increaseItem(id) {
  const input = document.getElementById(`cantidad-${id}`);
  const maxStock = parseInt(data.find(p => p.id === id).stock.split(': ')[1]);

  if (input.value < maxStock) {
    input.value = parseInt(input.value) + 1;
  }
};

function decreaseItem(id) {
  const input = document.getElementById(`cantidad-${id}`);

  if (input.value > 1) {
    input.value = parseInt(input.value) - 1;
  }
}
function addItems(id) {


  const input = document.getElementById(`cantidad-${id}`);
  const cantidad = parseInt(input.value);
  const producto = data.find(p => p.id === id);

  if (cantidad < 1) return;

  const existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += cantidad;
  } else {
    cart.push({ ...producto, quantity: cantidad });
  }

  Swal.fire({
    text: '¿Está seguro de agregar el producto al carrito?',
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: '#3ea20b',
    cancelButtonColor: '#c60000',
  }).then(result => {
    if (result.isConfirmed) {
      add()
    }
  })

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartQuantity();
}

function updateCartQuantity() {
  let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", quantity)
  const quantityTag = document.querySelector("#quantity")
  if (quantityTag) {
    quantityTag.innerText = quantity

  }
};
updateCartQuantity();

//FILTRO DE CATEGORIAS

const buttonSearch = document.getElementById("search");
const buttonReset = document.getElementById("reset");
const input = document.getElementById("search-input");
const ul = document.getElementById("result-list");
const searchList = () => {
  const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
  if (filterData.length > 0) {
    filtroCards(filterData);
  } else {
    document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
  }
};

const resetInput = () => {
  input.value = "";
  filtroCards(data);
};


const filterByCategory = (category) => {
  const filteredData = category === "todos" ? data : data.filter(producto => producto.category === category);
  filtroCards(filteredData);
};

buttonSearch.addEventListener("click", searchList);
buttonReset.addEventListener("click", resetInput);

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(button => {
  button.addEventListener("click", () =>
    filterByCategory(button.dataset.category));
});
