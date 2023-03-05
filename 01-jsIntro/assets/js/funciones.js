function saludar() {
    console.log("saludar");
}

const saludar2 = function (){
    console.log("saludar2");
}

// argumentos
function saludar3( nombre = '' ){
    console.log("nombre:        " + nombre);
}

const saludar4 = function ( nombre ){
    console.log("saludar2" + nombre);
}

const saludar5 = function ( nombre ){
    console.log( arguments) ;
    console.log("saludar2" + nombre);
}

// funciones flecha
const saludarFlecha = () => console.log('Saludar flecha');

const saludarFlecha2 = (nombre) => { console.log('Saludar flecha' + nombre); }


saludar();
saludar2();
saludar3("harry");
saludar4("harry");
saludar5("harry", true, 32, 'Ok');

saludarFlecha();
saludarFlecha2('felchita');