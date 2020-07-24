/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            {phrase:'An apple a day keeps the doctor away'},
            {phrase: 'A change is as good as a rest'},
            {phrase: 'Absolute power corrupts absolutely'},
            {phrase: 'Actions speak louder than words'},
            {phrase: 'It is better to light a candle than curse the darkness'}
        ];
        return phrases
    }

}