/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const btnToStartGame = document.querySelector('#btn__reset')

btnToStartGame.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

})

const keyboardButtons = document.querySelector('#qwerty')

keyboardButtons.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON'){
        const button = e.target
        game.handleInteraction(button)
    }
})





