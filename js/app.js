let game;

document.querySelector('#btn__reset').addEventListener('click', e => {
    game = new Game(); 
    game.startGame();
});

//game.startGame();

// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


// const randomPhrase = game.getRandomPhrase(); 
// const phrase = new Phrase(randomPhrase.phrase); 
// phrase.addPhraseToDisplay();


//console.log(phrase.addPhraseToDisplay());