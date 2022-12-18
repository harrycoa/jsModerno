// Agreguemos elementos a un arreglo.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses)

// meses.unshift('Julio')
// meses.unshift('Agosto')
// meses.unshift('Septiembre')



// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...

let nuevoArreglo  = ["Julio", ...meses]
nuevoArreglo = [...nuevoArreglo, "Agosto"]
nuevoArreglo = [...nuevoArreglo, "Septiembre"]

console.table(nuevoArreglo)

//Eliminemos elementos de un arreglo