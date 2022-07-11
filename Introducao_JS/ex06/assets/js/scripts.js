/*
Map

cosnt myMap = new Map()


Caracteristicas:


- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for... of


Métodos (Adicionar, ler e deletar)

const myMap = new Map()

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

MyMap.get(apple);
// "fruit"

myMap.delete("apple")
// true

myMap.get("apple")
// underfined

Map vs Objeto

- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Mpas são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo. 


---Set---

Sets são estruturas que armazenam apenas valores únicos.

Métodos(Adicionar, consultar e deletar)

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);

Set vs Array

- possui valores únicos;
- em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- não possui os métodos map, filter, reduce etc. 



Atividades práticas

Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel ADMIN no sistema.

1 - Crie uma função getAdmin que recebe um Map;
2 - Crie um Map e popule-o com nomes de usuários e seus papéis no sistema.
3 - Dentro de getAdmin, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.

Atividade 2: Sets

Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.




Resolução - Atividade 1

function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuario.set('Luiz', 'Admin');
usuario.set('stephany', 'Admin');
usuario.set('Jorge', 'user');
usuario.set('Natália', 'Admin');

console.log(getAdmins(usuarios));



Resolução - Atividade 2

const meuArray = [30, 30, 40, 5 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]; '...' Utilizando o argumento spread
}

console.log(valoresUnicos(meuArray));


*/ 