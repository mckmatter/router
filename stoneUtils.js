var fs = require('fs');
var file = "./testObjects.json";

var dbControl = require('./db.js');

module.exports.setStones = function(pStone) {
	var jsonString = JSON.stringify(pStone) + "\n";
	//fs.appendFileSync(file, jsonString, 'utf-8');
	fs.writeFileSync(file, jsonString, 'utf-8');
	dbControl.insertRecord(pStone);
};

module.exports.getStones = function() {
	var allStones = JSON.parse(fs.readFileSync(file, 'utf-8'));
	return allStones;
};

module.exports.normalizeStone = function(pStone) {
	var dbReady;
	dbReady.title = pStone.title;
};

