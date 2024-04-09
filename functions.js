function sayHello() {
  console.log("Hola a todos");
}

sayHello();

const sayGoodbye = function () {
  console.log("Adiós");
}

sayGoodbye();


function sum(num1, num2) {
  return num1 + num2;
}

let sumResult = sum(10, 5);
console.log("Sum Result: ", sumResult);


// Arrow functions

const multiply = (num1, num2) => {
  return num1 * num2;
}

let multiplyResult = multiply(2, 10);
console.log(multiplyResult);


const sayMyName = myName => "Hola " + myName;

console.log(sayMyName("Adrián"));


// Callbacks

function f() {
  console.log("Soy la función f");
}

function caller(callback) {
  console.log("Estoy dentro de la función caller");
  callback();
}

caller(f);
caller(sayHello);


function caller2(cb, str) {
  console.log("Estoy dentro de caller 2");
  console.log(cb(str));
}

caller2(sayMyName, "Adrián");

