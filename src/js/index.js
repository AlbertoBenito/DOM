// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// const tittleElement = document.getElementById('tittle');

// console.dir(tittleElement);

// console.log(tittleElement.clientWidth);
// console.dir(tittleElement.nextElementSibling);


// # Ejercicios

// ## DOM

// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

//RESULTADO
// const startPointElement = document.getElementById('start-point')
// console.dir(startPointElement)
// console.log('________')

// console.log(`Soy un h3 con el id ${startPointElement.id} y la clase ${startPointElement.className} mi padre es un header con id ${startPointElement.parentElement.id} y la clase ${startPointElement.parentElement.className} mi hermano es un h1 con id ${startPointElement.parentElement.children[0].id} y la clase ${startPointElement.parentElement.children[0].className}`)


// - Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.

//RESULTADO
// const firtsListElement = document.getElementById('first-list')
// const secondListElement = document.getElementById('second-list')

// const first = firtsListElement.textContent
// const second = secondListElement.textContent

// firtsListElement.textContent = second
// secondListElement.textContent = first


// - Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
//   - Hay 1 Header
//   - Hay 1 h1
//   - Hay 2 nav

//RESULTADO
const headerElements = document.querySelectorAll('header')
console.log(`Hay ${headerElements.length} header `)

const h1Elements = document.querySelectorAll('h1')
console.log(`Hay ${h1Elements.length} h1 `)

const h2Elements = document.querySelectorAll('h2')
console.log(`Hay ${h2Elements.length} h2 `)

const pElements = document.querySelectorAll('p')
console.log(`Hay ${pElements.length} p `)

const navElements = document.querySelectorAll('nav')
console.log(`Hay ${navElements.length} nav `)

const sectionElements = document.querySelectorAll('section')
console.log(`Hay ${sectionElements.length} section `)

const ulElements = document.querySelectorAll('ul')
console.log(`Hay ${ulElements.length} ul `)

const liElements = document.querySelectorAll('li')
console.log(`Hay ${liElements.length} li `)

const articleElements = document.querySelectorAll('article')
console.log(`Hay ${articleElements.length} article `)

const aElements = document.querySelectorAll('a')
console.log(`Hay ${aElements.length} a `)

const imgElements = document.querySelectorAll('img')
console.log(`Hay ${imgElements.length} img `)

const spanElements = document.querySelectorAll('span')
console.log(`Hay ${spanElements.length} span `)

const footerElements = document.querySelectorAll('footer')
console.log(`Hay ${footerElements.length} footer `)