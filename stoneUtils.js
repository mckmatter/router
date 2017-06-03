var fs = require('fs');
var file = "./testObjects.json";

//var exports = module.exports();

module.exports.setStones = function(pStone) {
	var jsonString = JSON.stringify(pStone);
	fs.writeFileSync(file, jsonString, 'utf-8');
};