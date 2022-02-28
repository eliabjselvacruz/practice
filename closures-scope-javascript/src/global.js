//Las variables creadas con var se pueden reasignar.
var hello = "Hello";
var hello = "Hello +";

//Las variables creadas con let y const no se pueden reasignar
let world = "Hello World"
let world = "Hello World +"
const helloWorld = "Hello World!";

//Arrow function
const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

//Ejecución de arrow function
anotherFunction();

const helloWorldFunction = () => {
  //Definición de variable sin especificador
  //Esto es una mala práctica
  globalVar = "I'm global!";
}

helloWorldFunction();
console.log(globalVar);

const anotherFunction2 = () => {
  //Una doble asignación de variables crea una variable local
  //En este caso localVar no se puede usar fuera de esta función
  var localVar = globalVar = "I'm a global var!";
}

anotherFunction2();
console.log(localVar);
console.log(globalVar);


