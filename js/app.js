/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*Declares global variables*/
 
let game; //Declares a varible that initialy isn'set to anything
const btnToStartGame = document.querySelector('#btn__reset')
const keyboardButtons = document.querySelector('#qwerty')
const heartLives = document.querySelectorAll('img')
const buttons = document.querySelectorAll('.keyrow button') 



/*Adds an event listener to the HTML button element*/
btnToStartGame.addEventListener('click', () => {

    const ul = document.querySelector('#phrase ul')
    const li = document.querySelector('ul li')

    /*Removes all `li` elements from the Phrase `ul` element.*/
    if (typeof (li) != 'undefined' && li != null) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild)
        }
    }
    /*Enables all of the onscreen keyboard buttons and updates each of their classes.*/
    for (let button of buttons) {
        button.disabled = false;
        button.className = 'key'
    }
  
    /*Reset all of the heart images to display the `liveHeart.png` image.*/
    for (let heart of heartLives) {     
        heart.setAttribute('src','images/liveHeart.png')
    }
    //Creates an instace of the Game object
    game = new Game();

    //Calls the method to start the game on the Game object
    game.startGame();

    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

})




//Adds a "click" event listener to each of the onscreen keyboard buttons
keyboardButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target
        game.handleInteraction(button)
    }
})





