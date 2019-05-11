


class Dictionary {
	constructor() {
		this.words = ["wow", "selfless", "laptop", "asynchronous", "pen", "light", "lymphnodes", "rake", "vacuum", "grey"]
		this.length = this.words.length
	}
	randomWord() {
		var i = Math.round(Math.random() * this.length)
		return this.words[i]
	}
}