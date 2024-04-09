console.log("Arrays");

let numArray = [1, 2, 3, 4, 5, 6];

console.log(numArray);
console.log(numArray[3]);
console.log(numArray.length);

let countries = ["Spain", "Mexico", "France"];

console.log(countries);
console.log(countries[1]);

// JavaScript permite tener un array con diferentes tipos de datos
// Pero esto no es una buena práctica
// let myArray = [123, "sadfasdf", [], {}, true]

const products = [
  {
    productName: "Zapatillas",
    price: 50,
    isForSale: true
  },
  {
    productName: "Libro",
    price: 30,
    isForSale: true
  },
  {
    productName: "Videojuego",
    price: 60,
    isForSale: false
  }
]

console.log(products);
console.log(products[2]);
console.log(products.length);


// Modify array elements

console.log(numArray);

numArray.push(10);
console.log(numArray);

numArray.unshift(0);
console.log(numArray);

numArray.pop();
console.log(numArray);

numArray.shift();
console.log(numArray);

numArray.splice(2, 1, 20);
console.log(numArray);


// foreach

countries.forEach((country) => {
  console.log(country.toUpperCase());
})

products.forEach((product) => {
  console.log(product.productName, product.price);
})


// String method split()

let myStr = "Esto es una frase";

const strWords = myStr.split(" ");
console.log(strWords.length);
console.log(strWords);

let data = "Madrid, 1000000, 30";
let dataArr = data.split(", ");
console.log(dataArr);


// Array methods: map()

console.log(numArray);

const newNumArray = numArray.map((number) => {
  return number * 2;
})

console.log(newNumArray);

// Cómo podemos hacer una copia de un array con el método map()
// const newCountryArray = countries.map((country) => {
//   return country;
// })

// console.log(newCountryArray);
// newCountryArray[0] = "Italy";
// console.log(newCountryArray);
// console.log(countries);

const countriesLength = countries.map((country) => {
  return country.length;
})
console.log(countriesLength);


const productsPrice = products.map((product) => {
  return {
    name: product.productName,
    price: product.price
  }
})
console.log(productsPrice);


// Array methods: filter()

const filteredNumbers = numArray.filter((number) => {
  return number >= 4;
})
console.log(filteredNumbers);

const evenNumbers = numArray.filter((number) => {
  return number % 2 === 0
})
console.log(evenNumbers);

const filteredCountries = countries.filter((country) => {
  return country.charAt(0) === 'S';
})
console.log(filteredCountries);

const filteredProducts = products.filter((product) => {
  return product.isForSale;
})
console.log(filteredProducts);

const expensiveProducts = products.filter((product) => {
  return product.price >= 60;
})
console.log(expensiveProducts);


// Array methods: reduce()

console.log(numArray);

let numbersResult = numArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
console.log(numbersResult);

const numbers = [1, 2, 3];
console.log(numbers);

const multiplicationResult = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1)
console.log(multiplicationResult);


console.log(countries);

const countriesStr = countries.reduce((acc, curr) => {
  return acc + curr + " ";
}, "")
console.log(countriesStr);


console.log(products);

const totalPrice = products.reduce((acc, curr) => {
  return curr.price + acc;
}, 0)
console.log(totalPrice);


// Array methods: sort()

const nums = [1, 20, 13, 4, 125];
console.log(nums);

// sort() ordenará por defecto los elementos de forma alfabética
// nums.sort();
// console.log(nums);

nums.sort((a, b) => {
  return a - b;
})
console.log(nums);


const names = ["Adrián", "Ana", "Juan"];

names.sort((a, b) => {
  return b.length - a.length;
})
console.log(names);


products.sort((a, b) => {
  return b.price - a.price;
})
console.log(products);


// Array methods: reverse()

console.log(nums);

nums.reverse();
console.log(nums);

