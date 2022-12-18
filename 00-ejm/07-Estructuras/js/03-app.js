// Veamos como utilizar los operadores and y or
let bool1 = true;
let bool2 = false;
if(bool && bool2) {
    console.log("Ambas son verdaderas")
} else if(bool1 || bool2) {
    console.log("Una es verdadera")
} else if(!bool1 || !bool2) {
    console.log("Una es verdadera")
} else {
    console.log("Ambas son falsas")
}