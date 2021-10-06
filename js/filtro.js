//FILTRO DE RECETAS POR TIEMPO+COMIDA
const oXHR = new XMLHttpRequest();

oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "js/recetas.json", true);  
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) {		
        recetasJSON(this.responseText);
        
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
                <a href="${receta.link}"><img src="${receta.img}" class="imgCards"/></a>
                </div>
                <h3 class="title is-3 has-text-centered" id="card-product-description">${receta.nombre}</h3>
                <p class="has-text-centered">
                  Ingredientes: ${receta.ingredientes} <br>
                  Se prepara en ${receta.tiempo} minutos.
                  <br><br>
                </p>
              </div>
              </div>
            `
        }
    })
}}}
