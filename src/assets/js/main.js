import '../css/styles.css'
import Card from "./Card.js";

const cardContainer = document.querySelector('.card-container');

//Celle ci est mieux !
/**
 * @param {HTMLDivElement[]} cards
 */
const cards = [];
for(let i = 1; i < 10; i++){
    cards.push(new Card (i, '200px / 200px', '300px / 300px', 'artichaud'));
}

cards.forEach(card => {
    cardContainer.appendChild(card.toHtml());
});


