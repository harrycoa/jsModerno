/* Un objeto puede contener cualquier tipo de dato dentro de el, 
incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.*/

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: false,
  medidas: {
    largo: "40",
    ancho: "20",
  },
};

console.log(producto.medidas.largo);
console.log(producto.medidas.ancho);

// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const { nombre, precio, medidas: { largo, ancho } } = producto;

console.log(nombre, precio, largo, ancho);