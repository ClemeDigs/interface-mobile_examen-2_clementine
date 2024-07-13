// Jsdoc aurait plutot du etre -0.25
/** @type {HTMLElement} */
const body = document.querySelector('body');
/** @type {HTMLElement} */
const btnToggle = document.querySelector('.btn-toggle');
/** @type {HTMLElement[]} */
const cardsHtml = document.querySelectorAll('.card');
const btnHideCards = document.querySelector('.btn-hide-cards');

btnToggle.addEventListener('click', () => {
    
    btnToggle.classList.toggle('bg-black');
    btnToggle.classList.toggle('bg-pink-500');

    body.classList.toggle('bg-cyan-100');
    body.classList.toggle('bg-black');

    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle('bg-black');
        cardHtml.classList.toggle('bg-pink-500');
    })
})



btnHideCards.addEventListener('click', () => {
    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle('hidden');
    })
})

