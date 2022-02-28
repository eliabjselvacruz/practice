const salaryNics = nicaragua.map((p) => {
  return p.salary;
});

const salaryNicsSorted = salaryNics.sort((a, b) => a - b);

var isPair = () => {
  if(salaryNicsSorted.length % 2 === 0){
    return true;
  } else {
    return false;
  }
}

var divide = () => {return parseInt(salaryNicsSorted.length / 2)};

var calculateSumPair = () => {
  return (salaryNicsSorted[divide()-1] + salaryNicsSorted[divide()]) / 2;
}

var calculateMedian = () => {
  if(isPair()){
    console.log("La mediana es: "+ calculateSumPair());
  } else {
    console.log("La mediana es: "+ (salaryNicsSorted[divide()]));
  }
}

console.log(salaryNicsSorted);
calculateMedian(); 