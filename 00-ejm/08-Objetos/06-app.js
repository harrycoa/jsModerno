//Veamos como unir o copiar 2 objetos

//Con el metodo assign, es la forma tradicional de hacerlo

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: false,
};

const medidas = {
  largo: "40",
  ancho: "20",
};

const nuevoProducto = Object.assign(producto, medidas)

console.log(nuevoProducto)

//Tambien podemos copiar con el spread operator o tambien conocido como operador rest

const nuevoProducto2 = {...producto, ...medidas};

// let nuevoProducto3 = {...nuevoProducto2, stock: "5"}

let nuevoProducto3 = nuevoProducto;
nuevoProducto3.stock = "5";

console.log(nuevoProducto3)
