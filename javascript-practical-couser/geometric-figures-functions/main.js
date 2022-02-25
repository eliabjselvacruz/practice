
//Cuadrado

var perimetroCuadrado = (ladoCuadrado) => {
 console.log("El perímetro del cuadrado mide: " + (ladoCuadrado*4) + "cm");
}

var areaCuadrado = (ladoCuadrado) => {
  console.log("El perímetro del cuadrado mide: " + (ladoCuadrado*ladoCuadrado) + "cm2");
}

//Triángulo
var imprimirLadosTriangulo = (l1, l2, baseT) => {
  console.log(`Los lados del triángulo miden : ${l1}cm ${l2}cm ${baseT}cm`);
}

var perimetroTriangulo = (l1,l2,baseT) => {
  console.log("El perímetro del triangulo mide: " + (l1+l2+baseT) + "cm");
}

var areaTriangulo = (baseT, alturaT) => {
  console.log("El área del triangulo mide: " + ((baseT*alturaT)/2) + "cm2");
}

//Círculo
const PI = Math.PI;

var imprimirRadioCirculo = (radio) => {
  console.log("El radio del círculo mide: " + radio+ "cm");
}

var perimetroCirculo = (radio) => {
  let diametro = radio*2;
  console.log("El perimetro del círculo mide: " + (diametro*PI) + "cm");
}

var areaCirculo = (radio) => {
  console.log("El area del círculo mide: " + ((radio*radio)*PI) + "cm2");
}


console.group("Cuadrado");
perimetroCuadrado(5);
areaCuadrado(5);
console.groupEnd();

console.group("Triángulo");
imprimirLadosTriangulo(6,6,4);
perimetroTriangulo(6,6,4);
areaTriangulo(4,5.5);
console.groupEnd();

console.group("Círculo");
perimetroCirculo(4);
areaCirculo(4);
console.groupEnd();

