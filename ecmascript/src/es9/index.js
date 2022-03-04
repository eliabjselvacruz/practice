//Spread Operator

const obj = {
  name: "Eliab",
  age: 24,
  country: "Nicaragua"
}

let {name, ...all} = obj;
console.log(`Name: ${name}`);
console.log(`Additional Information:`, all);

let {country, ...otherInfo} = obj;
console.log(`Country: ${country}`);
console.log(`Name and age:`, otherInfo);

const obj1 = {
  name: "Eliab",
  age: 24
}

const obj2 = {
  ...obj1,
  country: "Nicaragua"
}

console.log(obj2);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
    ? setTimeout(() => {
      resolve("Hello World!");
    },3000)
    : reject(new Error("Test Error"));
  });
}

helloWorld()
  .then((result) => {
    console.log("Result: ",result);
  })
  .catch((err) => {
    console.log("Error: ",err);
  })
  .finally(() => {
    console.log("¡Finalizó!");
  });

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(match);
console.log('Date:', year, month, day);