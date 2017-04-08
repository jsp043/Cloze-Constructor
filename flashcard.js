//Showing front and back of the card Basic

exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

//Showing front and back of card Cloze
exports.ClozeCard = function(text, cloze) {
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	
	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not show -- <' + cloze + '>');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}