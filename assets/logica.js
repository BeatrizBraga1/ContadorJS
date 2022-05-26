let numero_atual = document.getElementById("numeroAtual")
let numeroAtual = 0;

function increment(){
    numeroAtual += 1;
    numero_atual.innerHTML = numeroAtual;
}

function decrement(){
    numeroAtual -= 1;
    numero_atual.innerHTML = numeroAtual;
}