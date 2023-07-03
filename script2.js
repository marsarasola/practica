///escribir una función getSquare()
//que guarde en una variable el cuadrado de un número que reciba 
//por parametro
let num = 5;
const EXPONENT = 2;

function getSquare(variable){
    let cuadrado = Math.pow(variable, EXPONENT);
    return cuadrado;
}

console.log(getSquare(num));