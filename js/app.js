let game = new Game(); 

document.querySelector('#btn__reset').addEventListener('click', e => {
    game.startGame();
});

const keyboard = document.querySelector('#qwerty');
const key = document.querySelectorAll('.key');

keyboard.addEventListener('click', e => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target); 
    }
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