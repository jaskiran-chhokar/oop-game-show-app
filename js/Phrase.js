class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
    }
    phrase = this.phrase; 
    //Display phrase on game board
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase > ul'); 
        let phraseLetters = this.phrase.split(''); 
        let li; 
        phraseLetters.forEach(letter => {
            li = document.createElement('li'); 
            letter !== ' ' ? li.className = `hide letter ${letter}` : li.className = `hide space`;
            li.innerHTML = letter;
            ul.appendChild(li);
        }); 
        return ul;
    }
    //Check if passed letter is in phrase
    checkLetter(letter) {
        return this.phrase.includes(letter); 
    }
    //Display passed letter on game board after match is found
    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('.letter'); 
        phraseLetters.forEach(phraseLetter => {
            phraseLetter.classList.contains(letter) ? phraseLetter.classList.add('show') :  phraseLetter.classList.remove('hide');
        });  
        return letter;
    }
}