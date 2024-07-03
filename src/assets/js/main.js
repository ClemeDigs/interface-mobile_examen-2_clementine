import '../css/styles.css'
import Card from "./Card.js";

const cardContainer = document.querySelector('.card-container');

//Première méthode utilisée à l'examen la semaine dernière, mais pas la plus efficace
/* const cards = [
    new Card (1, '200px / 200px', '300px / 300px'),
    new Card (2, '200px / 200px', '300px / 300px'),
    new Card (3, '200px / 200px', '300px / 300px'),
    new Card (4, '200px / 200px', '300px / 300px'),
    new Card (5, '200px / 200px', '300px / 300px'),
    new Card (6, '200px / 200px', '300px / 300px'),
    new Card (7, '200px / 200px', '300px / 300px'),
    new Card (8, '200px / 200px', '300px / 300px'),
    new Card (9, '200px / 200px', '300px / 300px'),
]; */

//Celle ci est mieux !
/**
 * @param {HTMLDivElement[]} cards
 */
const cards = [];
for(let i = 1; i < 10; i++){
    cards.push(new Card (i, '200px / 200px', '300px / 300px'));
}

cards.forEach(card => {
    cardContainer.appendChild(card.toHtml());
});