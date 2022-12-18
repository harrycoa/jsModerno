// Funciones que retornan valores

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(1, 1);

console.log(resultado);

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(500);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);