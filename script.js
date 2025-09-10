// Arrays con las imágenes de cada parte
const cabezas = [
  "assets/img/cabeza_leon.png",
  "assets/img/cabeza_buho.png",
  "assets/img/cabeza_tiburon.png",
  
];

const cuerpos = [
  "assets/img/cuerpo_jirafa.png",
  "assets/img/cuerpo_pinguino.png",
  "assets/img/cuerpo_dragon.png",
  
];

const patas = [
  "assets/img/patas_canguro.png",
  "assets/img/patas_pulpo.png",
  "assets/img/patas_caballo.png",
  
];

// Referencias a las etiquetas
const $cabeza = document.getElementById("cabeza");
const $cuerpo = document.getElementById("cuerpo");
const $patas  = document.getElementById("patas");
const $boton  = document.getElementById("boton");

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generarCriatura() {
  $cabeza.src = random(cabezas);
  $cuerpo.src = random(cuerpos);
  $patas.src  = random(patas);
}

$boton.addEventListener("click", generarCriatura);

