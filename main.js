let canvas = document.getElementById("game")
let ctx = canvas.getContext("2d")

//setup graphic representation
ctx.moveTo(250, 350);
ctx.lineTo(150, 350);
ctx.stroke();
ctx.moveTo(150, 350);
ctx.lineTo(150, 150);
ctx.stroke();
ctx.moveTo(150, 150);
ctx.lineTo(225, 150);
ctx.stroke();
ctx.moveTo(225, 150);
ctx.lineTo(225, 175);
ctx.stroke();


let hangman = new Hangman()
let dict = new Dictionary()
let word = dict.randomWord()
let visualWord = []

for (let i = 0; i < word.length; i++) {
	visualWord.push("__")
}

document.getElementById("word").innerText = visualWord.join("     ")

function guess() {
	let guess = document.getElementById("guess").value
	if (guess.length < 2 && guess.length != 0) {
		for (let i = 0; i < word.length; i++) {
			if (word[i] == guess) {
				visualWord[i] = guess
			} else {
				hangman.lives -= 1
			}
		}
	} else {
		alert("ONE LETTER GUESSING ONLY")
	}
	document.getElementById("word").innerText = visualWord.join("     ")
	document.getElementById("guess").value = ""
	if (visualWord.includes("__")) {

	} else {
		alert(`You Won, the word was ${word}`)
		document.location.reload()
	}
}