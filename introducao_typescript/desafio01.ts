/*
Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
meployee.code = 10;
employee.name = "John";

*/

const employee = {
    codigo: 10,
    nome: 'João'
};

// Resposta 2
const employee2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Respostas 3 e 4
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}

