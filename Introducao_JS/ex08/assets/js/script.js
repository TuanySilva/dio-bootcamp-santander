/*
ECMAScript Error e DOMException

ECMAScript Error

Composto por: 
- Mensagem
- Nome
- Linha
- Call Stack

DOMException

Erros referentes a sua árvore de estrutura de elementos dentro de uma página da Web.


---Tratando Erros---

function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verifiquePlaindromo('cat');


---Try...catch---

function tryCatExemplo(string) {
    try {
        verificaPlaindromo(string)
    }
    catch(e) {
        console.log(e)
    }
}

tryCatchExemplo('');

---Finally---

function tryCatExemplo(string) {
    try {
        verificaPlaindromo(string)
    }
    catch(e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');


---Criando erros---

new Error(message, fileName, lineNumber)

// todos os parâmetros são opcionais

const MeuErro = new Erro('Mensagem inválida');

throw MeuErro;


*/

function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof arr !== 'number') throw new TypeError('Array precisa ser do tipo number');

        if(arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else  if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else  if(e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray());