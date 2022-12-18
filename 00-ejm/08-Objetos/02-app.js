// Veamos como asignar propiedades de un objeto a una variable.

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: false,
};

// const precio = producto.precio;

const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
