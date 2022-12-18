/*Un ciclo for se repite hasta que una condición especificada se evalúe como false.*/
for (let step = 1; step <= 5; step++) {
  console.log(`Bucle for en ${step} iteración`);
}

//La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa.
let i = 0;
do {
  i += 1;
  console.log(`Bucle do while en ${i} iteración`);
} while (i < 1);

/*Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true.*/
let n = 0;
let x = 0;
while (n < 3) {
  ++n;
  console.log(`Bucle while en ${n} iteración`);
}
