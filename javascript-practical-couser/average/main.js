var average = 0;

const list = [500,200,900,200,300,400,500,600,700];
console.log(list);

list.sort(function(a, b) {
  return a - b;
});

console.log(list);

var isPair = () => {
  if(list.length % 2 === 0){
    return true;
  } else {
    return false;
  }
}
var divide = () => {return parseInt(list.length / 2)};

var calculateAverage = () => {
  let sum = list.reduce((acum, item) => {
    return acum + item;
  });
  average = sum / list.length;
  console.log("El promedio es: "+average);
}

var calculateSumPair = () => {
  return (list[divide()-1] + list[divide()]) / 2;
}

var calculateMedian = () => {
  if(isPair()){
    console.log("La mediana es: "+ calculateSumPair());
  } else {
    console.log("La mediana es: "+ (list[divide()]));
  }
}

calculateAverage();
calculateMedian();