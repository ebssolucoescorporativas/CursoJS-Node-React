// Tipos Primitivos: string, number, null, undefined, boolean, symbol

const nome = 'Eduardo'; // string
const nome1 = "Eduardo"; // string
const nome2 = `Eduardo`; // string
const num1 = 10; // nunber
const num2 = 10.52; // number
let nomeAluno; // undefined --> não aponta para lugar nenhum da memória
const sobrenomeAluno = null; // nulo --> não aponta para lugar nenhum da memória
const aprovado = true; // Boolean = true ou false (lógico)

console.log(typeof aprovado, aprovado);

let a = 2;
let b = a;

console.log(a,b);
a = 3;

console.log(a,b);