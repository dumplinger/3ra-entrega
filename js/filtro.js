

// Create XMLHttpRequest object.
const oXHR = new XMLHttpRequest();

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "/js/recetas.json", true);  // get json file.
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) {		// Check if request is complete.
        recetasJSON(this.responseText);
        //document.getElementById('recetasDiv').innerHTML = this.responseText;
        
    }
}


function recetasJSON(jsonData) {
    var recetas = [];
    recetas = JSON.parse(jsonData)
    
let selectComida = document.querySelector('#selectComida');
  selectComida.addEventListener('change', (evt) => {
        
        switch (evt.target.value) {
            case "almuerzoCena":
                renderIndex("almuerzoCena");
                break;
            case "desayunoMerienda":
                renderIndex("desayunoMerienda")
                break;
        }
    }
    )

const renderIndex = (tipoDeComidaSelect) => {

  let selectTiempo = document.querySelector('#selectTiempo');
  selectTiempo.addEventListener('change', (evt) => {
      
      switch (evt.target.value) {
          case "5":
              renderIndex2("5");
              break;
          case "30":
              renderIndex2("30")
              break;
      }
  }
  )
  const renderIndex2 = (TiempoSelect) => {
    document.querySelector('#show-data').innerText = ''
    let contenedor = document.querySelector("#show-data")

    recetas.map(receta => {
        if (receta.tiempo == TiempoSelect && receta.tipoDeComida == tipoDeComidaSelect) {
            contenedor.innerHTML += `
            <div class="column is-one-third" >
            <div class="card size">
              <div class="card-content">
                <div class="has-text-centered">
                  <img src="${receta.img}" class="imgCards"/>
                </div>
                <h3 class="title is-3 has-text-centered" id="card-product-description">${receta.nombre}</h3>
                <p class="has-text-centered">
                  Ingredientes: ${receta.ingredientes} <br>
                  Se prepara en ${receta.tiempo} minutos.
                  <br><br>
                  <a href="${receta.link}"><button class="button is-black is-medium is-link">Quiero!</button> </a>
                </p>
              </div>
              </div>
            `
        }
    })
}}}





function randomFunction () {
let link = document.querySelector("#linkrandom")
let link2 = document.querySelector("#random2")

const htmls = [
  "receta1.html",
  "receta2.html",
  "receta3.html",
  "receta4.html",
  "receta5.html",
  "receta6.html",
  "receta7.html",
  "receta8.html",
  "receta9.html",
  "receta10.html",
  "receta11.html",
  "receta12.html",
  "receta13.html",
  "receta14.html",
  "receta15.html",
  "receta16.html",
  "receta17.html",
  "receta18.html",
  "receta19.html",
  "receta20.html",
];

const randomhtml = htmls[Math.floor(Math.random()*htmls.length)];

link.setAttribute ("href", `recetas/${randomhtml}`);
link2.setAttribute ("href", `recetas/${randomhtml}`);
}

var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var header = document.querySelector('.headroom');

//Bulma responsive nav
burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

//Headroom (using Animate.css styles)
var headroom = new Headroom(header, {
  offset: 105,
  tolerance: 5,
  classes: {
    initial: "animated",
    pinned: "slideInDown",//custom: slideDown
    unpinned: "slideOutUp"//custom: slideUp
  }
});
headroom.init();