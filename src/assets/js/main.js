import '../css/styles.css'


class Card {
    constructor(name, textSm, textLg) {
        this.name = name;
        this.textSm = textSm;
        this.textLg = textLg;
    }

    toHtml() {
        const divHtml = document.createElement('div');
        divHtml.className = 'card bg-black p-5 text-white rounded-md w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] '

        const nameHtml = document.createElement('span');
        nameHtml.textContent = this.name;
        divHtml.appendChild(nameHtml);

        const textSmHtml = document.createElement('span');
        textSmHtml.textContent = this.textSm;
        textSmHtml.className = 'lg:hidden';
        divHtml.appendChild(textSmHtml);

        const textLgHtml = document.createElement('span');
        textLgHtml.textContent = this.textLg;
        textLgHtml.className = 'hidden lg:block'
        divHtml.appendChild(textLgHtml);

        return divHtml;
    }
}

const cards = [
    new Card (1, '200px / 200px', '300px / 300px'),
    new Card (2, '200px / 200px', '300px / 300px'),
    new Card (3, '200px / 200px', '300px / 300px'),
    new Card (4, '200px / 200px', '300px / 300px'),
    new Card (5, '200px / 200px', '300px / 300px'),
    new Card (6, '200px / 200px', '300px / 300px'),
    new Card (7, '200px / 200px', '300px / 300px'),
    new Card (8, '200px / 200px', '300px / 300px'),
    new Card (9, '200px / 200px', '300px / 300px'),
];

const cardContainer = document.querySelector('.card-container');

cards.forEach(card => {
    cardContainer.appendChild(card.toHtml());
});



const btnToggle = document.querySelector('.btn-toggle');
const cardsHtml = document.querySelectorAll('.card');

btnToggle.addEventListener('click', () => {
    btnToggle.classList.toggle('bg-black');
    btnToggle.classList.toggle('bg-pink-500');

    cardContainer.classList.toggle('bg-black');
    cardContainer.classList.toggle('bg-blue-200');

    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle('bg-black');
    cardHtml.classList.toggle('bg-pink-500');
    })

})