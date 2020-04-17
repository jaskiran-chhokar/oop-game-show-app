let game; 

document.querySelector('#btn__reset').addEventListener('click', e => {
    game = new Game(); 
    game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', e => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target); 
    }
});