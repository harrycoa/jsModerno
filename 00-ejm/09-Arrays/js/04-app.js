// Al Igual que los objetos un arreglo se puede modificar a pesar ade utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses)
for(let i = 0; i < meses.length; i++) {
    if(meses[i] === "Enero") {
        meses[i] = meses[i].toLowerCase()
    }
}
console.table(meses)
