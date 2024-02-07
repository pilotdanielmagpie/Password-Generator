let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("generate-button");
let randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generate() {
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * randomLetter.length);
        return randomLetter
        console.log(randomLetter[randomIndex])
    }
}     



