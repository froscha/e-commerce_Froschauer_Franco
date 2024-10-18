const carcachas = document.querySelector("main");

const data = [{
    id: 1,
    title: "Renault 12",
    detail:
      "Es un auto que no te deja, en las buenas y en las malas siempre esta con vos, el motor pierde aceite, pero cada tanto le pones cinta y ya esta. La puerta se sale, haci que maneja con cuidado; te aviso que en verano vas a tener que andar sin puerta para que entre viento, porque no tiene aire acondicionado.",
    img: "https://lasemanaentredosrios.com/wp-content/uploads/2023/02/R12-900x480.jpg",
    price: 750_000,
    stock: 8,
  },
  {
    id: 2,
    title: "Fiat Fitito",
    detail:
      "Este es uno de los mejores autos que tenemos, es para uso diario en sitios urbanos, ya que es chiquito y lo encontras lugar para estacionar facilmente. Con su color rojizo, deslumbra en la calle, y cuando lo miras, te dan ganas de manejarlo.",
    img: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/12161556/fitito1-1024x709.jpg",
    price: 2_250_000,
    stock: 8,
  },
  {
    id: 3,
    title: "Renault 9",
    detail:
      "Auto para andar en familia, con una capacidad de 6 personas, anda joya para ir de viaje, muy comodo su interior. Tiene aire acondicionado y radio.",
    img: "https://complejoferialcordoba.com.ar/wp-content/uploads/RENAULT-9-FRENTE.jpg",
    price: 250_000,
    stock: 8,
  },
  {
    id: 4,
    title: "Ford Falcon (Historico)",
    detail:
      "Ford Falcon verde, se uso en la dictadura de Argentina en 1976. Representa la tragedia sucedida, hay solo 2 stock del producto, ya que no hay muchos de estos. Es un auto historico, asi que su precio es elevado.",
    img: "https://media.minutouno.com/p/0c54a1c4826dbef4569e77cfa9270ba2/adjuntos/150/imagenes/039/740/0039740027/falcon-verde.jpg",
    price: 30_550_000,
    stock: 2,
  },
  {
    id: 5,
    title: "Chevrolet Chevy SS",
    detail:
      "Es una joya de chevrolet, su iconico auto. Sus siglas de Super Sport. s un auto de coleccion y tiene una gran velocidad, con un motor de «250 7B» (4.097cc) con 155 HP",
    img: "https://warnesrepuestos.com.ar/assets/chevy_1-.jpg",
    price: 9_250_000,
    stock: 18,
  },
  {
    id: 6,
    title: "Ford Falcon",
    detail:
      "Ford, en la década del 50 no lograba encontrar un auto distintivo. Pero en 1957 comenzaron a diseñar lo que conoceríamos, recién en 1959 como el Falcon. Se dice que la gente de Ford cruzó los dedos cuando el 3 de octubre de 1959 lo presentaron al mercado. Y desde ese momento fue la joya del mercado, hasta hoy en dia se siguen viendo",
    img: "https://fierrosclasicos.com/wp-content/uploads/2013/01/portsitio.jpg",
    price: 7_000_000,
    stock: 21,
  },
  {
    id: 7,
    title: "Fiat 1600 Sport Coupé",
    detail:
      "Auto de coleccion. Se fabricaron 10 a 12 coupés por día. La producción oficial desde 1969 a 1971 de la coupé 1600 llegó a 3.605 unidades. Periz (el creador) nos cuenta: Creo que fue un éxito, pero en aquella época todo era un éxito.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJS1jj7MOKOgBSB5ZoelQdI39VMo0AoMWxPQ&s",
    price: 10_000_000,
    stock: 12,
  },
  {
    id: 8,
    title: "Renault Torino",
    detail:
      "Las especificaciones técnicas para el Torino 380-W:  se fabricaron 1000 unidades, la velocidad máxima era de 200km/h, la potencia CV 173, de 0 a 100km/h en 10,3 segundos, el motor es el tornado superpower 6 cilindros de 4 bancadas, 233 pulgadas, la capacidad del tanque es de 65 litros, y está alimentado por 3 carburadores weber de doble boca cada uno de 45mm conocido como “Weber 45 DCOE 17”, en cuanto al consumo el mismo ronda en los 6,3 km/L, y la caja es la ZF de 4 marchas.",
    img: "https://resizer.iproimg.com/unsafe/1280x720/filters:format(webp)/assets.iprofesional.com/assets/jpg/2020/08/501802_landscape.jpg",
    price: 12_500_000,
    stock: 4,
  },
  {
    id: 9,
    title: "Chevrolet C10",
    detail:
      "La mejor camioneta del mercado en esos tiempos; es indestructible, todos los caminos los pasa, nada lo puede parar. Muy recomendada para albañiles, ya que en la caja trasera hay mucho espacio para llevar cosas.",
    img: "https://fotos.perfil.com/2023/03/26/chevrolet-c10-1960-1534567.jpg",
    price: 5_000_000,
    stock: 38,
  },];


const productos = data.map(
  (producto) =>
    `<div class="card d-flex align-items-center flex-column m-2" style="width: 45rem">
       <h1 class="text-center">${producto.title}</h1>
       <img class="imagen" src= "${producto.img}" alt="Imagen" width="55%">
       <p class="text-center">${producto.detail}</p>
       <strong>Precio: $${producto.price}</strong>
       <span>Stock: ${producto.stock}</span>
   </div>`
);

carcachas.innerHTML = productos.join("");

/*
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

// Función para mostrar el detalle del producto
function mostrarDetalleProducto(id) {
    const producto = data.find(prod => prod.id === id);
    const productDetail = document.querySelector('#product-detail');
    
    if (producto) {
        productDetail.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <p>${producto.detalle}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        `;
    } else {
        // Mostrar todos los productos si no se encuentra el específico
        productDetail.innerHTML = data.map(product => `
            <div class="product-card">
                <h3>${product.titulo}</h3>
                <img src="${product.imagen}" alt="${product.titulo}">
                <p>${product.detalle}</p>
                <p>Precio: $${product.precio.toFixed(2)}</p>
                <p>Stock: ${product.stock}</p>
                <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
            </div>
        `).join('');
    }
}

// Capturar el ID del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const prodId = parseInt(urlParams.get('prod'));

// Mostrar el detalle del producto
mostrarDetalleProducto(prodId);


/*class Producto {
    constructor(titulo, detalle, precio, stock, imagen, altImg) {
        this.titulo=titulo;
        this.detalle=detalle;
        this.precio=precio;
        this.stock=stock;
        this.imagen=imagen;
        this.altImg=altImg;
    }
    verHtml(){
        return `
        <div class="card">
        <img src="${this.imagen}" alt ="${this.altImg}" class="card-img-top">
        <div class="card-body">
            <h2 class="card-title">${this.titulo}</h2>
            <p class="card-text">${this.detalle}</p>
            <p class="card-text">${this.precio}</p>
            <p class="card-text">${this.stock}</p>
        </div>
        </div>
        `
    }
}

const producto1 = new Producto("Auto 1", "Es rapidisimo", "$59999", "4", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");



let contenedor = document.querySelector(".cards-productos");

contenedor.innerHTML=producto1.verHtml();

//funcion para mostrar el detalle del producto

/*function mostrarDetalle(id) {
    const producto = data.find(prod => prod.id === id)
    const productDetail =
}

    /*class producto {
    constructor(titulo, detalle, precio, stock, imagen);{
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
getProducto() {
    return `El titulo es ${this.titulo}`
}

}
/*
/
// Clase Producto
class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

// Crear una instancia de Producto
const productoEjemplo = new Producto(
    "silla gamer", 
    "silla resistente y comoda", 
    5999, 
    20, 
);

// Asignar las propiedades del producto a una variable HTML
const productoHTML = 
    <div class>
const productoHTML =
    <div class="producto-card">
        <h2>${productoEjemplo.titulo}</h2>
        <img src="${productoEjemplo.imagen}" alt="${productoEjemplo.titulo}">
        <p>${productoEjemplo.detalle}</p>
        <p><strong>Precio:</strong> $${productoEjemplo.precio}</p>
        <p><strong>Stock disponible:</strong> ${productoEjemplo.stock}</p>
        
    </div>
*/