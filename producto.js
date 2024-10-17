
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