
let barra = [
  { text: "Inicio", href: "/index.html" },
  { text: "Productos", href: "/producto.html" },
  { text: "Contacto", href: "/contact" },
];

const header = document.querySelector("header");
let menu = [];

for (let info of barra) {
  const carta = `
    <li class="nav-item hovnav">
      <a class="nav-link" href="${info.href}">${info.text}</a>
    </li>
    
  `;
  menu.push(carta);
}

header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary colo">
    <div class="container-fluid">
      <a class="navbar-brand hovnav" href="index.html">Las Carcachas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          ${menu.join("")}
        </ul>
        <li class="nav-item dropdown" style="list-style: none;">
            <button type="button" class="btn dropdown-toggle hovnav" data-bs-toggle="dropdown" aria-expanded="false">
                Marcas
            </button>
            <div id="category-buttons" class="d-grid gap-2 col-6 mx-auto">
                <ul class="dropdown-menu">
                    <button class="btn btn-primary category-btn dropdown-item" data-category="todos">Ver todos</button>
                    <button class="btn btn-primary category-btn dropdown-item" data-category="Fiat">Fiat</button>
                    <button class="btn btn-primary category-btn dropdown-item" data-category="Ford">Ford</button>
                    <button class="btn btn-primary category-btn dropdown-item" data-category="Chevrolet">Chevrolet</button>
                    <button class="btn btn-primary category-btn dropdown-item" data-category="Renault">Renault</button>
                </ul>
            </div>
        </li>
      </div>
       <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" id="search-input">
            <button class="btn btn-outline-danger" type="button" id="search">Buscar</button>
            <button class="btn btn-outline-danger" type="button" id="reset">Borrar</button>
        </form>
        <ul>
        ${localStorage.getItem("email")
    ? `<button class="btn btn-outline-danger" onclick="cerrarSesion()">Cerrar Sesion</button>` : `<a href="./login.html" class="btn btn-outline-danger" type="button">Cerrar sesión</a>`
    }</ul >
    </div >
  </nav >
  `;

function cerrarSesion() {
  localStorage.clear()
  location.href = "./index.html"
}



/*let barra = [
  { texto: "Inicio", href: "./index.html" },
  { texto: "Productos", href: "./producto.html" },
  { texto: "Contacto", href: "./contact" },
];

const header = document.querySelector("header");
let menu = [];

for (let info of barra) {
  const carta = `
    <li class="nav-item">
      <a class="nav-link" href="${info.href}">${info.texto}</a>
    </li>
  `;
  menu.push(carta);
}

header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Las Carcachas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          ${menu.join("")}
          <ul>${
            localStorage.getItem("email")
            ? `<span>${localStorage.getItem("email")}</span> | <span onclick="logout()">Cerrar Sesión</span>` : "2"
          }
        </ul>
      </div>
    </div>
  </nav>
`;

function logout() {
  localStorage.clear()
  location.href = "./index.html"
}

/*

// Array con las categorías de la tienda, cada una con un nombre y un enlace (href)
let categorias = [
  {
      nombre: "Inicio",
      href: "./index.html"
  },
  {
      nombre: "Productos",
      href: "./producto.html"
  },
  {
      nombre: "Contacto",
      href: "#"
  }
];

// Array para almacenar el HTML del menú generado
let menuItems = [];

// Recorrer el array de categorías y generar el HTML para cada una
for (let item of categorias) {
  menuItems.push(`
      <li class="nav-item">
          <a class="nav-link" href="${item.href}">${item.nombre}</a>
      </li>
  `);
}

// Crear la estructura del navbar sin el buscador
let menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">Tienda</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              ${menuItems.join('')}
          </ul>
      </div>
  </div>
</nav>
`;

// Insertar el menú en el DOM
document.querySelector('header').innerHTML = menu;

/*let menu = [
  {
      texto: "Contacto",
      href: "/"
  },
  {
      texto: "Pantalones",
      href: "/pantalones"
  },
  {
      texto: "Remeras",
      href: "/remeras"
  },
];

let menuHTML = [];

for (let categoria of menu) {
  menuHTML.push(`
      <li class="nav-item">
      <a class="nav-link" href="${categoria.href}">${categoria.texto}</a>
      </li>
      `);
}
// document.querySelector('header').innerHTML = menuHTML.join("");

// inserto en el html en el header el narbar con el array de los link y con el join saco  las comas
document.querySelector('header').innerHTML = (`
  <div class="narbarOG">

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand" href="index.html">e-commerce</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      ${menuHTML.join("")}
                  </ul>
                  <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                      <button class="btn btn-outline-success d-flex align-items-center justify-content-center"
                          type="submit">
                          <i class="material-icons">search</i>
                      </button>
                  </form>
              </div>
          </div>
      </nav>

  </div> 
`);
*/
/*let menu = [];

let categories = [
  {
    name: "Nosotros",
    href: "#",
    icon: "bx bx-buildings",
  },
  {
    name: "Home",
    href: "./index.html",
    icon: "bx bx-home-alt-2",
  },
  {
    name: "Productos",
    href: "./producto.js",
    icon: "bx bx-store-alt",
  },
  {
    name: "Carrito",
    href: "#",
    icon: "bx bx-cart",
  },
  {
    name: "Login",
    href: "#",
    icon: "bx bxs-user",
  }
];

for (let i of categories) {
  menu.push(`
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="${i.href}">
      <i class='${i.icon}'></i>
      ${i.name}</a>
    </li>
    `)
};

let navbarLeft = document.getElementById("menuLeft").innerHTML = menu[0]
let navbarCenter = document.getElementById("menuCenter").innerHTML = menu.slice(1, 3).join("");
let navbarRight = document.getElementById("menuRight").innerHTML = menu.slice(3, 5).join("");
*/

/*
let menu = [
    { texto: "Home", href: "./index.html" },
    { texto: "Producto", href: "./producto.html" },
    { texto: "Nosotros", href: "#" },
    { texto: "Contacto", href: "#" }
  ];
  
  let menuHTML = [];
  
  for (let item of menu) {
    menuHTML.push(`<li class="nav-item"><a class="nav-link" href="${item.href}">${item.texto}</a></li>`);
  }
  
  let navHTML = `
    <nav class="navbar navbar-expand-lg navbar-info bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mi E-Commerce aaaaaaa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            ${menuHTML.join('')}
          </ul>
        </div>
      </div>
    </nav>`;
  
  document.querySelector("header").innerHTML = navHTML;
  




/*let menu = [
{ 
nombre: "Inicio",
href: "./index.html",
},
{
nombre: "Productos",
href: "./producto.html",
},
]

let menuHTML = []

for (let menuHTML of menu) {
menuHTML.push()
}*/