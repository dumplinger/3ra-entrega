

// Create XMLHttpRequest object.
const oXHR = new XMLHttpRequest();

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "js/recetas.json", true);  // get json file.
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) {		// Check if request is complete.
        recetasJSON(this.responseText);
        //document.getElementById('recetasDiv').innerHTML = this.responseText;
        
    }
}

function recetasJSON(jsonData) {
  var recetastodas = [];
  recetastodas = JSON.parse(jsonData)

  document.querySelector('#recetasDiv').innerText = ''
  let recetasDiv = document.querySelector("#recetasDiv")


recetastodas.forEach(receta=> recetasDiv.innerHTML += `<div class="column is-one-third" >
<div class="card size">
  <div class="card-content">
    <div class="has-text-centered">
    <a href="${receta.link}"><img src="${receta.img}" class="imgCards"/></a>
    </div>
    <h3 class="title is-3 has-text-centered nombreReceta" id="card-product-description">${receta.nombre}</h3>
    <div class="has-text-centered">
      <p class="ingredientes">Ingredientes: ${receta.ingredientes} </p>
      Se prepara en ${receta.tiempo} minutos.
      <br><br>
    </div>
  </div>
  </div>`);
}

//BUSCAR RECETASS
function search_recetas() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('nombreReceta');
  let c = document.getElementsByClassName('card');
  let t = document.getElementsByClassName('ingredientes');

for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input) & !t[i].innerHTML.toLowerCase().includes(input)) {
          c[i].style.display="none";
      }
      else {
          c[i].style.display="inherit";                 
      }
  }

  
}
