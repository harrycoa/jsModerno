//Mas metodos para operar con string

/*Con el método replace podemos remplazar una cadena de caracteres por otra*/
// Replace 
const nombre = "Pablo hghjguh";
console.log(nombre.replace("hghjguh", "Martin"))
/*Con el slice podemos cortar determinada cadena de caracteres*/
// Slice
console.log(nombre.slice(0, 5))
/*Con el método repeat podemos repetir un caracter o cadena de caracteres*/
// Repeat
console.log(nombre.repeat(5))
/*Con el método split  podemos separar una cadena de caracteres. Retorna un Array*/
//Split
const valores = "valor1 valor2 valor3";
console.log(valores.split(" "))