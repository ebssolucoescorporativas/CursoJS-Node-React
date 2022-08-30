const pessoa1 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Eduardo','Bueno', 49);
// const pessoa2 = criaPessoa('Maria','Bonita', 67);
// const pessoa3 = criaPessoa('Carlos','Silva', 34);

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);
// console.log(pessoa3.nome);
// console.log(pessoa3.sobrenome);
// console.log(pessoa3.idade);


// const pessoa1 = {
//     nome: 'Eduardo',
//     sobrenome: 'Bueno',
//     idade: 49
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);