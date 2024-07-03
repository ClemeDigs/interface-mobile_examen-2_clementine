const body = document.querySelector('body');
const btnToggle = document.querySelector('.btn-toggle');
const cardsHtml = document.querySelectorAll('.card');

/**
 * @param {HTMLElement} btnToggle
 * @param {HTMLElement} body
 * @param {HTMLElement[]} cardsHtml
 */
btnToggle.addEventListener('click', () => {

    btnToggle.classList.toggle('bg-black');
    btnToggle.classList.toggle('bg-pink-500');

    body.classList.toggle('bg-black');
    body.classList.toggle('bg-cyan-100');

    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle('bg-black');
        cardHtml.classList.toggle('bg-pink-500');
    })
})