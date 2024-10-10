
let suspects = ["Pete Alonso", 'Francisco Lindor', "Brandon Nimmo",
    "Mark Vientos", "Jose Quintana", "Edwin Diaz"
];
let weapons = ["Baseball Bat", "Basebal", "Knife", "Gun", "Brass Knuckle",
    "Throwing Stars", "Sword", "Chainsaw"
];
let room = ["Living Room", "Bathroom", "Dining Room", "Basement", "Murder Room",
    "Fun Room", "Kitchen", "Happy Room", "Mets Room", "Radio Room"
];


let count = 0;
let countDisplay = document.getElementById("count");
let counterButton = document.getElementById("counterButton");
let resetter = document.getElementById("resetter");
let decounterButton = document.getElementById("decounterButton");

counterButton.addEventListener("click", function(e) {
    count++;
    countDisplay.textContent = count;
});
resetter.addEventListener("click", function(e) {
    count = 0;
    countDisplay.textContent = count;
});
decounterButton.addEventListener("click", function(e) {
    count--;
    countDisplay.textContent = count;
});