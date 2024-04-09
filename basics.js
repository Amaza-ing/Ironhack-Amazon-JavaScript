console.log("Hola mundo!");

// Tipo de dato: number

let number = 10;

console.log("Mi número es: ", number);

number = 15;

console.log("Number vale ahora: ", number);

let result = number * 5;

console.log("Resultado: ", result);

console.log(2 ** 3);
console.log(7 % 2);

// number = number + 5;
number += 5;
console.log(number);

console.log(typeof number);

// Tipo de dato: string

let myString = "Esto es un string";
console.log(myString);
console.log(typeof myString);

let newString = myString + " otra cosa";
console.log(newString);

let userName = "Adrián";
let lastName = "Maza";
// lastName = lastName + " Vázquez";
lastName += " Vázquez";

let fullName = userName + " " + lastName;
console.log(fullName);

let country = "España 'Madrid'";
console.log("Tu pais es: ", country);

let address = `C/Falsa 
123, 5B ${country}`;
console.log("Tu dirección es: ", address);

console.log("Longitud de la dirección:", address.length);
console.log(address.charAt(3));
console.log(address[3]);

// Constantes const

const userAge = 30;

// userAge = 20; no podemos reasignar una constante

console.log("Age: ", userAge);

// Tipo de dato booleano

let myBoolean = true;
console.log("my boolean: ", myBoolean);

console.log(10 < 100);
console.log(10 <= 100);
console.log(10 > 100);
console.log(10 >= 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(!myBoolean);

let myNumber = 10;
console.log("myNumber cumple la condición:", myNumber < 100 && myNumber > 0);
console.log("myNumber cumple la condición:", myNumber < 100 || myNumber > 20);

// Tipo de dato undefined

let myName;
console.log(myName);

// Tipo de dato null

let myNull = null;
console.log(myNull);

// Condicionales

let myCondition = false;

if (myCondition) {
  console.log("La condición se cumple");
}

let myAge = 18;

if (myAge >= 18) {
  console.log("Eres mayor de edad, puedes pasar");
} else if (myAge < 0) {
  console.log("Edad inválida");
} else if (myAge === 1) {
  console.log("Sólo tienes 1 año");
} else {
  console.log("Eres menor de edad, no puedes pasar");
}

let str = "";
let num = 0;
let bool = false;
let undef;
let nullVar = null;

if (nullVar) {
  console.log("La condición es truthy");
} else {
  console.log("La condición es falsy");
}

// switch case
let weekDay = 1;

switch (weekDay) {
  case 1:
    console.log("Es lunes");
    break;

  case 2:
    console.log("Es martes");
    break;

  case 3:
    console.log("Es miércoles");
    break;

  default:

    break;
}


// bucle while

let counter = 1;

while (counter <= 10) {
  console.log("Counter: ", counter);
  counter++;
}


// bucle do while

counter = 10

do {
  console.log("Counter: ", counter);
  counter--;
} while (counter >= 0);


// bucle for

for (let i = 0; i < 5; i++) {
  
  if (i === 3) {
    continue;
  }
  
  console.log("i: ", i);
  // console.log(address[i]);
}

let email = "email@example.com";

for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    break;
  }
  console.log(email[i]);
}

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// bucle for of

for (let character of email) {
  console.log(character);
}


// Objetos

let movie = {
  title: "El Señor de los Anillos",
  duration: 220,
  isGood: true,
  actors: {
    main: "Paco",
    Secondary: "Manolo"
  }
}

console.log(movie);
movie.title = "Star Wars";
console.log("El título de la película es: ", movie.title);
console.log(movie.actors.main);

movie.director = "George Lucas";
console.log(movie);


// let a = 5;
// let b = a;
// console.log("a:", a, "b:", b);

// b = 10;
// console.log("b:", b);
// console.log("a:", a);

// let o1 = {
//   a: 1
// }

// let o2 = o1;

// console.log(o1, o2);

// o2.a = 100;

// console.log(o2);
// console.log(o1);


// Funciones

function sayHello() {
  console.log("Hola!");
}

sayHello();

function sayMyName(name) {
  console.log(name);
}

sayMyName("Adrián");
sayMyName("María");


function sum(num1, num2) {
  return num1 + num2;
}

let sumResult = sum(5, 3);
console.log(sumResult);



function seeMovie() {
  console.log("Película ejecutándose");
}

function exit() {
  console.log("Saliendo de la página...");
}



let ageVar = 10;

if (ageVar >= 18) {
  console.log("Eres mayor de edad");
  seeMovie();
} else {
  console.log("Eres menor de edad");
  exit();
}