const body = document.querySelector('body');
const btnToggle = document.querySelector('.btn-toggle');
const cardsHtml = document.querySelectorAll('.card');

/**
 * @param {HTMLElement} btnToggle
 * @param {HTMLElement} body
 * @param {HTMLElement[]} cardsHtml
 */
btnToggle.addEventListener('click', () => {

    //Pourquoi certaines class bg-black sont optionnelles et d'autres non ? Quelle est la meilleure pratique ?
    
/*     btnToggle.classList.toggle('bg-black'); */
    btnToggle.classList.toggle('bg-pink-500');

    body.classList.toggle('bg-cyan-100');
    body.classList.toggle('bg-black');

    cardsHtml.forEach(cardHtml => {
/*         cardHtml.classList.toggle('bg-black'); */
        cardHtml.classList.toggle('bg-pink-500');
    })
})