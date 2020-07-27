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
                letterListItem.setAttribute('class', 'hide space')
            } else {
                letterListItem.setAttribute('class', 'hide letter ' + this.phrase[i])
            }
        }
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
     */

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            if (letter !== ' ') {
                return true
            }
            else if (letter === ' ') {
                return false
            }
        } else {
            return false
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        if (this.checkLetter(letter)) {
            const listItems = document.querySelectorAll('li')
            for (let item of listItems) {
                if (item.className === 'hide letter ' + letter) {
                    item.className = 'show letter ' + letter
                }

            }



        }

    };


}