//Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();

//Triángulo
console.group("Triángulo");
const lado1 = 6;
const lado2 = 6;
const baseT = 4;
const alturaT = 5.5;

console.log(`Los lados del triángulo miden : ${lado1}cm ${lado2}cm ${baseT}cm`);

const perimetroTriangulo = lado1+lado2+baseT;
console.log("El perímetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseT*alturaT)/2;
console.log("El área del triangulo mide: " + areaTriangulo + "cm2");
console.groupEnd();

console.group("Círculo");
const radio = 4;
const diametro = radio*2;
const PI = Math.PI;

const perimetroCirculo = diametro * PI;
const areaCiruclo = (radio*radio)*PI;

console.log("El radio del círculo mide: " + radio+ "cm");
console.log("El perimetro del círculo mide: " + perimetroCirculo + "cm");
console.log("El area del círculo mide: " + areaCiruclo+ "cm2");

console.groupEnd();