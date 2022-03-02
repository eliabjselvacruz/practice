const fruits = () => {
  if(true){
    var fruit1 = "Apple";
    let fruit2 =  "Banana";
    const fruit3 = "Kiwi";
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();

let a = 1;
{
  let a = 2;
  console.log(a);
}
console.log(a);

var b = 1;
{
  var b = 2;
  console.log(b);
}
console.log(b);

const anotherFunction = () => {
  for(let i=0; i<10; i++){
    setTimeout(() => {
      console.log(i);
    },1000);
  };
}

anotherFunction();