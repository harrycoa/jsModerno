// De aquí en adelante estaremos viendo una serie de métodos de arreglos como el forEach


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

let arreglo1 = meses.forEach(function(i) {
    return i
})
// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...

let arreglo2 = meses.map(function(i) {
    return i
})

console.table(arreglo1)
console.table(arreglo2)

//Tambien existen otros metodos como el find, filter, includes, short, etc.

let miElemento = meses.find(function(i) {
    return i === "Diciembre"
})

console.log(miElemento)
