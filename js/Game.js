/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [

            new Phrase('An apple a day keeps the doctor away'),
            new Phrase('A change is as good as a rest'),
            new Phrase('Absolute power corrupts absolutely'),
            new Phrase('It is better to light a candle than curse the darkness'),
            new Phrase('Actions speak louder than words')
        ];

        return phrases
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return phrase
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const startScreenOverlay = document.querySelector('#overlay')
        startScreenOverlay.style.display = 'none';
        const phrase = this.activePhrase;
        phrase.addPhraseToDisplay();
    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
     */
    checkForwin() {
        const letters = document.querySelectorAll('.letter').length;
        const shown = document.querySelectorAll('.show').length;
        if (letters == shown) {
            return true;
        } else {
            return false;
        }
    };
    /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
    removeLife() {
        const liveHeart = document.querySelectorAll('.tries img')
        this.missed++;

        if (this.missed === 1) {
            liveHeart[0].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed === 2) {
            liveHeart[1].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed === 3) {
            liveHeart[2].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed === 4) {
            liveHeart[3].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed == 5) {
            liveHeart[4].setAttribute('src', 'images/lostHeart.png');
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        
        const startScreenOverlay = document.querySelector('#overlay')
        startScreenOverlay.style.display = 'block';

        if (gameWon){
            startScreenOverlay.className = 'win';
            const gameOverMessage = document.querySelector('#game-over-message')
            gameOverMessage.textContent = 'Great Job!'
        } else {
            startScreenOverlay.className = 'lose';
            const gameOverMessage = document.querySelector('#game-over-message')
            gameOverMessage.textContent = 'Sorry, better luck next time!'

        }


    };



}
















