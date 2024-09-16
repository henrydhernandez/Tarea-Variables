
// // 1. Comparar números

// 	•	Escribe un programa que compare dos números y devuelva
//      true si el primer número es mayor que el segundo, 
//      y false en caso contrario.


let a = prompt("Ingresa un número");
let b = prompt("Ingresa un número");

if (a > b){
    console.log(true);
} else {
    console.log(false);
}



//2. Verificar igualdad estricta
// 	•	Crea una función que reciba dos valores como parámetros. 
//     La función debe retornar true si ambos valores son estrictamente 
//     iguales (tanto en valor como en tipo), y false en caso contrario.
/*
function comparar (a , b) {
    
    if ( a === b ) { 
        console.log(true);
    } else {
        console.log(false);
    }
 
}

comparar( a = prompt ("Ingrese Número","num"), 
          b = prompt("ingrese número","num"));
*/

/*
// 3. Operadores lógicos (AND, OR)
// 	•	Escribe un programa que verifique si una persona puede entrar en una discoteca. 
//     Solo puede entrar si tiene más de 18 años y tiene un pase VIP. 
//     Si tiene al menos 18 años o si es una celebridad, también puede entrar.

let pregunta1 = prompt("Cual es tu edad?","respuesta");
let pregunta2 = prompt("Tienes pase vip?","respuesta");
let pregunta3 = prompt("eres una celebridad?","respuesta");

if (pregunta1 > 18 && pregunta2 === "si" || pregunta1 >= 18 && pregunta3 === "si") {
    console.log("puedes entrar");
} else {
    console.log("no puedes entrar");
}
*/

// 4. Asigna un valor por defecto
// •	Usa el operador de asignación || para asignar un valor por defecto 
// a una variable. Crea un programa que pida el nombre de un usuario. 
// Si el usuario no introduce su nombre, asigna un valor predeterminado, 
// como “Invitado”.

/*
let tuNombre = prompt("¿cual es tu nombre");

if (tuNombre === "") {
    console.log(tuNombre = "Invitado");
} else {
    console.log(tuNombre);
}
*/

// 5. Número impar o par
// 	•	Escribe una función que reciba un número como argumento. 
//      Usa el operador de módulo (%) para determinar si el 
//      número es par o impar. Devuelve true si es par 
//      y false si es impar.

/*
function ParImpar (numero) {

    let base = 2;

    if ( (numero % base) === 0 ) {   
        console.log(true);
    } else {
        console.log(false);
    }
}

ParImpar(prompt("ingresa un número"));
*/


// 6. Comparar cadenas de texto
// 	•	Escribe una función que compare dos cadenas de texto y devuelva 
//      true si ambas son iguales ignorando mayúsculas y minúsculas, 
//      y false si no lo son. Usa operadores de comparación y 
//      métodos de cadenas como .toLowerCase().
/*
function CompararCadena ( cadena1 , cadena2 ) {

    if ( cadena1 === cadena2 ) {
        console.log(true);
    } else {
        console.log(false);
    }
}

CompararCadena(prompt("Cadena 1").toUpperCase(),
               prompt("Cadena 2").toUpperCase());
*/

// 7. Rango de números
// 	•	Escribe un programa que verifique si un número está entre 10 y 20 
//      (inclusive). Usa operadores de comparación para devolver true 
//      si el número está en el rango, y false en caso contrario.

/*
let numero = prompt("ingrese número");

if (numero >= 10 && numero <= 20) {
    console.log(true);
} else {
    console.log(false);
}
*/

// 8. Validar usuario y contraseña
// 	•	Crea un programa que simule un inicio de sesión simple. 
//      Debes comparar dos cadenas, una para el nombre de usuario 
//      y otra para la contraseña. Si ambos coinciden con los 
//      valores predeterminados, devuelve true; de lo contrario, devuelve false.
/*
let usuario = "Henry";
let contrasena = "henrY123";

let campo1 = prompt("Ingrese Usuario");
let campo2 = prompt("Ingrese Contraseña");

if (usuario != campo1 && contrasena === campo2) {
    console.log("usuario incorrecto");
} 
else if (contrasena != campo2 && usuario === campo1) {
    console.log("contraseña incorrecta");
} else {
    console.log ("bienvenido");
}
*/

// 9. Incremento y decremento
// 	•	Crea una variable que empiece con el valor 5. Usa los operadores 
//      de incremento (++) y decremento (--) para modificar 
//      su valor y mostrarlo en la consola después de varias operaciones.
/*
let numero = 5;

for (let i = 0; numero <= 15 ; numero++){
    console.log(numero);
}

for (let i = 0; numero >= 0 ; numero--){
    console.log(numero);
}
*/

// 10. Descuento en función del precio
// 	Escribe un programa que calcule si un cliente tiene derecho a un 
//  descuento. Si el cliente ha gastado más de $100, aplica un descuento 
//  del 10%. Usa un operador ternario para devolver el precio final.
/*
let precio = prompt("Ingrese el monto de su compra");

let descuento = precio >= 100 ? 
console.log("Tiene un descuento del 10% Su monto total es" , precio-((precio * 10)/100),"$") : 
console.log("No tiene Descuento");
*/
