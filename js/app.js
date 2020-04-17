let game; 

//Initialize game object when game starts
document.querySelector('#btn__reset').addEventListener('click', e => {
    game = new Game(); 
    game.startGame();
});
//Handle interaction for onscreen keyboard
document.querySelector('#qwerty').addEventListener('click', e => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target); 
    }
});