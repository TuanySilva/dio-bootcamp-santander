/*

---MAP---

 - Cria um novo array
 - Não modifica o array original
 - Realiza as operaões em ordem

Sintaxe

array.map(callback, thisArgs)

ou

callback(item, index, array)

Callback: função a ser executada em cada elemento
thisArgs(opcional): valor de 'this' dentro da função de callback


Map vs forEach

 - Valor de retorno
 - Considere se o array auxiliar será necessário


// Usando map

const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); //retorno: [2, 4, 6, 8, 10];

// Usando forEach

const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); //retorno: undefined


---Filter---

 - Cria um novo array
 - Não modifica o array original

Sintaxe

array.filter(callback, thisArgs)

Callback: função a ser executada em cada elemento.
thisArgs(opcional): valor de 'this' dentro da função callback.

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((frutas) => fruta.inludes('maçã'))

// retorno: ['maçã fuji', 'maçã verde'];


---Reduce---

 - Executa uma função em todos os elementos do array, retornando um valor único.

 Sintaxe

 array.reduce(callbackFn, initialValue)

 Callback: função a ser executada a partir do acumulador
 InitialValue: valor sobre o qual o retorno final irá atuar 

 const callbackFn = function(accumalator, curretnValue, index, array) {
    // do something
 }

 array.reduce(callback, initialValue)

 Accumulator/prevValue: acumulador de todas as chamadas de callbackFn
 currentValeu: elemento atual sendo acessado pela função


 --- Atividades Práticas---

Map 
 - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um onjeto criado por você, e depois sem ele.

 Filter
  - Filtre e retorne todos os números pares de um array.

Reduce
 1 - Some todos os números de um array;
 2 - Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule o saldo final após subtrair todos os preços da lista enviada.



 Atividade 1 

const maca = {
    value:  2,
}

const laranja = {
    value = 3,
}

 function mapComThis(arr, thisArgs){
    return arr.map(function(item){
        return item * this.value;
    }, thisArgs)
 }

const nums = [1, 2];

console.log( 'this -> maçã',mapComThis(nums, maca));

console.log( 'this -> laranja',mapComThis(nums, laranja));


OU

function mapSemThis(arr) {
    arr.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));


Atividade 2 

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 3, 54, 67, 42, 7, 13];

console.log(filtraPares(meuArray));


Atividade 3 

function somaNumeros(arr) {
    arr.reduce(function(prev, current)) {
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const arr [1, 2];

console.log(somaNumeros(arr));



const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },

];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

*/