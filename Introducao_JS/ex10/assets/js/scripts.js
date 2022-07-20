/*
Orientação a Obejtos com Javascript

Paradigmas

Os programas são "Objetos" que possuem uma série de propriedades.


Pilares:
- Herança
- Polimorfismo
- Encapsulamento
- Abstração

Abstração

"Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo."

Herança

"Objeto filho herda propriedades e métodos do objeto pai."


Encapsulamento

"Cada classe tem propriedades e métodos independentes do restante do código."


Polimofismo

"Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos."


Protótipos

Todos os objetos Javascript herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo desta cadeia.

Cadeia de protótipos (prototype chain)

object.prototype = null;
f object() {} <- function.prototype.constructor <- f function <- f Animal.constructor <- f Bird <- f Crow

Syntatic sugar: uma sinntaxe feita para facilitar a escrita

---OLD---

var Meal = function(food) {
    this.food = food
}

Meal.prototype.eat = function() {
    return ':)'
}


---NEW---

class Meal {
    constructor (food) {
        this.food = food 
    }

    eat() {
        return ':)'
    }
}

Classes 

Javascript não possui classes nativamente, Todas as classes são objetos e a herança se dá por protótipos.

Atividade Prática

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1.Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
2.Dentro de ContaBancaria, construa o getter e o setter de saldo;
3.Dentro de ContaBancaria, crie os métodos sacar e depositar;
4.Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
5.Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
6.Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
7.Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
8.Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
9.Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

*/ 

class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);