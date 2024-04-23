console.log("Async js!");

// setTimeOut() & setInterval()

// setTimeout(() => {
//   console.log("Dentro de setTimeout");
// }, 3000);

// console.log("Fuera de setTimeout");

// setInterval(() => {
//   console.log("Dentro de setInterval");
// }, 100)

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter++;
//   console.log(counter);

//   if (counter >= 10) {
//     clearInterval(intervalId);
//   }
// }, 1000)

// console.log("Interval Id: ", intervalId);

// JavaScript asíncrono: callbacks

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

// function getDirections(step, cb, errorCb) {
//   setTimeout(() => {

//     console.log(directions[step]);

//     if(!directions[step]) errorCb("Ha habido un error");
//     else cb();

//   }, 500);
// }

// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         console.log("Has llegado");
//       }, (errorMsg) => {console.log(errorMsg)})
//     }, (errorMsg) => {console.log(errorMsg)})
//   }, (errorMsg) => {console.log(errorMsg)})
// }, (errorMsg) => {console.log(errorMsg)})

// JavaScript asíncrono: Promesas

function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(directions[step]);

      if (!directions[step]) reject("Ha habido un error");
      else resolve();
    }, 500);
  });
}

// Sintaxis .then

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("Has llegado"))
//   .catch((errorMsg) => {console.log(errorMsg)})
//   .finally(() => console.log("Hemos terminado"))

// Sintaxis async/await

// async function executeDirections() {
//   try {
//     await obtainDirections(0);
//     await obtainDirections(1);
//     await obtainDirections(2);
//     await obtainDirections(3);

//     console.log("Has llegado");
//   } catch(errorMsg) {
//     console.log(errorMsg);
//   }
// }

// executeDirections();

// fetch()

// fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => response.json())
//   .then((data) => console.log(data))

// async function getLaunches() {
//   const response = await fetch("https://api.spacexdata.com/v4/launches");
//   const data = await response.json();
//   console.log(data);
// }

// getLaunches();

const limit = 10;
let data;

fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => response.json())
  .then((jsonResponse) => {
    data = jsonResponse;

    console.log(data);
    const launchesToDisplay = data.slice(0, limit);

    launchesToDisplay.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement("img");

      imgElement.setAttribute("src", patchImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    });
  })
  .catch(() => console.log("Algo ha ido mal"));
  

// async function displayMissionPatches(limit = 0) {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     const data = await response.json();

//     console.log(data);
//     const launchesToDisplay = data.slice(0, limit);

//     launchesToDisplay.forEach((launchObj) => {
//       const patchImage = launchObj.links.patch.small;
//       const imgElement = document.createElement("img");

//       imgElement.setAttribute("src", patchImage);
//       imgElement.setAttribute("width", 200);
//       document.body.appendChild(imgElement);
//     });
//   } catch (error) {
//     // Handle error or a rejected Promise
//     console.log("Something went wrong!", error);
//   }
// }

// displayMissionPatches(100);
