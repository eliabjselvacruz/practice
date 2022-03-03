const data ={
  frontend:'Eliab',
  backend: 'Ana',
  ux: 'Camilo'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


const data ={
  frontend:'Eliab',
  backend: 'Ana',
  ux: 'Camilo'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string ='hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'*'));

const helloWorl = () => {
  return new Promise((resolve, reject) => {
    true
    ? setTimeout(() => {resolve('Hello')},3000)
    : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorl();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorl();
    console.log(hello);
  } catch(error) {
    console.log(error);
  }
}

anotherFunction();