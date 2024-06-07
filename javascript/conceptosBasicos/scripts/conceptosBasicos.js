// Lo primero es verificar que la vinculación se haya realizado correctamente.
// Enviamos un mensaje.

console.log("Verificacion de vinculación correcta.");

// 1. Variables en javascript.

// Definicion -> espacio de memoria -> caja que guarda informacion en forma de datos -> Numericos, booleanos, arreglos, objetos, texto.

// Definimos para usarlo constantemente.

// Variables en JS (var, let, const)
// var -> datos que se pueden cambiar con el tiempo. (no se recomienda usar)
// let -> datos que se pueden cambiar con el tiempo. (se recomienda usar)
// const -> datos que no se pueden cambiar con el tiempo.

// 2. Declaracion de variables.

// 1. Definir tipo de variable. (let, const)
// 2. Definir nombre de la variable.
// 3. Definir que va a guardar.

let nombreVariable = "nombre";

// Numericos.

let numero = 10;
const pi = 3.14;

// Texto.

let texto = "hola";
const nombre = "Tomas";

// Booleanos (verdadero o falso).

let verdadero = true;
const falso = false;

// Arreglos (Guardar varios datos del mismo tipo en una sola variable).

let arregloNumeros = [1, 2, 3, 4, 5];
const arregloNombres = ["Tomas", "Juan", "Pedro"];

// POO (Programacion Orientada a Objetos).
// Objetos -> Datos que representan en codigo, elementos o cosas de la vida real para que podamos darles instrucciones logicas.
// Todos los elementos de la vida real tienen caracteristicas (atributos) y acciones (metodos).
// [] -> Arreglos.
// {} -> Objetos.
// () -> Funciones.
// Se puede acceder no solo al objetos, sino tambien a sus metodos y atributos de forma especifica.
// nombreObjeto.tributo
// nomb

const personal = {
    // Atributos
    nombre: "Tomas",
    edad: 18,
    altura: 180,
    nacionalidad: "Colombiano",
    // Metodos
    saludar: function () {
        console.log("Hola")
    },
    despedir: function () {
        console.log("Chao")
    }
}

let productos = {
    nombre: "Computador",
    precio: 10000,
    cantidad: 25,
    descripcion: "Muy bueno",
    comprar: function () {
        console.log("Comprando")
    },
}

// --------------FUNCIONES-----------------

/*
    Como se usan las funciones en JS.
    1. Declaracion tipica de funciones.
    2. Funciones anonimas.
    3. Funciones de flecha (Los estan mas modernos).
    4. Funciones incorporadas (Funciones que ya vienen con JS).
*/

// 1. Declaracion basica de funciones.

/* 

function nombreFuncion() {
     logica de la funcion
 }

*/

function saludar() {
    console.log("Holaaaa")
}

// 2. Funciones anonimas.

let despedida = function () {
    console.log("Chao")
}

// 3. Funciones de flecha.

let suma = () => {
    console.log(5+25)
}

// 4. Funciones incorporadas.

/*

    alert -> Muestra un mensaje en pantalla.
    prompt -> Muestra un mensaje en pantalla y espera una respuesta del usuario.
    parseInt -> Convierte un texto en un numero.
    parseFloat -> Convierte un dato a flotante (decimal).
    console -> Muestra un mensaje en la consola.
    Math -> Objeto que contiene funciones matematicas.

*/