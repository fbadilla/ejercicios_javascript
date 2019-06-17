window.onload = function(){

}

function cambiar() {
    let excesarandom = who[Math.floor(Math.random() * 3)] +' '+what[Math.floor(Math.random() * 3)] +' '+ when[Math.floor(Math.random() * 4)];
  document.getElementById("excuse").innerHTML = excesarandom;
}


let who = ['el perro','mi abuela','su tortuga','mi pajaro'];
let what = ['come','cabreado','aplastado ','quebrado'];
let when = ['antes de clase','justo a tiempo','cuando termine','durante mi almuerzo','mientras estaba meditando'];
let excuse = 'hola';

