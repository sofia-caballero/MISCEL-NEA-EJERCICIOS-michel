console.log("7. Escribir un algoritmo que determine si un año es bisiesto o no ");


console.log("ingrese un año:");
let año = 2008;
console.log( año);



if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0)  {
    
    console.log( "el año es bisiesto");
} else {
    console.log( "el año no es bisiesto");
}
