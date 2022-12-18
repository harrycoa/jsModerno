// Veamos algunas operaciones útiles en los arreglos,


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad

console.log(meses.length)

/* ahora, si recuerdas vimos como acceder a un arreglo, pero si este arreglo tuviera 40 elementos 
sería muy complicado ir 1 por 1, entonces como acceder a todos los elementos? */

for(let i = 0; i < meses.length; i++) {
    console.log(`Arreglo meses en la posicion ${i}`)
}
