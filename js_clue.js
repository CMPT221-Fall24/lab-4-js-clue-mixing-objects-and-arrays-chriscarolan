let suspects = ["Pete Alonso", "Francisco Lindor", "Brandon Nimmo",
    "Mark Vientos", "Jose Quintana", "Edwin Diaz"
];
let weapons = ["Baseball Bat", "Baseball", "Knife", "Gun", "Brass Knuckles",
    "Throwing Stars", "Sword", "Chainsaw"
];
let rooms = ["Living Room", "Bathroom", "Dining Room", "Basement", "Murder Room",
    "Fun Room", "Kitchen", "Happy Room", "Mets Room", "Radio Room"
];

//fisher yates sorting algorithm
// found at https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
// used this to help with set up, had to change a bit
// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/#
function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length); // Get a valid random index
    const randomCard = array[randomIndex];
    return randomCard;
}

function pickMystery() {
    return {
        suspect: selectRandom(suspects),
        weapon: selectRandom(weapons),
        room: selectRandom(rooms)
    };
}

function revealMystery(mystery) {
    return `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
}

const revealButton = document.getElementById("revealButton");
const mysteryMessage = document.getElementById("mysteryMessage");

revealButton.addEventListener("click", function() {
    const mystery = pickMystery();
    const revealMessage = revealMystery(mystery);
    mysteryMessage.textContent = revealMessage; 
});
