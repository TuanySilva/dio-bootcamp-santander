/*

O que são módulos?

Módulos são arquivos JavasScript que tem a capacidade de exportar e importar ingformações de outros
arquivos do mesmo tipo.


Algumas vantagens são:

- Organização do código;
- Compartilhamento de variáveis em escopos diferente;
- Explicita as dependências dos arquivos.


----Exportar----

export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}

Export function mostraHobby(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}


----Ou----


function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}


function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}


function mostraHobby(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}

export {
    mostraIdade,
    mostraCidade,
    mostraHobby
}

----Default exports----

function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}


function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}


function mostraHobby(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}

export {
    mostraIdade,
    mostraCidade,
}

export default mostraHobby;

- Só pode haver um por arquivo;
- Será o retorno padrão do seu arquivo;


----Importar----

Named exports:

import{funcao, variavel, classe} from './arquivo.js'

Default exports

import valorDefault from './arquivo.js'

---Trocando nome de imports---

import {arquivo as Apleido} from './arquivo.js';

Apelido.metodo();


---Importando todos os dados de um arquivo---

import * as INFOS from './arquivo.js';

INFOS.metodoA();

console.log(INFOS.variavel);


---Vinculando ao HTML---

<script type="module" src="./mian.js"></script>

* Para fazer testes localmente (de um arquivo no seu computador), será necessário estar rodando um servidor. Isso 
pode ser feito utilizando a extensão "Live Server", do VSCode.



-----Atividade-----

Esta atividade tem como objetivo que você veja no console do seu navegador como os módulos funcionam.

1.Instale a extensão "Live Server" no seu VSCode;
2.Crie um arquivo com uma estrutura HTML padrão;
3.Crie dois arquivos .js ou .mjs, um chamado funcoes e outro chamado main;
4.No arquivo funcoes:
- Crie uma função chamada mostraIdade, que recebe nome e idade e retorna a string: A idade de ${nome} é ${idade};
- Siga o mesmo padrão para outras funções como mostraCidade e mostraHobby;
- Exporte estas funções.
5.No arquivo main:
- Importe as funções do arquivo funcoes;
- Faça a chamada de todas elas;
6.Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.

*/

function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`;
}

function mostraHobby(nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`;
}


export {
    mostraIdade,
    mostraCidade,
    mostraHobby
};