const game = new Game(); 
const randomPhrase = game.getRandomPhrase(); 
const phrase = new Phrase(randomPhrase.phrase); 
phrase.addPhraseToDisplay();


console.log(phrase.addPhraseToDisplay());