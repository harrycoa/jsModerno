// Las funciones en cualquier lenguaje son una serie de procedimientos o subprogramas que realizan una acción, 
// Una ventaja de las funciones es que permiten tener un código más ordenado fácil de mantener.
// Otra ventaja de las funciones es que son reutilizables.

// Existen 2 formas de crear funciones en JavaScript

// Declaración de Función, la expresión de la función utiliza la palabra reservada function, 
// seguida de un nombre y un parentesis, en este parentesis se colocan los parametros, 
// finalmente el cuerpo de la función se define por unas llaves...

function sumar() {
    console.log(2 + 2)
}

sumar();
// Las funciones deben llamarse (invocarse), de otra forma en realidad no hacen mucho:
// se invoca por su nombre seguido del parentesis()


// Expresión de función - Este tipo de funciones se asigna como si fuera una variable
const sumar2 = function() {
    console.log(2 + 2)
}

sumar2();

// se invoca de la misma forma