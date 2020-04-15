let game;

document.querySelector('#btn__reset').addEventListener('click', e => {
    game = new Game(); 
    game.startGame();
});







// const keyboard = document.querySelector('#qwerty');
// const phraseLetters = document.querySelectorAll('.letter');
// let correctLetters = ''; 

// keyboard.addEventListener('click', e => {
//     // phraseLetters.forEach(phraseLetter => {
//         game.handleInteraction(e.target.textContent); 

//         // if(e.target.textContent === phraseLetter.textContent) {
//         //     correctLetters += e.target.textContent; 
//         //     this.showMatchedLetter(phraseLetter); 
//         //     console.log('match: ' + e.target.textContent,phraseLetter.textContent); 
//         //     return true;
//         // } 
//     // });            
// });