// Veamos la diferencia entre un método y una función...

let numero1 = 20;
let numero2 = "20";

numero2 = parseInt(numero2)
console.log(`Numero 2: ${numero2}`);
numero1 = numero1.toString()
console.log(`Numero 1: ${numero1}`);

console.log(typeof(numero2))
console.log(typeof(numero1))