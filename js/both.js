//MENU HAMBURGUESA

var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var header = document.querySelector('.headroom');


burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});


var headroom = new Headroom(header, {
  offset: 105,
  tolerance: 5,
  classes: {
    initial: "animated",
    pinned: "slideInDown",
    unpinned: "slideOutUp"
  }
});
headroom.init();

//RECETAS AL AZAR

function randomFunction () {
  let link = document.querySelector("#linkrandom")
  
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
  }
