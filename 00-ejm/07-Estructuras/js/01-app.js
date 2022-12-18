// Operador if

// Ahora los if else también pueden ir sin llaves, pero esa sintaxis no es muy común en JS
let bool = true;

if(bool) console.log("Es verdadero") 

if(bool) {
    if(bool === false) { //no es choerente preguntar esto
        console.log("Es falso")
    } else if(bool === true) {
        console.log("Es verdadero")
    }
}