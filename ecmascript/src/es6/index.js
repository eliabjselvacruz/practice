import myHello from "./module";

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


let name = "Eliab";
let age = 24;

//ECMAScrip5
let obj = {name: name, age: age};

//ECMAScrip6
let obj2 = {name, age};

console.log(obj);
console.log(obj2);

const names = [{name:"Ana",age:22},{name:"Lila",age:26}];

let list = names.map((item) => {
  console.log(item.name);
});

const square = num => num*num;


//Promise
const helloPromise = () => {
  return new Promise((resolve, reject) =>{
    true ? resolve("Hi!") : reject("Ups!");
  });
}

helloPromise()
  .then((response)=>{console.log(response)})
  .then(()=>{console.log("Other then")})
  .catch((error)=>{console.log(error)});


class calculator {
  constructor (){
    this.valA = 0;
    this.valB = 0;
  }
  sum(a,b){
    this.valA = a;
    this.valB = b;
    return this.valA+this.valB;
  }
}

const calc = new calculator();
console.log(calc.sum(4,4));

myHello();

//Generator
function* helloWorld(){
  if(true){ yield "Hello "}
  if(true){ yield "World "}
}

const gHello = helloWorld();
console.log(gHello.next().value);
console.log(gHello.next().value);

