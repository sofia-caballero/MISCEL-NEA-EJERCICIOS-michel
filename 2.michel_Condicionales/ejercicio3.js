console.log(" 3.Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos");
console.log("ingresa un numero");
let num1=2;
console.log(num1);
console.log("ingresa el segundo  numero");
let num2=4;
console.log(num2);
console.log("ingresa el terser numero");
let num3=0;
console.log(num3);

//proceso

if (num1 >= num2 && num1 >= num3) {
    mayor = "El primer número es el mayor";
} else if (num2 >= num1 && num2 >= num3) {
    mayor = "El segundo número es el mayor";
} else {
    mayor = "El tercer número es el mayor";
}

if (num1 <= num2 && num1 <= num3) {
    menor = "El primer número es el menor";
} else if (num2 <= num1 && num2 <= num3) {
    menor = "El segundo número es el menor";
} else {
    menor = "El tercer número es el menor";
}

//salida
console.log(mayor);
console.log(menor);