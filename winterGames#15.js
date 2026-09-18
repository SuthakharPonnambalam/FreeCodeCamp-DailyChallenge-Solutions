//Date: September 18, 2026

/*
Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.
Valid first words:

"Misty"
"Ghost"
"Thunder"
"Solar"
"Sky"
"Phantom"
"Frozen"
"Polar"
Valid second words:

"Twister"
"Icequake"
"Avalanche"
"Vortex"
"Snowstorm"
"Frostbite"
"Blizzard"
"Shadow"
*/

let firstSet = ["Misty",
"Ghost",
"Thunder",
"Solar",
"Sky",
"Phantom",
"Frozen",
"Polar"]

let secondSet = [
    "Twister",
    "Icequake",
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow"
]

function isValidTrick(trickName) {
    let words = trickName.split(' ');
    let first = words[0];
    let second = words[1];

    return firstSet.includes(first) && secondSet.includes(second);
}

console.log(isValidTrick("Polar Vortex"));
console.log(isValidTrick("Snowstorm Shadow"));