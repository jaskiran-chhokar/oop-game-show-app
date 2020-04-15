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
    checkLetter() {
        const keyboard = document.querySelector('#qwerty');
        const phraseLetters = document.querySelectorAll('.letter');
        let correctLetters = ''; 

        keyboard.addEventListener('click', e => {

            phraseLetters.forEach(phraseLetter => {

                allLetters += e.target.textContent; 

                if(e.target.textContent === phraseLetter.textContent) {
                    correctLetters += e.target.textContent; 
                    this.showMatchedLetter(phraseLetter); 
                    console.log('match: ' + e.target.textContent,phraseLetter.textContent); 
                } else {
                    console.log('NOT MATCH: ' + e.target.textContent,phraseLetter.textContent)
                }
            }); 
        });
    }
    showMatchedLetter(letter) {
        letter.classList.remove('hide'); 
        letter.classList.add('show');
    }
}