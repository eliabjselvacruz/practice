//Params
function newFunction(name, age, country){
  var name = name;
  var age = age;
  var country = country;
  console.log(name, age, country);
}

//Params ecmascript6
function newFunction2(name="Eliab", age=24, country="Ni"){
  console.log(name, age, country);
}

newFunction2();
newFunction2("María",30,"US");

let hello = "Hello";
let world = "World";
let epicPhrase = hello+" "+world+"!"
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

let lorem = `Empleando saltos de línea de
otra forma con ECMAScript6.`;

console.log(lorem);

let person = {
  "name": "Eiab",
  "age": 24,
  "country": "Ni"
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log(name, age, country);

let team1 = ["María", "Pedro", "Juan"];
let team2 = ["Romel", "Camila", "Ana"];

let education = [...team1, ...team2];

console.log(education);