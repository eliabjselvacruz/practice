
//Cuadrado 
var perimetroAreaCuadrado = () => {
  let ladoCuadrado = document.getElementById("lado").value;
  alert(`Perímetro: ${(ladoCuadrado*4)}cm \n Área: ${(ladoCuadrado*ladoCuadrado)}cm2`);
  document.getElementById("lado").value = "";
}
 

//Triángulo
var perimetroAreaTriangulo = () => {
  let l1 = document.getElementById("lado1").value;
  let l2 = document.getElementById("lado2").value;
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  alert(`Perímetro: ${(Number(l1)+Number(l2)+Number(base))}cm \n Área: ${((base*altura)/2)}cm2`);
  document.getElementById("lado1").value = "";
  document.getElementById("lado2").value = "";
  document.getElementById("base").value = "";
  document.getElementById("altura").value = "";
}

//Círculo
const PI = Math.PI;

var perimetroAreaCirculo = () => {
  let radio = document.getElementById("radio").value;
  let diametro = radio*2;
  alert(`Perímetro: ${(diametro*PI)}cm \n Área: ${((radio*radio)*PI)}cm2`);
  document.getElementById("radio").value = "";
}
