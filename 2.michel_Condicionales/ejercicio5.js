console.log(" Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es posible.");


console.log("Ingrese el primer número:");
let A = 8;
console.log( A);

console.log("Ingrese el segundo número:");
let B = 0;
console.log( B);

let cociente = A / B;

if (B == 0) {
    console.log("La división no es posible porque el divisor es cero.");
} else {
    console.log("El cociente entre A y B es:", cociente);
}
