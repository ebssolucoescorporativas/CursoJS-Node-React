/**
 *  Eduardo Bueno tem 49 anos, pesa 100kg
 *  tem 1.71 de altura e seu IMC é de xx.xxxxxxx
 *  Eduardo nasceu em 1973
 *  
 */

const nome = 'Eduardo';
const sobrenome = 'Bueno';
const idade = 49;
const peso = 100;
const date = new Date();
const alturaEmM = 1.71
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = date.getFullYear() - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
