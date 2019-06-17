window.onload = function(){
    cambiar()
}

function cambiar() {
    let excesarandom = who[Math.floor(Math.random() * 3)] +' '+what[Math.floor(Math.random() * 3)] +' '+ when[Math.floor(Math.random() * 4)];
  document.getElementById("excuse").innerHTML = excesarandom;
}


let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
let excuse = 'hola';

