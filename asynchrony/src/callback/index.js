function sum(num1,num2){
  return num1 + num2;
}

function calc(val1, val2, callback){
  return callback(val1, val2);
}

console.log(calc(8, 2, sum));

function date(callback){
  console.log(new Date);
  setTimeout(() => {
    let date = new Date;
    callback(date);
  },3000);
}

function printDate(dateNow){
  console.log(dateNow);
}

date(printDate);