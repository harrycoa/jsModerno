//Funciones en objetos

const nombre = "Nose"
const precio = 50
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: false,
    mostrarMensaje: function () {
        console.log(`El producto ${this.nombre} tiene el precio ${this.precio}`)
    },
  };

  producto.mostrarMensaje();

// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento