// Create XMLHttpRequest object.
const oXHR = new XMLHttpRequest();

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "/js/recetas.json", true);  // get json file.
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) {		// Check if request is complete.
        recetasJSON(this.responseText);
        //document.getElementById('showData').innerHTML = this.responseText;
    }
}

function recetasJSON(jsonData) {
    var recetas = [];
    recetas = JSON.parse(jsonData)
    console.log(recetas)
    console.log(recetas[2].tiempo)

    let selectComida = document.querySelector('#selectComida');
    selectComida.addEventListener('change', (evt) => {
        console.log(evt.target.value)
        
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
    document.querySelector('#show-data').innerText = ''
    let contenedor = document.querySelector("#show-data")

    recetas.map(receta => {
        if (receta.tipoDeComida == tipoDeComidaSelect) {
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
                  <a href="tiempo.html"><button class="button is-black is-medium is-link">Quiero!</button> </a>
                </p>
              </div>
              </div>
            `
        }
    })
}

}
const URLGET = "https://api.spoonacular.com/food/ingredients/autocomplete?number=5&apiKey=e138c39956c34ea593e7026320f57fcf&query="



$("#tags").keyup(function (e) { 
    console.log(e.target.value);
    $.get(URLGET+(e.target.value), function (respuesta, estado) {
        if(estado === "success"){
            console.log(respuesta)
            $( function() {
                var availableTags = [
                  `${respuesta[0].name}`,
                  `${respuesta[1].name}`,
                  `${respuesta[2].name}`,
                  `${respuesta[3].name}`,
                  `${respuesta[4].name}`,            
                ];
                $( "#tags" ).autocomplete({
                  source: availableTags
                });
              } );
    }}
    )})
         
            

/*
const URLGET = "https://api.spoonacular.com/recipes/findByIngredients?&number=7&apiKey=e138c39956c34ea593e7026320f57fcf&ingredients="
$("#btn1").click(() => { 
    $.get(URLGET+(document.getElementById('search').value), function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.title}</h3>
                                   <img src"${dato.image}>
                                  </div>`);
            }  
          }
    });
});


$.get(URLGET), function (respuesta, estado) {
    if(estado === "success"){
        $( function() {
            var availableTags = [
              respuesta
            ];
            console.log(respuesta)
            $( "#tags" ).autocomplete({
              source: availableTags
            });
          } );
}}


*/

    
