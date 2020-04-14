const game = new Game(); 
const phrase = new Phrase(game.getRandomPhrase().phrase); 


// const logPhrase = phrase => {
//     console.log(phrase.phrase); 
// }

// logPhrase(game.getRandomPhrase()); 


console.log(phrase.addPhraseToDisplay());