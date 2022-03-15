const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
    ? setTimeout(() => {
      resolve('Do something Asyc')
    },3000)
    : reject(new Error('Test Error!'))
  });
}


const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
  try{
    const something = await doSomethingAsync();
    console.log(something);
  } catch(error){
    console.error(error);
  }
}

console.log('Before another function');
anotherFunction();
console.log('After another function');