class Producto {
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