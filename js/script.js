const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

console.log('Hello, world!');




btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
} )


import { review } from '../data/review.js';
console.log(review);

const myTarget = document.querySelector('#review');

for (let x = 0; x < review.length; x++) {
let barCap = document.createElement('figcaption')
barCap.innerHTML = `<h3>${review[x].name}</h3> <br> ${review[x].rate} <br> <p>${review[x].comment}</p> <br> <p>${review[x].date}</p>`


myTarget.appendChild(barCap);
}// end of loop

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();


