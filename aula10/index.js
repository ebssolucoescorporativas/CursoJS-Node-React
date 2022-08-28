/**
 * Atitméticos
 * + Adição e concatenação
 * - * / 
 * ** Potenciação
 * % Resto de uma divisao
 * 
 * Procedência
 * ()
 * **
 * * / %
 * + -
 * 
 * Incremento ++
 * Decremento --
 *
 * Operadores de Atribuição
 * **=
 * *=
 * ++=
 * --=
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log('num1 + num2:',num1 + num2);
console.log('num1 * num2:',num1 * num2);
console.log('num1 / num2:',num1 / num2);
console.log('num1 - num2:',num1 - num2);
console.log('num1 ** num2:',num1 ** num2);
console.log('num1 % num2:',num1 % num2);
console.log('num1 * num2 / num3:',num1 * num2 / num3);

let contador = 1;
++contador; //2
++contador; //3
++contador; //4
++contador; //5
console.log('Contador:',contador);

let contador2 = 10;
console.log(--contador2);
console.log(--contador2);

let contador3 = 0;
let contador4 = 2;
let contador5 = 2;
contador3 += 2;
contador3 += 2;
contador3 += 2;
contador4 *= 2;
contador4 *= 2;
contador4 *= 2;
console.log(contador3);
console.log(contador4);
contador5 **= 10;
console.log(contador5);


const num4 = 10;
//const num5 = parseInt('5.2'); // parseInt() conversão para inteiro
//const num5 = parseFloat('5.2'); // parseFloat() conversão para float
const num5 = Number('5.2'); // parseFloat() conversão para float

console.log(num4 + num5); // NaN --> Not a Number