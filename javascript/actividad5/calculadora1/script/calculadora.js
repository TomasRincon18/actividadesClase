// Confirmar vinculacion.

console.log("Hola mundo");

// Cuando se vayan a manipular elementos desde html desde js, se deben traer los mismo.

// 1. Traer el elemento desde el html.

let numero1;
let numero2;
let pantalla;
let resultado = 0;

numero1 = document.getElementById("numero1").value;
numero2 = document.getElementById("numero2").value;
pantalla = document.getElementById("pantalla");

function suma() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    pantalla.textContent = resultadoSuma;
}

function resta() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    pantalla.textContent = resultadoResta;
}

function multiplicacion() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    pantalla.textContent = resultadoMultiplicacion.toFixed(2);
}

function division() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoDivison = parseFloat(numero1) / parseFloat(numero2);
    pantalla.textContent = resultadoDivison.toFixed(2);
}