// Igualdad (==): 
let resultadoIgualdad = 10 == "10"; 
console.log(resultadoIgualdad);

// Desigualdad (!=):
let resultadoDesigualdad = 15 != "15";
console.log(resultadoDesigualdad);

// Menor que (<): 
let resultadoMenorQue = 8 < 12; 
console.log(resultadoMenorQue);

// Mayor que (>): 
let resultadoMayorQue = 20 > 10; 
console.log(resultadoMayorQue);

// Menor o igual que (<=):
let resultadoMenorOIgualQue = 15 <= 15; // Output: true
console.log(resultadoMenorOIgualQue);

// Mayor o igual que (>=):
let resultadoMayorOIgualQue = 22 >= 20; // Output: true
console.log(resultadoMayorOIgualQue);

// Validar la edad de un usuario:
let edadUsuario = 18;
let edadMinima = 18;

if (edadUsuario >= edadMinima) {
    console.log("El usuario es mayor o igual a la edad minima");
} else {
    console.log("El usuario no cumple con la edad minima");
}

// Verificar si un número es par o impar:
let numero =15; 

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar")
}

// Determinar si un estudiante ha aprobado un curso:
let notaExamen = 75;
let notaMinimaAprobacion = 70;
if (notaExamen >= notaMinimaAprobacion) {
console.log("El estudiante ha aprobado el curso");
} else {
console.log("El estudiante no ha aprobado el curso");
}
