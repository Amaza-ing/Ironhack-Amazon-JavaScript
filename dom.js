console.log("DOM!");

// Seleccionar elementos HTML

let h1ById = document.getElementById("title");
console.log(h1ById);

let h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements);
console.log(h1Elements[0]);

let pElements = document.getElementsByTagName("p");
console.log(pElements);
console.log(pElements[1]);

let containerElements = document.getElementsByClassName("container");
console.log(containerElements);
console.log(containerElements[0]);

let textElements = document.getElementsByClassName("text");
console.log(textElements);


let titleElem = document.querySelector("#title");
console.log(titleElem);

let h1Elem = document.querySelector("h1");
console.log(h1Elem);

let pElem = document.querySelector("p");
console.log("p -->", pElem);

let pElems = document.querySelectorAll("p");
console.log(pElems);
console.log(pElems[1]);

let textElems = document.querySelectorAll(".text");
console.log(textElems);


// Modificar elementos HTML


console.log(h1Elem.innerHTML);
h1Elem.innerHTML = "Adios!";

h1Elem.style.backgroundColor = "red";

console.log(h1Elem.getAttribute("class"));
h1Elem.setAttribute("id", "patata");

// Si seteamos el atributo class a disabled, aplicaremos los estilos CSS de .disabled
// h1Elem.setAttribute("class", "disabled");


// Crear un elemento HTML

let h2El = document.createElement("h2");
h2El.innerHTML = "h2 creado por js";
console.log(h2El);

containerElements[0].appendChild(h2El);


let body = document.querySelector("body");
console.log(body);

let section = document.createElement("section");

let h3 = document.createElement("h3");
h3.innerHTML = "Soy un h3";
section.appendChild(h3);

body.appendChild(section);


// Si no queremos que un elemento se interte al final tenemos que:
// Seleccionar el elemento padre -> containerElements[0]
// Localizar el elemento que irá inmediatamente después del nuevo elemento -> pElements[1]
// containerElements[0].insertBefore(h3, pElements[1]);


// Para borrar elementos podemos usar removeChild o "limpiar" el innerHTML

// body.removeChild(containerElements[0])

// console.log(containerElements[0].innerHTML);
// containerElements[0].innerHTML = "";