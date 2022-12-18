// Si recuerdan una variable con const una vez que es definida no puede reasginarse su valor.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: false,
    medidas: {
      largo: "40",
      ancho: "20",
    },
  };


producto.nombre = "Monitor 40 pulgadas";

console.log(producto);

