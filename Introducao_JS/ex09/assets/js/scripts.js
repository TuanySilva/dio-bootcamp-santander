/*

Assíncrono - Que não ocorre ou não se efetiva ao mesmo tempo.

O Javascript roda de maneira síncrona.


---Promises---

Objeto de processamento assíncrono

Inicialmente, seu valor é desconheico. Ela pode, então ser resolvida ou rejeitada.

Uma promise pode ter 3 estados

1 - Pending  2 - Fulfilled  3 - Rejected 

const myPromise = new Promise((resolve, reject) => {
    windows.setTimeout(() =>{
        resolve(console.log('Resolvida'));
    }, 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"

---Async/Await---

Funções assíncronas precisam dessas duas palavras chave.

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
}

O que são APIs

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acessá-la por meio de URLs.

JSON: JavaScript Object Notation

É muito comum que APIs retornem seu dados no formato .json, portando precisamos tratar esses dados quando os recebermos.


Método fetch

fetch(url, options) 
    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma Promise


Atividade: API "catAPI"

    Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
    Utilize seus conhecimentos na manipulação do DOM para cirar a imagem e ativar o evento de clique do botão.

*/

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);