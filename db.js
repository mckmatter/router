var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "routerfront",
	password: "RouterDB!100",
	database: "tombstones"
});

module.exports.selectAllRecords = function() {
	con.connect(function(err){
		if(err) throw err;
		con.query("SELECT * FROM stones", function(err, result){
			if(err) throw err;
			return result;
		});
	});
};

module.exports.insertRecord = function(pStone) {
	var insertString = createInsertString(pStone)

	con.connect(function(err){
		if(err) throw err;
		con.query(insertString, function(err, result){
			if(err) throw err;
			console.log("Record Inserted");
		});
	});
};

function createInsertString(passStone) {
	var sql = "INSERT INTO tombstones VALUES (";

	sql += "\'" + passStone.id + "\',";
	sql += "\'" + passStone.title + "\',";
	sql += "\'" + passStone.realm + "\',";
	sql += "\'" + passStone.type + "\',";
	sql += "\'" + passStone.url + "\',";
	sql += "\'" + passStone.status + "\'";

	sql += ")";
	return sql;
}

