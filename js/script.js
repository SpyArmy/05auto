const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');
const rightNow = new Date();



btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
} )


import { review } from '../data/review.js';
console.log(review);

const myTarget = document.querySelector('#review');

for (let x = 0; x < review.length; x++) {
let barDiv = document.createElement('div')
barDiv.innerHTML = `<p>${review[x].name} </p>`;


myTarget.appendChild(barDiv);
}// end of loop


document.querySelector('#year').textContent = rightNow.getFullYear();

console.log('Hello, world!');

