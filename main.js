/*const h1 = document.querySelector("h1")
h1.innerText = "Productos"

const img = document.querySelector("img")
img.src = 'https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg';

const p = document.querySelector('p');
p.textContent = 'Auto clasico de verano';*/
function sprint1() {
const h1 = document.querySelector("h1");
h1.innerText = "Productos";

let cardsArray = [];
for (let i = 1; i < 10; i++) {
    cardsArray.push(` 
        <div class="card" style="width: 22rem; size= ">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Tarjeta numero ${i}.</p>
            </div>
        </div>
    `); //batiks para el contenido
}

let container = document.querySelector(".container"); //seleccionamos para poder agregar la card.
console.log("Intento " + cardsArray + "para ver si funciona");
document.querySelector(".container").innerHTML = cardsArray.join('');
}
sprint1()

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