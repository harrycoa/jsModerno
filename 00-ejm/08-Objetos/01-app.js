// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

//Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: false
}

console.log(producto);


//Object Constructor

function objectConstructor (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const miProducto = new objectConstructor("Monitor 40 pulgadas", 50, true);
 console.log(miProducto);

//Como acceder a las propiedades de un objeto:

console.log(miProducto.nombre)
console.log(miProducto['nombre']);

//Agregar o elimnar propiedades

miProducto.medida = "10cmm"

console.log(miProducto)

miProducto.medida = "20cmm"

console.log(miProducto)

delete miProducto.medida

console.log(miProducto)