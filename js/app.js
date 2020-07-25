/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const btnToStartGame = document.querySelector('#btn__reset')

btnToStartGame.addEventListener('click', ()=>{
    game = new Game();
    game.startGame();
})


