//require
var fs = require("fs");

module.exports = ClozeFlashcard;

//ClozeFlashcard constructor
function ClozeFlashcard(text,cloze) {
	this.text = text;
	this.cloze = cloze;
	this.clozeDeleted = this.replace(this.cloze,'')
	this.create = function(){
		var data = {
			cloze: this.cloze,
			clozeDeleted: this.clozeDeleted
			type: "cloze"

			var data = {
				front: this.front
				back: this.back
				type: cloze
			}
		};

		fs.appendfile("log.txt", JSON.stringify(data) + ';', "utf8", function.(error) {
			if(error)
			 console.log(error);
		   }
		});
	}
};



