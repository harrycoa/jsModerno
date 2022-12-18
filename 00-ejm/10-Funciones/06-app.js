// Como se comunican las funciones entre si...

// Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, 
// realizan una operación y se van hacia la otra función...


iniciarApp();

function iniciarApp() {
    debugger
    console.log('Iniciando');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Holaaa desde la segunda funcion');
    usuarioAuthenticado('Pablo');
}

function usuarioAuthenticado(name) {
    console.log('Autneitcando usuario....')
    console.log(`Usuario ${name}`)
}