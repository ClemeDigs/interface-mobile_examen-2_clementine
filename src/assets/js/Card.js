export default class Card {
        /**
     * @param {number} name
     * @param {string} textSm
     * @param {string} textLg
     */
    constructor(name, textSm, textLg, legume) {
        /**
         * @type {string}
        */
        this.name = name;
        this.textSm = textSm;
        this.textLg = textLg;
        this.legume = legume;
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    toHtml() {
        const divHtml = document.createElement('div');
        const nameHtml = document.createElement('span');
        const textSmHtml = document.createElement('span');
        const textLgHtml = document.createElement('span');
        const legumeHtml = document.createElement('span');

        divHtml.className = 'card bg-black text-white rounded-md w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex flex-col justify-center items-center'
        textSmHtml.className = 'lg:hidden';
        textLgHtml.className = 'hidden lg:block'

        nameHtml.textContent = this.name;
        textSmHtml.textContent = this.textSm;
        textLgHtml.textContent = this.textLg;
        legumeHtml.textContent = this.legume;

        divHtml.appendChild(nameHtml);
        divHtml.appendChild(textSmHtml);
        divHtml.appendChild(textLgHtml);
        divHtml.appendChild(legumeHtml);

        return divHtml;
    }
}