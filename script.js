// Define a deck of cards
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push(`${value} of ${suit}`);
    }
}

// Function to generate and display 5 random cards
function generateCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear previous cards

    const shuffledDeck = deck.sort(() => Math.random() - 0.5); // Shuffle the deck

    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = shuffledDeck[i];
        cardContainer.appendChild(card);
    }
}

// Attach event listener to the button
document.getElementById('generateButton').addEventListener('click', generateCards);

// Generate initial set of cards on page load
generateCards();
