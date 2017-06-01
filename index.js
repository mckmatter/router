var express = require('express');
var app = express();

//var bodyParser = require('body-parser');

//var morgan = require('morgan');

var com_port = 3000;

app.use(express.static('public'));


app.post('/submit', function(req, res) {
	var body = [];
	req.on('data', function(chunk) {
  		body.push(chunk);
	}).on('end', function() {
  	body = Buffer.concat(body).toString();
  	//body = JSON.parse(body);
  	console.log(body);
	});

	res.send();
})

app.listen(com_port, function() {
	console.log('App listening at port ' + com_port);
});

