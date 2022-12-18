// Hoisting 

// Ademas de las muy notables diferencias en sintaxis, quiero mostrarte las diferencias entre ambas... 
//si llamamos la función antes de declararla, el function declaration va a funcionar bien, mientras que el otro nos va a marcar un error..
sumar();

function sumar() {
    console.log(2 + 2)
}

sumar2();
const sumar2 = function() {
    console.log(2 + 2)
}


// Eso pasa porque JavaScript se ejecuta en 2 vueltas - Eso se le conoce como Hoisting , 
// la primer lectura registra todas las funciones y determina las variables, esta etapa se le llama de creación, 
// la segunda lectura es la que executa tu codigo, se llama de ejecución.

// Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código.

// el segundo no funciona porque si bien es una función no es declarada como tal, lo ve como una variable.

