//Open your browser inspector
var ans = "y";
var autos = [];
 
function auto(brand, model, year){
  this.brand = brand;
  this.model = model;
  this.year = year;
}

alert("Let's register some autos!");

do {
  let brand = window.prompt('Write the brand:');
  let model = window.prompt('Write the model:');
  let year = window.prompt('Write the year:');

  let newAuto = new auto(brand, model, year);

  autos.push(newAuto);

  var ans = window.prompt('Are you want to add other auto (y/n)?');
} while(ans==="y");

console.table(autos);


