//Estrutura e Função anônima

//Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

/*function nome(parametros) {
    //instruções
    return; //valor de retorno
}

Quando invocamos o return, a função para de ser executada.

---Função anônima---
- Uma variávl pode armazenar uma função

const soma = function(a, b) {
    return a+ b; 
}

soma(1, 2) //3
soma(5, 4) //9

---Função autoinvocável IIFE(Immediately invoked function expression)---
- Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

(
function() {
    let name = "Digital Innovation One"
    return name; 
}();
)

Também pode ser utilizada com parâmetros ou armazenada em uma variável.

(
    function(a, b) {
        return a + b;
    }
)(1, 2);

//3

Ou

const soma3 = (
    function() {
        return a + b;
    }
)(1, 2);

console.log(soma3) //3

---Callbacks---

- Uma função passada como argumento para outra.
- Utilizando callbacks, você tem maior controle da ordem de chamados.

const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma; // 3


---Parâmetros---

Valores Padrão 

Pré-ES2015:

function exponencial(array, num) {
    if(num === undefined) {
        num = 1;
    }
    
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}

exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]


Pós-ES2015:

function exponencial(array, num=1) {
    const result = [];

    for(let i = 0; i< array.length; i++) {
        result.push(array[i] ** num);

        return result;
    }
}

exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4] 4)
// [1, 8, 27, 64]

---Argumentos---

Um array com toso os parâmetros  passados quando a funcção foi invocada.

function findMax() {
    let max = -Infinity;

    for(let i= 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = argumetns[i];
        }
    }

    return max;
}

findMax(1, 2, 3, 6, 90, 1)
// 90


---Arrays e Objetos---

Spread: Uma forma de lidar separadamente com elementos.

O que era parte de um array se torna um elemento independente.

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


Rest: Combina os argumentos em um array

O que era um elemento independente se torna parte de um array.

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho()  //0
confereTamanho(1, 2)  //2
confereTamanho(3, 4, 5)  //3

Object Destructuring

Entre chaves{}, podemos filtrar apenas os dados que nos interessam em um objeto.

const user = {
    id: 42,
    displayNmae: 'jdoe',
    fullName: {
        firstName: 'John',
        lasName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName:last}}) {
    return `${first} ${last}`;
}

userId(user)
// 42

geFullName(user)
//John Doe

---Lops---

if/else

function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

numeroPositvo(2);
// true

numeroPositvo(-9);
// false

Ou

function numeroPOsitivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

Ou ainda

function numeroPOsitivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    } 

    return true;
}

Switch/Case

- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de uma valor "default"
- Ideal para quando se precisa comparar muitos valores

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2: 
            return "gato";
        case 3:
            return "pássaro";
        case 4: 
            return "peixe";
    }
}

getAnimal(1) //cão
getAnimal(2) // gato
getAnimal(4) //peixe


---For e While--- 

loop dentro de elementos iteráveis(arrays, strings).

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i< arr.length; i++) {
        multiplicados.push(arr[i] *2);
    }

    return multiplicados;
}

const meus Numeros = [2, 33, 456, 356, 40];

multiplicadosPorDpos(meusNumeros);

// [4, 66, 912, 712, 80]

function forInEcemplo(obj) {
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "João";
    idade: "20";
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

// nome
// idade 
// cidade

function forInEcemplo(obj) {
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João";
    idade: "20";
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

// João
// 20 
// Salvador


For... of

- Loop entre estruturas iteráveis(arrays, strings).

function logLetras(palavras) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLteras(palavra);
// a
// b 
// a 
// c 
// a 
// x 
// i


While 

- Executa intruções até que a condição se torne falsa.

function exemploWhile() {
    let num=0; 

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

ecemploWhile()
// 0 
// 1  
// 2 
// 3 
// 4 
// 5

Do...While

- Executa instruções até que a condição se torne falsa.
- Porém a primeira execução sempre ocorre.

function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } Whilw(num <= 5)
}


exemploDoWhile()

// 0
// 1
// 2
// 3
// 4
// 5

Ou

function exemploDoWhile() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <=5);
}

ExemploDoWhile()
// 6


---This---

- A palavra reservada this é uma referência de contexto.
- No cemplo, this refere-se ao objeto pessoa.

const pessoa = {
    firstNmae: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + "" + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName();
// "André Soares"

pessoa.getId();
// 1

Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

Contexto               | Referência
Em um objeto (método)  | Próprio objeto dono do método
Sozinha                | Obejeto global (em navegadores, window)
Função                 | Obejto global
Evento                 | Elemento que recebeu o evento


Manipulando seu valor

- Call 

const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);

- É possível passar parâmetros para essa função separando-os por v´rigulas.

const myobj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
// 12


- Apply

const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Godi',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pessoa);

É possível passar parâmetros para essa função dentro de um array.

const myobj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]);
// 12


- Bind

Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
// Bruno


---Arrow Functions---

Sintaxe

const helloWorld = function() {
    return "Hello World";
}

Ou

const helloWorld = () => {
    return "Hello World";
}

Ou

const helloWorld = () => "Hello World";


- Caso exista apenas uma linha, pode dispensar as chaves e o return.
- Caso exista apenas um aparâmetro, pode dispensar os parênteses.

Arrow function NÃO faz hoisting!

soma(2, 4);

const soma= (a, b) => a + b;


Outras restrições

- "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
- Não existe o objeto "arguments";
- O contrutur(ex: new MeuObjeto()) também não pode ser utilizado.


Atividade prática

Atividade 1: Alunos aprovados

1 - Crie uma função que recebe o array alunos e um número que irá representar a média final;
2 - Percorra  o array e popule um novo array auxiliar paenas com os alnos cujas nosas são maiores ou iguais à média final;
3 - Utilize a técnica "Object destructuring" para manipular as propriedades desejadas de cada aluno.


Atividade 2: This

Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para está atividade!

function calculaIdade(anos) {
    return `Daqui a $(anos) abos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

*/
/* 

---Resolução atividade 1---

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Rayane',
        nota: 10,
        turma: '1B',
    },
    {
        nome: 'Tuany',
        nota: 9.5,
        turma: '2C',
    },
    {
        nome: 'Talyta',
        nota: 5,
        turma: '2C',
    },
];


function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
*/

function calculaIdade(anos) {
    return `Daqui a $(anos) abos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Rayane",
    idade: 26,
};

const pessoa2 = {
    nome: "Tuany",
    idade: 25,
};

const animal = {
    nome: "Billy",
    raca: "Bulldog frances",
    idade: 3,
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa1, [30]));
