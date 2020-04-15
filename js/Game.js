class Game {
    constructor() {} 
    missed = 0; 
    phrases = [
        { phrase: 'On Cloud Nine' }, 
        { phrase: 'Down To Earth'}, 
        { phrase: 'Raining Cats and Dogs'},
        { phrase: 'Easy As Pie'}, 
        { phrase: 'A Dime a Dozen'}
    ];
    activePhrase = null; 
    getRandomPhrase() {
        const phrases = this.phrases; 
        let randomIndex = Math.floor(Math.random() * phrases.length); 
        return phrases[randomIndex];
    }
    startGame() {
        const overlay = document.querySelector('#overlay')
        overlay.style.display = 'none';
        const randomPhrase = this.getRandomPhrase(); 
        const phrase = new Phrase(randomPhrase.phrase); 
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
        phrase.checkLetter();
        return phrase;
    }
    checkForWin() {
        const showLetters = document.querySelectorAll('.show'); 
        let totalLetters = ''; 
        showLetters.forEach(show => {
            totalLetters += show.textContent; 
        }); 
        return totalLetters === this.activePhrase.phrase.replace(/\s+/g, ''); 
    }
    removeLife() {
        const heartImages = document.querySelectorAll('.tries img');
        heartImages[this.missed].setAttribute('src','images/lostHeart.png');
        if(this.missed === 5) { this.gameOver(); }
        return this.missed++; 
    }
    gameOver() {

    }
    handleInteraction() {
       // phrase.checkLetter(letter);
         // check letter gonna go here !!
    }
}