// Entrada (prompt)
// Salida (alert)

// parseInt 1000

// let numeroUno = parseInt(prompt("Ingrese un número"));
// let numeroDos = parseInt(prompt("Ingrese un segundo número"));

// let resultado = numeroUno + numeroDos;
// alert("La suma de " + numeroUno + " y " + numeroDos + " es " + resultado);

// Entrada de datos (prompt)

let datoNombre = prompt("Ingresa tu nombre");
let datoPeso = parseInt(prompt("Ingresa tu peso en kilos"));
let datoAltura = parseInt(prompt("Ingresa tu altura en centimetros"));

// // Proceso

let resultadoIMC  = datoPeso / ((datoAltura/100) * (datoAltura/100));

if (resultadoIMC.toFixed < 18.5) {
    console.log(datoNombre + " Tu IMC esta catalogado como Bajo de peso") + resultadoIMC.toFixed(2);
    alert(datoNombre + " Tu IMC esta catalogado como Bajo de peso") + resultadoIMC.toFixed(2);
} else if (resultadoIMC.toFixed >= 18.5 && resultadoIMC <= 24.9) {
    console.log(datoNombre + " Tu IMC esta catalogado como Normal") + resultadoIMC.toFixed(2);
    alert(datoNombre + " Tu IMC esta catalogado como Normal") + resultadoIMC.toFixed(2);
} else if (resultadoIMC.toFixed >= 25 && resultadoIMC <= 29.9) {
    console.log(datoNombre + " Tu IMC esta catalogado como Sobrepeso") + resultadoIMC.toFixed(2);
    alert(datoNombre + " Tu IMC esta catalogado como Sobrepeso") + resultadoIMC.toFixed(2);
} else if (resultadoIMC.toFixed >= 30 && resultadoIMC <= 34.9) {
    console.log(datoNombre + " Tu IMC esta catalogado como Obesidad grado 1") + resultadoIMC.toFixed(2); 
    alert(datoNombre + " Tu IMC esta catalogado como Obesidad grado 1") + resultadoIMC.toFixed(2);
} else if (resultadoIMC.toFixed >= 35 && resultadoIMC <= 39.9) {
    console.log(datoNombre + " Tu IMC esta catalogado como Obesidad grado 2") + resultadoIMC.toFixed(2); 
    alert(datoNombre + " Tu IMC esta catalogado como Obesidad grado 2") + resultadoIMC.toFixed(2);
} else if (resultadoIMC.toFixed >= 40 && resultadoIMC <= 49.9) {
    console.log(datoNombre + " Tu IMC esta catalogado como Obesidad grado 3") + resultadoIMC.toFixed(2); 
    alert(datoNombre + " Tu IMC esta catalogado como Obesidad grado 3") + resultadoIMC.toFixed(2);
} else if (resultadoIMC.toFixed >= 50) {
    console.log(datoNombre + " Tu IMC esta catalogado como Obesidad grado 4") + resultadoIMC.toFixed(2); 
    alert(datoNombre + " Tu IMC esta catalogado como Obesidad grado 4") + resultadoIMC.toFixed(2);
} else {
    console.log(datoNombre + " tu IMC no es válido");
    alert(datoNombre + " tu IMC no es válido");
}

// // Salida (alert)

alert("Su IMC es de " + resultadoIMC.toFixed);


// Programa de grupos personas

// Entrada Edad y nombre (prompt)

// let datoNombre = prompt("Ingresa tu nombre");
// let datoEdad = parseInt(prompt("Ingresa tu edad"));

// // Proceso

// if (datoEdad >= 0 && datoEdad <= 12) {
//     console.log(datoNombre + " eres un bebe");
//     alert(datoNombre + " eres un bebe");
// } else if (datoEdad >= 13 && datoEdad <= 17) {
//     console.log(datoNombre + " eres un adolescente");
//     alert(datoNombre + " eres un adolescente");
// } else if (datoEdad >= 18 && datoEdad <= 29) {
//     console.log(datoNombre + " eres un adulto");
//     alert(datoNombre + " eres un adulto");
// } else if (datoEdad > 64) {
//     console.log(datoNombre + " eres un adulto mayor");
//     alert(datoNombre + " eres un adulto mayor");
// } else {
//     console.log("Error, tu edad no es válida, debes ingresar un número mayor o igual a 0");
//     alert("Error, tu edad no es válida, debes ingresar un número mayor o igual a 0");
// }

// Concatenar (unir)

// let nombre = "Juan";
// let edad = 20;
// alert("Su nombre es " + nombre + " y su edad " + edad)
// alert("Su nombre es " + nombre + " y su edad " + edad + " " + (2 + 2))