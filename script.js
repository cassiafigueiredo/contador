const acrescentarBtn = document.getElementById("acrescentar");
const retirarBtn = document.getElementById("retirar")
const resetBtn = document.getElementById("reset")  
const numeroContado = document.getElementById("numeroContador")
let contar = 0


acrescentarBtn.onclick = function() {
    contar++;
    numeroContado.textContent = contar;
}

retirarBtn.onclick = function() {
    if (contar <= 0 ) { 
        contar = 0
     } else {
        contar--;
        numeroContado.textContent = contar;
     }
}

resetBtn.onclick = function() {
    contar = 0;
    numeroContado.textContent = contar;
}