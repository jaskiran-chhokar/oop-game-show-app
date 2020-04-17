class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
    }
    phrase = this.phrase; 
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
    checkLetter(letter) {
        return this.phrase.includes(letter); 
    }
    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('.letter'); 

        phraseLetters.forEach(phraseLetter => {
            if(phraseLetter.classList.contains(letter)) {
                phraseLetter.classList.add('show');
            } else {
                phraseLetter.classList.remove('hide'); 
            }
        });  
        return letter;
    }
}