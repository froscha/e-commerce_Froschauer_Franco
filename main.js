/*const h1 = document.querySelector("h1")
h1.innerText = "Productos"

const img = document.querySelector("img")
img.src = 'https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg';

const p = document.querySelector('p');
p.textContent = 'Auto clasico de verano';*/
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