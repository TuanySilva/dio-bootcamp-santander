/*

O que é DOM ?

O DOM(Document Object Model) HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

DOM vs BOM

BOM: Browser Object Model

Window -> (Document, history, location, screen, navigator)

Tudo o que está dentro do objeto window.

Adicionar e deletar

---Método---                          ---Descrição---

document.createElement(element)  ->  Cria um novo elemento HTML
document.removeChild(element)    ->  Remove um elemento
document.appendChild(element)    ->  Adiciona um elemento
document.replaceChild(new, old)  ->  Substitui um elemento


---CSS---

Acessando diretamente o CSS de um elemento

document.getElementByTagName("p").style.color = "blue";



---Eventos---

Tipos

Evento do mouse -> mouseover, mouseout

Evento do click -> click, dbclick

Evento de atualização -> change, load


Para adionar esses eventos:


- Event listener

Diretamente no JavaScript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

const = botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);


Atributo HTML 

Especifica a função a ser chamada diretamente no elemento HTML

<html>
<body>

<h1 onclick="mudaTexto(this)">Clique aqui!></h1>
<script>
    function mudaTexto() {
        id.innerHTML = "Mudei!";
    }
</script>

</body>
</html>

-----Atividade-----

1.Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
2.Copie o HTML e o CSS deste repositório
3.Crie um arquivo chamado scripts.js na sua pasta assets/js
4.Selecione os elementos: h1, button, footer e body
5.Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original


*/

function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);