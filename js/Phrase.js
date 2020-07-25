/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
   * Display phrase on game board
   */
    addPhraseToDisplay() {
        const phraseUl = document.querySelector('#phrase ul')

        for (let i = 0; i < this.phrase.length; i++) {
            let letterListItem = document.createElement('LI');
            letterListItem.textContent = this.phrase[i];

            phraseUl.appendChild(letterListItem)

            if (this.phrase[i] === ' ') {
                letterListItem.setAttribute('class', 'space')
            } else {
                letterListItem.setAttribute('class', 'hide letter ' + this.phrase[i])
            }




        }
    }
}