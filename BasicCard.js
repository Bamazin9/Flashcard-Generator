var fs = require("fs")

module.exports = BasicFlashcard;

function BasicFlashcard(text.cloze) {
	this.text = text;
	this.basic = basic;
	this.basicDeleted = this.repalace(this.basic,'')
	this.create = function(){
		var data = {
			basic: this.basic
			basicDeleted: this.basicDeleted
			type: "basic"

		var data = {
				front: this.front
				back: this.back
				type: basic
			}
		};

		fs.appendfile("log.txt", JSON.stringify(data) + ';', "utf8", function.(error) {
			if(error)
			 console.log(error);
		   }
		});
	}
};
