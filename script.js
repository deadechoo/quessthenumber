document.addEventListener('DOMContentLoaded', () => {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');
    let attemptsLeft = 5;

    guessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            result.textContent = 'Kérlek, adj meg egy számot 1 és 100 között!';
            return;
        }

        attemptsLeft--;
        attemptsDisplay.textContent = `Hátralévő próbálkozások: ${attemptsLeft}`;

        if (guess < hiddenNumber) {
            result.textContent = 'A rejtett szám nagyobb!';
        } else if (guess > hiddenNumber) {
            result.textContent = 'A rejtett szám kisebb!';
        } else {
            result.textContent = 'Gratulálok! Eltaláltad a rejtett számot!';
            guessButton.disabled = true;
            guessInput.disabled = true;
            return;
        }

        if (attemptsLeft === 0) {
            result.textContent = `A játéknak vége! A rejtett szám ez volt: ${hiddenNumber}`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        }
    });
});
