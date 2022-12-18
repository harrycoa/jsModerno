// Veamos algunos métodos existentes en los strings o cadenas de Texto:

/* Con el método length podemos conocer la longitud de nuestro string */
//length
const nombreYApellido = "Pablo Tedesco"

console.log(nombreYApellido.length)

for(let i = 0; i <= nombreYApellido.length; i++) {
    console.log(nombreYApellido[i])
}

/*Con el método indexOf podemos obtener el indice donde se encuentra lo que buscamos*/
//indexOf

console.log(nombreYApellido.indexOf("Tedesco"))

/*Con el método includes podemos preguntar si existe determinada palabra o caracter dentro de nuestra cadena*/
//includes

console.log(nombreYApellido.includes("Tedesco"))