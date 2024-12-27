document.getElementById("viewOrder").addEventListener("click", function(){
// Value define el valor que se envía al servidor al hacer click en un botón.

let number1 = Number(document.getElementById("number1").value);
let number2 = Number(document.getElementById("number2").value);
let number3 = Number(document.getElementById("number3").value);

// innerText es para mostrar lo insertado dentro del DOM:)

document.getElementById("numbers").innerText = "Your numbers are: " + number1 + ", " + number2 + ", " + number3;

// Una forma simplificada de hacerlo (lo entendí más fácil así)
// Los "..." se utilizan para no modificar el array original.

document.getElementById("viewNewOrder").addEventListener("click", function(){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let number3 = Number(document.getElementById("number3").value);

    const array1 = [number1, number2, number3];

    let highest = Math.max(...array1);
    let lowest = Math.min(...array1);
    
    // Find() : Encuentra el primer número del array que cumple la función de la prueba proporcionada, en este caso, un elemento menor a higher pero mayor a lower!
    // let middle = array1.find((element) => element < highest, (element) => element > lowest); NO FUNCIONA SIEMPRE
    // !== Compara valores y tipos y devuelve true si son diferentes (es como una mezcla entre una igualdad y una negación)
    // Combina condiciones, y devuelve true si estas se cumplen.

    // Funciona, pero el número del medio lo caracteriza como undefined: let middle = array1.find(element => element !== highest && element !== lowest);
    // Se puede ordenar el array de menor a mayor y el número de la posición [1] es middle

    let newArray = [...array1].sort((a, b) => a - b);
    let middle = newArray[1];

    document.getElementById("newOrder").innerText = "Highest number: " + highest + ", Middle number: " + middle + ", Lowest number: " + lowest;
});

// Ordenar los números de mayor a menor
// Sort() : Ordena el array y compara los elementos a través de una resta.

document.getElementById("highest").addEventListener("click", function() {
    const array1 = [
        Number(document.getElementById("number1").value), // Aquí son "," porque es un array, entonces ella separa los elementos
        Number(document.getElementById("number2").value), // Aquí también jeje
        Number(document.getElementById("number3").value)
    ];
    
    let descending = [...array1].sort((a, b) => b - a);
    document.getElementById("pHighest").innerText = descending.join(', ');
});

// Ordenar los números de menor a mayor
// Join une los elementos de un array
document.getElementById("lowest").addEventListener("click", function() {
    const array1 = [
        Number(document.getElementById("number1").value),
        Number(document.getElementById("number2").value),
        Number(document.getElementById("number3").value)
    ];

    let ascending = [...array1].sort((a, b) => a - b);
    document.getElementById("pLowest").innerText = ascending.join(', ');
});

// Identificar si los números son iguales
const array1 = [number1, number2, number3];
    
if (array1[0] === array1[1] && array1[1] === array1[2]){
    alert("All of your numbers are the same");
}else if (array1[0] === array1[1]){
    alert("Two of your numbers are the same");
}else if (array1[1] === array1[2]){
    alert("Two of your numbers are the same");
}else if (array1[0] === array1[2]){
    alert("Two of your numbers are the same");    
}
});

