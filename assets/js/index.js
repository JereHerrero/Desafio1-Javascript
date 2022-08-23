// Este codigo es sin arrays.

// let entrada = parseInt(prompt("Ingrese un número:"))

// for (let i = 0; i < entrada; i++) {
//     console.log('Hola', i)
// }


// Este codigo es con arrays

let entrada = prompt("Ingrese un nombre:");
let nombres = [];

while (entrada != "Voldemort") {
  nombres.push(entrada);
  entrada = prompt("Ingrese otro dato:");
}
alert("El usuario ingreso: " + nombres);
