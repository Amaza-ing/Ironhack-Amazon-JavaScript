console.log("Repaso!");

let myStr = "asdfasdfasdf";
console.log(myStr, typeof myStr);

let myNum = 10;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(myNum, myBoolean, myUndefined, myNull);

myStr = "otro string";

// const myConst = 123123;
// myConst = 9999;

if (myNum >= 0) {
  console.log("myNum es un número positivo");
} else {
  console.log("myNum es un número negativo");
}


const book = {
  title: "1984",
  author: "George Orwell",
  pages: 100
}

console.log(book);
console.log(book.title);


const students = ["María", "Ana", "Paco", "Jose"];

console.log(students);
console.log(students[1]);

const upperStudents = students.map((student) => {
  return student.toUpperCase();
})
console.log(upperStudents);


function sayHello() {
  console.log("Hola!");
}

sayHello();

const sayBye = function() {
  console.log("Bye!");
}

sayBye();

const sayMyName = (name) => {
  console.log("Your name is: ", name);
}

sayMyName("Adrián");

// Tenemos que saber como hacer una "deep copy" (copia profunda) de arrays y objetos
// .toSorted() -> método que funciona igual que el .sort() pero no modifica el array original