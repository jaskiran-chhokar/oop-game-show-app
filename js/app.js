const phrase = new Phrase('TESTING this new phrase'); 
const game = new Game(); 

console.log(`phrase = ${phrase.phrase}`); 

game.phrases.forEach((phrase,item) => {
    console.log(`${item}: ${phrase.phrase}`); 
}); 

console.log(game.getRandomPhrase()); 

