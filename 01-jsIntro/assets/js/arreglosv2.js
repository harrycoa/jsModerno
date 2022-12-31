let juegos = ['Zelda', 'GOW', 'TLOU'];

console.log('Largo:', juegos.length )

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

juegos.forEach( (elemento, indice, arr) => { console.log(elemento, indice, arr); })

// agregar al final
juegos.push('F-ZXero'); 

// agregar inicio
juegos.unshift('FFFF');

// borrar el ultimo
let juegoborrado = juegos.pop();
console.log(juegoborrado, juegos);


// borrar especifico
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos,2);
console.log(juegosBorrados, juegos);


// posicion indice
let position = juegos.indexOf('TLOU'); // CaSeSenSiTiVe
console.log(position, juegos)

