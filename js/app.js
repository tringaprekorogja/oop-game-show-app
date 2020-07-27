/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const btnToStartGame = document.querySelector('#btn__reset')






btnToStartGame.addEventListener('click', () => {

    const ul = document.querySelector('#phrase ul')
    const li = document.querySelector('ul li')
    if (typeof (li) != 'undefined' && li != null) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild)
        }
    }

    const keyboardButtons = document.querySelectorAll('.keyrow button')
    
    for (let button of keyboardButtons) {
        button.disabled = false;
        button.className = 'key'
    }
    const heartLives = document.querySelectorAll('img')

    for (let heart of heartLives) {
       
        heart.setAttribute('src','images/liveHeart.png')
    }

    game = new Game();
    game.startGame();

    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

})


const keyboardButtons = document.querySelector('#qwerty')

keyboardButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target
        game.handleInteraction(button)
    }
})





