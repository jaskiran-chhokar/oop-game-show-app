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
}