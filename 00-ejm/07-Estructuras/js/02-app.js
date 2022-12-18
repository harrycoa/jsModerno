// Veamos otras comparaciones
let pago = false;
let monto = 60;
let saldo = "50";
if(pago == true) {
    console.log("Esta pago")
}
// No es igual
if(pago != true) {
    console.log("No esta pago")
}
// comparador estricto de tipo y valor
if(monto === saldo) {
    console.log("Puede pagar")
}