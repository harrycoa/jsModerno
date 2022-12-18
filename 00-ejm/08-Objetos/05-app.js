"use strict";

//Freeze para hacer inmutable un objeto.

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: false,
  medidas: {
    largo: "40",
    ancho: "20",
  },
};

// Object.freeze(producto);
// producto.nombre = "Monitor 40 pulgadas";
// delete producto.medidas;

//Similar a Freeze, existe otro object method llamado Seal
Object.seal(producto);
producto.nombre = "Monitor 40 pulgadas";
delete producto.nombre;
console.log(producto);
//A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...
