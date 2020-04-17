class Game {
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
        showLetters.forEach(show => { totalLetters += show.textContent; }); 
        if(totalLetters === this.activePhrase.phrase.replace(/\s+/g, '')) {
            this.gameOver(true); 
            return true; 
        }
        return false; 
    }
    removeLife() {
        const heartImages = document.querySelectorAll('.tries img');
        heartImages[this.missed].setAttribute('src','images/lostHeart.png');
        if(this.missed === 4) { this.gameOver(false); }
        return this.missed++; 
    }
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay'); 
        const message = document.querySelector('#game-over-message');
        if(gameWon) {
            overlay.className = 'win'; 
            overlay.style.display = 'flex';
            message.textContent = 'You Won!'; 
            game.gameOver();
        }
        if(gameWon === false) {
            overlay.className = 'lose'; 
            overlay.style.display = 'flex';
            message.textContent = 'You lost!'; 
            game.gameOver();
        }
    }
    resetGame() {
        document.querySelector('#phrase > ul').innerHTML = '';
        document.querySelectorAll('.key').forEach(key => key.className = 'key'); 
        document.querySelectorAll('.tries img').forEach(img => img.setAttribute('src','images/liveHeart.png'));
        this.missed = 0; 
    }
    handleInteraction(button) {
        const buttonText = button.textContent; 
        if(game.activePhrase.checkLetter(buttonText)) {
            game.activePhrase.showMatchedLetter(buttonText);
            button.classList.add('chosen'); 
            if(this.checkForWin()) { 
                this.checkForWin(); 
                game.resetGame();
            }
        } else if(game.activePhrase.checkLetter(buttonText) === false) {
            button.classList.add('wrong'); 
            this.removeLife(); 
            if(this.missed === 5) { game.resetGame(); }
        }
    }
}