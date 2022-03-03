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
