let array = [1,2,3,[1,2,3,[1,2,3]]]

console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap((value) => [value * 2]));

let hello = "     Hello world!           ";

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//Definición de bloque try-catch
try {
  //Definición de variables
  let a, b, c;
  a = 1;
  b = 0;
  c = a / b;
  //Si al calcular el valor de c el resultado es "Infinity"
  //Arrojamos un error al bloque Catch con throw new Error("");
  //Lo que ubiquemos entre las comillas del constructor Error
  //será recibido por el bloque catch y lo imprimirá en
  //consola junto a otra información.
  if(c == "Infinity"){
    throw new Error("¡No deberías dividir entre cero (0)!")
  } else {
    //Si al calcular la suma de a + b obtenemos un número
    //lo mandamos a imprimir en la consola.
    console.log(c)
  }
} catch(error) {
  //Mandamos a imprimir en consola el error arrojado desde el try.
  console.log(error);
}

let entries = [["name", "Eliab"],["Age",24]];

console.log(Object.fromEntries(entries));

let mySymbol = `This is my symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);