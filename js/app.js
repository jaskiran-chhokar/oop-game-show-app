let game;

document.querySelector('#btn__reset').addEventListener('click', e => {
    game = new Game(); 
    game.startGame();
});

