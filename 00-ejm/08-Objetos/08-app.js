//Object.keys y object.values y entries, estos son los metodos más conocidos como iteradores de objetos.

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: false,
};

console.log(Object.values(producto));

console.log(Object.entries(producto));