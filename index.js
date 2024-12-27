const prompt = require("prompt-sync")();

let number1 = Number(prompt("Please enter the first number: "));
let number2 = Number(prompt("Please enter the second number: "));
let number3 = Number(prompt("Please enter the third number: "));

console.log("Your numbers are: ");
console.log("First number: " + number1);
console.log("Second number: " + number2);
console.log("Third number: " + number3);

// Determinar numero mayor, menor y del medio
const array1 = [(number1), (number2), (number3)];

// Una forma simplificada de hacerlo (lo entendí más fácil así)
// Los "..." se utilizan para no modificar el array original.

let highest = Math.max(...array1); // Encuentra el número máximo en un array
let lowest = Math.min(...array1); // Encuentra el número mínimo en un array

    // Find() : Encuentra el primer número del array que cumple la función de la prueba proporcionada, en este caso, un elemento menor a higher pero mayor a lower!
    // let middle = array1.find((element) => element < highest, (element) => element > lowest); NO FUNCIONA SIEMPRE
    // !== Compara valores y tipos y devuelve true si son diferentes (es como una mezcla entre una igualdad y una negación)
    // Combina condiciones, y devuelve true si estas se cumplen.

    // Funciona, pero el número del medio lo caracteriza como undefined: let middle = array1.find(element => element !== highest && element !== lowest);
    // Se puede ordenar el array de menor a mayor y el número de la posición [1] es middle

    let newArray = [...array1].sort((a, b) => a - b);
    let middle = newArray[1];

console.log("Highest number: " + highest);
console.log("Middle number: " + middle);
console.log("Lowest number: " + lowest);

// Ordenar los números de mayor a menor
// Sort() : Ordena el array y compara los elementos a través de una resta.
let descending = [...array1].sort((a, b) => b - a);

// Ordenar los números de menor a mayor
let ascending = [...array1].sort((a, b) => a - b);

console.log("Your order from highest to lowest number: " + descending);
console.log("Your order from lowest to highest number: " + ascending);

// Identificar si los números son iguales
if (array1[0] === array1[1] && array1[1] === array1[2]){
    console.log("All of your numbers are the same");
}else if (array1[0] === array1[1]){
    console.log("Two of your numbers are the same");
}else if (array1[1] === array1[2]){
    console.log("Two of your numbers are the same");
}else if (array1[0] === array1[2]){
    console.log("Two of your numbers are the same");    
}
