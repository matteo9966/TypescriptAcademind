"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (a) => { console.log(a); });
function printResult(num) {
    console.log("risultato: ", num);
}
// in typescript, se definisco un puntatore a una funzione posso definire cosa mi
// aspetto che sia quella funzione
let combineValues; // una funzione che prende due numeri e restituisce un numero
combineValues = add;
console.log(combineValues(3, 4));
